"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

export function SidebarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={`block px-3 py-1.5 font-sans text-sm transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground font-medium border-l-4 border-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/40 border-l-4 border-transparent"
      }`}
    >
      {children}
    </NextLink>
  );
}
