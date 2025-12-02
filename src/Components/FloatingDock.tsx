"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,  
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function FloatingDockDemo() {

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/?preload=false",
    },

    {
      title: "About",
      icon: (
        <IconUser  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "about",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://github.com/RadhikaSuryawanshi",
    },
    {
      title: "Theme",
      icon: (
        <AnimatedThemeToggler />
      ),
      href: "#",
    },

  ];
  return (
    <div>
      <FloatingDock
        items={links}
      />
    </div>
  );
}
