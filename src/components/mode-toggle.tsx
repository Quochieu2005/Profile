"use client";

import { AnimatedThemeToggler } from "@/components/animated-theme-toggler";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      theme={theme as "light" | "dark" | undefined}
      onThemeChange={(t) => setTheme(t)}
      className="px-2"
      variant="circle"
    />
  );
}
