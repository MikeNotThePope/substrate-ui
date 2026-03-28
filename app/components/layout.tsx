import NextLink from "next/link";
import { SidebarLink } from "./SidebarLink";

interface SidebarGroup {
  title: string;
  items: { name: string; href: string }[];
}

const sidebarGroups: SidebarGroup[] = [
  {
    title: "Primitives",
    items: [
      { name: "Avatar", href: "/components/avatar" },
      { name: "Badge", href: "/components/badge" },
      { name: "Button", href: "/components/button" },
      { name: "Card", href: "/components/card" },
      { name: "IconButton", href: "/components/icon-button" },
      { name: "Link", href: "/components/link" },
      { name: "Loader", href: "/components/loader" },
      { name: "Text", href: "/components/text" },
      { name: "Menu", href: "/components/menu" },
      { name: "Tabs", href: "/components/tabs" },
    ],
  },
  {
    title: "Form",
    items: [
      { name: "Alert", href: "/components/alert" },
      { name: "Input", href: "/components/input" },
      { name: "Textarea", href: "/components/textarea" },
      { name: "Checkbox", href: "/components/checkbox" },
      { name: "RadioGroup", href: "/components/radio-group" },
      { name: "Select", href: "/components/select" },
      { name: "Switch", href: "/components/switch" },
      { name: "Slider", href: "/components/slider" },
    ],
  },
  {
    title: "Layout",
    items: [
      { name: "CardGrid", href: "/components/card-grid" },
      { name: "Container", href: "/components/container" },
      { name: "Dialog", href: "/components/dialog" },
      { name: "Divider", href: "/components/divider" },
      { name: "Drawer", href: "/components/drawer" },
      { name: "Flex", href: "/components/flex" },
      { name: "FormLayout", href: "/components/form-layout" },
      { name: "Grid", href: "/components/grid" },
      { name: "NavBar", href: "/components/navbar" },
      { name: "SectionNav", href: "/components/section-nav" },
      { name: "SimplePage", href: "/components/page" },
      { name: "Stack", href: "/components/stack" },
      { name: "TwoColumnLayout", href: "/components/two-column-layout" },
    ],
  },
  {
    title: "Landing",
    items: [
      { name: "AnnouncementBanner", href: "/components/announcement-banner" },
      { name: "CTABanner", href: "/components/cta-banner" },
      { name: "FAQ", href: "/components/faq" },
      { name: "FeatureSection", href: "/components/feature-section" },
      { name: "Footer", href: "/components/footer" },
      { name: "Hero", href: "/components/hero" },
      { name: "LogoCloud", href: "/components/logo-cloud" },
      { name: "NewsletterSignup", href: "/components/newsletter-signup" },
      { name: "PricingTable", href: "/components/pricing-table" },
      { name: "Section", href: "/components/section" },
      { name: "StatsBar", href: "/components/stats-bar" },
      { name: "Testimonial", href: "/components/testimonial" },
    ],
  },
];

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar — hidden on mobile, visible on md+ */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:shrink-0 border-r-2 border-border bg-background overflow-y-auto sticky top-0 h-screen">
        <div className="px-4 py-4 border-b-2 border-border">
          <NextLink
            href="/"
            className="font-head text-lg hover:text-primary transition-colors"
          >
            Substrate UI
          </NextLink>
        </div>

        {/* Design Tokens link */}
        <div className="px-3 py-3 border-b-2 border-border">
          <SidebarLink href="/tokens">Design Tokens</SidebarLink>
          <SidebarLink href="/design-principles">Design Principles</SidebarLink>
        </div>

        {/* Component groups */}
        <nav className="flex-1 overflow-y-auto py-3">
          {sidebarGroups.map((group) => (
            <div key={group.title} className="mb-4">
              <div className="px-4 py-1 font-head text-xs tracking-widest text-muted-foreground uppercase">
                {group.title}
              </div>
              <div className="mt-1">
                {group.items.map((item) => (
                  <SidebarLink key={item.href} href={item.href}>
                    {item.name}
                  </SidebarLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
