import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  adsprint,
  tripguide,
  wordpress,
  bharosa,
  baelworks,
  sss,
  cdp
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
  }
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Baelworks | ADSprint, Bangalore",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Team lead, Complete UI development in ADSprint, UI integration with ReactJs, ReduxToolkit with persist.",
      "mplemented the UI design with MUI, DataGrid, ReactJs, ReduxToolkit with persist.",
      "WS S3 integration with ReactJS.",
      "GitHub branch merge and sinks all the branch code and managed in ADSprint.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Baelworks | Bharosa agri tech",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Oct 2022",
    points: [
      " UI development in Bharosa agri tech, UI integration with ReactJs framework with redux.",
      "Implemented the UI design with HTML5, CSS3, Bootstrap5, ReactJs, Redux with Axios.",
      "Bitbucket branch merge in Bharosh agri tech.",
    ],
  },
  {
    title: "ReactJs Developer",
    company_name: "Baelworks | Parivaar Organization, Kolkat",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jun 2022",
    points: [
      "Team Lead, Complete UI development in Parivaar HR, UI integration with ReactJs framework with redux",
      "Developed different master Components with ReactJs. ",
      "Implemented the UI design with HTML5, CSS3, Bootstrap5, ReactJs.",
      "API Integration using Redux with Axios.",
      "GitHub branch merge and managed in Parivaar HR.",
      "Client Interaction for the requirements.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Baelworks | Cyber Defense Portal (Cyberstash Pvt Ltd, Australia)",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Developed User Interface with HTML5, CSS3 and Bootstrap 4.",
      "Developed Website using WordPress.",    ],
  },
  {
    title: "Full stack Developer",
    company_name: "SSS | TruFan, US",
    icon: sss,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Mar 2022",
    points: [
      "Developed Components using Material UI.",
      "Client Interaction for the requirements.",
      "AWS serverless API Integration using Redux with axios.",
    ],
  },
  {
    title: " UI Developer",
    company_name: "SSS | FoodLinked, Oman",
    icon: sss,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - Mar 2019",
    points: [
      "Team Lead, Complete UI development",
      "Developed User Interface with HTML, CSS and Bootstrap.",
      "API Integration using Redux with Axios.",
      "Client Interaction for the requirements.",
    ],
  },
  {
    title: " UI Developer",
    company_name: "SSS | IT GROUP CODE OLYMPIAN",
    icon: sss,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Team Lead, Complete UI development in transport management system.",
      "Managed and supervised a team of 12 during the day-to-day operations as well as training exercises.",
      "Successfully distributed work evenly among teams to achieve maximum time management and to ensure the success of the objective at hand.",
      "Plan and implement all stages of projects",
      "Direct project team members in designing, developing, testing and maintaining software applications."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ADSprint",
    description:
      "It provides news agencies with a web-based advertising platform. Various types of advertising are available, including classifieds, obituaries, displays, and audited or unaudited financial reports. Online advertising campaigns can be managed and controlled with this. Using this medium, agencies can manage their advertising  campaigns",
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
    // source_code_link: "https://github.com/",
  },
  {
    name: " Bharosa agri tech",
    description:
      "A Portal where we have all our farmers, their land & crop information, can verify their basic info & land geo tag info from the portal and generate the reports for their land, which will help to get the loans from Bank",
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
    // source_code_link: "https://github.com/",
  },
  {
    name: "Cyber Defense Portal",
    description:
      "Cyber Defense Portal (CDP) is a security portal includes third-party vendors API’s which detect threat and vulnerability and raise ticket, perform automation actions in order to block and allow suspected IP and Domain.",
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
    // source_code_link: "https://github.com/",
  },
  // {
  //   name: "TruFan",
  //   description:
  //     "TruFan is a web development project that allows users to play cricket, basketball, and football tournaments as well as predict the outcomes of matches. With TruFan, users can put their sports knowledge to the test and possibly win some prizes.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   // source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Parivaar Organization",
  //   description:
  //     "Parivaar is an NGO that provides free education and accommodation to the poor students. We are developing human resource management to help maintain records of all employees and their activities.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   // source_code_link: "https://github.com/",
  // },
  // {
  //   name: "FoodLinked",
  //   description:
  //     "FoodLinked is a recruitment System which is associated with Naukri and Other School. A person can have both roles as employer and as well as a job seeker. On the Other hand, User can Apply on Jobs and attend the Assigned test, and can set his job preferences According to their interest and Skills. Here we have given auto login System so that they can automatically login by social engine.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   // source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
