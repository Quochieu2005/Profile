import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"
import { CodeBlockWrapper } from "./code-block-wrapper"

interface ChangelogContentProps {
  content: string
}

export async function ChangelogContent({ content }: ChangelogContentProps) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "github-light",
        dark: "github-dark",
      },
      keepBackground: true,
      defaultLang: "typescript",
    })
    .use(rehypeStringify)
    .process(content)

  let html = String(result)

  // Transform <figure data-rehype-pretty-code-figure> to fumadocs-like structure
  const figureRegex = /<figure[^>]*data-rehype-pretty-code-figure[^>]*>([\s\S]*?)<\/figure>/g
  html = html.replace(figureRegex, (match, inner) => {
    // Extract <pre ...>...</pre> from inner
    const preMatch = inner.match(/(<pre[\s\S]*?<\/pre>)/)
    if (!preMatch) return match

    const preHtml = preMatch[1]
    // Extract style from pre
    const styleMatch = preHtml.match(/style="([^"]*)"/)
    const styleAttr = styleMatch ? ` style="${styleMatch[1]}"` : ""

    const wrappedPre = `<div class="bg-fd-secondary rounded-lg border text-[13px] overflow-auto max-h-[600px] fd-scroll-container" style="--padding-right:calc(var(--spacing) * 8)">${preHtml}</div>`

    return `<figure dir="ltr" class="my-4 rounded-xl bg-fd-card p-1 shiki relative border outline-none not-prose overflow-hidden text-sm shiki shiki-themes github-light github-dark"${styleAttr} tabindex="0">${wrappedPre}</figure>`
  })

  return <CodeBlockWrapper html={html} />
}
