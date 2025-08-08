import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface ProjectFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  onSearchChange: (search: string) => void;
  activeFilter: string;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  onFilterChange,
  onSearchChange,
  activeFilter
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          onClick={() => onFilterChange('All')}
          className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
            activeFilter === 'All'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <Filter className="w-4 h-4 inline mr-2" />
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
              activeFilter === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;