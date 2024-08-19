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
    title: "Ecommerce Developer",
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
      "Led the UI development for ADSprint, integrating UI with ReactJs",
      "Developed reusable UI components using React",
      "Ensured all user inputs were validated before submission.",
      "Conducted thorough testing of UI components",
    ],
  }, 
  {
    title: "Front-End Developer",
    company_name: "Tofrum | MSAT",
    icon: tofrum,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jun 2024",
    points: [
      "Developed the UI for the Management System Application Tool (MSAT)",
      "Utilized Jira for sprint management and GitHub for branch merging and synchronization",
      "Collaborated with customers for branding and marketing requirements",
    ],
  }, 
  {
    title: "Software Developer",
    company_name: "Baelworks | Soar - Cyber Defense Portal (Cyberstash Pvt Ltd, Australia)",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Jun - Sep 2023",
    points: [
      "Created reusable UI components using React",
      "Leveraged React Flow for workflow creation",
      "Integrated APIs using Redux Toolkit"
    ],
  }, {
    title: "Software Developer",
    company_name: "Baelworks | ADSprint, Bangalore",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2023",
    points: [
      "Led the complete UI development for ADSprint",
      "Implemented UI design with MUI, DataGrid, and Redux Toolkit",
      "Integrated AWS S3 with ReactJS",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Baelworks | Bharosa agri tech",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Jan - Oct 2022",
    points: [
      "Developed the UI for Bharosa Agri Tech",
      "Implemented UI design using HTML5, CSS3, Bootstrap5, ReactJs, and Redux",
    ],
  },
  {
    title: "ReactJs Developer",
    company_name: "Baelworks | Parivaar Organization, Kolkat",
    icon: baelworks,
    iconBg: "#E6DEDD",
    date: "Mar - Jun 2022",
    points: [
      "Led the UI development for Parivaar HR",
      "Developed master components with ReactJs",
      "Integrated APIs using Redux and Axios",
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
      "Developed components using Material UI",
      "Integrated AWS serverless API using Redux and Axios",
    ],
  },
  {
    title: "UI Developer",
    company_name: "SSS | FoodLinked, Oman",
    icon: sss,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - Mar 2019",
    points: [
      "Developed user interfaces for the FoodLinked recruitment system",
    ],
  },
  {
    title: "UI Developer",
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
