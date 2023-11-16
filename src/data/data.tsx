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
import chatBotImage from '../images/portfolio/chatBot.jpg';
import kartProjectImage from '../images/portfolio/kartProject.jpg';
import MLSelfDrivingImage from '../images/portfolio/MLselfDriving.jpg';
import networkImage from '../images/portfolio/networkingStrength.jpg';
import operatingSysImage from '../images/portfolio/operatingSystem.jpg';
//import heroImage3 from '../images/colemanBackground.webp';
import wellPlateImage from '../images/portfolio/wellPlateProject.jpg';
import profilepic from '../images/profilepic.jpg';
import meetMePic from '../images/meetMeImage.jpg';
import { About, Hero, HomepageMeta, PortfolioItem, SkillGroup, Social, TimelineItem } from './dataDef';

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
  meetMeImage: meetMePic,
  name: (<div><span className="type-intro"></span><span className="type-introCont text-red-400"></span></div>),
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        As a soon to be graduate of the University of Alabama with my Masters in Computer Science, I am looking for new
        opportunities as a Software Developer.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have previous experience as a full stack web developer with Marsh McLennan, a Fortune 500 company. In my studies I have worked as a
        researcher studying chatbot linguistic usage, autonomous vehicles, machine learning, and computer networking.
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
      href: `mailto:Tyler-Conger@Tyler-Conger.com`,
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
    { label: 'Location', text: (<p>Relocating From Tuscaloosa, AL</p>), Icon: MapPinIcon },
    {
      label: 'Interests',
      text: (<p>Autonomous Vehicles, Artificial Intelligence, Data Science, Full-stack Development</p>),
      Icon: SparklesIcon,
    },
    { label: 'Schools', text: (<p>University of Alabama<br></br>Northern Arizona University</p>), Icon: AcademicCapIcon },
    { label: 'Employment', text: (<p>Actively Searching for new Opportunities</p>), Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Development Tools',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'C',
        level: 7,
      },
      {
        name: 'TypeScript',
        level: 6,
      },
    ],
  },
  {
    name: 'Frameworks and Libraries',
    skills: [
      {
        name: 'ROS',
        level: 7,
      },
      {
        name: 'React JS',
        level: 9,
      },
      {
        name: 'Tailwind CSS',
        level: 6,
      },
      {
        name: 'Angular',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools and Platforms',
    skills: [
      {
        name: 'Docker',
        level: 5,
      },
      {
        name: 'JIRA / Agile Methodology',
        level: 10,
      },
      {
        name: 'Command Line / Scripting',
        level: 7,
      },
      {
        name: 'Git',
        level: 7,
      },
    ],
  },
  {
    name: 'Life Skills',
    skills: [
      {
        name: 'Leadership',
        level: 9,
      },
      {
        name: 'Public Speaking',
        level: 8,
      },
      {
        name: 'Technical Writing',
        level: 8,
      },
      {
        name: 'Communication',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Efficient Tester Project',
    description:
      'Created a web application for faster COVID-19 tests that helped sciencetists using the sample pooling methodology. Users have the ability to join and create teams, create different tests and track their work digitally between testing cycles.',
    url: 'https://ceias.nau.edu/capstone/projects/CS/2021/EfficientTest-F20/',
    image: wellPlateImage,
  },
  {
    title: 'Crimson Autonomous Kart',
    description:
      'Creation of a fully autonomous go-kart for the Purdue Autonomous Kart Challenge. My work focused mainly on the creation of the LiDAR camera system, from capturing the data from the system to creating roadway and obstacle detection algorithms. Project is available upon request',
    url: '',
    image: kartProjectImage,
  },
  {
    title: 'Chatbot Poster',
    description:
      'Analysis of some of my work in studying what types of language users prefer when interacting with chatbots. Studied specifically human curated text vs AI tweaked responses to understand what linguistic characteristics are prefered by end users.',
    url: 'Chatbot User Exerpience Symposium Poster 4.17.2020.pdf',
    image: chatBotImage,
  },
  {
    title: 'Network Stength Project',
    description:
      'Research paper where signals ability to propagate through various different building materials. Testing various networking protocols as well as different commonly used household building materials in an effort to study what materials may be better or limiting to wireless networking activity.',
    url: 'Effects%20of%20Common%20Building%20Construction%20Materials%20on%20Signal.pdf',
    image: networkImage,
  },
  {
    title: 'Survey of Machine Learning in Image Processing',
    description:
      'An overview of the ways different machine learning algorithms are used in image processing, covering topics of OCR, Autonomous Vehicles, and Facial Recognition. High level coverage of different alogrithms and there comperable performance as well as what is used in individual situations with challenges of each.',
    url: 'Machine Learning in Image Processing Survey.pdf',
    image: MLSelfDrivingImage,
  },
  {
    title: 'Operating System Simulator Project',
    description:
      'Semester long project where we were tasked with designing and implementing an operating system. The project is written from the ground up in C using only the implemented string library. Project and design philosphy is availabe upon request',
    url: '',
    image: operatingSysImage,
  },
  /* 
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
    title: (<a className="hover:underline underline-offset-4 hover:text-red-500" href="https://catalog.ua.edu/graduate/engineering/computer-science/ms/#text" target='_blank'>Master of Science in Computer Science</a>),
    content: (
      <div>
      <p>
        During my time at the University of Alabama I spent my time working with organizations such as ACM as well as
        working on a fully autonomous Kart project to compete in the Purdue autonomous kart challenge.
      </p>
      <br></br>
      <p className="font-semibold">Notable Courses:</p>
      <ul className="columns-2">
        <div className="group"><li className="">Machine Learning<span className="collapse hidden group-hover:inline group-hover:transition-all group-hover:visible"></span></li></div>
        <li>Autonomous Vehicles</li>
        <li>Data Science</li>
        <li>Cybersecurity</li>
        <li>Cryptography</li>
        <li>Computer Networks</li>
      </ul>
      </div>
    ),
  },
  {
    date: 'August 2017 - May 2021',
    location: 'Northern Arizona University',
    title: (<a className="hover:underline underline-offset-4 hover:text-red-500" href="https://nau.edu/school-of-informatics-computing-and-cyber-systems/bs-computer-science/" target='_blank'>Bachelors of Science in Computer Science</a>),
    content: (
      <p>
        During my time at Northern Arizona University, I spent time as the President of the local Association for
        Comnputing Machinery (ACM) chapter. I also spent 3 years serving as an academic mentor to computer science
        students. I was also appointed to a specialty <a className="hover:underline underline-offset-4 hover:text-red-500" href='https://in.nau.edu/dean-of-students/presidential-leadership-fellows/' target='_blank'>leadership training program</a>, where outstanding leaders at NAU took
        monthly professional classes to learn to become better leaders.{' '}
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - August 2022',
    location: 'Marsh McLennan | Phoenix, AZ',
    title: (<p>Software Developer</p>),
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
    title: (<p>Research Intern</p>),
    content: (
      <ul>
        <li>
          - Developed interactive chatbots using IBM Watson artificial intelligence tools to respond to tourism
          questions questions in Flagstaff
        </li>
        <li>- Creation of a website that was used to host chatbots using PHP, HTML, and JavaScript</li>
        <li>- Wrote Python scripts used in task automation, natural language processing, and data analysis</li>
      </ul>
    ),
  },
  {
    date: 'August 2019 - December 2020',
    location: 'NAU Computer Science Lab TA | Flagstaff, AZ',
    title: (<p>Teaching Assistant</p>),
    content: (
      <ul>
        <li>- Administered material in a lab-based classroom setting</li>
        <li>
          - Held a weekly office hours where students would ask questions pertaining to data structures, MATLAB, and
          Computer Science 2 questions
        </li>
      </ul>
    ),
  },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/TylerRConger' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tyler-conger/' },
  { label: 'Email', Icon: EnvelopeOpenIcon, href: 'mailto:Tyler-Conger@Tyler-Conger.com' },
];
