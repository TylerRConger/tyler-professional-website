import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  EnvelopeOpenIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

//import heroImage1 from '../images/newYorkBackground.webp';
import heroImage from '../images/BDSBackground.webp';
//import heroImage3 from '../images/colemanBackground.webp';


import wellPlateImage from '../images/portfolio/wellPlateProject.jpg';
import kartProjectImage from '../images/portfolio/kartProject.jpg';
import chatBotImage from '../images/portfolio/chatBot.jpg'
import networkImage from '../images/portfolio/networkingStrength.jpg'
import MLSelfDrivingImage from '../images/portfolio/MLselfDriving.jpg'

import profilepic from '../images/profilepic.jpg';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tyler Conger',
  description: "Tyler Conger's Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */


export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Tyler, it's nice to meet you!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        As a soon to be graduate of the University of Alabama with my Masters in Computer Science, I am looking for new opportunities as a Software Developer.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have previous experience as a full stack web developer with Marsh McLennan. In my studies I have worked as a researcher studying chatbot linguistic usage, autonomous vehicles, machine learning, and computer networking.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Tyler Conger Technical Resume.pdf',
      text: 'Resume',
      primary: false,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `mailto:TylerConger1998@gmail.com`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A graduate student at the University of Alabama, where I spent time studying software security, cybersecurity, artificial intelligence, data science, and was part of a team to create a self driving go-kart.`,
  aboutItems: [
    {label: 'Location', text: 'Tuscaloosa, AL', Icon: MapPinIcon},
    {label: 'Interests', text: 'Autonomous Vehicles, Artificial Intelligence, Data Science, Full-stack Development', Icon: SparklesIcon},
    {label: 'Schools', text: 'University of Alabama', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Actively Searching for new Opportunities', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Efficient Tester Project',
    description: 'Created a web application for faster COVID-19 tests that helped sciencetists using the sample pooling methodology. Users have the ability to join and create teams, create different tests and track their work digitally between testing cycles.',
    url: 'https://ceias.nau.edu/capstone/projects/CS/2021/EfficientTest-F20/',
    image: wellPlateImage,
  },
   {
    title: 'Crimson Autonomous Kart',
    description: 'Creation of a fully autonomous go-kart for the Purdue Autonomous Kart Challenge. My work focused mainly on the creation of the LiDAR camera system, from capturing the data from the system to creating roadway and obstacle detection algorithms.',
    url: '',
    image: kartProjectImage,
  },
  {
    title: 'Chatbot Poster',
    description: 'Give a short description of your project here.',
    url: '/Chatbot User Exerpience Symposium Poster 4.17.2020.pdf',
    image: chatBotImage,
  },
   {
    title: 'Network Stength Project',
    description: 'Give a short description of your project here.',
    url: '',
    image: networkImage,
  },
   {
    title: 'Survey of Machine Learning in Image Processing',
    description: 'Give a short description of your project here.',
    url: '',
    image: MLSelfDrivingImage,
  },
  /* {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  }, */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2022 - May 2024',
    location: 'University of Alabama',
    title: 'Masters of Science Computer Science',
    content: <p>During my time at the University of Alabama I spent my time working with organizations such as A.</p>,
  },
  {
    date: 'August 2017 - May 2021',
    location: 'Northern Arizona University',
    title: 'Bachelors of Science in Computer Science',
    content: <p>During my time at Northern Arizona University, I spent time as the President of the local Association of Comnputing Machinery (ACM) chapter.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - August 2022',
    location: 'Marsh Digital | Phoenix, AZ',
    title: 'Software Developer',
    content: (      
        <ul>
          <li>- Built and maintain full stack web based applications using TypeScript, Angular, and Tailwind CSS</li>
          <li>- Wrote unit tests using JUnit to maintain code coverage, with modern tools like DataDog</li>
          <li>- Developed scripts in Python and C used in the CI/CD pipeline build and deployment process</li>
          <li>- Led a team initiative to implement modern web practices that were in agreement with Web Accessibility</li>
          <li>- Created and reviewed pull requests using BitBucket, maintaining team code standards and practices</li>
          <li>- Updated and identified various security vulnerabilities over 15 separate deployment applications</li>
          <li>- Added and completed tasks assigned on Jira using agile methodology</li>
        </ul>
    ),
  },
  {
    date: 'January 2020 - December 2020',
    location: 'NAU SICCS Lab | Flagstaff, AZ',
    title: 'Research Intern',
    content: (
      <ul>
      <li>- Developed interactive chatbots using IBM Watson artificial intelligence tools to respond to tourism questions questions in Flagstaff</li>
      <li>- Creation of a website that was used to host chatbots using PHP, HTML, and JavaScript</li>
      <li>- Wrote Python scripts used in task automation, natural language processing, and data analysis</li>
    </ul>
    ),
  },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/TylerRConger'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tyler-conger/'},
  {label: 'Email', Icon: EnvelopeOpenIcon, href: 'mailto:TylerConger1998@gmail.com'}
];
