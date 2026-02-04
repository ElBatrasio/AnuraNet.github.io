"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { NavigationLink } from "@/types";

// Get the base path from import.meta.env
const base = import.meta.env.BASE_URL;

export function NavItem({ link }: { link: NavigationLink }) {
  if (link.pages == null) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <a href={base + link.path.replace(/^\//, '')}>{link.label}</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-4 w-[200px]">
          <li>
            {Object.values(link.pages).map((page) => (
              <NavigationMenuLink asChild key={page.path}>
                <a href={base + page.path.replace(/^\//, '')}>{page.label}</a>
              </NavigationMenuLink>
            ))}
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}