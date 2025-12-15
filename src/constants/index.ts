import { Github, Linkedin, Instagram, Mail, Twitter } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/ilham-saleh",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ilham-saleh-430289218/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ilham2saleh@gmail.com",
    label: "Email",
  },
  {
    icon: Twitter,
    href: "https://x.com",
    label: "Twitter",
  },
] as const;

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTIONS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
] as const;

export const EMAIL = "ilham2saleh@gmail.com";

export const MOBILE_BREAKPOINT = 768;
