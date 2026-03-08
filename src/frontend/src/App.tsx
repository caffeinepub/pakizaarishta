import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  CheckCircle2,
  Code2,
  Cpu,
  CreditCard,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { SiFacebook, SiWhatsapp } from "react-icons/si";

/* ─────────────────────────────────────────────
   Animation Variants
───────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const leadershipRoles = [
  {
    icon: "📱",
    title: "Social Media Coordinator – Pakistan",
    org: "International Human Rights Movement (IHRM)",
    lines: [
      "Spearheading digital advocacy under Rana Basharat Ali and Mahmood Hussain",
      "Committed to transformative human rights campaigns worldwide",
    ],
    badge: "🇵🇰 Pakistan",
    gradient: "from-[oklch(0.25_0.12_165)] to-[oklch(0.14_0.030_165)]",
    accentColor: "oklch(0.55 0.18 165)",
    borderColor: "border-[oklch(0.45_0.15_165/0.5)]",
  },
  {
    icon: "👨‍💼",
    title: "CEO",
    org: "Deesifood Canada Ontario Inc.",
    lines: [
      "Propelling Ontario food powerhouse with bold innovation and market dominance",
      "Accelerating sustainable growth in Canada's vibrant food sector",
    ],
    badge: "🇨🇦 Canada",
    gradient: "from-[oklch(0.22_0.10_240)] to-[oklch(0.14_0.030_165)]",
    accentColor: "oklch(0.55 0.18 240)",
    borderColor: "border-[oklch(0.45_0.15_240/0.5)]",
  },
  {
    icon: "🤝",
    title: "Vice President",
    org: "USCDO – Montana, USA",
    lines: [
      "Orchestrating nationwide initiatives for social and economic upliftment",
      "Delivering executive-level strategies for real-world community change",
    ],
    badge: "🇺🇸 USA",
    gradient: "from-[oklch(0.22_0.10_30)] to-[oklch(0.14_0.030_165)]",
    accentColor: "oklch(0.65 0.18 30)",
    borderColor: "border-[oklch(0.55_0.18_30/0.5)]",
  },
];

const technicalSkills = [
  {
    icon: Cpu,
    emoji: "🤖",
    title: "AI, Machine Learning & Intelligent Ecosystems",
    desc: "ML algorithms, AI frameworks, autonomous agents, multi-agent systems, and intelligent codebases for revolutionary automation.",
    colorClass: "from-[oklch(0.25_0.12_290)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.50_0.18_290/0.4)]",
    textAccent: "text-[oklch(0.80_0.18_290)]",
  },
  {
    icon: Code2,
    emoji: "🐍",
    title: "Programming Powerhouse",
    desc: "Python virtuoso plus mastery over Java, JavaScript, C++, Swift—every key language for elite full-stack engineering.",
    colorClass: "from-[oklch(0.25_0.12_165)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.50_0.18_165/0.4)]",
    textAccent: "text-[oklch(0.70_0.18_165)]",
  },
  {
    icon: Layers,
    emoji: "🔧",
    title: "Software Symphony",
    desc: "Agile/DevOps wizardry, CI/CD orchestration—cradle-to-cloud development mastery across enterprise-scale systems.",
    colorClass: "from-[oklch(0.25_0.10_200)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.50_0.18_200/0.4)]",
    textAccent: "text-[oklch(0.70_0.18_200)]",
  },
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Apps, Websites & Revenue Rockets",
    desc: "High-performance mobile apps, sleek websites, and monetization platforms that skyrocket earnings.",
    colorClass: "from-[oklch(0.25_0.12_55)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.55_0.18_55/0.4)]",
    textAccent: "text-[oklch(0.78_0.15_85)]",
  },
  {
    icon: Megaphone,
    emoji: "📢",
    title: "Digital Domination & Global Conquest",
    desc: "Precision digital marketing, worldwide business launches, any-scale incorporations, and visa mastery.",
    colorClass: "from-[oklch(0.25_0.10_15)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.55_0.18_15/0.4)]",
    textAccent: "text-[oklch(0.75_0.18_15)]",
  },
];

const services = [
  {
    name: "سوشل میڈیا اکاؤنٹس + مونیٹائزیشن",
    market: "PKR 40,000–150,000",
    offer: "PKR 5,000",
    color: "from-[oklch(0.30_0.15_165)] to-[oklch(0.20_0.08_165)]",
    badge: "بہترین ڈیل",
    badgeColor:
      "bg-[oklch(0.55_0.18_165/0.25)] text-[oklch(0.70_0.18_165)] border-[oklch(0.55_0.18_165/0.5)]",
  },
  {
    name: "کاپی رائٹ فری ویڈیوز (15 منٹ)",
    market: "PKR 15,000–50,000",
    offer: "PKR 1,000",
    color: "from-[oklch(0.30_0.15_290)] to-[oklch(0.20_0.08_290)]",
    badge: "مقبول",
    badgeColor:
      "bg-[oklch(0.50_0.18_290/0.25)] text-[oklch(0.75_0.18_290)] border-[oklch(0.50_0.18_290/0.5)]",
  },
  {
    name: "Human Organic Growth",
    market: "PKR 30,000–80,000",
    offer: "80% کم",
    color: "from-[oklch(0.30_0.12_55)] to-[oklch(0.20_0.08_55)]",
    badge: "گارنٹی",
    badgeColor:
      "bg-[oklch(0.60_0.18_55/0.25)] text-[oklch(0.82_0.15_85)] border-[oklch(0.60_0.18_55/0.5)]",
  },
  {
    name: "ورلڈ وائیڈ WhatsApp + ڈیجیٹل مارکیٹنگ",
    market: "PKR 70,000+",
    offer: "PKR 3,000",
    color: "from-[oklch(0.30_0.15_155)] to-[oklch(0.20_0.08_155)]",
    badge: "گلوبل",
    badgeColor:
      "bg-[oklch(0.45_0.18_155/0.25)] text-[oklch(0.70_0.18_155)] border-[oklch(0.45_0.18_155/0.5)]",
  },
  {
    name: "لائف ٹائم پریمیم ٹولز (AI, Canva وغیرہ)",
    market: "PKR 10,000–50,000",
    offer: "PKR 3,000",
    color: "from-[oklch(0.30_0.12_15)] to-[oklch(0.20_0.08_15)]",
    badge: "لائف ٹائم",
    badgeColor:
      "bg-[oklch(0.55_0.18_15/0.25)] text-[oklch(0.75_0.18_15)] border-[oklch(0.55_0.18_15/0.5)]",
  },
];

const growthRates = [
  { label: "سبسکرائبر", rate: "20 روپے" },
  { label: "لائک", rate: "2 روپے" },
  { label: "ویو", rate: "2 روپے" },
  { label: "کمنٹ", rate: "5 روپے" },
  { label: "شیئر", rate: "10 روپے" },
];

const appCategories = [
  "Windows (XP to 11 LTSC)",
  "Microsoft Office (2007–2024)",
  "Adobe Complete Collection",
  "CorelDraw 2022–2025",
  "AutoCAD 2023–2024",
  "Filmora 9–15",
  "CapCut PC",
  "IDM Lifetime",
  "Inpage Urdu",
  "Canva Pro",
  "ChatGPT+, Grok AI",
  "Netflix, Disney+, Amazon Prime Lifetime",
];

const guarantees = [
  "کوئی hidden charges نہیں",
  "24/7 سپورٹ",
  "100+ فعال کلائنٹس",
  "قانونی، حلال، الگورتھم سیف",
];

const profileLinks = [
  {
    label: "View Profile — Portfolio I",
    href: "https://claude.ai/public/artifacts/b7be2948-f36f-4642-ab4c-14987a7b24bd",
    ocid: "admin-about.profile-link.1",
  },
  {
    label: "View Profile — Portfolio II",
    href: "https://claude.ai/public/artifacts/9b4a2b7c-d516-42d0-827b-4d3defcb35e0",
    ocid: "admin-about.profile-link.2",
  },
];

/* ─────────────────────────────────────────────
   Sub-Components
───────────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-10">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_85/0.5)] to-transparent" />
      <Star className="h-4 w-4 text-gold fill-current opacity-70" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_85/0.5)] to-transparent" />
    </div>
  );
}

function SectionTitle({
  children,
  urdu,
}: {
  children: React.ReactNode;
  urdu?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="font-display text-2xl sm:text-3xl font-bold gold-gradient-text mb-1">
        {children}
      </h2>
      {urdu && (
        <p
          className="text-sm text-[oklch(0.75_0.025_165)] mt-1"
          style={{ fontFamily: "system-ui, sans-serif", direction: "rtl" }}
        >
          {urdu}
        </p>
      )}
      <div className="mx-auto mt-3 h-0.5 w-24 bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_85/0.8)] to-transparent" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main App
───────────────────────────────────────────── */
export default function App() {
  return (
    <div
      data-ocid="admin-about.page"
      className="min-h-screen bg-background text-foreground"
    >
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <header
        data-ocid="admin-about.hero.card"
        className="relative overflow-hidden hero-gradient pattern-overlay"
      >
        {/* Ambient glows */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute top-[-10%] left-[20%] h-96 w-96 rounded-full bg-[oklch(0.35_0.14_165/0.18)] blur-[96px]" />
          <div className="absolute top-[10%] right-[15%] h-64 w-64 rounded-full bg-[oklch(0.78_0.15_85/0.10)] blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[oklch(0.40_0.15_240/0.12)] blur-[72px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24 flex flex-col items-center text-center">
          {/* Platform badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <Badge
              variant="outline"
              className="mb-8 border-[oklch(0.78_0.15_85/0.5)] text-gold bg-[oklch(0.78_0.15_85/0.08)] text-xs tracking-widest uppercase px-4 py-1"
            >
              PakizaaRishta.pk — Admin &amp; Founder
            </Badge>
          </motion.div>

          {/* Profile image */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="relative mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-[oklch(0.88_0.14_88)] via-[oklch(0.65_0.18_72)] to-[oklch(0.82_0.15_85)] p-0.5 glow-gold">
                <div className="h-full w-full rounded-full bg-background" />
              </div>
              <div className="absolute -inset-3 rounded-full border border-[oklch(0.78_0.15_85/0.3)]" />
              <img
                src="/assets/generated/admin-profile-msk.dim_400x400.jpg"
                alt="Muhammed Saleem Khan"
                className="relative z-10 h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-[oklch(0.78_0.15_85)]"
              />
              <div className="absolute -bottom-2 -right-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.78_0.15_85)] glow-gold-sm border-2 border-background">
                <Award className="h-4 w-4 text-[oklch(0.08_0.020_165)]" />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="font-display text-3xl sm:text-5xl font-extrabold text-[oklch(0.96_0.012_95)] leading-tight mb-2"
          >
            Muhammed Saleem Khan
          </motion.h1>

          {/* Urdu subtitle badge */}
          <motion.div
            variants={fadeUp}
            custom={2.5}
            initial="hidden"
            animate="visible"
            className="mb-3"
          >
            <span
              className="inline-block px-5 py-1.5 rounded-full bg-[oklch(0.78_0.15_85/0.12)] border border-[oklch(0.78_0.15_85/0.40)] text-gold text-sm font-semibold"
              style={{ fontFamily: "system-ui, sans-serif", direction: "rtl" }}
            >
              محمد سلیم خان (کینیڈا والا)
            </span>
          </motion.div>

          {/* Title */}
          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="font-display text-lg sm:text-xl font-semibold gold-gradient-text mb-4"
          >
            Dynamic Tech Visionary &amp; Global Leader
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-sm sm:text-base text-[oklch(0.75_0.025_165)] italic leading-relaxed mb-6"
          >
            "Catalyst for AI-Fueled Empires, Borderless Ventures, and Principled
            Leadership"
          </motion.p>

          {/* Location badge */}
          <motion.div
            variants={fadeUp}
            custom={4.5}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[oklch(0.22_0.10_240/0.25)] border border-[oklch(0.45_0.15_240/0.5)] text-[oklch(0.75_0.15_240)] text-xs font-semibold">
              🇨🇦 Canada — Ontario
            </span>
          </motion.div>

          {/* Stat badges */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Globe, label: "3 Global Roles" },
              { icon: Star, label: "AI & Tech Expert" },
              { icon: Users, label: "3 Countries" },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-center gap-2 rounded-full border border-[oklch(0.78_0.15_85/0.4)] bg-[oklch(0.78_0.15_85/0.10)] px-5 py-2"
              >
                <Icon className="h-4 w-4 text-gold" />
                <span className="text-sm font-semibold text-gold-light tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        {/* ── Bio Summary ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="rounded-2xl border border-[oklch(0.78_0.15_85/0.3)] card-glass p-6 sm:p-8 glow-gold-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_85)] to-transparent" />
            <p className="text-center text-base sm:text-lg leading-relaxed text-[oklch(0.85_0.020_165)]">
              🌟{" "}
              <strong className="text-gold">Trailblazing professional</strong>{" "}
              excelling in{" "}
              <em>
                AI innovation, software mastery, and international advocacy
              </em>
              . Harnessing cutting-edge technology to empower businesses
              worldwide while{" "}
              <strong className="text-gold">
                championing human rights and community impact
              </strong>
              .
            </p>
          </div>
        </motion.section>

        <GoldDivider />

        {/* ── Strategic Leadership ── */}
        <section aria-label="Strategic Leadership">
          <SectionTitle>🌟 Strategic Leadership Excellence</SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {leadershipRoles.map((role, i) => (
              <motion.div
                key={role.title}
                variants={fadeUp}
                custom={i}
                className={`group relative rounded-2xl border ${role.borderColor} bg-gradient-to-br ${role.gradient} p-6 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_oklch(0_0_0/0.4)]`}
              >
                <div
                  className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-50"
                  style={{ color: role.accentColor }}
                />
                <div className="relative">
                  <span className="text-3xl mb-4 block">{role.icon}</span>
                  <h3 className="font-display font-bold text-gold text-base leading-tight mb-1">
                    {role.title}
                  </h3>
                  <p className="text-xs text-[oklch(0.78_0.15_85/0.8)] font-semibold mb-3 leading-snug">
                    {role.org}
                  </p>
                  <ul className="space-y-2">
                    {role.lines.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 text-xs text-[oklch(0.78_0.025_165)] leading-relaxed"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.78_0.15_85/0.6)]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Badge
                      variant="outline"
                      className="text-[10px] border-[oklch(0.78_0.15_85/0.4)] text-gold bg-[oklch(0.78_0.15_85/0.08)]"
                    >
                      {role.badge}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <GoldDivider />

        {/* ── Technical Arsenal ── */}
        <section aria-label="Technical Arsenal">
          <SectionTitle>
            💻 Elite Technical Arsenal &amp; Elite Consulting
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                custom={i}
                className={`group relative rounded-2xl border ${skill.border} bg-gradient-to-br ${skill.colorClass} p-5 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_oklch(0_0_0/0.4)]`}
              >
                <div className="relative">
                  <span className="text-2xl mb-3 block">{skill.emoji}</span>
                  <h3
                    className={`font-display font-semibold ${skill.textAccent} text-sm leading-snug mb-2`}
                  >
                    {skill.title}
                  </h3>
                  <p className="text-xs text-[oklch(0.65_0.025_165)] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <GoldDivider />

        {/* ── Digital Agency Services ── */}
        <section
          data-ocid="admin-about.services.section"
          aria-label="Digital Agency Services"
        >
          <SectionTitle urdu="مکمل سوشل میڈیا گروتھ + لائف ٹائم کمائی">
            🇵🇰 پاکستان کی نمبر 1 ڈیجیٹل ایجنسی
          </SectionTitle>

          {/* Service Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.name}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-2xl bg-gradient-to-br ${svc.color} p-5 overflow-hidden border border-[oklch(0.30_0.08_165/0.4)] hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex justify-between items-start mb-3">
                  <Badge
                    variant="outline"
                    className={`text-[10px] font-bold border ${svc.badgeColor} px-2 py-0.5`}
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {svc.badge}
                  </Badge>
                </div>
                <p
                  className="text-sm font-semibold text-[oklch(0.90_0.020_165)] mb-3 leading-snug"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    direction: "rtl",
                    textAlign: "right",
                  }}
                >
                  {svc.name}
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-[oklch(0.55_0.025_165)] line-through">
                    مارکیٹ: {svc.market}
                  </p>
                  <p className="text-base font-extrabold text-gold">
                    {svc.offer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Growth Rates */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 rounded-2xl border border-[oklch(0.78_0.15_85/0.3)] bg-gradient-to-r from-[oklch(0.16_0.040_165)] to-[oklch(0.14_0.025_165)] p-6"
          >
            <h3
              className="text-center font-bold text-gold mb-5 text-base"
              style={{ fontFamily: "system-ui, sans-serif", direction: "rtl" }}
            >
              📈 گروتھ ریٹس (فی یونٹ)
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {growthRates.map((g) => (
                <div
                  key={g.label}
                  className="flex flex-col items-center gap-1 rounded-xl bg-[oklch(0.10_0.018_165/0.8)] border border-[oklch(0.78_0.15_85/0.25)] px-5 py-3"
                >
                  <span
                    className="text-xs text-[oklch(0.72_0.025_165)]"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {g.label}
                  </span>
                  <span className="text-lg font-extrabold text-gold">
                    {g.rate}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <GoldDivider />

        {/* ── Premium App Hub ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="Premium App Hub"
        >
          <SectionTitle urdu="تمام ڈاؤن لوڈز ایک جگہ">
            👑 PREMIUM APP HUB
          </SectionTitle>

          <div className="rounded-2xl border border-[oklch(0.78_0.15_85/0.3)] bg-gradient-to-br from-[oklch(0.18_0.05_55)] to-[oklch(0.12_0.020_165)] p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[oklch(0.88_0.14_88)] via-[oklch(0.78_0.15_85)] to-[oklch(0.65_0.18_72)]" />

            <div className="text-center mb-6">
              <p className="text-[oklch(0.80_0.025_165)] text-sm mb-1 font-semibold tracking-wide">
                ALL DOWNLOADS, ONE TRUSTED PLACE
              </p>
              <p
                className="text-[oklch(0.70_0.025_165)] text-sm"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  direction: "rtl",
                }}
              >
                6+ سال سے ٹرسٹڈ پلیٹ فارم
              </p>
            </div>

            {/* Category badges */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {appCategories.map((cat) => (
                <span
                  key={cat}
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[oklch(0.78_0.15_85/0.12)] border border-[oklch(0.78_0.15_85/0.35)] text-gold hover:bg-[oklch(0.78_0.15_85/0.22)] transition-colors cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Facebook link */}
            <div className="text-center">
              <a
                href="https://www.facebook.com/PREMIUMAPPHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[oklch(0.35_0.15_250/0.25)] border border-[oklch(0.50_0.18_250/0.5)] text-[oklch(0.72_0.18_250)] font-semibold text-sm hover:bg-[oklch(0.35_0.15_250/0.45)] transition-all duration-200"
              >
                <SiFacebook className="h-4 w-4" />
                PREMIUM APP HUB — Facebook Page
              </a>
            </div>
          </div>
        </motion.section>

        <GoldDivider />

        {/* ── External Links ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-label="External Links"
        >
          <SectionTitle>🔗 Visit &amp; Learn More</SectionTitle>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Blogspot link */}
            <a
              data-ocid="admin-about.blogspot.link"
              href="https://codepayon.blogspot.com/2026/02/build-your-digital-empire.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-[oklch(0.55_0.18_30/0.4)] bg-gradient-to-br from-[oklch(0.20_0.08_30)] to-[oklch(0.14_0.025_165)] p-5 hover:scale-[1.02] transition-all duration-200"
            >
              <span className="text-2xl mt-0.5 flex-shrink-0">🔗</span>
              <div>
                <p className="text-sm font-bold text-[oklch(0.80_0.15_30)] mb-1">
                  ڈیجیٹل مارکیٹنگ پیکج
                </p>
                <p className="text-xs text-[oklch(0.60_0.025_165)] flex items-center gap-1">
                  Build Your Digital Empire{" "}
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            </a>

            {/* Agency site link */}
            <a
              data-ocid="admin-about.agency-site.link"
              href="https://digital-marketing-agency-landing-page-1h6.caffeine.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-[oklch(0.50_0.18_165/0.4)] bg-gradient-to-br from-[oklch(0.20_0.10_165)] to-[oklch(0.14_0.025_165)] p-5 hover:scale-[1.02] transition-all duration-200"
            >
              <span className="text-2xl mt-0.5 flex-shrink-0">🌐</span>
              <div>
                <p className="text-sm font-bold text-[oklch(0.70_0.18_165)] mb-1">
                  ڈیجیٹل مارکیٹنگ ایجنسی
                </p>
                <p className="text-xs text-[oklch(0.60_0.025_165)] flex items-center gap-1">
                  Official Agency Website{" "}
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            </a>

            {/* Profile links */}
            {profileLinks.map((link) => (
              <a
                key={link.ocid}
                data-ocid={link.ocid}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-[oklch(0.78_0.15_85/0.35)] bg-[oklch(0.78_0.15_85/0.07)] px-5 py-4 text-gold text-sm font-semibold hover:bg-[oklch(0.78_0.15_85/0.16)] hover:border-[oklch(0.78_0.15_85/0.65)] hover:shadow-[0_0_20px_oklch(0.78_0.15_85/0.20)] transition-all duration-200"
              >
                <span className="text-xl flex-shrink-0">📋</span>
                <span className="flex-1">{link.label}</span>
                <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </motion.section>

        <GoldDivider />

        {/* ── Contact Section ── */}
        <section
          data-ocid="admin-about.contact.section"
          aria-label="Contact Information"
        >
          <SectionTitle urdu="فوری شروعات — ابھی رابطہ کریں">
            📞 رابطہ
          </SectionTitle>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-[oklch(0.78_0.15_85/0.5)] bg-[oklch(0.13_0.025_165/0.95)] overflow-hidden glow-gold-sm"
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[oklch(0.88_0.14_88)] via-[oklch(0.65_0.18_72)] to-[oklch(0.82_0.15_85)]" />

            <div className="p-6 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                {/* Emails */}
                <div>
                  <h3 className="font-display text-sm font-bold text-gold-light tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:codepayon@gmail.com"
                      className="flex items-center gap-2 text-[oklch(0.82_0.025_165)] hover:text-gold transition-colors text-sm group"
                    >
                      <span className="text-base">📧</span>
                      <span className="group-hover:underline underline-offset-2 break-all">
                        codepayon@gmail.com
                      </span>
                    </a>
                    <a
                      href="mailto:freepremiumapplicationapk@gmail.com"
                      className="flex items-center gap-2 text-[oklch(0.82_0.025_165)] hover:text-gold transition-colors text-sm group"
                    >
                      <span className="text-base">📧</span>
                      <span className="group-hover:underline underline-offset-2 break-all">
                        freepremiumapplicationapk@gmail.com
                      </span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-display text-sm font-bold text-gold-light tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Phone / WhatsApp
                  </h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2 text-[oklch(0.82_0.025_165)] text-sm">
                      <span className="text-base">📱</span>
                      +92 316 4971661
                    </p>
                    <p className="flex items-center gap-2 text-[oklch(0.82_0.025_165)] text-sm">
                      <span className="text-base">📱</span>
                      +92 332 3449779
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-7 bg-[oklch(0.78_0.15_85/0.2)]" />

              {/* WhatsApp Buttons */}
              <div>
                <h3 className="font-display text-sm font-bold text-gold-light tracking-widest uppercase mb-4 flex items-center gap-2">
                  <SiWhatsapp className="h-4 w-4 text-[oklch(0.70_0.18_155)]" />
                  WhatsApp کریں
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    data-ocid="admin-about.whatsapp1.button"
                    asChild
                    className="flex items-center gap-2 bg-[oklch(0.36_0.12_155)] hover:bg-[oklch(0.42_0.14_155)] text-white border-0 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_oklch(0.45_0.18_155/0.4)]"
                  >
                    <a
                      href="https://wa.me/923164971661"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWhatsapp className="h-4 w-4" />
                      WhatsApp کریں 1
                    </a>
                  </Button>
                  <Button
                    data-ocid="admin-about.whatsapp2.button"
                    asChild
                    className="flex items-center gap-2 bg-[oklch(0.36_0.12_155)] hover:bg-[oklch(0.42_0.14_155)] text-white border-0 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_oklch(0.45_0.18_155/0.4)]"
                  >
                    <a
                      href="https://wa.me/923323449779"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWhatsapp className="h-4 w-4" />
                      WhatsApp کریں 2
                    </a>
                  </Button>
                </div>
              </div>

              <Separator className="my-7 bg-[oklch(0.78_0.15_85/0.2)]" />

              {/* JazzCash */}
              <div
                data-ocid="admin-about.jazzcash.card"
                className="rounded-xl border border-[oklch(0.65_0.18_30/0.5)] bg-gradient-to-r from-[oklch(0.22_0.10_30/0.25)] to-[oklch(0.18_0.06_55/0.20)] p-5 mb-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-5 w-5 text-[oklch(0.75_0.18_30)]" />
                  <h3 className="font-display text-sm font-bold text-[oklch(0.82_0.15_30)] tracking-wide uppercase">
                    JazzCash Payment
                  </h3>
                </div>
                <p className="text-xl font-extrabold text-gold mb-1">
                  💳 03122000372
                </p>
                <p
                  className="text-xs text-[oklch(0.65_0.025_165)]"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    direction: "rtl",
                  }}
                >
                  پیمنٹ کے بعد اسکرین شاٹ WhatsApp کریں
                </p>
              </div>

              {/* USA Office */}
              <div className="flex items-center gap-3 text-[oklch(0.72_0.025_165)] text-sm mb-6">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gold-light">
                    USA Office
                  </span>{" "}
                  — Montana, United States Community Development Organisation
                  (USCDO)
                </div>
              </div>

              {/* Guarantee badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {guarantees.map((g) => (
                  <div
                    key={g}
                    className="flex items-center gap-2 rounded-lg bg-[oklch(0.55_0.18_165/0.10)] border border-[oklch(0.50_0.15_165/0.3)] px-3 py-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[oklch(0.65_0.18_165)] flex-shrink-0" />
                    <span
                      className="text-xs text-[oklch(0.78_0.025_165)] font-medium"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {g}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom CTA taglines */}
              <div className="text-center space-y-2 rounded-xl bg-gradient-to-r from-[oklch(0.78_0.15_85/0.08)] to-[oklch(0.65_0.18_72/0.08)] border border-[oklch(0.78_0.15_85/0.25)] px-6 py-4">
                <p
                  className="text-sm font-bold gold-gradient-text"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  ✨ آج پیکج لیں، کل $ کمائیں!
                </p>
                <p
                  className="text-xs text-[oklch(0.70_0.025_165)]"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  🚀 آپ کی ڈیجیٹل کامیابی ہماری ذمہ داری!
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="mt-4 border-t border-[oklch(0.78_0.15_85/0.15)] bg-[oklch(0.08_0.015_165)]">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center space-y-2 text-xs text-[oklch(0.50_0.020_165)]">
          <p
            style={{ fontFamily: "system-ui, sans-serif" }}
            className="text-[oklch(0.55_0.025_165)]"
          >
            freepremiumapplicationapk کی جانب سے
          </p>
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-gold font-semibold">
              Muhammed Saleem Khan
            </span>{" "}
            | <span className="text-gold font-semibold">PakizaaRishta.pk</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
