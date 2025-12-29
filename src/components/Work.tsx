"use client"

import { ChevronRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import BriefcaseIcon from "@/components/icon/briefcase-icon"
import Check from "@/components/icon/check"

interface Position {
    title: string
  dateRange: string
  description?: string[]
  highlights?: string[]
}

interface WorkExperienceCardProps {
  title: string
  company: string
  companyLogo: string
  status?: string
  statusColor?: string
  dateRange: string
  positions: Position[]
  skills: string[]
  link: string
}

export function WorkExperienceCard({
  title,
  company,
  companyLogo,
  status,
  statusColor,
  dateRange,
  positions,
  skills,
  link,
}: WorkExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="block cursor-pointer group/card rounded-lg text-card-foreground transition-colors duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex gap-4 p-1">
        {/* Company Logo */}
        <div className="flex-none">
          <div className="relative flex shrink-0 overflow-hidden rounded-full border size-12 bg-muted">
            <img
              className="aspect-square h-full w-full object-contain p-2"
              alt={company}
              src={companyLogo || "/placeholder.svg"}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 flex-wrap" >
              <BriefcaseIcon /><h3 className="font-semibold text-sm sm:text-base">{company}</h3>
              {status && (
                <div className="flex items-center gap-2">
                  <Badge className={`text-xs ${statusColor}`}>{status}</Badge>
                </div>
              )}
              <ChevronRight
                className={`size-4 ml-auto sm:ml-1 translate-x-0 transform opacity-70 transition-all duration-300 ease-out group-hover/card:translate-x-1 group-hover/card:opacity-100 ${isExpanded ? "rotate-90" : "rotate-0"}`}
              />
            </div>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">{dateRange}</div>
          </div>
        <div className="font-sans text-xs inline-flex items-center gap-1">{title}</div>

          {!isExpanded && <div className="text-xs text-muted-foreground mt-1 italic">Click to see details</div>}

          {/* Positions */}
            <div
                className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${isExpanded
                ? "opacity-100 max-h-[1000px] translate-y-0"
                : "opacity-0 max-h-0 -translate-y-2"}
            `}
            >
                <div className="space-y-4 mb-4 pt-3">
                    {positions.map((position, idx) => (
                    <div key={idx} className="border-l-2 border-muted pl-4">
                        <h4 className="font-semibold text-sm mb-1">{position.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{position.dateRange}</p>

                        <ul className="space-y-1 text-xs sm:text-sm text-foreground">
                        {(position.highlights ?? position.description)?.map((item, i) => (
                            <li key={i} className="flex gap-2">
                            <span className="text-primary flex-shrink-0"><Check /></span>
                            <span>{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </div>


          {/* Skills */}
          {isExpanded && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {/* Visit Link */}
          {isExpanded && (
            
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs inline-flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="size-3" />
              <span>Visit Company Site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
