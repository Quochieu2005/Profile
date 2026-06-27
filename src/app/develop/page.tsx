import { ThemeToggle } from "@/components/theme-toggle"
import { getAllChangelogs } from "@/lib/changelog"
import { formatDate } from "@/lib/utils"
import { ChangelogContent } from "@/components/changelog-content"
import { ExternalLink, GitCommit, PackagePlus, Sparkles, Zap, Brain, Eye, Cpu } from "lucide-react"

const tagStyles: Record<string, string> = {
  release: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  update: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  beta: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  ai: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  performance: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  reasoning: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  "multi-modal": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  ui: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  ux: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
}

const tagIcons: Record<string, React.ReactNode> = {
  ai: <Sparkles className="size-3" />,
  performance: <Zap className="size-3" />,
  reasoning: <Brain className="size-3" />,
  "multi-modal": <Eye className="size-3" />,
}

function TagBadge({ tag }: { tag: string }) {
  const style = tagStyles[tag.toLowerCase()] ?? "bg-muted text-muted-foreground border-border"
  const icon = tagIcons[tag.toLowerCase()] ?? null
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-medium rounded-full border ${style}`}>
      {icon}
      {tag}
    </span>
  )
}

export default function DevelopPage() {
  const entries = getAllChangelogs()

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto relative">
          <div className="p-3 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Developer Duy Khải</h1>
              <small className="text-muted-foreground text-xs italic">Môi trường Develop của Duy Khải, Version {process.env.NEXT_PUBLIC_APP_VERSION}</small>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-20">
        <div className="relative">
          {entries.map((entry) => {
            const formattedDate = formatDate(entry.date)

            return (
              <div key={entry.title} className="relative">
                <div className="flex flex-col md:flex-row gap-y-6">
                  {/* Left column - Date & Version */}
                  <div className="md:w-56 flex-shrink-0">
                    <div className="md:sticky md:top-8 pb-10">
                      <time className="text-sm font-medium text-muted-foreground block mb-3">
                        {formattedDate}
                      </time>

                      <div className="inline-flex relative z-10 items-center justify-center w-10 h-10 text-foreground border border-border rounded-lg text-sm font-mono font-bold">
                        {entry.version.replace("v", "")}
                      </div>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1 md:pl-8 relative pb-10">
                    <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border" />
                    <div className="hidden md:block absolute top-1 left-[-5px] size-3 bg-primary rounded-full z-10 ring-2 ring-background" />

                    <div className="space-y-5 relative z-10">
                      {/* Title + Tags */}
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-balance">
                            {entry.title}
                          </h2>
                          <div className="flex flex-nowrap gap-1.5">
                            {entry.tags.map((t) => (
                              <TagBadge key={t} tag={t} />
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {entry.description}
                        </p>
                      </div>

                      {/* MDX Content (bullet points + code blocks + images) */}
                      {entry.content && (
                        <ChangelogContent content={entry.content} />
                      )}

                      {/* Features */}
                      {entry.features.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                            <PackagePlus className="size-4 text-muted-foreground" />
                            Features
                          </h4>
                          <ul className="space-y-1 ml-1">
                            {entry.features.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                                <span className="text-blue-500 mt-1.5 size-1.5 rounded-full bg-blue-500 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Fixes */}
                      {entry.fixes.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                            <GitCommit className="size-4 text-muted-foreground" />
                            Bug Fixes
                          </h4>
                          <ul className="space-y-1 ml-1">
                            {entry.fixes.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                                <span className="text-red-500 mt-1.5 size-1.5 rounded-full bg-red-500 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Links */}
                      {entry.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {entry.links.map((link) => (
                            <a
                              key={link.title}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md px-2.5 py-1 hover:bg-muted/50"
                            >
                              <ExternalLink className="size-3" />
                              {link.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}