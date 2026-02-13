import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "AnuraNET",
  description:
    "Collaborative international network accelerating AI for anuran acoustic monitoring.",
  href: "https://elbatrasio.github.io/AnuraNet.github.io",
  author: "AnuraNET Team",
  locale: "en-GB",
};

export const NAV_LINKS: NavigationLinks = {
  home: {
    path: "/",
    label: "Home",
  },
  about: {
    path: "/about",
    label: "About",
    pages: {
      mission: { path: "/about/mission", label: "Our Mission" },
      team: { path: "/about/team", label: "Our Team" },  
    },
  },
  // news: {
  //   path: "/news",
  //   label: "News",
  // },
  contact: {
    path: "/contact",
    label: "Get Involved",
    pages: {
      // members: { path: "/contact/membership", label: "Become a Member" },  // Commented out for now
      contact: { path: "/contact/contact", label: "Contact Us" },
    },
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:gbidarten@gmail.com",
  },
};
