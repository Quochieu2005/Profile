import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Lanyard from "./components/lanyard/Lanyard";
import TiltedCard from './components/TiltedCard/TiltedCard';
import { X } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { SpinningText } from "@/components/magicui/spinning-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Script from "next/script";
import Folder from './components/Folder/Folder';
import CurvedLoop from "@/components/magicui/CurvedLoop";
import { Highlighter } from "@/components/magicui/highlighter";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const randomSong = DATA.randomSong[Math.floor(Math.random() * DATA.randomSong.length)];

  return (

    <div className="relative min-h-screen">
      <main className="flex flex-col min-h-[100dvh] space-y-10 z-0 -mt-20 -px-8">
        
        <div className="fixed inset-0 z-0 hidden lg:block overflow-hidden pointer-events-none">
          <Lanyard />
          <CurvedLoop 
            marqueeText="Phan ✦ Duy ✦ Khai ✦ React ✦ DEV ✦"
            speed={2}
            curveAmount={500}
            direction="left"
            interactive={true}
            className="custom-text-style text-dark"
          />
        </div>
        <div id="hero" className="w-full max-w-7xl mx-auto backdrop-blur bg-[rgba(255,255,255,0.04)] rounded-xl p-4 my-1">
          <div className="flex space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="mx-auto w-full max-w-4xl space-y-8">
            <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-2">
              <div className="flex-col flex flex-1 space-y-1">
                <SparklesText>
                  <Highlighter action="underline" color="#FF9800">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  /></Highlighter>
                </SparklesText>

                <BlurFadeText
                  className="text-base sm:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
                <BlurFadeText
                  className="text-base sm:text-xl text-muted-foreground dark:text-muted-foreground/80"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.location}
                />
              </div>

              <BlurFade delay={BLUR_FADE_DELAY}>
                {/* Wrapper để avatar và text nằm đúng */}
                <div className="relative w-40 h-40 mx-auto -mb-9">
                  {/* Spinning text */}
                  <SpinningText
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontFamily: "monospace",
                      animation: "spin 10s linear infinite",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Phan Duy Khai • 06/09/2005 • Resume •
                  </SpinningText>

                  {/* Avatar */}
                  <Avatar className="size-28 border-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                  
                </div>
              </BlurFade>

            </div>
          </div>
        </div>
        <div id="about" className="backdrop-blur bg-[rgba(255,255,255,0.04)] rounded-xl p-4 my-1">
          <div className="flex space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {DATA.summary}
              </Markdown>
              <ShinyButton>Xem CV</ShinyButton>
          </BlurFade>
        </div>
        <div id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${"end" in work ? work.end : "Present"}`}
                  description={work.description}
                />
                {/* chữ nhỏ in nghiên  */}
                  <p className="text-xs text-muted-foreground right-6">Click to see details</p>

              </BlurFade>
            ))}
          </div>
        </div>
        <div id="education">
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
                  key={education.school}
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
        </div>
        <div id="skills" className="backdrop-blur bg-[rgba(255,255,255,0.04)] rounded-xl p-4 my-1">
          <div className="flex space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="fixed inset-0 z-0 lg:block">
               {randomSong && (
                <TiltedCard
                  key={randomSong.id}
                  imageSrc={randomSong.image}
                  altText={randomSong.title}
                  captionText={randomSong.caption}
                  containerHeight="250px"
                  containerWidth="900px"
                  imageHeight="150px"
                  imageWidth="150px"
                  rotateAmplitude={20}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text rounded-full bg-white/30 px-2 py-0.5 text-black backdrop-blur- mt-6 ml-9">
                      {randomSong.title}
                    </p>
                  }
                  audioSrc={randomSong.src}
                />
              )}

            </div>
            {Object.entries(DATA.skills).map(([group, skills], idx) => (
              <div key={group}>
                <BlurFade delay={BLUR_FADE_DELAY * 9.5 + idx * 0.3}>
                  <h3 className="text-lg font-semibold mt-4 mb-2 capitalize">
                    {group.replace(/([a-z])([A-Z])/g, '$1 $2')} {/* Optional: format camelCase */}
                  </h3>
                </BlurFade>
                <div className="flex flex-wrap gap-2 max-w-[800px]">
                  {skills.map((skill, id) => (
                    <BlurFade key={skill.icon} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                        alt={skill.name}
                        title={skill.name}
                        className="w-10 h-10 tooltip"
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        <div id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">

              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                
                  <ProjectCard
                    href={project.href}
                    key={project.title}
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
        </div>
        <div id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 backdrop-blur bg-[rgba(255,255,255,0.04)] rounded-xl p-4 my-1">
                  <div className="flex space-x-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I attended{" "}
                    {DATA.hackathons.length}+ hackathons. People from around the
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
        </div>
        <VelocityScroll>Minh Chi Hoc Hoi Thoi</VelocityScroll>
        <div id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl text-black dark:text-black">
                  Let&apos;s 
                    <AuroraText>Connect</AuroraText>

                </h2>
                <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                  Get <AuroraText>In Touch</AuroraText>
                </h1>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4" style={{ height: '200px', position: 'relative' }}>
                  <Folder
                    size={2}
                    color="#ffd500"
                    className="custom-folder"
                    items={[
                      // Telegram
                      <a
                        key="telegram"
                        href="https://t.me/khaimmo2k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center w-full h-full text-center text-sm font-medium text-black"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                          alt="Telegram"
                          className="w-8 h-8 mb-1"
                        />
                      </a>,

                      // Discord
                      <a
                        key="discord"
                        href="https://discord.com/users/985231189449269258"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center w-full h-full text-center text-sm font-medium text-black"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png"
                          alt="Discord"
                          className="w-8 h-8 mb-1"
                        />
                      </a>,

                      // GitHub
                      <a
                        key="github"
                        href="https://github.com/khaicybers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center w-full h-full text-center text-sm font-medium text-black"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                          alt="GitHub"
                          className="w-8 h-8 mb-1"
                        />
                      </a>,
                      
                    ]}
                  />
                  <Folder
                    size={2}
                    color="#00d8ff"
                    className="custom-folder"
                    items={[
                      // Instagram
                      <a key="instagram" href="https://www.instagram.com/pd_khainee" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-full h-full p-2" />
                      </a>,
                      
                      // Zalo
                      <a key="zalo" href="https://zalo.me/0347959824" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-full h-full p-2" />
                      </a>,
                      // Facebook
                      <a key="facebook" href="https://www.facebook.com/Dykhai.coi.69" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-full h-full p-2" />
                      </a>,
                      
                      
                    ]}
                  />
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </main>
      <Script
        id="gtranslate-config" // Add a unique id
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.gtranslateSettings = {
              "default_language": "en",
              "detect_browser_language": true,
              "languages": ["vi", "en"],
              "wrapper_selector": ".gtranslate_wrapper"
            };
          `,
        }}
      />
      <Script
        src="https://cdn.gtranslate.net/widgets/latest/flags.js"
        strategy="lazyOnload"
        defer
      />
    </div>

  );
}
