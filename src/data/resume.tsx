import { Icons } from "@/components/icons";
import { HomeIcon, RocketIcon } from "lucide-react";

export const DATA = {
  name: "Khai Duy",
  initials: "DV",
  url: "https://dkhaidev.vercel.app/",
  location: "Ho Chi Minh, Vietnam",
  locationLink: "https://www.google.com/maps/place/hochiminh",
  description:
    "Phan Duy Khai, sinh viên năm 3 ngành Kỹ thuật Phần mềm tại PTIT. Đam mê Phát triển Full-Stack, An ninh mạng và DevOps. Khám phá các dự án, kỹ năng và kinh nghiệm của tôi.",
  summary:
    "I started with Telegram Bots and Backend Development and now specialize in Full-Stack Development and DevOps. Outside of coding, I sharpen my Cybersecurity skills through TryHackMe CTFs and share knowledge via YouTube tutorials. I reinforce these skills by operating a homelab with 2+ enterprise servers.",
  avatarUrl: "/phanduykhai.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/develop", icon: RocketIcon, label: "Develop" },
  ],
  contact: {
    email: "khaicybers@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/phanduykhai05",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/phan-duy-khai-ws/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Website: {
        name: "Website",
        url: "https://pwsdata.vn/",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:khaicybers@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
      TryHackMe: {
        name: "TryHackMe",
        url: "https://tryhackme.com/p/phanduykhai05",
        icon: Icons.tryhackme,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://facebook.com/phanduykhai05", // Thay bằng link thật của bạn
        icon: Icons.facebook,
        navbar: false,
      },
      HackerRank: {
        name: "HackerRank",
        url: "https://www.hackerrank.com/profile/khaicybers", // Thay bằng link thật của bạn
        icon: Icons.hackerrank,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Posts and Telecommunications Institute of Technology - PTITHCM",
      href: "https://ptithcm.edu.vn/",
      degree: "Software Engineer",
      logoUrl: "/ptitu.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "THPT Ha Huy Tap High School - Gia Lai",
      href: "#",
      degree: "Graduated From High School.",
      logoUrl: "/logo_9b564.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Remote Administration Tool for Android",
      href: "#",
      dates: "Jan 2023 - Feb 2024",
      active: true,
      description:
        "AndoidRAT is a client/server application developed in Java Android for the client side and in Java/Swing for the Server.",
      technologies: [
        "JAVA",
        "Swing",
        "Android",
        "MySQL",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/phanduykhai05/AndoidRAT?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
        image: "../androirat.png"
    },
    {
      title: "La Ban Huong Nghiep",
      href: "#",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        "Users can calculate their score by entering their full score, after which the system will calculate the score and suggest suitable exam subjects and majors based on that score.",
      technologies: [
        "Next.js",
        "Tailwind",
        "Typescript",
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/phanduykhai05/hackathon-frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/phanduykhai05/hackathon-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "../LBHN.png",
    },
    {
      title: "Json Tree",
      href: "#",
      dates: "Dec 2025 - Jan 2026",
      active: true,
      description:
        "Visualisation tool to help visualise json format in Graph and Tree form.",
      technologies: [
        "Next.js",
        "Tailwind",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://json-tree-rouge.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/phanduykhai05/Json-Tree",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "../image.png",
    },
    {
      title: "POWES - Next.js",
      href: "#",
      dates: "May 2025 - Present",
      active: true,
      description:
        "ADS, Management tool, Marketing tool, VPS Service, Hosting Service.",
      technologies: [
        "Next.js",
        "Tailwind",
        "Typescript",
        "API Laravel",
        "MySQL"
      ],
      links: [
        {
          type: "Website",
          href: "https://pwsdata.vn/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "../powes.png",
    },
  ],
  hackathons: [
    {
      title: "Vietnam Cyber Defense Hackathon 2025",
      dates: "March 15th - 16th, 2025",
      location: "Ho Chi Minh City University of Technology (HCMUT)",
      description:
        "Built a web security monitoring platform to detect common web vulnerabilities such as SQL Injection, XSS, and IDOR, with automated reporting and risk classification.",
      image:
        "https://vnptai.io/favicon.ico",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          href: "https://github.com/phanduykhai05/vietnam-cyber-defense-2025",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "AI & Security Hackathon 2025",
      dates: "June 7th - 8th, 2025",
      location: "Online Hackathon",
      description:
        "Developed an AI-assisted phishing detection system that analyzes URLs, page behavior, and user reports to improve web security awareness and threat prevention.",
      image:
        "../aisechack2025.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Project Repo",
          href: "https://github.com/phanduykhai05/ai-security-hackathon-2025",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },

    {
      title: "Cyber Apocalypse CTF",
      dates: "March 18th - 22nd, 2024",
      location: "Online (Hack The Box)",
      description:
        "Team-based CTF competition focusing on web exploitation, forensics, and cloud security scenarios in a simulated environment.",
      image:
        "../cyberapocalypse.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Team Writeups",
          href: "https://github.com/phanduykhai05/cyber-apocalypse",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Hackathon Security",
      dates: "April 3rd - 4th, 2024",
      location: "Ho Chi Minh City University of Economics (UEH) Nguyen Van Linh Campus, Binh Chanh, Ho Chi Minh City",
      description:
        "Access link scan to report if it is a phishing link and take screenshot of statistics based on Chongluadao.vn API.",
      image:
        "../hktscr.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/phanduykhai05/cyberscan-hackathon",
        },
      ],
    },
    {
      title: "AngelHack HCMC 2023",
      dates: "January 20th - 21st, 2023",
      location: "Ho Chi Minh Youth Cultural House, Ho Chi Minh City",
      description:
        "I was inspired by when I took the university entrance exam, this can be researched and checked to see if the university score is correct. If you pass, it will show suggested schools thanks to AI.",
      image:
        "../adenl.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Frontend",
          href: "https://github.com/phanduykhai05/hackathon-frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          title: "Backend",
          href: "https://github.com/phanduykhai05/hackathon-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Vietnam Cyber Security Challenge (VCSC)",
      dates: "August 12th - 13th, 2023",
      location: "University of Information Technology (UIT), Ho Chi Minh City",
      description:
        "Participated in a capture-the-flag (CTF) competition focusing on web security, reverse engineering, and basic cryptography challenges.",
      image:
        "../vcsc.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Writeups",
          href: "https://github.com/phanduykhai05/vcsc-writeups",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "WhiteHat Contest Vietnam",
      dates: "November 5th - 6th, 2023",
      location: "Online Competition",
      description:
        "Solved real-world inspired security challenges including SQL Injection, XSS, authentication bypass, and secure coding practices.",
      image:
        "../whitehat.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Challenge Solutions",
          href: "https://github.com/phanduykhai05/whitehat-ctf",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
    },
  ],
} as const;
