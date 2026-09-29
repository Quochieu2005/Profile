import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WorkExperienceCard } from "@/components/Work";
import { DATA } from "@/data/resume";
import Link from "next/link";
import TextType from "@/components/magicui/text-type";

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
  );
}

const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      { name: "PHP", icon: "php" },
      { name: "JavaScript", icon: "js" },
      { name: "SQL", icon: "mysql" },
      { name: "Node.js", icon: "nodejs" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: "laravel" },
      { name: "REST API", icon: "api" },
      { name: "MVC", icon: "php" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQL Server", icon: "microsoftsqlserver" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 -mt-20 pt-10 md:px-0 select-none z-0">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <TextType
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                text={`Hi, I'm ${DATA.name.split(" ").slice(-2).join(" ") || DATA.name} 👋`}
                pauseDuration={20000}
              />
              <p className="max-w-[600px] md:text-xl select-none">
                Software Engineering student at PTIT focused on backend development,
                REST APIs, databases, and deployment. I enjoy turning business needs
                into reliable web solutions.
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
            I am a backend-focused software engineering student with practical experience
            building web applications and APIs using PHP, Laravel, JavaScript, and SQL.
            My work centers on creating maintainable backend logic, designing database
            structures, and supporting reliable deployment and system integrations for real-world products.
          </p>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold select-none">Work Experience</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6} className="select-none"> 
            {DATA.work.map((work) => {
              const workHighlights = work.description
                .split(/(?<=[.!?])\s+/)
                .map((item) => item.trim())
                .filter(Boolean);

              return (
                <WorkExperienceCard
                  key={`${work.company}-${work.title}`}
                  company={work.company}
                  title={work.title}
                  companyLogo={work.logoUrl}
                  status={work.end === "Present" ? "Current" : "Previous"}
                  statusColor={
                    work.end === "Present"
                      ? "bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20"
                      : "bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20"
                  }
                  dateRange={`${work.start} - ${work.end}`}
                  positions={[
                    {
                      title: work.title,
                      dateRange: `${work.start} - ${work.end}`,
                      highlights: workHighlights,
                    },
                  ]}
                  skills={
                    work.title.toLowerCase().includes("intern")
                      ? ["PHP", "Laravel", "REST API", "MySQL", "S3 Storage", "Git", "Docker", "Postman"]
                      : ["PHP", "Laravel", "REST API", "MVC", "MySQL", "Git", "CRUD", "Database Design"]
                  }
                  link={work.href}
                />
              );
            })}
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
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
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-2 mt-4 text-lg font-bold">{group.title}</h3>
                  <div className="flex max-w-[800px] flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <SkillIcon key={skill.icon} {...skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  Projects
                </div>
                <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl">
                  Selected work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A few backend-driven projects focused on APIs, database design, and full
                  web application development.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
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

      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to connect or discuss opportunities? Feel free to reach out via{" "}
                <Link href={DATA.contact.social.email.url} className="text-blue-500 hover:underline">
                  email
                </Link>{" "}
                or through my GitHub profile.
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <a
                  href={DATA.contact.social.GitHub.url}
                  className="rounded-md border px-3 py-1 text-sm transition-colors hover:bg-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={DATA.contact.social.email.url}
                  className="rounded-md border px-3 py-1 text-sm transition-colors hover:bg-accent"
                >
                  Email
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
