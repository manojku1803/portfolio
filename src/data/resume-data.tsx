import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Manoj Kumar Pradhan",
  initials: "Manoj",
  location: "Bhubaneswar, Odisha, India",
  locationLink: "https://www.google.com/maps/place/Bhubaneswar",
  about:
    "React JS Ex-Intern @ Celebal Technologies | CSE'25 @ KIIT University | Next Js | TypeScript | Node Js | Web Developer",
  summary:
    "I am a passionate software developer focused on solving real-world problems through technology. Open to frontend, backend, or full-stack roles, I thrive in challenging environments and am always eager to learn new technologies to build impactful solutions that improve lives.",
  avatarUrl: "https://avatars.githubusercontent.com/u/89033216",
  personalWebsiteUrl: "https://66f96b65402a1709bac06a7f--manoj18portfolio.netlify.app/",
  contact: {
    email: "manojpradhan1803@gmail.com",
    tel: "+918658225991",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/manojku1803",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manoj1803/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Mxnoj18",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2021",
      end: "2025",
    },
    {
      school: "Adyant Higher Secondary School, Bhubaneswar",
      degree: "Class XII CHSE",
      start: "2020",
      end: "2021",
    },
    {
      school: "Gopabandhu High School, begunia",
      degree: "Class X BSE",
      start: "2018",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Celebal Technologies",
      link: "#",
      badges: ["Remote"],
      title: "React Js Intern",
      logo: ConsultlyLogo,
      start: "May 2024",
      end: "July 2024",
      description:
        "Developed a customizable e-commerce platform with product listings, cart management, and secure payment integration, optimizing user experience and navigation. Technologies: React.js, Node.js, MongoDB, Tailwind CSS",
    },
    {
      company: "KIIT University",
      link: "#",
      badges: [],
      title: "Cashew Plant Disease Detection",
      logo: ParabolLogo,
      start: "Jan 2024",
      end: "Present",
      description:
        "Implemented ML models for early disease detection, achieving 95% accuracy and improving crop health management. Technologies: Python, TensorFlow, Convolutional Neural Networks",
    },
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "LiveDocs",
      techStack: [
        "Next.js", "Node.js", "TypeScript", "Liveblocks", "Lexical Editor", "Tailwind CSS"
      ],
      description:
        "Built a real-time collaborative document management system for 1M+ users with simultaneous editing and commenting features.",
      logo: ParabolLogo,
      link: {
        label: "https://github.com/manojku1803/LiveDocs",
        href: "https://live-docs-mu-six.vercel.app/sign-in",
      },
    },
    {
      title: "CarePluse",
      techStack: [
        "Next.js", "Appwrite", "TypeScript", "Tailwind CSS", "Twilio"
      ],
      description:
        "Created a hospital management platform for booking appointments, profile management, and admin scheduling with secure file storage.",
      logo: EvercastLogo,
      link: {
        label: "https://github.com/manojku1803/CarePluse_PatientsHealthCareSystem",
        href: "https://care-pluse-patients-health-care-system.vercel.app/",
      },
    },
    {
      title: "Mystry Messages",
      techStack: [
        "Next.js", "MongoDB", "TypeScript", "Tailwind CSS"
      ],
      description: "Developed an anonymous messaging app for introverts using AI-generated messages and unique link-sharing functionality.",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/manojku1803/Mystry_Messages",
        href: "https://github.com/manojku1803/Mystry_Messages",
      },
    },
    
  ],
} as const;
