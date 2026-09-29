import { Icons } from "@/components/icons";
import { HomeIcon, RocketIcon } from "lucide-react";

export const DATA = {
  name: "Thai Trung Quoc Hieu",
  initials: "TQH",
  url: "https://dkhaidev.vercel.app/",
  location: "Ho Chi Minh, Vietnam",
  locationLink: "https://www.google.com/maps/place/hochiminh",
  description:
    "Thai Trung Quoc Hieu, sinh viên năm 3 ngành Công nghệ Thông tin tại PTIT. Tập trung vào backend web development, API, database và deployment.",
  summary:
    "Third-year Information Technology student with hands-on experience in backend web development through internships and academic projects. Passionate about backend engineering, writing clean and maintainable code, and continuously improving technical skills to build reliable and scalable software solutions.",
  avatarUrl: "/phanduykhai.jpg?v=2026-09-29-2",
  skills: [
    "PHP",
    "JavaScript",
    "SQL",
    "Node.js",
    "Laravel",
    "RESTful APIs",
    "MVC Architecture",
    "Authentication",
    "Database Integration",
    "React.js",
    "Next.js",
    "MySQL",
    "SQL Server",
    "SQLite",
    "S3 Storage",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "OOP",
    "Database Design",
    "API Development",
    "CRUD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/develop", icon: RocketIcon, label: "Develop" },
  ],
  contact: {
    email: "thaitrungquochieu@gmail.com",
    tel: "+84 364 395 437",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Quochieu2005",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "#",
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
        url: "mailto:thaitrungquochieu@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      TryHackMe: {
        name: "TryHackMe",
        url: "#",
        icon: Icons.tryhackme,
        navbar: false,
      },
      Facebook: {
        name: "Facebook",
        url: "#",
        icon: Icons.facebook,
        navbar: false,
      },
      HackerRank: {
        name: "HackerRank",
        url: "#",
        icon: Icons.hackerrank,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tidadigi Company",
      href: "#",
      badges: [],
      location: "Ho Chi Minh City, Vietnam",
      title: "Backend Developer Intern",
      logoUrl: "/tidadigi.png",
      start: "Jun 2025",
      end: "Dec 2025",
      description:
        "Supported backend development using PHP (Laravel) for web applications, built and maintained RESTful APIs for data processing, worked with MySQL for application data management, integrated S3-compatible cloud storage for file upload and management, collaborated with the team to implement features and resolve system issues, and participated in testing, debugging, and performance improvement.",
    },
    {
      company: "PWSDATA Platform",
      href: "https://pwsdata.vn/",
      badges: [],
      location: "Ho Chi Minh City, Vietnam",
      title: "Backend Developer (Support)",
      logoUrl: "/pws.webp",
      start: "2024",
      end: "Present",
      description:
        "Contributed to the development of a real-world web development service platform using PHP (Laravel). Developed and maintained backend functionalities, including CRUD operations for products, users, and orders. Built and maintained RESTful APIs to support frontend-backend communication. Worked with MySQL for database design, data management, and query optimization. Collaborated with a five-member team using Git to develop, test, and deploy new features. Assisted in debugging, improving system performance, and maintaining the production website.",
    },
  ],
  education: [
    {
      school: "Posts and Telecommunications Institute of Technology (PTIT)",
      href: "https://ptithcm.edu.vn/",
      degree: "Major in Software Engineering",
      logoUrl: "/ptitu.png",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "TravelViet - Travel Booking Platform",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed a travel booking platform using Laravel following the MVC architecture. Designed and developed RESTful APIs for tours, hotels, restaurants, bookings, and user management. Built an admin dashboard for managing tours, destinations, bookings, restaurants, hotels, and users. Implemented authentication, authorization, CRUD operations, and role-based access control. Integrated Cloudinary for image management and Docker for local development and deployment. Worked with MySQL to design and optimize relational databases.",
      technologies: [
        "Laravel",
        "MVC",
        "REST API",
        "MySQL",
        "Docker",
        "Cloudinary",
      ],
      links: [
        {
          type: "Github",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "../travelviet.png",
    },
    {
      title: "Apble Shop (E-commerce Web Application)",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed admin features for managing products, categories, orders, and users. Implemented business logic, CRUD operations, and MySQL database interactions using Laravel. Built dynamic server-rendered interfaces using Laravel Blade and passed data from controllers to views. Followed MVC architecture and OOP principles throughout development. Achieved an academic score of 9.0/10.",
      technologies: [
        "Laravel",
        "Blade",
        "PHP",
        "MySQL",
        "OOP",
        "CRUD",
      ],
      links: [
        {
          type: "Github",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "../appleshop.png",
    },
  ],
  hackathons: [],
} as const;
