import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface ChangelogEntry {
  title: string
  description: string
  date: string
  version: string
  tag: string
  tags: string[]
  content: string
  changes: string[]
  features: string[]
  fixes: string[]
  links: { title: string; href: string }[]
}

const CHANGELOG_DIR = path.join(process.cwd(), "src", "changelog", "content")

/**
 * Parse a bullet list from markdown text (lines starting with - or *)
 */
function parseBulletList(text: string): string[] {
  const items: string[] = []
  const lines = text.split("\n")
  for (const line of lines) {
    const trimmed = line.trim()
    // Match markdown list items: - text, * text, or - **text**
    const match = trimmed.match(/^[-*]\s+(?:\*\*(.+?)\*\*\s*[:-]?\s*)?(.+)$/)
    if (match) {
      const bold = match[1] || ""
      const rest = match[2] || ""
      const full = bold ? `${bold}: ${rest}` : rest
      items.push(full.trim())
    }
  }
  return items
}

/**
 * Extract text content between two markers, stripping HTML/MDX tags
 */
function extractSection(
  content: string,
  startMarker: string,
  endMarker: string
): string {
  const start = content.indexOf(startMarker)
  if (start === -1) return ""
  const fromStart = content.slice(start + startMarker.length)
  const end = fromStart.indexOf(endMarker)
  if (end === -1) return fromStart
  return fromStart.slice(0, end)
}

/**
 * Read all MDX files from the changelog directory and return structured data
 */
export function getAllChangelogs(): ChangelogEntry[] {
  if (!fs.existsSync(CHANGELOG_DIR)) {
    return []
  }

  const files = fs
    .readdirSync(CHANGELOG_DIR)
    .filter((f) => f.endsWith(".mdx"))

  const entries: ChangelogEntry[] = files.map((file) => {
    const source = fs.readFileSync(path.join(CHANGELOG_DIR, file), "utf-8")
    const { data, content } = matter(source)

    // Split content into: before-accordion (changes) and accordion sections
    const accordionStart = content.indexOf("<Accordion")
    const beforeAccordion =
      accordionStart === -1 ? content : content.slice(0, accordionStart)
    const accordionContent =
      accordionStart === -1 ? "" : content.slice(accordionStart)

    // Parse changes from bullet points before Accordion
    const changes = parseBulletList(beforeAccordion)

    // Parse Features section
    const featuresSection = extractSection(
      accordionContent,
      '<AccordionTrigger>Features</AccordionTrigger>',
      '</AccordionContent>'
    )
    const featuresRaw = extractSection(
      featuresSection,
      '<AccordionContent',
      '</AccordionContent>'
    )
    const features = featuresRaw
      ? extractSection(featuresRaw, ">", "</AccordionContent>")
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.startsWith("<li>") || l.startsWith("-"))
        .map((l) => l.replace(/<\/?li>/g, "").replace(/<\/?strong>/g, "").replace(/^-\s*/, "").trim())
        .filter(Boolean)
      : []

    // Parse Bug Fixes section
    const fixesSection = extractSection(
      accordionContent,
      '<AccordionTrigger>Bug Fixes</AccordionTrigger>',
      '</AccordionContent>'
    )
    const fixesRaw = extractSection(
      fixesSection,
      '<AccordionContent',
      '</AccordionContent>'
    )
    const fixes = fixesRaw
      ? extractSection(fixesRaw, ">", "</AccordionContent>")
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.startsWith("<li>") || l.startsWith("-"))
        .map((l) => l.replace(/<\/?li>/g, "").replace(/<\/?strong>/g, "").replace(/^-\s*/, "").trim())
        .filter(Boolean)
      : []

    // Tags array -> use as tags, first tag becomes the primary tag
    const tags: string[] = data.tags ?? []

    return {
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      version: data.version ?? "",
      tag: tags.length > 0 ? tags[0].toLowerCase() : "update",
      tags,
      content: beforeAccordion.trim(),
      changes,
      features,
      fixes,
      links: [],
    }
  })

  // Sort by date descending (newest first)
  entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return entries
}
