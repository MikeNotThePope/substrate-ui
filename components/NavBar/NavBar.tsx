"use client";

import React, { useState } from "react";
import { AlignJustify, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu } from "@/components/ui/Menu";
import { Drawer } from "@/components/ui/Drawer";
import { Avatar } from "@/components/ui/Avatar";

// ─── Types ───

export interface NavLink {
  label: string;
  href: string;
}

export interface NavMenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface NavBrand {
  name: string;
  logo?: string;
  href?: string;
}

export type NavAuth =
  | {
      state: "signed-out";
      href: string;
      label?: string;
    }
  | {
      state: "signed-in";
      user: {
        name: string;
        avatar?: string;
      };
      menuItems: NavMenuItem[];
    };

export interface NavBarProps {
  brand: NavBrand;
  links?: NavLink[];
  auth: NavAuth;
  /** Element used for navigation links. Defaults to `"a"`. Pass `Link` from `next/link` (or your router's equivalent) for client-side transitions. */
  linkComponent?: React.ElementType;
  className?: string;
}

// ─── Component ───

export function NavBar({ brand, links = [], auth, linkComponent: LinkComp = "a", className }: NavBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 w-full border-b-2 bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ─── Brand ─── */}
          <LinkComp
            href={brand.href ?? "/"}
            className="shrink-0 font-head text-2xl text-foreground"
          >
            {brand.name}
          </LinkComp>

          {/* ─── Desktop Links (hidden below lg) ─── */}
          {links.length > 0 && (
            <div className="hidden lg:flex items-center gap-6">
              {links.map((link) => (
                <LinkComp
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm hover:underline decoration-primary underline-offset-4 transition-all"
                >
                  {link.label}
                </LinkComp>
              ))}
            </div>
          )}

          {/* ─── Desktop Auth (hidden below lg) ─── */}
          <div className="hidden lg:flex items-center gap-3">
            {auth.state === "signed-out" ? (
              <SignedOutActions auth={auth} linkComponent={LinkComp} />
            ) : (
              <UserMenu auth={auth} linkComponent={LinkComp} />
            )}
          </div>

          {/* ─── Mobile: minimal actions + hamburger (visible below lg) ─── */}
          <div className="flex lg:hidden items-center gap-3">
            {/* On tablet, show auth CTA inline */}
            {auth.state === "signed-out" && (
              <div className="hidden sm:flex items-center gap-2">
                <SignedOutActions auth={auth} linkComponent={LinkComp} />
              </div>
            )}

            <Button
              size="icon"
              variant="outline"
              className="p-2 shadow-sm"
              onClick={() => setDrawerOpen(true)}
            >
              <AlignJustify className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* ─── Mobile Drawer ─── */}
      <Drawer
        direction="right"
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      >
        <Drawer.Content>
          <Drawer.Header className="flex-row items-center justify-between">
            <Drawer.Title>{brand.name}</Drawer.Title>
            <Drawer.Close asChild>
              <Button size="icon" variant="ghost" className="p-1">
                <X className="h-5 w-5" />
              </Button>
            </Drawer.Close>
          </Drawer.Header>

          <div className="flex flex-col gap-1 px-4">
            {links.map((link) => (
              <LinkComp
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="font-sans text-base py-2 px-2 hover:bg-accent transition-colors"
              >
                {link.label}
              </LinkComp>
            ))}
          </div>

          <Drawer.Footer>
            {auth.state === "signed-out" ? (
              <Button asChild>
                <LinkComp href={auth.href}>
                  {auth.label ?? "Get Started"}
                </LinkComp>
              </Button>
            ) : (
              <div className="flex flex-col gap-1 border-t-2 pt-4">
                <div className="flex items-center gap-3 px-2 pb-3">
                  <Avatar className="h-8 w-8">
                    {auth.user.avatar ? (
                      <Avatar.Image src={auth.user.avatar} alt={auth.user.name} />
                    ) : (
                      <Avatar.Fallback>
                        {auth.user.name.charAt(0).toUpperCase()}
                      </Avatar.Fallback>
                    )}
                  </Avatar>
                  <span className="font-head text-sm">{auth.user.name}</span>
                </div>
                {auth.menuItems.map((item) =>
                  item.href ? (
                    <LinkComp
                      key={item.label}
                      href={item.href}
                      onClick={() => setDrawerOpen(false)}
                      className="font-sans text-sm py-2 px-2 hover:bg-accent transition-colors"
                    >
                      {item.label}
                    </LinkComp>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => {
                        item.onClick?.();
                        setDrawerOpen(false);
                      }}
                      className="font-sans text-sm py-2 px-2 text-left hover:bg-accent transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            )}
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </nav>
  );
}

// ─── Sub-components ───

function SignedOutActions({
  auth,
  linkComponent: LinkComp = "a",
}: {
  auth: Extract<NavAuth, { state: "signed-out" }>;
  linkComponent?: React.ElementType;
}) {
  return (
    <Button asChild size="sm">
      <LinkComp href={auth.href}>{auth.label ?? "Get Started"}</LinkComp>
    </Button>
  );
}

function UserMenu({
  auth,
  linkComponent: LinkComp = "a",
}: {
  auth: Extract<NavAuth, { state: "signed-in" }>;
  linkComponent?: React.ElementType;
}) {
  return (
    <Menu>
      <Menu.Trigger asChild>
        <button className="flex items-center gap-2 cursor-pointer outline-hidden">
          <Avatar className="h-8 w-8">
            {auth.user.avatar ? (
              <Avatar.Image src={auth.user.avatar} alt={auth.user.name} />
            ) : (
              <Avatar.Fallback>
                {auth.user.name.charAt(0).toUpperCase()}
              </Avatar.Fallback>
            )}
          </Avatar>
          <ChevronDown className="h-3 w-3" />
        </button>
      </Menu.Trigger>
      <Menu.Content align="end" className="min-w-40">
        {auth.menuItems.map((item) =>
          item.href ? (
            <Menu.Item key={item.label} asChild>
              <LinkComp href={item.href}>{item.label}</LinkComp>
            </Menu.Item>
          ) : (
            <Menu.Item key={item.label} onSelect={() => item.onClick?.()}>
              {item.label}
            </Menu.Item>
          ),
        )}
      </Menu.Content>
    </Menu>
  );
}
