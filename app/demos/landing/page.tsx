import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Hero,
  Section,
  Footer,
  PricingTable,
  FeatureSection,
  Testimonial,
  LogoCloud,
  CTABanner,
  FAQ,
  StatsBar,
  AnnouncementBanner,
  NewsletterSignup,
} from "@/components/landing";
import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Lock,
  Layers,
} from "lucide-react";

// ─── Data ───

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description:
      "Built on edge infrastructure for sub-50ms response times globally.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption and audit logging.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Real-time Analytics",
    description:
      "Live dashboards with custom metrics and automated reporting.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Scale",
    description:
      "Deploy to 30+ regions. Auto-scaling handles traffic spikes seamlessly.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Access Control",
    description:
      "Granular role-based permissions with SSO and SAML support.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "API First",
    description:
      "RESTful and GraphQL APIs with SDKs for every major language.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Free forever for small teams",
    features: [
      { text: "Up to 3 team members", included: true },
      { text: "5GB storage", included: true },
      { text: "Basic analytics", included: true },
      { text: "Community support", included: true },
      { text: "Custom domains", included: false },
      { text: "API access", included: false },
    ],
    cta: (
      <Button variant="outline" className="w-full" asChild>
        <Link href="/demos/sign-up">Get Started</Link>
      </Button>
    ),
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Everything you need to grow",
    highlighted: true,
    badge: <Badge size="sm">Popular</Badge>,
    features: [
      { text: "Up to 20 team members", included: true },
      { text: "100GB storage", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority support", included: true },
      { text: "Custom domains", included: true },
      { text: "API access", included: true },
    ],
    cta: (
      <Button className="w-full" asChild>
        <Link href="/demos/sign-up">Start Free Trial</Link>
      </Button>
    ),
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments",
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Unlimited storage", included: true },
      { text: "Custom analytics", included: true },
      { text: "Dedicated support", included: true },
      { text: "Custom domains", included: true },
      { text: "Full API access + webhooks", included: true },
    ],
    cta: (
      <Button variant="secondary" className="w-full" asChild>
        <Link href="/demos/sign-up">Contact Sales</Link>
      </Button>
    ),
  },
];

const testimonials = [
  {
    quote:
      "We switched from our legacy system and saw a 40% increase in team productivity within the first month.",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
  },
  {
    quote:
      "The API-first approach made integration a breeze. Our developers had it running in production within a day.",
    name: "Marcus Johnson",
    role: "Lead Engineer",
    company: "DataPipe",
  },
  {
    quote:
      "Finally, enterprise-grade tooling that doesn't feel like it was built in 2005. The UX is phenomenal.",
    name: "Lisa Park",
    role: "VP of Product",
    company: "ScaleUp",
  },
];

const faqItems = [
  {
    question: "How does the free trial work?",
    answer:
      "Start with a 14-day free trial of the Pro plan. No credit card required. At the end of your trial, choose the plan that fits your needs or continue with the free Starter plan.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include community support via our forums. Pro plans get priority email support with a 4-hour response SLA. Enterprise plans include a dedicated account manager and 24/7 phone support.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We're SOC 2 Type II certified, use AES-256 encryption at rest and TLS 1.3 in transit, and perform regular third-party penetration testing. Your data is stored in ISO 27001 certified data centers.",
  },
  {
    question: "Do you offer a self-hosted option?",
    answer:
      "Yes, our Enterprise plan includes a self-hosted deployment option with Docker and Kubernetes support. Our team will help you with the initial setup and migration.",
  },
];

const stats = [
  { value: "10K+", label: "Customers" },
  { value: "99.99%", label: "Uptime" },
  { value: "50ms", label: "Avg Response" },
  { value: "30+", label: "Regions" },
];

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

// ─── Page ───

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement */}
      <AnnouncementBanner>
        We just raised our Series A! <a href="#" className="font-head underline ml-1">Read more</a>
      </AnnouncementBanner>

      {/* Nav */}
      <nav className="sticky top-0 z-40 w-full border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <span className="font-head text-2xl">Acme</span>
            <div className="hidden lg:flex items-center gap-6">
              <a href="#features" className="font-sans text-sm hover:underline decoration-primary underline-offset-4">Features</a>
              <a href="#pricing" className="font-sans text-sm hover:underline decoration-primary underline-offset-4">Pricing</a>
              <a href="#testimonials" className="font-sans text-sm hover:underline decoration-primary underline-offset-4">Testimonials</a>
              <a href="#faq" className="font-sans text-sm hover:underline decoration-primary underline-offset-4">FAQ</a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/demos/sign-in">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/demos/sign-up">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <Hero
        badge={<Badge>Now in Public Beta</Badge>}
        title="Ship faster with tools that just work"
        subtitle="The modern platform for building, deploying, and scaling your applications. Stop wrestling with infrastructure and start shipping features."
        actions={
          <>
            <Button size="lg" asChild>
              <Link href="/demos/sign-up">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">See How It Works</Link>
            </Button>
          </>
        }
      />

      {/* Logo Cloud */}
      <Section background="muted">
        <p className="font-head text-sm uppercase text-center text-muted-foreground mb-8">
          Trusted by forward-thinking teams
        </p>
        <LogoCloud>
          {["TechFlow", "DataPipe", "ScaleUp", "Nexus", "Prism", "Vertex"].map(
            (name) => (
              <span
                key={name}
                className="font-head text-xl text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {name}
              </span>
            ),
          )}
        </LogoCloud>
      </Section>

      {/* Stats */}
      <StatsBar stats={stats} />

      {/* Features */}
      <Section
        id="features"
        title="Everything you need"
        subtitle="A complete toolkit to build, ship, and grow your product — without the infrastructure headaches."
      >
        <FeatureSection features={features} columns={3} />
      </Section>

      {/* Pricing */}
      <Section
        id="pricing"
        background="muted"
        title="Simple, transparent pricing"
        subtitle="No hidden fees. No surprise charges. Pick the plan that works for you."
      >
        <PricingTable tiers={pricingTiers} />
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        title="Loved by teams everywhere"
        subtitle="Don't take our word for it — hear from the people who use it every day."
      >
        <Testimonial testimonials={testimonials} columns={3} />
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to get started?"
        subtitle="Join 10,000+ teams already building with Acme. Free 14-day trial, no credit card required."
        actions={
          <>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/demos/sign-up">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-black" asChild>
              <Link href="#">Talk to Sales</Link>
            </Button>
          </>
        }
      />

      {/* FAQ */}
      <Section
        id="faq"
        title="Frequently asked questions"
        subtitle="Got questions? We've got answers."
      >
        <FAQ items={faqItems} />
      </Section>

      {/* Newsletter */}
      <Section background="muted">
        <NewsletterSignup
          title="Stay up to date"
          subtitle="Get product updates and engineering insights delivered to your inbox."
        />
      </Section>

      {/* Footer */}
      <Footer
        brand="Acme"
        tagline="The modern platform for building, deploying, and scaling your applications."
        groups={footerGroups}
        bottom={<span>&copy; 2026 Acme, Inc. All rights reserved.</span>}
      />
    </div>
  );
}
