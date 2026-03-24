"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Zap,
  ArrowRight,
  Globe,
  BarChart3,
  Bot,
  Workflow,
  Code2,
  Layers,
  Sparkles,
  Check,
  Mail,
  Linkedin,
  Github,
  MonitorSmartphone,
  Database,
  BrainCircuit,
  Activity,
  Target,
  Menu,
  X,
} from "lucide-react";

// ─── Calendly ─────────────────────────────────────────────────────────────────

const CALENDLY_URL = "https://calendly.com/zaperaco/30min";

function openCalendly() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: "linear-gradient(135deg, #df7afe 0%, #ff7ae9 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function ZaperaLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-lg"
        style={{ background: "linear-gradient(135deg, #6046e3, #df7afe)" }}
      >
        <Zap size={14} className="fill-white text-white" />
      </div>
      <span
        className="text-[17px] font-bold tracking-tight text-white"
        style={{ letterSpacing: "-0.03em" }}
      >
        zap<span style={{ color: "#df7afe" }}>era</span>
      </span>
    </Link>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

const ABOUT_NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/#results" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <header className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <motion.div
          className="flex items-center justify-between py-5"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ZaperaLogo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {ABOUT_NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: label === "About" ? "#ffffff" : "rgba(255,255,255,0.55)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => {
                  if (label !== "About")
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #6046e3, #9b72e8)" }}
            >
              Book a Call <ArrowRight size={13} />
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.8)",
            }}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>

        {/* Mobile dropdown */}
        {open && (
          <nav className="flex flex-col pb-5 md:hidden">
            {ABOUT_NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium"
                style={{
                  color: label === "About" ? "#ffffff" : "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => {
                  if (label !== "About")
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); openCalendly(); }}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #6046e3, #9b72e8)" }}
            >
              Book a Call <ArrowRight size={13} />
            </button>
          </nav>
        )}
      </header>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-10 pb-8 pt-16">
      {/* Blobs */}
      <div
        className="pointer-events-none absolute left-[-100px] top-[-80px] h-[500px] w-[500px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, #6046e3 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[-60px] top-[80px] h-[380px] w-[380px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #ff7ae9 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur"
          style={{
            borderColor: "rgba(96,70,227,0.4)",
            background: "rgba(96,70,227,0.12)",
            color: "#df7afe",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <Sparkles size={11} style={{ color: "#df7afe" }} />
          About Zapera
        </motion.div>

        <motion.h1
          className="max-w-[820px] font-black text-white"
          style={{
            fontSize: "clamp(44px, 6.5vw, 70px)",
            letterSpacing: "-2.5px",
            lineHeight: 1.05,
            fontWeight: 900,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          We build the digital
          <br />
          <GradientText>infrastructure</GradientText> your
          <br />
          business runs on.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-[520px] text-[17px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Zapera is an AI-powered agency that combines web development, smart
          automation, and data-driven marketing to help businesses grow faster
          and operate smarter.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={openCalendly}
            className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #6046e3 0%, #9b72e8 100%)",
            }}
          >
            Start a Project
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-medium text-white/70 transition-all hover:text-white"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Bento ────────────────────────────────────────────────────────────────────

function Bento() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1200px] px-10 py-20">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Mission — spans 2 cols */}
        <FadeUp delay={0.04} className="lg:col-span-2">
          <div
            className="relative h-full overflow-hidden rounded-2xl border p-8"
            style={{
              borderColor: "rgba(96,70,227,0.25)",
              background:
                "linear-gradient(135deg, rgba(96,70,227,0.12) 0%, rgba(0,0,0,0) 100%)",
            }}
          >
            {/* Inner glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(96,70,227,0.3) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <p
              className="mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(96,70,227,0.9)" }}
            >
              Our Mission
            </p>
            <h3
              className="font-black leading-[1.1] text-white"
              style={{
                fontSize: "clamp(26px, 3vw, 36px)",
                letterSpacing: "-1.2px",
              }}
            >
              Every business deserves{" "}
              <GradientText>enterprise-grade</GradientText> technology — not
              just the Fortune 500.
            </h3>
            <p
              className="mt-5 max-w-[480px] text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We believe small and mid-size businesses should have access to the
              same powerful tools that big companies use. So we build it for
              them — affordably, quickly, and with real results.
            </p>
          </div>
        </FadeUp>

        {/* Stats column */}
        <FadeUp delay={0.1} className="flex flex-col gap-4">
          {/* Stat 1 */}
          <div
            className="flex flex-1 flex-col justify-between rounded-2xl border p-6"
            style={{
              borderColor: "rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Projects Delivered
            </p>
            <div>
              <p
                className="font-black text-white"
                style={{
                  fontSize: "48px",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                50<span style={{ color: "#df7afe" }}>+</span>
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Across web, automation & AI
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div
            className="flex flex-1 flex-col justify-between rounded-2xl border p-6"
            style={{
              borderColor: "rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Average ROI Increase
            </p>
            <div>
              <p
                className="font-black text-white"
                style={{
                  fontSize: "48px",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                3<span style={{ color: "#ff7ae9" }}>×</span>
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                For clients within 90 days
              </p>
            </div>
          </div>
        </FadeUp>

        {/* What drives us */}
        <FadeUp delay={0.14}>
          <div
            className="flex h-full flex-col justify-between rounded-2xl border p-7"
            style={{
              borderColor: "rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              className="mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              What Drives Us
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Results over deliverables",
                "Speed without cutting corners",
                "Transparency at every step",
                "Technology that actually works",
              ].map((v) => (
                <li key={v} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#6046e3" }}
                  />
                  <span
                    className="text-sm leading-snug"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        {/* Uptime stat */}
        <FadeUp delay={0.18}>
          <div
            className="flex h-full flex-col justify-between rounded-2xl border p-7"
            style={{
              borderColor: "rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Automation Uptime
            </p>
            <div>
              <p
                className="font-black text-white"
                style={{
                  fontSize: "48px",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                99.9<span style={{ color: "#9b72e8" }}>%</span>
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Systems that run 24/7
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Who we work with */}
        <FadeUp delay={0.22}>
          <div
            className="flex h-full flex-col justify-between rounded-2xl border p-7"
            style={{
              borderColor: "rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              className="mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Who We Work With
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Startups",
                "Local Businesses",
                "E-commerce",
                "Nonprofits",
                "Finance",
                "Healthcare",
                "Agencies",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: "rgba(96,70,227,0.25)",
                    background: "rgba(96,70,227,0.08)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    Icon: Globe,
    title: "Web Development",
    description:
      "We build fast, conversion-focused websites and web apps from the ground up. Every site is mobile-first, SEO-optimized, and designed to turn visitors into customers.",
    tools: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer"],
    bullets: [
      "Landing pages & marketing sites",
      "Full-stack web applications",
      "E-commerce & booking systems",
      "Performance & Core Web Vitals optimization",
    ],
    accent: "#6046e3",
  },
  {
    Icon: BarChart3,
    title: "Digital Marketing & Analytics",
    description:
      "Data-driven marketing that drives real revenue. We set up your full tracking stack, run paid ad campaigns, and make sure every dollar spent is measured and optimized.",
    tools: [
      "Google Tag Manager",
      "GA4",
      "Meta Ads",
      "Google Ads",
      "Looker Studio",
    ],
    bullets: [
      "GTM setup, audits & custom event tracking",
      "Google & Facebook / Meta ad campaigns",
      "Conversion rate optimization (CRO)",
      "Custom analytics dashboards & reporting",
    ],
    accent: "#ff7ae9",
  },
  {
    Icon: MonitorSmartphone,
    title: "Software Development & Maintenance",
    description:
      "Beyond websites — we build custom software tailored to your exact business needs and keep it running smoothly. Whether it's a client portal, internal tool, or API integration, we've got it.",
    tools: ["Node.js", "Python", "REST APIs", "PostgreSQL", "Supabase"],
    bullets: [
      "Custom internal tools & dashboards",
      "Client & customer portals",
      "Third-party API integrations",
      "Ongoing maintenance & feature updates",
    ],
    accent: "#df7afe",
  },
  {
    Icon: Database,
    title: "Power Platform",
    description:
      "Microsoft's Power Platform gives your team superpowers without heavy engineering. We build low-code apps, automated workflows, and BI dashboards that connect directly to your data.",
    tools: [
      "Power Apps",
      "Power Automate",
      "Power BI",
      "Dataverse",
      "SharePoint",
    ],
    bullets: [
      "Custom Power Apps for internal operations",
      "Automated business processes via Power Automate",
      "Power BI dashboards & live reports",
      "Microsoft 365 & SharePoint integrations",
    ],
    accent: "#9b72e8",
  },
  {
    Icon: BrainCircuit,
    title: "AI Agents",
    description:
      "Deploy intelligent AI agents that work around the clock. From customer-facing chatbots to internal assistants that process data and make decisions — we build agents that actually deliver value.",
    tools: [
      "OpenAI",
      "Claude (Anthropic)",
      "LangChain",
      "Pinecone",
      "RAG Pipelines",
    ],
    bullets: [
      "AI customer support & sales agents",
      "Document processing & data extraction",
      "Knowledge base assistants (RAG)",
      "Multi-agent orchestration systems",
    ],
    accent: "#6046e3",
  },
  {
    Icon: Workflow,
    title: "Custom Workflow Automation",
    description:
      "Stop doing manually what a machine can do better. We map your business processes and automate the repetitive work — connecting your tools, syncing your data, and saving your team hours every week.",
    tools: [
      "Make (Integromat)",
      "Zapier",
      "n8n",
      "Airtable",
      "CRM Integrations",
    ],
    bullets: [
      "End-to-end business process automation",
      "CRM, email & calendar integrations",
      "Lead capture & nurture workflows",
      "Cross-platform data sync pipelines",
    ],
    accent: "#ff7ae9",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative z-10 mx-auto w-full max-w-[1200px] px-10 py-24"
    >
      {/* Blob */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #6046e3 0%, transparent 70%)",
          filter: "blur(130px)",
        }}
      />

      <FadeUp className="mb-4 flex justify-center">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <Layers size={11} /> What We Do
        </span>
      </FadeUp>

      <FadeUp delay={0.06} className="mb-5 text-center">
        <h2
          className="font-black text-white"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "-1.8px",
            fontWeight: 900,
          }}
        >
          Six ways we <GradientText>grow your business</GradientText>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1} className="mb-16 text-center">
        <p
          className="mx-auto max-w-[500px] text-[15px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          From a single website to a fully automated business machine — pick one
          service or combine them all. We tailor every engagement to your goals.
        </p>
      </FadeUp>

      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((svc, i) => (
          <FadeUp key={svc.title} delay={0.06 * i}>
            <div
              className="group flex h-full flex-col gap-6 rounded-2xl border p-8 transition-all duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  `${svc.accent}40`;
                (e.currentTarget as HTMLDivElement).style.background =
                  `${svc.accent}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.02)";
              }}
            >
              {/* Icon + title row */}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
                  style={{ background: `${svc.accent}18`, color: svc.accent }}
                >
                  <svc.Icon size={22} />
                </div>
                <div>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "17px", letterSpacing: "-0.4px" }}
                  >
                    {svc.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {svc.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium"
                        style={{
                          borderColor: `${svc.accent}30`,
                          background: `${svc.accent}10`,
                          color: `${svc.accent}cc`,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {svc.description}
              </p>

              {/* Bullets */}
              <ul className="mt-auto flex flex-col gap-2.5">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <div
                      className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: svc.accent }}
                    />
                    <span
                      className="text-sm leading-snug"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── Why Zapera ───────────────────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    Icon: Activity,
    title: "Results first, always",
    description:
      "We don't just ship deliverables — we track outcomes. If it's not moving your numbers, we fix it.",
    accent: "#6046e3",
  },
  {
    Icon: Target,
    title: "One agency, full stack",
    description:
      "Web, automation, ads, AI — you get everything under one roof. No juggling five vendors.",
    accent: "#df7afe",
  },
  {
    Icon: Code2,
    title: "Built to last",
    description:
      "Clean code, documented systems, and proper handoffs. Everything we build is yours to own and grow.",
    accent: "#ff7ae9",
  },
];

function WhyZapera() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1200px] px-10 py-24">
      <FadeUp className="mb-4 flex justify-center">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <Sparkles size={11} /> Why Zapera
        </span>
      </FadeUp>

      <FadeUp delay={0.06} className="mb-5 text-center">
        <h2
          className="font-black text-white"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "-1.8px",
            fontWeight: 900,
          }}
        >
          Different by <GradientText>design</GradientText>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1} className="mb-16 text-center">
        <p
          className="mx-auto max-w-[420px] text-[15px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Most agencies over-promise and under-deliver. We built Zapera to be
          the opposite.
        </p>
      </FadeUp>

      <div className="grid gap-4 md:grid-cols-3">
        {DIFFERENTIATORS.map((d, i) => (
          <FadeUp key={d.title} delay={i * 0.08}>
            <div
              className="flex h-full flex-col gap-5 rounded-2xl border p-8"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: `${d.accent}18`, color: d.accent }}
              >
                <d.Icon size={22} />
              </div>
              <h3
                className="font-bold text-white"
                style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
              >
                {d.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {d.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1200px] px-10 py-24">
      <FadeUp>
        <div
          className="relative overflow-hidden rounded-3xl border px-10 py-20 text-center md:px-20 md:py-24"
          style={{
            borderColor: "rgba(96,70,227,0.25)",
            background: "rgba(96,70,227,0.06)",
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(96,70,227,0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,122,233,0.2) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          <div className="relative">
            <div className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
                style={{
                  borderColor: "rgba(96,70,227,0.35)",
                  background: "rgba(96,70,227,0.12)",
                  color: "#df7afe",
                }}
              >
                <Zap size={11} style={{ fill: "#df7afe", color: "#df7afe" }} />
                Limited spots available
              </span>
            </div>

            <h2
              className="mb-6 font-black text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                letterSpacing: "-2px",
                fontWeight: 900,
              }}
            >
              Ready to build something <GradientText>remarkable?</GradientText>
            </h2>

            <p
              className="mx-auto mb-10 max-w-[440px] text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Book a free 30-minute strategy call. We&apos;ll map out exactly
              how we can help — no fluff, just a clear plan.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={openCalendly}
                className="group inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-sm font-semibold text-white shadow-2xl transition-all hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #6046e3 0%, #9b72e8 100%)",
                }}
              >
                Book a Free Call
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <Link
                href="mailto:zaperaco@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border px-9 py-4 text-sm font-medium transition-all hover:bg-white/5"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Mail size={14} /> Send an Email
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const FOOTER_LINKS = ["Work", "Services", "About", "Results", "Contact"];

const SOCIAL = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Mail, href: "mailto:zaperaco@gmail.com", label: "Email" },
];

function Footer() {
  return (
    <footer
      className="relative z-10 mx-auto w-full max-w-[1200px] px-10 py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <ZaperaLogo />
        <div className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item}
              href={item === "About" ? "/about" : `/#${item.toLowerCase()}`}
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
              }
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {SOCIAL.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:bg-white/8"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <Icon size={14} />
            </Link>
          ))}
        </div>
      </div>
      <p
        className="mt-8 text-center text-xs"
        style={{ color: "rgba(255,255,255,0.18)" }}
      >
        © 2026 Zapera. All rights reserved.
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "#000000",
        fontFamily: "'Figtree', sans-serif",
        overflowX: "clip",
      }}
    >
      {/* Fixed aurora */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 600px at 50% -10%, rgba(96,70,227,0.18) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 500px 400px at 85% 20%, rgba(255,122,233,0.08) 0%, transparent 55%)",
          }}
        />
      </div>

      <Nav />
      <Hero />
      <Bento />
      <Services />
      <WhyZapera />
      <CTA />
      <Footer />
    </div>
  );
}
