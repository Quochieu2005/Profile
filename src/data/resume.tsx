import { Icons } from "@/components/icons";
import { cva } from "class-variance-authority";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Khai Duy",
  initials: "DK",
  url: "https://avatars.githubusercontent.com/u/160635257?v=4",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/hochiminhcity",
  description:
    "3rd year majoring in Software Engineering at PTIT. I love building things and helping people. I like Cybersecurity and DevOps.",
  summary:
    "I started my journey by developing tools to support remote access and control of computers. From there, I gradually moved to the field of Backend Development. In addition to software development, I am also passionate about Cybersecurity, regularly practicing through CTF challenges on the TryHackMe platform revolving around the topic of Cybersecurity and Discord bot. My practical skills are constantly trained and improved through the direct operation and management of the PWSData.vn enterprise server system, which I am responsible for deploying and maintaining.",
    avatarUrl: "/me.png",
    cvUrl: "/cvduykhai.pdf",
  
    skills: {
    programming: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "Python", icon: "py" },
      { name: "PHP", icon: "php" },
      { name: "Laravel	", icon: "laravel" },
      { name: "discord.js	", icon: "discordjs	" },
    ],
    frontend: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "scss" },
      { name: "jQuery", icon: "jquery" },
    ],
    backend: [
      { name: "Node.js", icon: "nodejs" },
      { name: "laravel", icon: "laravel" },
      { name: "Django", icon: "django" },
      { name: "Spring", icon: "spring" },
      { name: "FastAPI", icon: "fastapi" },
    ],
    others: [
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "Postman", icon: "postman" },
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Figma", icon: "figma" },
      { name: "vscode", icon: "vscode" },
      { name: "Cypress", icon: "cypress" },
      { name: "Github", icon: "github" },
      { name: "Kali", icon: "kali" },
      { name: "Bots", icon: "bots" },
      { name: "Discord", icon: "discord" },


    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "khaicybers@gmail.com",
    tel: "+847959824",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/khaicybers",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

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

      X: {
        name: "X",
        url: "https://x.com/CybersecKh49014",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:khaicybers@gmail",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Power Web Services",
      href: "https://pwsdata.vn",
      badges: [],
      location: "Remote",
      title: "Sell Source Code",
      logoUrl: "https://pwsdata.vn/uploads/02-04-2025/8aaf84e7-efd6-4933-829c-2af7ce7d58eb.png",
      start: "May 2025",
      end: undefined,
      description:
        "Sell source code to clients around the world for their projects and websites using the PWSData.vn platform.",
    },
    
    {
      company: "PWSCloud.host",
      href: "https://pwscloud.host/",
      badges: [],
      location: "FPT VPS - Ho Chi Minh City, Vietnam",
      title: "VPS Provider",
      logoUrl: "https://pwsdata.vn/uploads/02-04-2025/8aaf84e7-efd6-4933-829c-2af7ce7d58eb.png",
      start: "January 2025",
      end: undefined,
      description:
        "Cloud Hosting VPS for customers in Vietnam was founded by me and I am managing this server at FPT.",
    },
    {
      company: "CloudHub",
      href: "https://cloudhub.vn/",
      badges: [],
      location: "HoChi Minh City, Vietnam",
      title: "Agency VPS",
      logoUrl: "https://cloudhub.vn/wp-content/uploads/2023/11/cloudhub-logo.gif",
      start: "December 2024",
      end: undefined,
      description:
      "Since December 2024, I have been an official VPS agency partner of CloudHub — a leading cloud platform based in Vietnam. In this role, I’ve helped numerous clients worldwide set up and manage their VPS infrastructure for websites, applications, and online systems.I provide technical consultation, recommend optimized VPS packages, assist with OS installation, ensure server security, and monitor performance. Thanks to CloudHub’s reliable and high-performance platform, my clients can confidently focus on building and scaling their projects.",
    },
  ],
  education: [
    {
      school: "PTIT Academy - Ho Chi Minh City",
      href: "https://ptit.edu.vn/",
      degree: "Posts and Telecommunications Institute of Technology",
      logoUrl: "/Logo_PTIT_University.png",
      start: "2023",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "AppleShop",
      href: "https://demo.pwsdata.vn/trang-chu",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "With the project defense of the subject [E-commerce DEMO](https://demo.pwsdata.vn/trang-chu), I decided to build a Laravel that allows users to buy products and pay online with momo. This is a great way to build an audience and buy products quickly.",
      technologies: [
        "PHP",
        "JavaScript",
        "PostgreSQL",
        "FigMa",
        "CSS",
        "Laravel",
        "HTML5",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://demo.pwsdata.vn/trang-chu",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./apple.png",
      video:
        "",
    },
    {
      title: "AkayTruyen",
      href: "https://akaytruyen.com",
      dates: "Jen 2025 - March 2025",
      active: true,
      description:
        "This is a Story website. I was inspired by a brother who likes to write stories and he asked me to build this system with many features such as Livechat, donation board, web rating, etc. Many people like my website and their stories.",
      technologies: [
        "JavaScript",
        "PHP",
        "PostgreSQL",
        "Laravel",
        "LiveWire Components",
        "Shadcn UI",
        "Magic UI",
        "Hostinger",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://akaytruyen.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./akay.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hackathon Security",
      dates: "April 3rd - 4th, 2024",
      location: "Ho Chi Minh City University of Economics (UEH) Nguyen Van Linh Campus, Binh Chanh, Ho Chi Minh City",
      description:
        "Access link scan to report if it is a phishing link and take screenshot of statistics based on Chongluadao.vn API.",
      image:
        "https://github.com/khaicybers/cyberscan-hackathon/blob/main/CyberScan/image/icon.png?raw=true",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/khaicybers/cyberscan-hackathon",
        },
      ],
    },
    {
      title: "AngelHack",
      dates: "January 20th - 21st, 2023",
      location: "Ho Chi Minh Youth Cultural House, Ho Chi Minh City",
      description:
        "I was inspired by when I took the university entrance exam, this can be researched and checked to see if the university score is correct. If you pass, it will show suggested schools thanks to AI.",
      image:
        "https://avatars.githubusercontent.com/u/160635257?v=4",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Frontend",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/khaicybers/hackathon-frontend/tree/main",
        },
        {
          title: "Backend",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/khaicybers/hackathon-backend",
        },
        {
          title: "Server capcha Private",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/khaicybers/capcha",
        },
      ],
    },
  ],
  randomSong: [
    {
      id: "1",
      src: "./music/thap.mp3",
      image: "https://i.scdn.co/image/ab67616d00001e0231b32d53de991a94c7f62290",
      caption: "Chill cùng tớ",
      title: "Tháp Drill",
    },
    {
      id: "2",
      src: "./music/ccbt.mp3",
      image: "https://avatar-ex-swe.nixcdn.com/song/2024/01/30/7/7/2/a/1706616652876_640.jpg",
      caption: "Chàng TRai Bất Tử nhé",
      title: "Immortal Boy",
    },
  ],
} as const;
