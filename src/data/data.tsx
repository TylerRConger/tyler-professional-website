import {
  AcademicCapIcon,
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
import wineProjectImage from '../images/portfolio/wineRobot.jpg'
import MLSelfDrivingImage from '../images/portfolio/MLselfDriving.jpg';
import networkImage from '../images/portfolio/networkingStrength.jpg';
import operatingSysImage from '../images/portfolio/operatingSystem.jpg';
//import heroImage3 from '../images/colemanBackground.webp';
import wellPlateImage from '../images/portfolio/wellPlateProject.jpg';
import profilepic from '../images/profilepic.jpg';
import meetMePic from '../images/meetMeImage.jpg';
import TSPImage from '../images/portfolio/TSP.jpg';
import OSSImage from '../images/portfolio/OSS.jpg';
import { About, Hero, HomepageMeta, PortfolioItem, SkillGroup, Social, TimelineItem, KartItem, NPItem } from './dataDef';


//import FrontFacing from '../images/kart_images/FrontFacingKart.jpg';
//import BackFacing from '../images/kart_images/BackFacingKart.jpg';
//import KartLab from '../images/kart_images/KartLab.jpg';
import SolderingStation from '../images/kart_images/SolderingStation.jpg';
import VelodyneLidarBox from '../images/kart_images/VelodyneLidarBox.jpg';
//import WiringRedo from '../images/kart_images/WiringRedo.jpg';
import ConeDetectedOne from '../images/kart_images/coneDetectedOne.jpg';
//import ConeDetectedTwo from '../images/kart_images/coneDetectedTwo.jpg';
import KartCode from '../images/kart_images/kart_code.jpg';

import PvsNP from '../images/PvsNP/PvsNP.jpg';
import MaxClique from '../images/PvsNP/maxClique.jpg';
//import NP_Comic from '../images/PvsNP/np_comic_xkcd.jpg';


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
  Hero: 'home',
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
      Software Engineer at Textron Systems specializing in radio frequency-based defense projects. I hold both a Master's and Bachelor's degree in Computer Science. 
      I spearheaded the development of a self-driving vehicle from the ground up, leveraging modern tools, Machine Learning, and Computer Vision. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Previously, I gained experience as a Full Stack Web Developer at Marsh McLennan, a Fortune 500 company. 
      My academic research has focused on chatbot linguistics, autonomous vehicles, machine learning, and computer networking. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/Tyler Conger Technical Resume.pdf',
      text: 'Resume',
      primary: false,
    },
    {
      href: `mailto:Tyler-Conger@Tyler-Conger.com`,
      text: 'Contact',
      primary: false,
    },
    {
      href: 'Blog',
      text: "Blog",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Currently working as a software engineer in the Washington, DC area. Previous experience includes Software Engineer at Textron Systems working on Radio Frequency (RF) based systems, as well as full stack development at Marsh McLennan. Research interests are Aritifical Inteligence, Reinforcement Learning techniques, and data science topics.`,
  aboutItems: [
    { label: 'Location', text: (<p>Washington, DC</p>), Icon: MapPinIcon },
    {
      label: 'Interests',
      text: (<p>Autonomous Vehicles, Artificial Intelligence, Data Science, Full-stack Development</p>),
      Icon: SparklesIcon,
    },
    { label: 'Schools', text: (<p>The University of Alabama<br></br>Northern Arizona University</p>), Icon: AcademicCapIcon },
    { label: 'Employment', text: (<p>Software Engineer</p>), Icon: BuildingOffice2Icon },
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
    title: 'Crimson Autonomous Kart',
    description:
      'Creation of a fully autonomous go-kart for the Purdue Autonomous Kart Challenge. My work focused mainly on the creation of the LiDAR camera system, from capturing the data from the system to creating roadway and obstacle detection algorithms. Project is available upon request',
    url: 'Kart',
    image: kartProjectImage,
  },
  {
    title: 'Efficient Tester Project',
    description:
      'Created a web application for faster COVID-19 tests that helped biologists using the sample pooling methodology. Users have the ability to join and create teams, create different tests and track their work digitally between testing cycles.',
    url: 'https://ceias.nau.edu/capstone/projects/CS/2021/EfficientTest-F20/',
    image: wellPlateImage,
  },
  {
    title: 'Chatbot Poster',
    description:
      'Analysis of some of my work in studying what types of language users prefer when interacting with chatbots. Studied specifically human curated text vs AI tweaked responses to understand what linguistic characteristics are preferred by end users.',
    url: 'Chatbot-User-Experience-Symposium-Poster.pdf',
    image: chatBotImage,
  },
  {
    title: 'ML Wine Quality Predictor',
    description: 'Project for data science class that involved utilizing machine learning to predict the quality of wine. Takes in various inputs about the wine such as type, acidity, etc to analyze and predict quality. ML created using tpot, scikit-learn, and joblib.',
    url: 'ProjectUnavailable',
    image: wineProjectImage,
  },
  {
    title: 'Network Strength Project',
    description:
      'Research paper where signals ability to propagate through various different building materials. Testing various networking protocols as well as different commonly used household building materials in an effort to study what materials may be better or limiting to wireless networking activity.',
    url: 'Effects%20of%20Common%20Building%20Construction%20Materials%20on%20Signal.pdf',
    image: networkImage,
  },
  {
    title: 'Operating System Simulator Project',
    description:
      'Semester long project where we were tasked with designing and implementing an operating system. The project is written from the ground up in C using only the implemented string library. Project and design philosophy is available upon request',
    url: 'ProjectUnavailable',
    image: operatingSysImage,
  },
  {
    title: 'Survey of Machine Learning in Image Processing',
    description:
      'An overview of the ways different machine learning algorithms are used in image processing, covering topics of OCR, Autonomous Vehicles, and Facial Recognition. High level coverage of different algorithms and there comparable performance as well as what is used in individual situations with challenges of each.',
    url: 'Machine Learning in Image Processing Survey.pdf',
    image: MLSelfDrivingImage,
  },
  {
    title: 'P vs NP',
    description: "My work on tackling a few NP problems such as the Traveling Salesman Problem (TSP) and Max Clique problem. Both problems are 'unsolvable' so I've implemented a brute-force, commonly used heuristic algorithm, and my own generated algorithm which was used in a University competition involving solving these problems at scale quickly",
    url: 'PvsNP',
    image: TSPImage,
  },
  
  {
    title: 'Open Source Software',
    description: 'Final short paper I wrote about the pros and cons of utilizing OSS. ',
    url: 'OSS%20Paper.pdf',
    image: OSSImage,
  },
  /*
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
    location: (<p className="flex-1 text-sm font-medium italic sm:flex-none">The University of Alabama</p>),
    title: (<a className="hover:underline underline-offset-4 hover:text-red-500" href="https://catalog.ua.edu/graduate/engineering/computer-science/ms/#text" target='_blank'>Master of Science in Computer Science</a>),
    content: (
      <div>
        <p>
          During my time at The University of Alabama I spent my time working with organizations such as the Association for Computing Machinery (ACM) as well as
          working on a fully autonomous Kart project to compete in the Purdue autonomous kart challenge.
        </p>
        <br></br>
        <p className="font-bold">Notable Courses:</p>
        <ul className="columns-2 list-disc list-inside">
          <div className="group">
            <li className="relative overflow-hidden group">Machine Learning
              <span className="absolute invisible group-hover:visible transition-all duration-300 ease-in-out">
              </span>
            </li>
          </div>
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
    location: (<p className="flex-1 text-sm font-medium italic sm:flex-none">Northern Arizona University</p>),
    title: (<a className="hover:underline underline-offset-4 hover:text-red-500" href="https://nau.edu/school-of-informatics-computing-and-cyber-systems/bs-computer-science/" target='_blank'>Bachelors of Science in Computer Science</a>),
    content: (
      <div>
        <p>
          During my time at Northern Arizona University, I spent time as the President of the local Association for
          Computing Machinery (ACM) chapter. I also spent 3 years serving as an academic mentor to computer science
          students. I was also appointed to a specialty <a className="hover:underline underline-offset-4 hover:text-red-500" href='https://in.nau.edu/dean-of-students/presidential-leadership-fellows/' target='_blank'>leadership training program</a>, where outstanding leaders at NAU took
          monthly professional classes to learn to become better leaders.{' '}
        </p>
        <br></br>
        <p className="font-bold">Notable Courses:</p>
        <ul className="columns-2 list-disc list-inside">
          <div className="">
            <li className="">Data Wrangling and Analysis
              <span id="hide"></span>
            </li>
          </div>

          <div className="">
            <li>Advanced Web Development
              <span id="hide"></span>
            </li>
          </div>
          <li>Software Engineering</li>
          <li>Mobile App Development</li>
          <li>Calculus III</li>
          <li>Linear Algebra</li>
        </ul>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2024 - Present',
    location: (<p>Textron Systems | Baltimore, MD</p>),
    title: (<p>Software Engineer</p>),
    content: (
      <div>
        <ul className='list-disc'>
          <li>Development in C++ and C# on the <a href="https://www.textronsystems.com/products/a2pats-family-products">A2PATS</a> System</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'July 2021 - August 2022',
    location: (<p>Marsh McLennan | Phoenix, AZ</p>),
    title: (<p>Software Developer</p>),
    content: (
      <div>
        <ul className='list-disc'>
          <li>Developed full-stack web applications, in the insurance sector, generating millions of revenue for customers such as Tesla, Amazon, Polestar, Liberty Mutual, and others</li>
          <li>Identified and fixed security vulnerabilities for over 1,000 libraries on multiple live applications using Snyk</li>
          <li>Implemented unit testing for code verification and validation, leveraging tools such as DataDog and SonarQube</li>
          <li>Wrote Python scripts for Continuous Integration/Continuous Deployment (CI/CD) pipeline with Jenkins</li>
          <li>Spearheaded a team initiative to implement modern web practices in agreement with Web Accessibility, to meet guidelines on 10 deployment applications and all future applications with WCAG 2.0 Standards</li>
          <li>Added and reviewed pull requests with BitBucket using Git, accomplishing daily tasks assigned through Jira and preserve and maintain code standards</li>
          <li>In charge of identifying and then fixing security vulnerabilities over 15 separate deployment applications</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'January 2020 - December 2020',
    location: (<p>NAU SICCS Lab | Flagstaff, AZ</p>),
    title: (<p>Research Intern</p>),
    content: (
      <ul className='list-disc'>


        <li>Designed and implemented conversational AI chatbots utilizing IBM Watson to study natural language processing (NLP) in customer service applications; collected conversation data to improve chatbot interaction</li>

        <li>Conducted live and virtual studies of human-chatbot interaction to understand language usage and preference</li>

        <li>Developed various Python scripts for data analysis, data automation and task automation</li>

        <li>Implemented website powered by PHP, HTML, and JavaScript that hosted 2 chatbots for A/B testing. Chatbots interacted with by over 180 live study participants to research register usage and human-chatbot interaction</li>
      </ul>
    ),
  },
  {
    date: 'August 2019 - December 2020',
    location: (<p>NAU Computer Science Lab | Flagstaff, AZ</p>),
    title: (<p>Teaching Assistant</p>),
    content: (
      <ul className='list-disc'>
        <li>Administered lab material material in a lab-based classroom setting on a weekly basis for 3 separate computer science lab classes</li>
        <li>Held a weekly office hours where students would ask questions pertaining to data structures, MATLAB, and Computer Science 2 questions </li>
        <li>Deep understanding of Data Structures and Algorithms to grade and fully understand student projects</li>
      </ul>
    ),
  },
  {
    date: 'April 2018 - May 2021',
    location: (<p>Peer Jacks Mentoring | Flagstaff, AZ</p>),
    title: (<p>Peer Mentor</p>),
    content: (
      <div>
        <ul className='list-disc'>
          <li>Held weekly meetings with 20 out of state freshmen computer science students helping them with all aspects of college life</li>
          <li>Organized monthly events and worked as the main contact for scheduling, planning, and follow-through</li>
          <li>Built and maintained the Peer Jacks website including adding features to the WordPress site using PHP and HTML, including updates every month</li>
          <li>First senior mentor within the program's 10 year span, as well as becoming CRLA level 3 certified</li>
        </ul>
      </div>
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


/**
 * KartContent items
 */
export const kartProjectItems: KartItem[] = [
  {
    title: 'Overview',
    description:
      'I was part of a team, of 5, that worked on building a self driving go-kart from the ground up for the Purdue ev-Grand Prix. I got to cover a lot of ground and learn many new skills and utilize new technologies. While I worked on all aspects of the Kart, from hardware to software, I mainly focused on the computer vision system and surrounding machine learning algorithms. Working on both the LiDAR system and regular view cameras for object detection. We also utilized imitation learning with an experienced driver in the kart to create large reinforcement learning datasets allowing for better racing line and track detection.',
    image: kartProjectImage,
  },
  {
    title: 'Software Development',
    description:
      'The bulk of the software development occurred in Python and C++ using ROS (Robot Operating System). Where each individual component was a ROS node publishing its data to be read by the system, for example all location data was written in C++ and the ROS node continually published that information, which was read by other nodes such as the path planning algorithm, utilizing the data to identify Kart position within roadway boundaries. Generally each team member worked individually creating areas of expertise, meeting throughout the week to review progress and assign task priority. ', 
    image: KartCode,
  },
  {
    title: 'Object Detection',
    description:
      'One of the major pieces I worked on was the computer vision aspect both on the LiDAR camera and real vision cameras. I trained a machine learning algorithm using YOLOv4 to detect cones (potential obstacle and roadway bounds identifiers) using a large variety of images. Then using OpenCV I was able to read the video stream, identify the cones which represented the roadway boundaries this information was then published via a ROS node where the path planner used this information to navigate the course by pathing between the closest left most cone and closest right most cone. ',
    image: ConeDetectedOne,
  },
  {
    title: 'LiDAR Data',
    description:
      'In addition to working with the real vision cameras I also worked extensively with the LiDAR camera. Our system utilized both a Velodyne VLP 16  Puck and a VLP 32C Ultra Puck, which collected hundreds of thousands of datapoints every second giving location and distance information, utilizing Python. This information as published with a ROS node in Python. Then this data was utilized to identify the boundaries of the roadway as well as the exact distance between the kart and the boundaries, making sure that the planned path fell within these boundaries and continuing on a projected course. ',
    image: VelodyneLidarBox,
  },

  {
    title: 'Hardware Development',
    description:
      'Coming in to this project I knew very little about the electrical and physical requirements that would be associated with completion, but I was able to learn from some more experienced team members and develop a series of new skills. First and foremost, I learned to solder which became an important piece as we built and rebuilt the kart along with rewiring each computer box to the batteries. I also was integral to planning the layout of the LiDAR camera mounting on 80/20 bars in order to allow for an infinitely adjustable setup, allowing us to test different mounting positions and angles. ',
    image: SolderingStation,
  },

];

export const NPProjectItems: NPItem[] = [
  {
    title: 'Overview',
    description:
      'The brief idea of P vs NP revolves around the idea of certain problems being solvable in polynomial time while others are nondeterministic polynomial, meaning an answer can not necessarily be found quickly. The P vs NP problem is considered solved when we are able to either prove that P = NP or that P != NP. If we can show that P = NP we are able to solve many "hard" problems. This is because all the problems within the NP space are reducible to every other proble within the NP space, hence showing a reduction from NP to P would be a huge development in the field.',
    image: PvsNP,
  },
  {
    title: 'Traveling Salesman Problem (TSP)',
    description:
      'For the TSP I was engaged in a competition to develop a heuristic solution to solving the TSP efficiently. The idea of the TSP is a salesman is given a list of cities he must visit, he can travel from any city to any other city visiting each a single time, but each leg of the journey has a cost associated with it. The salesman must find the optimal route to travel between these cities. The problem becomes a graph problem with each edge having a weight. I developed an algorithm in Python using known heuristic methods starting from various nodes multithreaded. My idea was that starting from different positions in the graph would yield vastly different results, and multithreading would allow these calculations to be done in parrallel. I entered my algorithm in a university competition aimed at finding an optimal solution to the problem.',
    image: TSPImage,
  },
  {
    title: 'Max-Clique',
    description:
      'Similar to the TSP I also developed a and entered a solution into the competition for another NP problem the Max-Clique. The Max-Clique problem is another graph based problem where within a graph you must find the largest number of fully connected nodes. E.g. In the graph to the right the set of 5 red nodes represent the largest clique within the graph. Similar to my solution to TSP I utilized ',
    image: MaxClique,
  },
 /* {
    title: 'Others',
    description:
      'info on other NP problems',
    image: NP_Comic,
  },*/
];