"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Zap,
  Globe,
  Bot,
  BarChart3,
  ArrowRight,
  Workflow,
  TrendingUp,
  Star,
  Check,
  Mail,
  Linkedin,
  Github,
  Code2,
  Layers,
  Sparkles,
  ChevronRight,
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
  const isInView = useInView(ref, { once: true, amount: 0.1 });
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

// ─── Logo ─────────────────────────────────────────────────────────────────────

function ZaperaLogo() {
  return (
    <div className="flex items-center gap-2.5">
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
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
] as const;

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
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                }
              >
                {label}
              </Link>
            ))}
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #6046e3, #9b72e8)",
              }}
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
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                }
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openCalendly();
              }}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #6046e3, #9b72e8)",
              }}
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
    <section className="relative mx-auto w-full max-w-[1200px] px-5 md:px-10">
      {/* Gradient blob left */}
      <div
        className="pointer-events-none absolute left-[-120px] top-[-60px] h-[500px] w-[500px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, #6046e3 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Gradient blob right/pink */}
      <div
        className="pointer-events-none absolute right-[-80px] top-[100px] h-[400px] w-[400px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, #ff7ae9 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center pb-20 pt-12 text-center">
        {/* Badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur"
          style={{
            borderColor: "rgba(96,70,227,0.4)",
            background: "rgba(96,70,227,0.12)",
            color: "#df7afe",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sparkles size={11} style={{ color: "#df7afe" }} />
          AI-Powered Web &amp; Automation Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="max-w-4xl font-black leading-[1.05] text-white"
          style={{
            fontSize: "clamp(48px, 7vw, 72px)",
            letterSpacing: "-2.5px",
            fontWeight: 900,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          We Build{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #df7afe 0%, #ff7ae9 50%, #6046e3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI-Powered
          </span>
          <br />
          Businesses.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-7 max-w-[520px] text-[17px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Zapera combines cutting-edge AI with smart automation to build
          websites, workflows, and digital systems that work for you — 24/7.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={openCalendly}
            className="group inline-flex h-13 items-center gap-2.5 rounded-full px-8 text-sm font-semibold text-white shadow-2xl transition-all hover:opacity-90 hover:shadow-purple-900/60"
            style={{
              background: "linear-gradient(135deg, #6046e3 0%, #9b72e8 100%)",
              height: "52px",
            }}
          >
            Start Your Project
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
          <Link
            href="#services"
            className="inline-flex h-13 items-center gap-2 rounded-full border px-8 text-sm font-medium text-white/70 backdrop-blur transition-all hover:text-white"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              height: "52px",
            }}
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            //{ value: "50+", label: "Projects Delivered" },
            { value: "3×", label: "Avg. ROI Increase" },
            { value: "99.9%", label: "Automation Uptime" },
            { value: "100%", label: "Client Satisfaction" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-full border px-6 py-3 backdrop-blur"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <span className="text-lg font-bold text-white">{value}</span>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Logo Ticker ──────────────────────────────────────────────────────────────

const LOGOS = [
  { src: "/nexpoint-logo.png", alt: "Nexpoint", width: 130, height: 40 },
  {
    src: "/bmy-auto-care-logo.jpg",
    alt: "BMY Auto Care",
    width: 130,
    height: 40,
  },
  { src: "/qcg-logo.png", alt: "QCG", width: 100, height: 40 },
];

function LogoTicker() {
  // Duplicate logos so the seamless loop works (original + mirror copy)
  const items = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="relative z-10 w-full py-0">
      {/* Top border line */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      <div className="py-10">
        {/* Label */}
        <p
          className="mb-8 text-center text-xs font-medium uppercase tracking-[0.18em]"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Trusted by innovative businesses
        </p>

        {/* Ticker */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
            style={{
              background:
                "linear-gradient(to right, #000000 0%, transparent 100%)",
            }}
          />
          {/* Right fade */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
            style={{
              background:
                "linear-gradient(to left, #000000 0%, transparent 100%)",
            }}
          />

          <div className="ticker-track flex w-max gap-20 px-10">
            {items.map((logo, i) => (
              <div
                key={i}
                className="flex flex-shrink-0 items-center transition-all duration-300"
                style={{ opacity: 0.35, filter: "grayscale(1) brightness(2)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.opacity = "0.75";
                  (e.currentTarget as HTMLDivElement).style.filter =
                    "grayscale(0) brightness(1.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.opacity = "0.35";
                  (e.currentTarget as HTMLDivElement).style.filter =
                    "grayscale(1) brightness(2)";
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                  style={{ maxHeight: "36px", width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }} />
    </section>
  );
}

// ─── Work ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "NexPoint Philanthropies",
    category: "Web Design",
    tag: "Nonprofit",
    src: "/nexphil-preview.png",
    url: "nexpointphilanthropies.com",
    accent: "#ff7ae9",
  },
  {
    title: "NexPoint × SMU",
    category: "Web Design",
    tag: "Finance",
    src: "/nexpoint-smu-preview.png",
    url: "nexpointsmustockpicks.com",
    accent: "#9b72e8",
  },
  {
    title: "BMY Auto Care",
    category: "Web Design",
    tag: "Auto Services",
    src: "/bmy-preview.png",
    url: "bmyautocenter.com",
    accent: "#6046e3",
  },
  {
    title: "Moments by Malik",
    category: "Web Design",
    tag: "Photography",
    src: "/mbm-preview.png",
    url: "momentsbymalik.com",
    accent: "#df7afe",
  },
];

function BrowserChrome({ url }: { url: string }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3"
      style={{
        background: "rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-1.5">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: "#ff5f57" }}
        />
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: "#febc2e" }}
        />
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: "#28c840" }}
        />
      </div>
      {/* URL bar */}
      <div
        className="flex flex-1 items-center justify-center rounded-md px-3 py-1 text-[10px]"
        style={{
          background: "rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        {url}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10 py-16 md:py-28"
    >
      {/* Accent blob */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #ff7ae9 0%, transparent 70%)",
          filter: "blur(120px)",
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
          <Sparkles size={11} /> Selected Work
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
          Projects that{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #df7afe 0%, #ff7ae9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            speak for themselves
          </span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1} className="mb-16 text-center">
        <p
          className="mx-auto max-w-[440px] text-[15px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Real websites built for real businesses — each one designed to convert
          and built to last.
        </p>
      </FadeUp>

      {/* Row 1 — asymmetric: large + small */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Large card — BMY Auto Care */}
        <FadeUp delay={0.05}>
          <ProjectCard project={PROJECTS[0]} aspectClass="aspect-[16/10]" />
        </FadeUp>

        {/* Small card — Moments by Malik */}
        <FadeUp delay={0.12}>
          <ProjectCard project={PROJECTS[1]} aspectClass="aspect-[16/10]" />
        </FadeUp>
      </div>

      {/* Row 2 — equal split */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FadeUp delay={0.18}>
          <ProjectCard project={PROJECTS[2]} aspectClass="aspect-[16/10]" />
        </FadeUp>
        <FadeUp delay={0.24}>
          <ProjectCard project={PROJECTS[3]} aspectClass="aspect-[16/10]" />
        </FadeUp>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  aspectClass,
}: {
  project: (typeof PROJECTS)[number];
  aspectClass: string;
}) {
  return (
    <div
      className="group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          `${project.accent}55`;
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 24px 80px ${project.accent}18`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Browser chrome */}
      <BrowserChrome url={project.url} />

      {/* Screenshot */}
      <div className={`relative ${aspectClass} w-full overflow-hidden`}>
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle gradient overlay at bottom */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Footer info */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-3">
          {/* Accent dot */}
          <span
            className="h-2 w-2 flex-shrink-0 rounded-full"
            style={{ background: project.accent }}
          />
          <span
            className="text-sm font-semibold text-white"
            style={{ letterSpacing: "-0.2px" }}
          >
            {project.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="rounded-full border px-2.5 py-0.5 text-[11px]"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {project.tag}
          </span>
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-200 group-hover:border-white/20 group-hover:bg-white/8"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <ArrowRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px"
              style={{ transform: "rotate(-45deg)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    Icon: Globe,
    title: "AI-Powered Websites",
    description:
      "Beautiful, conversion-optimized websites built with AI assistance. Faster delivery, smarter design, better results.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    Icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks. We automate your business processes so your team can focus on what matters.",
    tags: ["Zapier", "Make", "n8n"],
  },
  {
    Icon: Bot,
    title: "Custom AI Agents",
    description:
      "Deploy intelligent AI agents that handle customer support, data processing, and decision-making automatically.",
    tags: ["OpenAI", "Claude", "LangChain"],
  },
  {
    Icon: TrendingUp,
    title: "Lead Generation",
    description:
      "Automated outreach systems that find, qualify, and nurture leads around the clock — without manual effort.",
    tags: ["CRM", "Email", "LinkedIn"],
  },
  {
    Icon: BarChart3,
    title: "Business Analytics",
    description:
      "Turn raw data into actionable insights with AI-powered dashboards and automated reporting systems.",
    tags: ["Data", "Dashboards", "KPIs"],
  },
  {
    Icon: Code2,
    title: "Custom Integrations",
    description:
      "Connect your tools seamlessly. We build APIs, webhooks, and data pipelines that just work.",
    tags: ["APIs", "Webhooks", "ETL"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10 py-16 md:py-28"
    >
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
          Services that{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #df7afe 0%, #ff7ae9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            scale your business
          </span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1} className="mb-16 text-center">
        <p
          className="mx-auto max-w-[480px] text-[15px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          From intelligent websites to full business automation — we deliver
          end-to-end AI solutions tailored to your growth goals.
        </p>
      </FadeUp>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((svc, i) => (
          <FadeUp key={svc.title} delay={0.05 * i}>
            <div
              className="group flex h-full flex-col gap-5 rounded-2xl border p-7 transition-all duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(96,70,227,0.35)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(96,70,227,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.02)";
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "rgba(96,70,227,0.15)", color: "#df7afe" }}
              >
                <svc.Icon size={20} />
              </div>
              <div className="flex-1">
                <h3
                  className="mb-2.5 font-semibold text-white"
                  style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {svc.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2.5 py-0.5 text-[11px]"
                    style={{
                      borderColor: "rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We start with a deep-dive into your business, goals, and pain points to craft a tailored strategy.",
  },
  {
    num: "02",
    title: "Design & Build",
    description:
      "Our team designs and develops your solution — websites, automation, or AI systems — with speed and precision.",
  },
  {
    num: "03",
    title: "Launch & Optimize",
    description:
      "We deploy, monitor performance, and continuously optimize for maximum ROI and long-term growth.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10 py-16 md:py-28"
    >
      {/* Subtle blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #6046e3 0%, transparent 70%)",
          filter: "blur(120px)",
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
          <ChevronRight size={11} /> How It Works
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
          Simple process,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #df7afe 0%, #ff7ae9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            powerful results
          </span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1} className="mb-16 text-center">
        <p
          className="mx-auto max-w-[360px] text-[15px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          From first call to live system in weeks, not months.
        </p>
      </FadeUp>

      <div className="relative grid gap-5 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <FadeUp key={step.num} delay={i * 0.1}>
            <div
              className="relative flex flex-col gap-5 rounded-2xl border p-8"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold"
                style={{
                  borderColor: "rgba(96,70,227,0.35)",
                  background: "rgba(96,70,227,0.12)",
                  color: "#df7afe",
                  letterSpacing: "-0.5px",
                }}
              >
                {step.num}
              </div>
              <h3
                className="font-semibold text-white"
                style={{ letterSpacing: "-0.3px" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {step.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "Zapera built our entire lead generation system in just 3 weeks. We went from 5 leads/month to 80+. Absolutely transformative.",
    name: "Sarah Chen",
    role: "Founder, GrowthLoop",
    avatar: "SC",
  },
  {
    quote:
      "The AI automation they set up for our e-commerce store saves us 20+ hours per week. The ROI was immediate and undeniable.",
    name: "Marcus Williams",
    role: "COO, ShopCore",
    avatar: "MW",
  },
  {
    quote:
      "Professional, fast, and genuinely brilliant. Zapera redesigned our website and automated our onboarding in record time.",
    name: "Priya Patel",
    role: "CEO, FlowHR",
    avatar: "PP",
  },
];

function Testimonials() {
  return (
    <section
      id="results"
      className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10 py-16 md:py-28"
    >
      <FadeUp className="mb-4 flex justify-center">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <Star size={11} className="fill-yellow-400 text-yellow-400" /> Client
          Results
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
          Businesses that{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #df7afe 0%, #ff7ae9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            chose to grow
          </span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1} className="mb-16 text-center">
        <p
          className="mx-auto max-w-[400px] text-[15px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Real results from real clients who trusted Zapera to transform their
          operations.
        </p>
      </FadeUp>

      <div className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <FadeUp key={t.name} delay={i * 0.08}>
            <div
              className="flex h-full flex-col gap-6 rounded-2xl border p-7"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p
                className="flex-1 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(96,70,227,0.2)",
                    color: "#df7afe",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
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
    <section
      id="contact"
      className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10 py-16 md:py-28"
    >
      <FadeUp>
        <div
          className="relative overflow-hidden rounded-3xl border px-6 py-14 text-center md:px-20 md:py-24"
          style={{
            borderColor: "rgba(96,70,227,0.25)",
            background: "rgba(96,70,227,0.06)",
          }}
        >
          {/* Glow blobs inside card */}
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
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "-2px",
                fontWeight: 900,
              }}
            >
              Ready to automate{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #df7afe 0%, #ff7ae9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                your growth?
              </span>
            </h2>

            <p
              className="mx-auto mb-10 max-w-[440px] text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Book a free 30-minute strategy call. We&apos;ll map out exactly
              how AI and automation can transform your business — no fluff, just
              results.
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

            <div
              className="mt-9 flex flex-wrap items-center justify-center gap-6 text-xs"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {[
                "Free 30-min strategy call",
                "No commitment required",
                "Results in weeks",
              ].map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <Check size={11} style={{ color: "#6046e3" }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "/about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Mail, href: "mailto:zaperaco@gmail.com", label: "Email" },
];

function Footer() {
  return (
    <footer
      className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10 py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <ZaperaLogo />
        <div className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
              }
            >
              {label}
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

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "#000000",
        fontFamily: "'Figtree', sans-serif",
        overflowX: "clip",
      }}
    >
      {/* Full-page aurora gradient — fixed */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 600px at 50% -10%, rgba(96,70,227,0.22) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 500px 400px at 85% 20%, rgba(255,122,233,0.1) 0%, transparent 55%)",
          }}
        />
      </div>

      <Nav />
      <Hero />
      <LogoTicker />
      <Work />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
