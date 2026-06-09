import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import TextType from "@/components/magicui/text-type"
import { Highlighter } from "@/components/magicui/highlighter"
import { WorkExperienceCard } from "@/components/Work";
import Lanyard from '@/components/ui/Lanyard';
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AuroraText } from "@/components/magicui/aurora-text";
const BLUR_FADE_DELAY = 0.04;

function SkillIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="relative group">
      <img
        alt={name}
        width={48}
        height={48}
        loading="lazy"
        src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
        className="object-contain cursor-pointer transition-transform duration-300"
      />
      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-md bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-medium text-black whitespace-nowrap opacity-0 translate-y-1 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
        {name}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    
    <main className="flex flex-col min-h-[100dvh] space-y-10 z-0 -mt-20 -px-8 select-none">
      <Lanyard />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <TextType 
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                text={"Hi, I'm Khai 👋"}
                pauseDuration={20000}
                />
              <p
                className="max-w-[600px] md:text-xl select-none"
              >4th year majoring in Software Engineering at PTIT. I love building things and helping people. I like Cybersecurity and DevOps.
              </p>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade>
          <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed select-none">
            I started with Telegram Bots and {" "}<Highlighter action="circle" color="#ff0000ff" iterations={1}> Backend Development</Highlighter>{" "} and now specialize in <Highlighter action="underline" color="#FF9800">Full-Stack Development</Highlighter> and <Highlighter action="underline" color="#FF9800">DevOps</Highlighter>. Outside of coding, I sharpen my <Highlighter action="underline" color="#00eeffff">Cybersecurity</Highlighter> skills through <Highlighter action="underline" color="#f85ae3ff">TryHackMe CTFs</Highlighter> and share knowledge via YouTube tutorials. I reinforce these skills by operating a homelab with  <Highlighter action="box" color="#029effff">2+ enterprise servers</Highlighter>.
          </p>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold select-none">Work Experience</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6} className="select-none">
            {/* AI POWER */}
            <WorkExperienceCard
              company="AI Power Co., Ltd."
              title="Software Developer"
              companyLogo="https://aipower.vn/apple-touch-icon.png"
              status="Current"
              statusColor="bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20"
              dateRange="Apr 2026 - Present"
              positions={[
                {
                  title: "Software Developer",
                  dateRange: "Apr 2026 - Present",
                  highlights: [
                    "Build and maintain cross-platform mobile applications using Flutter, delivering consistent UX across iOS and Android.",
                    "Develop high-performance backend services and REST/gRPC APIs with Golang, handling concurrent workloads at scale.",
                    "Implement AI-powered features and automation pipelines using Python (FastAPI, LangChain).",
                    "Build interactive web applications with Next.js, React, and TypeScript, following modern component architecture and SSR patterns.",
                    "Collaborate across the full stack — from database schema design (PostgreSQL, Redis) to CI/CD pipeline configuration.",
                  ],
                },
              ]}
              skills={["Flutter", "Golang", "Python", "React", "TypeScript", "Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "gRPC"]}
            />
            {/* PWSDATA */}
            <WorkExperienceCard
              company="Power Web Services"
              title="[Founder & CEO] Leader Software Engineer"
              companyLogo="../pws.webp"
              status="Current"
              statusColor="bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20"
              dateRange="June 2025 - Present"
              positions={[
                {
                  title: "Software Engineer",
                  dateRange: "Jan 2024 - Present",
                  description: ["Team Management and Leadership",
                    "Backend and Frontend Development",
                    "Database Management",
                    "System Optimization",
                    "DevOps and Automation",
                    "Software Testing and Quality Assurance",
                    "Collaboration and Communication",
                  ],
                },
                {
                  title: "Founder",
                  dateRange: "June 2025 - Present",
                  highlights: [
                    "The system was built using Laravel and upgraded to a frontend using Nextjs, resulting in a smoother website with all the necessary software features found in businesses.",
                    "Design and implement a system that simplifies the product selection and self-service process for users when they register and make purchases.",
                    "Increase customer satisfaction by 65% ​​and reduce payment conflicts by 40%, boosting operational efficiency.",
                  ],
                },
              ]}
              skills={["Next.js", "React", "API", "Postman", "TailwindCSS", "Git", "Docker", "SQL"]}
              link="https://pwsdata.vn/"
            />
            {/* Freelance */}
              <WorkExperienceCard
              company="Freelance Projects"
              title="[Freelancer] Web Development & Automation"
              companyLogo="../logoiconlan.png"
              status="Current"
              statusColor="bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20"
              dateRange="Dec 2019 - Present"
              positions={[
                {
                  title: "Developer Freelance",
                  dateRange: "Dec 2019 - Sep 2020",
                  description: ["Software Botnet Development",
                    "Telegram Bot Development",
                    "Study and develop automation tools",
                    "Install windows briefly",
                    "Website Development",
                    
                  ],
                },
                {
                  title: "Freelance Premium",
                  dateRange: "Dec 2019 - Present",
                  description: ["Customer Support and Consultation",
                    "Sales and Marketing",
                    "Website Design",
                    "Software Development",
                    "Design and Development",
                    "Technical Software Support",
                    "Feedback Collection",
                    "...",],
                },
              ]}
              skills={["Sales", "Marketing", "Tools", "Support", "Linux", "Setup Server", "PHP", "JavaScript", "Nextjs", "React"]}
              link="zalo://conversation?phone=0347959824"
            />
            {/* VPS/hosting */}
            <WorkExperienceCard
              company="Vps Hosting CloudZone"
              title="Cloud Infrastructure Engineer"
              companyLogo="../logo-cloudzone-white.webp"
              status="Previous"
              statusColor="bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20"
              dateRange="Jan 2024 - Aug 2025"
              positions={[
                {
                  title: "Cloud Setup & Support Engineer",
                  dateRange: "Jan 2024 - May 2025",
                  description: [
                    "Provisioned and configured Linux VPS instances (Ubuntu/CentOS) for clients across various use cases",
                    "Set up and managed web hosting environments including Apache, Nginx, and control panels (cPanel, DirectAdmin)",
                    "Configured DNS records, SSL/TLS certificates, and domain routing for hosted services",
                    "Diagnosed and resolved server-side issues including performance bottlenecks, network timeouts, and service failures",
                    "Assisted clients with server hardening and basic firewall (UFW/iptables) configuration",
                  ],
                },
                {
                  title: "Automation Developer",
                  dateRange: "June 2025 - Aug 2025",
                  highlights: [
                    "Built Python automation pipelines to handle provisioning workflows, reducing manual setup time by over 60%.",
                    "Developed scripts for automated monitoring, alerting, and routine maintenance tasks across the server fleet.",
                    "Integrated internal tooling with the hosting platform API to streamline order fulfillment and resource allocation.",
                  ],
                },
              ]}
              skills={["Linux", "Nginx", "Apache", "cPanel", "SSL/TLS", "DNS", "Python", "Automation", "Server Hardening"]}
              link="https://cloudzone.vn/"
            />
          </BlurFade>

        </div>
      </section>
      <section id="certificates">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Certificates</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8 * 0.05}>
            <ResumeCard
              href="/assets/certificates/aws.pdf"
              logoUrl="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              altText="AWS Training & Certification"
              title="AWS Security Fundamentals"
              subtitle="AWS"
              period="6/2/2026"
            />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8 * 0.1}>
            <ResumeCard
              href="/assets/certificates/microsoft-office-specialist-2016-master.pdf"
              logoUrl="https://cdn.lduy.dev/certificates/logo/microsoft-logo.png"
              altText="Microsoft Office Specialist 2016 Master"
              title="Microsoft Office Specialist 2016 Master"
              subtitle="Microsoft"
              period="2020"
            />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>

            <h3 className="text-lg font-bold mt-4 mb-2">Programming Languages</h3>
            <div className="flex flex-row flex-wrap gap-2 max-w-[800px]">
              {[
                { name: "JavaScript", icon: "js" },
                { name: "TypeScript", icon: "ts" },
                { name: "Java", icon: "java" },
                { name: "Python", icon: "python" },
                { name: "Node.js", icon: "nodejs" },
                { name: "Go Lang", icon: "go" },
                { name: "Lua", icon: "lua" },
              ].map((skill) => <SkillIcon key={skill.icon} {...skill} />)}
            </div>

            <h3 className="text-lg font-bold mt-4 mb-2">Frontend</h3>
            <div className="flex flex-row flex-wrap gap-2 max-w-[800px]">
              {[
                { name: "HTML", icon: "html" },
                { name: "CSS", icon: "css" },
                { name: "Jquery", icon: "jquery" },
                { name: "Bootstrap", icon: "bootstrap" },
                { name: "React", icon: "react" },
                { name: "Next.js", icon: "nextjs" },
                { name: "Tailwind CSS", icon: "tailwindcss" },
                { name: "SCSS", icon: "scss" },
              ].map((skill) => <SkillIcon key={skill.icon} {...skill} />)}
            </div>

            <h3 className="text-lg font-bold mt-4 mb-2">
              {" "}<Highlighter action="circle" color="#ff0000ff" iterations={2}>Backend</Highlighter>
            </h3>
            <div className="flex flex-row flex-wrap gap-2 max-w-[800px]">
              {[
                { name: "Laravel", icon: "laravel" },
                { name: "FastAPI", icon: "fastapi" },
                { name: "Nest.js", icon: "nestjs" },
                { name: "Express.js", icon: "express" },
                { name: "Spring", icon: "spring" },
                { name: "MongoDB", icon: "mongodb" },
                { name: "MySQL", icon: "mysql" },
              ].map((skill) => <SkillIcon key={skill.icon} {...skill} />)}
            </div>

            <h3 className="text-lg font-bold mt-4 mb-2">DevOps</h3>
            <div className="flex flex-row flex-wrap gap-2 max-w-[800px]">
              {[
                { name: "Docker", icon: "docker" },
                { name: "Postman", icon: "postman" },
                { name: "GIT", icon: "git" },
                { name: "CloudFlare", icon: "cloudflare" },
                { name: "Github Actions", icon: "githubactions" },
                { name: "Linux", icon: "linux" },
              ].map((skill) => <SkillIcon key={skill.icon} {...skill} />)}
            </div>

            <h3 className="text-lg font-bold mt-4 mb-2">Other</h3>
            <div className="flex flex-row flex-wrap gap-2 max-w-[800px]">
              {[
                { name: "VS Code", icon: "vscode" },
                { name: "Wordpress", icon: "wordpress" },
                { name: "Github", icon: "github" },
                { name: "Kali Linux", icon: "kali" },
                { name: "Adobe Photoshop", icon: "photoshop" },
                { name: "IntelliJ IDEA", icon: "idea" },
              ].map((skill) => <SkillIcon key={skill.icon} {...skill} />)}
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center flex items-center justify-center">
                  Check out my <SparklesText className="font-bold ml-2 text-3xl sm:text-5xl"> latest work</SparklesText>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like <AuroraText>building things</AuroraText>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}<Highlighter action="box" color="#029effff">
                  {DATA.hackathons.length}+ hackathons.</Highlighter> People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me an{" "}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-500 hover:underline"
                >
                  email
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>

              <div className="mt-6 flex justify-center">
                <a
                  href="/assets/certificates/Phan-Duy-Khai-CV.pdf"
                  className="rounded-md border px-3 py-1 text-sm hover:bg-accent transition-colors"
                >
                  View Resume
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
