import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  shopify,
  adsprint,
  wordpress,
  bharosa,
  baelworks,
  sss,
  cdp,
  tofrum,
  strapi,
  trufan,
  buzz,
  msat,
  parivaar,
  backend,
  soar
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Website Designer",
    icon: creator,
  },
  {
    title: "E-Commerce  Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: 'wordpress',
    icon: wordpress
  },
  {
    name: 'shopify',
    icon: shopify
  },
  {
    name: 'strapi',
    icon: strapi
  }
];

const experiences = [
  {
    title: "Team Lead",
    company_name: "SSS | BUZZ",
    icon: sss,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Spearheaded the frontend development for ADSprint, employing ReactJS for dynamic user interfaces",
      "Engineered modular UI components for scalability and maintainability",
      "Implemented comprehensive input validation to ensure data integrity",
      "Conducted detailed component testing to enhance user experience",
    ],
  }, 
  {
    title: "Front-End Developer",
    company_name: "Tofrum | MSAT",
    icon: tofrum,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jun 2024",
    points: [
      "Designed and developed the frontend for the Management System Application Tool (MSAT)",
      "Utilized Jira for project management and GitHub for version control and integration",
      "Engaged with clients to tailor the interface according to branding and marketing specifications",
    ],
  }, 
  {
    title: "Software Developer",
    company_name: "Baelworks | Soar - Cyber Defense Portal (Cyberstash Pvt Ltd, Australia)",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Crafted and optimized reusable UI components using ReactJS",
      "Utilized React Flow to model and manage complex workflows",
      "Integrated backend services through APIs using Redux Toolkit for seamless data handling"
    ],
  }, {
    title: "Software Developer",
    company_name: "Baelworks | ADSprint, Bangalore",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Led the frontend development for ADSprint, focusing on user interface and experience",
      "Applied MUI and DataGrid to create sophisticated data displays and interactions",
      "Integrated cloud storage solutions via AWS S3 with ReactJS for enhanced functionality",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Baelworks | Bharosa agri tech",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Oct 2022",
    points: [
      "Developed and styled the user interface for Bharosa Agri Tech using modern web technologies",
      "Leveraged HTML5, CSS3, and Bootstrap5 for responsive and visually appealing design elements",
    ],
  },
  {
    title: "ReactJs Developer",
    company_name: "Baelworks | Parivaar Organization, Kolkat",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jun 2022",
    points: [
      "Led the development of the Parivaar HR interface, focusing on creating reusable ReactJS components",
      "Coordinated API integration using Redux and Axios to streamline data interactions",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "SSS | TruFan, US",
    icon: sss,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Mar 2022",
    points: [
      "Developed interactive components with Material UI for a high-performance user experience",
      "Integrated AWS serverless APIs with Redux and Axios to facilitate backend communication",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Baelworks | Cyber Defense Portal (Cyberstash Pvt Ltd, Australia)",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2021",
    points: [
      "Created versatile UI components with ReactJS, focusing on reusability and consistency",
      "Employed Redux Toolkit for effective API integration and state management",
      ],
  }
];

const projects = [
  {
    id: 1,
    name: "BUZZ",
    description:
      "Buzz boosts local tourism and community connections with a user-friendly platform, offering maps and real-time updates. It collaborates with partners to increase engagement, promoting local economies and strengthening community bonds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: buzz,
  },
  {
    id: 2,
    name: "MSAT",
    description:
      "MSAT offers a holistic view of certification and compliance, integrating multiple standards into one system. This tool enhances decision-making and efficiency, fostering trust with clients and stakeholders in the enterprise and system protection.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: msat,
  },
  {
    id: 3,
    name: "Soar",
    description:
      "Soar within Cyber Defense Portal automates incident response, streamlining processes and reducing manual effort. It integrates security tools and workflows for efficient incident investigation and containment, improving overall security operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: soar,
  },
  {
    id: 4,
    name: "ADSprint",
    description:
      "ADSprint is a web-based platform for news agencies to manage advertising campaigns, including classifieds, obituaries, and financial reports. It offers agencies full control over online advertising, enhancing campaign management and effectiveness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: adsprint,
  },
  {
    id: 5,
    name: "Bharosa agri tech",
    description:
      "Bharosa Agri Tech Portal provides a comprehensive platform for farmers to verify and manage land and crop information. This helps them generate reports and access loans from banks, facilitating financial support and growth in the agricultural sector.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: bharosa,
  },
  {
    id: 6,
    name: "Parivaar Org",
    description:
      "Parivaar Organization, an NGO, provides free education and accommodation to underprivileged students. The project involves developing a human resource management system to maintain records of employees and activities, ensuring efficient operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: parivaar,
  },
  {
    id: 7,
    name: "Cyber Portal",
    description:
      "Cyber Defense Portal integrates third-party APIs to detect threats and vulnerabilities, automate actions, and manage incident response. The portal enhances security by allowing real-time decisions on blocking or allowing suspected IPs and domains.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: cdp,
  },
  {
    id: 8,
    name: "TruFan",
    description:
      "TruFan is a sports gaming platform that allows users to participate in cricket, basketball, football and other games tournaments and predict match outcomes. It offers a chance to test sports knowledge and win prizes, enhancing the user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: trufan,
  },
];

export { services, technologies, experiences, projects };
