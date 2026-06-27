"use client"

import { useEffect, useRef } from "react"

interface CodeBlockWrapperProps {
  html: string
}

export function CodeBlockWrapper({ html }: CodeBlockWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const figures = ref.current.querySelectorAll<HTMLElement>("figure.shiki")
    figures.forEach((figure) => {
      // Skip if button already exists
      if (figure.querySelector('[data-copy-btn]')) return

      // Create copy button container
      const btnContainer = document.createElement("div")
      btnContainer.className =
        "empty:hidden absolute top-1 right-1 z-2 bg-fd-card rounded-bl-lg border-l border-b text-fd-muted-foreground"

      const btn = document.createElement("button")
      btn.setAttribute("data-copy-btn", "")
      btn.className =
        "inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-3.5"
      btn.setAttribute("aria-label", "Copy Text")
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`

      btn.addEventListener("click", async () => {
        const code = figure.querySelector("code")
        if (!code) return
        try {
          await navigator.clipboard.writeText(code.textContent ?? "")
          btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><path d="M20 6 9 17l-5-5"></path></svg>`
          setTimeout(() => {
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`
          }, 2000)
        } catch {
          // fallback
        }
      })

      btnContainer.appendChild(btn)
      figure.appendChild(btnContainer)
    })
  }, [html])

  return (
    <div
      ref={ref}
      className="changelog-content prose prose-sm dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
