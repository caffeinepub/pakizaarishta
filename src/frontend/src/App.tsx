import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  CreditCard,
  ExternalLink,
  Globe,
  Heart,
  Layers,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Search,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useState } from "react";
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
   NAV PAGES
───────────────────────────────────────────── */
type Page = "home" | "profiles" | "about";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const rishtaProfiles = [
  {
    image: "/assets/generated/rishta-larki-profile-1.dim_400x500.jpg",
    name: "عائشہ",
    age: "24",
    city: "لاہور",
    education: "ایم بی اے",
    height: "5'4\"",
    caste: "سید",
    sect: "سنی",
    marital: "کنواری",
    desc: "دینداری اور تعلیم میں گہری دلچسپی، گھریلو اور خوش اخلاق خاتون",
    color: "from-[oklch(0.26_0.09_340)] to-[oklch(0.16_0.04_340)]",
    border: "border-[oklch(0.55_0.18_340/0.4)]",
    accent: "text-[oklch(0.82_0.18_340)]",
  },
  {
    image: "/assets/generated/rishta-larki-profile-2.dim_400x500.jpg",
    name: "زینب",
    age: "22",
    city: "کراچی",
    education: "بی ایس",
    height: "5'3\"",
    caste: "قریشی",
    sect: "سنی",
    marital: "کنواری",
    desc: "نرم مزاج، باہنر، اور گھر کی قدروقیمت جاننے والی محبت کرنے والی",
    color: "from-[oklch(0.26_0.09_15)] to-[oklch(0.16_0.04_15)]",
    border: "border-[oklch(0.60_0.18_15/0.4)]",
    accent: "text-[oklch(0.82_0.18_15)]",
  },
  {
    image: "/assets/generated/rishta-larki-profile-3.dim_400x500.jpg",
    name: "فاطمہ",
    age: "26",
    city: "اسلام آباد",
    education: "ایم اے",
    height: "5'5\"",
    caste: "انصاری",
    sect: "سنی",
    marital: "کنواری",
    desc: "پڑھی لکھی، مہذب، اور خاندانی اقدار کی پابند گھریلو خاتون",
    color: "from-[oklch(0.24_0.10_240)] to-[oklch(0.16_0.04_240)]",
    border: "border-[oklch(0.55_0.18_240/0.4)]",
    accent: "text-[oklch(0.78_0.18_240)]",
  },
];

const reviews = [
  {
    name: "احمد علی",
    city: "لاہور",
    stars: 5,
    text: "بہت اچھی ویب سائٹ ہے، چند ہی دنوں میں اچھا رشتہ مل گیا۔ ایڈمن بہت مددگار ہیں۔",
  },
  {
    name: "محمد بلال",
    city: "کراچی",
    stars: 5,
    text: "سنجیدہ رشتوں کے لیے بہترین پلیٹ فارم۔ تمام پروفائلز تصدیق شدہ ہیں۔",
  },
  {
    name: "عمر فاروق",
    city: "اسلام آباد",
    stars: 5,
    text: "پرائیویسی کا بہت خیال رکھا گیا ہے۔ بہت ہی شاندار سروس!",
  },
  {
    name: "حسن رضا",
    city: "ملتان",
    stars: 4,
    text: "ایڈمن کی نگرانی میں سب کچھ محفوظ ہے۔ بھروسے کی ویب سائٹ۔",
  },
];

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
    borderColor: "border-[oklch(0.55_0.18_30/0.5)]",
  },
];

const technicalSkills = [
  {
    icon: Cpu,
    emoji: "🤖",
    title: "AI & Machine Learning",
    desc: "ML algorithms, AI frameworks, autonomous agents, and intelligent codebases for revolutionary automation.",
    colorClass: "from-[oklch(0.25_0.12_290)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.50_0.18_290/0.4)]",
    textAccent: "text-[oklch(0.80_0.18_290)]",
  },
  {
    icon: Code2,
    emoji: "🐍",
    title: "Programming Powerhouse",
    desc: "Python virtuoso plus mastery over Java, JavaScript, C++ — every key language for elite full-stack engineering.",
    colorClass: "from-[oklch(0.25_0.12_165)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.50_0.18_165/0.4)]",
    textAccent: "text-[oklch(0.70_0.18_165)]",
  },
  {
    icon: Layers,
    emoji: "🔧",
    title: "Software Symphony",
    desc: "Agile/DevOps wizardry, CI/CD orchestration — cradle-to-cloud development mastery.",
    colorClass: "from-[oklch(0.25_0.10_200)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.50_0.18_200/0.4)]",
    textAccent: "text-[oklch(0.70_0.18_200)]",
  },
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Apps & Websites",
    desc: "High-performance mobile apps, sleek websites, and monetization platforms that skyrocket earnings.",
    colorClass: "from-[oklch(0.25_0.12_55)] to-[oklch(0.14_0.030_165)]",
    border: "border-[oklch(0.55_0.18_55/0.4)]",
    textAccent: "text-[oklch(0.78_0.15_85)]",
  },
  {
    icon: Megaphone,
    emoji: "📢",
    title: "Digital Marketing & Growth",
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
    badge: "بہترین ڈیل",
  },
  {
    name: "کاپی رائٹ فری ویڈیوز (15 منٹ)",
    market: "PKR 15,000–50,000",
    offer: "PKR 1,000",
    badge: "مقبول",
  },
  {
    name: "Human Organic Growth",
    market: "PKR 30,000–80,000",
    offer: "80% کم",
    badge: "گارنٹی",
  },
  {
    name: "ورلڈ وائیڈ WhatsApp + ڈیجیٹل مارکیٹنگ",
    market: "PKR 70,000+",
    offer: "PKR 3,000",
    badge: "گلوبل",
  },
  {
    name: "لائف ٹائم پریمیم ٹولز (AI, Canva وغیرہ)",
    market: "PKR 10,000–50,000",
    offer: "PKR 3,000",
    badge: "لائف ٹائم",
  },
];

/* ─────────────────────────────────────────────
   Shared Components
───────────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-10">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_85/0.5)] to-transparent" />
      <Star className="h-4 w-4 text-[oklch(0.78_0.15_85)] fill-current opacity-70" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_85/0.5)] to-transparent" />
    </div>
  );
}

function SectionTitle({
  children,
  urdu,
}: { children: React.ReactNode; urdu?: string }) {
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
   NAV BAR
───────────────────────────────────────────── */
function NavBar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const links: { id: Page; label: string; urdu: string }[] = [
    { id: "home", label: "Home", urdu: "ہوم" },
    { id: "profiles", label: "Profiles", urdu: "پروفائلز" },
    { id: "about", label: "About Admin", urdu: "ایڈمن" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-[oklch(0.09_0.018_165/0.95)] backdrop-blur-md border-b border-[oklch(0.78_0.15_85/0.2)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          type="button"
          data-ocid="nav.logo.button"
          onClick={() => setPage("home")}
          className="flex items-center gap-2"
        >
          <span className="text-2xl">💍</span>
          <div className="text-left">
            <p className="text-xs font-extrabold tracking-widest text-[oklch(0.78_0.15_85)] uppercase leading-none">
              PakizaaRishta
            </p>
            <p
              className="text-[9px] text-[oklch(0.55_0.025_165)]"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              .pk
            </p>
          </div>
        </button>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <button
              type="button"
              key={l.id}
              data-ocid={`nav.${l.id}.link`}
              onClick={() => setPage(l.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                page === l.id
                  ? "bg-[oklch(0.78_0.15_85/0.18)] text-[oklch(0.88_0.15_85)] border border-[oklch(0.78_0.15_85/0.5)]"
                  : "text-[oklch(0.65_0.025_165)] hover:text-[oklch(0.80_0.025_165)]"
              }`}
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              <span className="hidden sm:inline">{l.label} — </span>
              {l.urdu}
            </button>
          ))}
        </div>
        <a
          data-ocid="nav.whatsapp.button"
          href="https://wa.me/923164971661"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[oklch(0.36_0.12_155)] hover:bg-[oklch(0.42_0.14_155)] text-white text-xs font-bold transition-all"
        >
          <SiWhatsapp className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">رابطہ</span>
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const [reviewIdx, setReviewIdx] = useState(0);

  const prevReview = () =>
    setReviewIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const nextReview = () => setReviewIdx((i) => (i + 1) % reviews.length);

  return (
    <div>
      {/* ── HERO ── */}
      <section
        data-ocid="home.hero.section"
        className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center text-center px-4 hero-gradient pattern-overlay"
      >
        {/* Glows */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute top-[-10%] left-[20%] h-96 w-96 rounded-full bg-[oklch(0.40_0.14_340/0.15)] blur-[100px]" />
          <div className="absolute top-[20%] right-[10%] h-64 w-64 rounded-full bg-[oklch(0.78_0.15_85/0.10)] blur-[80px]" />
          <div className="absolute bottom-[5%] left-[5%] h-56 w-56 rounded-full bg-[oklch(0.40_0.15_240/0.12)] blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <Badge
              variant="outline"
              className="mb-6 border-[oklch(0.78_0.15_85/0.5)] text-[oklch(0.78_0.15_85)] bg-[oklch(0.78_0.15_85/0.08)] text-xs tracking-widest uppercase px-4 py-1"
            >
              🇵🇰 پاکستان کی نمبر 1 ریشتہ ویب سائٹ
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[oklch(0.96_0.012_95)] leading-tight mb-4"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            💍 پاکیزہ رشتہ 💍
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl font-semibold gold-gradient-text mb-3"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            جہاں رشتے بنتے ہیں، دل ملتے ہیں
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2.5}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base text-[oklch(0.72_0.025_165)] mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "system-ui, sans-serif", direction: "rtl" }}
          >
            تصدیق شدہ پروفائلز • ایڈمن کی نگرانی • مکمل پرائیویسی • 100% محفوظ
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div variants={fadeUp} custom={3}>
              <Button
                data-ocid="home.register.button"
                onClick={() => setPage("profiles")}
                className="px-8 py-4 text-base font-extrabold rounded-2xl bg-gradient-to-r from-[oklch(0.65_0.18_72)] to-[oklch(0.78_0.15_85)] hover:opacity-90 text-[oklch(0.08_0.020_165)] shadow-[0_8px_32px_oklch(0.78_0.15_85/0.35)] hover:shadow-[0_12px_40px_oklch(0.78_0.15_85/0.50)] transition-all duration-300"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                🌹 رشتے دیکھیں
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} custom={3.5}>
              <Button
                data-ocid="home.contact.button"
                asChild
                variant="outline"
                className="px-8 py-4 text-base font-bold rounded-2xl border-[oklch(0.78_0.15_85/0.5)] text-[oklch(0.78_0.15_85)] bg-transparent hover:bg-[oklch(0.78_0.15_85/0.10)] transition-all"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                <a
                  href="https://wa.me/923164971661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="h-5 w-5 mr-2" />
                  رجسٹر کریں — 1,000 PKR
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Users, label: "500+ پروفائلز" },
              { icon: CheckCircle2, label: "تصدیق شدہ" },
              { icon: Heart, label: "کامیاب رشتے" },
              { icon: Star, label: "5 ستارہ سروس" },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-center gap-2 rounded-full border border-[oklch(0.78_0.15_85/0.35)] bg-[oklch(0.78_0.15_85/0.08)] px-4 py-2"
              >
                <Icon className="h-4 w-4 text-[oklch(0.78_0.15_85)]" />
                <span
                  className="text-sm font-semibold text-[oklch(0.82_0.025_165)]"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section
        data-ocid="home.search.section"
        className="bg-[oklch(0.11_0.022_165)] py-8 px-4 border-b border-[oklch(0.78_0.15_85/0.15)]"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[oklch(0.78_0.15_85/0.3)] bg-[oklch(0.13_0.025_165)] p-5"
          >
            <p
              className="text-center text-sm font-bold gold-gradient-text mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              🔍 پروفائل تلاش کریں
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  label: "عمر",
                  options: ["18–25 سال", "25–30 سال", "30–35 سال", "35+ سال"],
                },
                {
                  label: "شہر",
                  options: ["کراچی", "لاہور", "اسلام آباد", "ملتان"],
                },
                {
                  label: "تعلیم",
                  options: ["میٹرک", "بی اے", "ایم اے", "ڈاکٹر"],
                },
                { label: "ذات", options: ["سید", "قریشی", "انصاری", "مغل"] },
              ].map((f) => (
                <select
                  key={f.label}
                  data-ocid={`home.search.${f.label}.select`}
                  className="rounded-xl bg-[oklch(0.10_0.018_165)] border border-[oklch(0.78_0.15_85/0.2)] text-[oklch(0.78_0.025_165)] text-xs p-2.5 focus:outline-none focus:border-[oklch(0.78_0.15_85/0.6)]"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  <option value="">{f.label} منتخب کریں</option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ))}
            </div>
            <div className="mt-3 text-center">
              <Button
                data-ocid="home.search.submit.button"
                onClick={() => setPage("profiles")}
                className="bg-gradient-to-r from-[oklch(0.65_0.18_72)] to-[oklch(0.78_0.15_85)] text-[oklch(0.08_0.020_165)] font-bold rounded-xl px-8 py-2 text-sm"
              >
                <Search className="h-4 w-4 mr-2" />
                <span style={{ fontFamily: "system-ui, sans-serif" }}>
                  تلاش کریں
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Profiles Preview ── */}
      <section
        data-ocid="home.featured.section"
        className="py-14 px-4 bg-background"
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle urdu="نمایاں پروفائلز">
            💎 Featured Profiles
          </SectionTitle>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {rishtaProfiles.map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                custom={i}
                data-ocid={`home.featured.card.${i + 1}`}
                className={`group relative rounded-3xl border ${p.border} bg-gradient-to-br ${p.color} overflow-hidden hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
                onClick={() => setPage("profiles")}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_165/0.88)] via-transparent to-transparent" />
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[oklch(0.55_0.18_165/0.9)] text-[9px] font-bold text-white">
                      <CheckCircle2 className="h-2.5 w-2.5" /> تصدیق شدہ
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-3">
                    <p
                      className={`font-bold text-lg ${p.accent}`}
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {p.name}
                    </p>
                    <p
                      className="text-xs text-[oklch(0.80_0.020_165)]"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {p.age} سال | {p.city}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 flex-wrap mb-3">
                    {[p.education, p.caste, p.sect].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[oklch(0.78_0.15_85/0.12)] border border-[oklch(0.78_0.15_85/0.25)] text-[oklch(0.75_0.025_165)]"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    data-ocid={`home.featured.contact.${i + 1}`}
                    className="w-full text-xs font-bold rounded-xl bg-gradient-to-r from-[oklch(0.36_0.12_155)] to-[oklch(0.42_0.15_165)] text-white border-0 py-2"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    <Heart className="h-3.5 w-3.5 mr-1" /> رابطہ — 5,000 PKR
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Button
              data-ocid="home.view-all.button"
              onClick={() => setPage("profiles")}
              variant="outline"
              className="border-[oklch(0.78_0.15_85/0.4)] text-[oklch(0.78_0.15_85)] hover:bg-[oklch(0.78_0.15_85/0.10)] rounded-xl px-8 py-2.5 font-bold"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              تمام پروفائلز دیکھیں →
            </Button>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        data-ocid="home.howitworks.section"
        className="py-14 px-4 bg-[oklch(0.11_0.022_165)]"
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle urdu="آسان عمل">🔄 How It Works</SectionTitle>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-4"
          >
            {[
              {
                step: "1",
                icon: "📋",
                title: "رجسٹریشن",
                desc: "صرف 1,000 PKR میں اپنا پروفائل بنائیں",
              },
              {
                step: "2",
                icon: "✅",
                title: "تصدیق",
                desc: "ایڈمن آپ کا پروفائل تصدیق کرے گا",
              },
              {
                step: "3",
                icon: "🔍",
                title: "تلاش",
                desc: "ہزاروں تصدیق شدہ پروفائلز دیکھیں",
              },
              {
                step: "4",
                icon: "💍",
                title: "رابطہ",
                desc: "5,000 PKR ادا کر کے رابطہ کریں",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                custom={i}
                className="relative rounded-2xl border border-[oklch(0.78_0.15_85/0.25)] bg-gradient-to-br from-[oklch(0.16_0.04_165)] to-[oklch(0.12_0.020_165)] p-5 text-center"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-7 w-7 rounded-full bg-gradient-to-br from-[oklch(0.65_0.18_72)] to-[oklch(0.78_0.15_85)] flex items-center justify-center text-xs font-extrabold text-[oklch(0.08_0.020_165)]">
                  {s.step}
                </div>
                <div className="text-3xl mt-3 mb-2">{s.icon}</div>
                <p
                  className="font-bold text-[oklch(0.88_0.020_165)] text-sm mb-1"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {s.title}
                </p>
                <p
                  className="text-xs text-[oklch(0.60_0.025_165)] leading-relaxed"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Membership Plans ── */}
      <section
        data-ocid="home.membership.section"
        className="py-14 px-4 bg-background"
      >
        <div className="max-w-3xl mx-auto">
          <SectionTitle urdu="ممبرشپ پلانز">💳 Membership Plans</SectionTitle>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {[
              {
                name: "بیسک ممبرشپ",
                price: "1,000 PKR",
                period: "ایک بار",
                color: "from-[oklch(0.22_0.08_240)] to-[oklch(0.14_0.030_165)]",
                border: "border-[oklch(0.45_0.15_240/0.5)]",
                features: [
                  "پروفائل بنائیں",
                  "پروفائلز دیکھیں",
                  "سرچ فلٹرز",
                  "ایڈمن سپورٹ",
                ],
                ocid: "home.basic.button",
              },
              {
                name: "پریمیم ممبرشپ",
                price: "5,000 PKR",
                period: "فی رابطہ",
                color: "from-[oklch(0.26_0.10_55)] to-[oklch(0.16_0.04_55)]",
                border: "border-[oklch(0.65_0.18_72/0.6)]",
                features: [
                  "رابطہ معلومات",
                  "ایڈمن منظوری",
                  "ویریفائیڈ بیج",
                  "پرائیویسی محفوظ",
                ],
                ocid: "home.premium.button",
                featured: true,
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`relative rounded-3xl border ${plan.border} bg-gradient-to-br ${plan.color} p-7 overflow-hidden ${plan.featured ? "ring-2 ring-[oklch(0.78_0.15_85/0.6)]" : ""}`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-[oklch(0.65_0.18_72)] to-[oklch(0.78_0.15_85)] text-[oklch(0.08_0.020_165)] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl">
                    مقبول
                  </div>
                )}
                <p
                  className="text-lg font-extrabold gold-gradient-text mb-1"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {plan.name}
                </p>
                <p
                  className="text-3xl font-extrabold text-[oklch(0.88_0.020_165)] mb-0.5"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {plan.price}
                </p>
                <p
                  className="text-xs text-[oklch(0.55_0.025_165)] mb-5"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {plan.period}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-[oklch(0.80_0.020_165)]"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.65_0.18_165)] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  data-ocid={plan.ocid}
                  asChild
                  className="w-full bg-gradient-to-r from-[oklch(0.65_0.18_72)] to-[oklch(0.78_0.15_85)] text-[oklch(0.08_0.020_165)] font-extrabold rounded-xl py-2.5 hover:opacity-90 transition-all"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  <a
                    href="https://wa.me/923164971661"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ابھی شروع کریں
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section
        data-ocid="home.reviews.section"
        className="py-14 px-4 bg-[oklch(0.11_0.022_165)]"
      >
        <div className="max-w-2xl mx-auto">
          <SectionTitle urdu="کامیاب کہانیاں">⭐ تجربات</SectionTitle>
          <div className="relative rounded-3xl border border-[oklch(0.78_0.15_85/0.3)] bg-gradient-to-br from-[oklch(0.16_0.04_165)] to-[oklch(0.12_0.020_165)] p-8 overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[oklch(0.88_0.14_88)] via-[oklch(0.78_0.15_85)] to-[oklch(0.65_0.18_72)]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIdx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {["★1", "★2", "★3", "★4", "★5"]
                    .slice(0, reviews[reviewIdx].stars)
                    .map((s) => (
                      <Star
                        key={s}
                        className="h-5 w-5 text-[oklch(0.78_0.15_85)] fill-current"
                      />
                    ))}
                </div>
                <p
                  className="text-base text-[oklch(0.82_0.025_165)] italic leading-relaxed mb-5"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    direction: "rtl",
                  }}
                >
                  "{reviews[reviewIdx].text}"
                </p>
                <p
                  className="font-bold text-[oklch(0.78_0.15_85)] text-sm"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  — {reviews[reviewIdx].name}، {reviews[reviewIdx].city}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-3 mt-6">
              <button
                type="button"
                data-ocid="home.review.prev.button"
                onClick={prevReview}
                className="h-9 w-9 rounded-full border border-[oklch(0.78_0.15_85/0.4)] bg-[oklch(0.78_0.15_85/0.08)] flex items-center justify-center hover:bg-[oklch(0.78_0.15_85/0.20)] transition-all"
              >
                <ChevronLeft className="h-4 w-4 text-[oklch(0.78_0.15_85)]" />
              </button>
              <div className="flex items-center gap-1.5">
                {reviews.map((r, i) => (
                  <button
                    type="button"
                    key={r.name}
                    data-ocid={`home.review.dot.${i + 1}`}
                    onClick={() => setReviewIdx(i)}
                    className={`h-2 rounded-full transition-all ${i === reviewIdx ? "w-5 bg-[oklch(0.78_0.15_85)]" : "w-2 bg-[oklch(0.78_0.15_85/0.30)]"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                data-ocid="home.review.next.button"
                onClick={nextReview}
                className="h-9 w-9 rounded-full border border-[oklch(0.78_0.15_85/0.4)] bg-[oklch(0.78_0.15_85/0.08)] flex items-center justify-center hover:bg-[oklch(0.78_0.15_85/0.20)] transition-all"
              >
                <ChevronRight className="h-4 w-4 text-[oklch(0.78_0.15_85)]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section
        data-ocid="home.cta.section"
        className="py-14 px-4 bg-background"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-[oklch(0.78_0.15_85/0.5)] bg-gradient-to-br from-[oklch(0.18_0.06_340/0.3)] to-[oklch(0.16_0.04_165/0.3)] p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[oklch(0.80_0.18_340)] via-[oklch(0.78_0.15_85)] to-[oklch(0.75_0.18_15)]" />
            <p className="text-3xl mb-4">💍 🌹 ❤️</p>
            <h2
              className="text-2xl font-extrabold gold-gradient-text mb-2"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              آج ہی شروع کریں
            </h2>
            <p
              className="text-sm text-[oklch(0.65_0.025_165)] mb-6"
              style={{ fontFamily: "system-ui, sans-serif", direction: "rtl" }}
            >
              WhatsApp پر رابطہ کریں اور اپنا رشتہ تلاش کریں
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                data-ocid="home.cta.whatsapp1.button"
                asChild
                className="bg-[oklch(0.36_0.12_155)] hover:bg-[oklch(0.42_0.14_155)] text-white rounded-xl px-6 py-2.5 font-bold"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                <a
                  href="https://wa.me/923164971661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="h-4 w-4 mr-2" /> +92 316 4971661
                </a>
              </Button>
              <Button
                data-ocid="home.cta.whatsapp2.button"
                asChild
                className="bg-[oklch(0.36_0.12_155)] hover:bg-[oklch(0.42_0.14_155)] text-white rounded-xl px-6 py-2.5 font-bold"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                <a
                  href="https://wa.me/923323449779"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="h-4 w-4 mr-2" /> +92 332 3449779
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROFILES PAGE
───────────────────────────────────────────── */
function ProfilesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.16_0.06_340)] via-[oklch(0.13_0.025_165)] to-[oklch(0.16_0.06_15)] py-14 px-4 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-56 w-56 rounded-full bg-[oklch(0.40_0.14_340/0.15)] blur-[80px]" />
        </div>
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Badge
            variant="outline"
            className="mb-4 border-[oklch(0.78_0.15_85/0.5)] text-[oklch(0.78_0.15_85)] bg-[oklch(0.78_0.15_85/0.08)] text-xs tracking-widest uppercase px-4 py-1"
          >
            💍 لڑکیوں کے پروفائلز
          </Badge>
          <h1
            className="text-3xl sm:text-5xl font-extrabold gold-gradient-text mb-3"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            رشتہ سیکشن
          </h1>
          <p
            className="text-sm text-[oklch(0.65_0.025_165)]"
            style={{ fontFamily: "system-ui, sans-serif", direction: "rtl" }}
          >
            تمام پروفائلز ایڈمن سے تصدیق شدہ | رابطہ صرف ادائیگی کے بعد
          </p>
        </motion.div>
      </div>

      {/* Profile Cards */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rishtaProfiles.map((profile, i) => (
            <motion.div
              key={profile.name}
              variants={fadeUp}
              custom={i}
              data-ocid={`profiles.card.${i + 1}`}
              className={`group relative rounded-3xl border ${profile.border} bg-gradient-to-br ${profile.color} overflow-hidden hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_12px_40px_oklch(0_0_0/0.5)]`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={profile.image}
                  alt={`${profile.name} کا پروفائل`}
                  className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_165/0.90)] via-[oklch(0.08_0.02_165/0.20)] to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[oklch(0.55_0.18_165/0.92)] border border-[oklch(0.70_0.18_165/0.6)] text-[10px] font-bold text-white backdrop-blur-sm">
                    <CheckCircle2 className="h-3 w-3" /> تصدیق شدہ
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3
                    className={`font-display text-2xl font-extrabold ${profile.accent} drop-shadow-lg`}
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {profile.name}
                  </h3>
                  <p
                    className="text-xs text-[oklch(0.88_0.020_165)]"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {profile.age} سال | {profile.city}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { label: "تعلیم", value: profile.education },
                    { label: "قد", value: profile.height },
                    { label: "ذات", value: profile.caste },
                    { label: "مسلک", value: profile.sect },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-lg bg-[oklch(0.10_0.020_165/0.6)] border border-[oklch(0.78_0.15_85/0.15)] px-3 py-2 text-center"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      <p className="text-[9px] text-[oklch(0.50_0.025_165)] uppercase tracking-wide">
                        {label}
                      </p>
                      <p className="text-xs font-bold text-[oklch(0.88_0.020_165)] mt-0.5">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  className="text-xs text-[oklch(0.68_0.025_165)] leading-relaxed mb-4 text-right"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    direction: "rtl",
                  }}
                >
                  {profile.desc}
                </p>

                <div className="rounded-lg bg-[oklch(0.78_0.15_85/0.08)] border border-[oklch(0.78_0.15_85/0.20)] p-3 mb-4 text-center">
                  <p
                    className="text-[10px] text-[oklch(0.55_0.025_165)]"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    رابطہ کے لیے ادائیگی درکار ہے
                  </p>
                  <p
                    className="text-sm font-extrabold gold-gradient-text"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    5,000 PKR — JazzCash / Easypaisa
                  </p>
                </div>

                <Button
                  data-ocid={`profiles.contact.button.${i + 1}`}
                  asChild
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[oklch(0.36_0.12_155)] to-[oklch(0.42_0.15_165)] hover:opacity-90 text-white border-0 rounded-xl py-2.5 text-sm font-semibold transition-all duration-200"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  <a
                    href="https://wa.me/923164971661"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="h-4 w-4" />
                    رابطہ کریں
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Register CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-[oklch(0.78_0.15_85/0.4)] bg-gradient-to-r from-[oklch(0.18_0.06_55/0.3)] to-[oklch(0.18_0.06_340/0.3)] p-8 text-center"
        >
          <p
            className="text-lg font-extrabold gold-gradient-text mb-2"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            🌟 اپنا پروفائل بنائیں — صرف 1,000 PKR
          </p>
          <p
            className="text-xs text-[oklch(0.60_0.025_165)] mb-5"
            style={{ fontFamily: "system-ui, sans-serif", direction: "rtl" }}
          >
            رجسٹریشن کریں اور ہزاروں تصدیق شدہ پروفائلز دیکھیں
          </p>
          <Button
            data-ocid="profiles.register.button"
            asChild
            className="bg-gradient-to-r from-[oklch(0.65_0.18_72)] to-[oklch(0.78_0.15_85)] hover:opacity-90 text-[oklch(0.08_0.020_165)] font-extrabold rounded-xl px-10 py-3"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            <a
              href="https://wa.me/923164971661"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="h-4 w-4 mr-2" /> ابھی رجسٹر کریں
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ABOUT / ADMIN PAGE
───────────────────────────────────────────── */
function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden hero-gradient pattern-overlay">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute top-[-10%] left-[20%] h-96 w-96 rounded-full bg-[oklch(0.35_0.14_165/0.18)] blur-[96px]" />
          <div className="absolute top-[10%] right-[15%] h-64 w-64 rounded-full bg-[oklch(0.78_0.15_85/0.10)] blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[oklch(0.40_0.15_240/0.12)] blur-[72px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24 flex flex-col items-center text-center">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <Badge
              variant="outline"
              className="mb-8 border-[oklch(0.78_0.15_85/0.5)] text-[oklch(0.78_0.15_85)] bg-[oklch(0.78_0.15_85/0.08)] text-xs tracking-widest uppercase px-4 py-1"
            >
              PakizaaRishta.pk — Admin &amp; Founder
            </Badge>
          </motion.div>

          {/* Profile Image - HD with changed background */}
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
                src="/assets/generated/admin-msk-hd-pro.dim_400x400.jpg"
                alt="Muhammed Saleem Khan"
                className="relative z-10 h-44 w-44 sm:h-52 sm:w-52 rounded-full object-cover border-4 border-[oklch(0.78_0.15_85)]"
              />
              <div className="absolute -bottom-2 -right-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.78_0.15_85)] border-2 border-background">
                <Award className="h-4 w-4 text-[oklch(0.08_0.020_165)]" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="font-display text-3xl sm:text-5xl font-extrabold text-[oklch(0.96_0.012_95)] leading-tight mb-2"
          >
            Muhammed Saleem Khan
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={2.5}
            initial="hidden"
            animate="visible"
            className="mb-3"
          >
            <span
              className="inline-block px-5 py-1.5 rounded-full bg-[oklch(0.78_0.15_85/0.12)] border border-[oklch(0.78_0.15_85/0.40)] text-[oklch(0.78_0.15_85)] text-sm font-semibold"
              style={{ fontFamily: "system-ui, sans-serif", direction: "rtl" }}
            >
              محمد سلیم خان (کینیڈا والا)
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="font-display text-lg sm:text-xl font-semibold gold-gradient-text mb-4"
          >
            Dynamic Tech Visionary &amp; Global Leader
          </motion.p>

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
                <Icon className="h-4 w-4 text-[oklch(0.78_0.15_85)]" />
                <span className="text-sm font-semibold text-[oklch(0.82_0.025_165)] tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        {/* Bio */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="rounded-2xl border border-[oklch(0.78_0.15_85/0.3)] card-glass p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_85)] to-transparent" />
            <p className="text-center text-base sm:text-lg leading-relaxed text-[oklch(0.85_0.020_165)]">
              🌟{" "}
              <strong className="text-[oklch(0.78_0.15_85)]">
                Trailblazing professional
              </strong>{" "}
              excelling in{" "}
              <em>
                AI innovation, software mastery, and international advocacy
              </em>
              . Harnessing cutting-edge technology to empower businesses
              worldwide while{" "}
              <strong className="text-[oklch(0.78_0.15_85)]">
                championing human rights and community impact
              </strong>
              .
            </p>
          </div>
        </motion.section>

        <GoldDivider />

        {/* Leadership */}
        <section>
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
                className={`group relative rounded-2xl border ${role.borderColor} bg-gradient-to-br ${role.gradient} p-6 overflow-hidden hover:scale-[1.02] hover:shadow-[0_8px_32px_oklch(0_0_0/0.4)] transition-all duration-300`}
              >
                <span className="text-3xl mb-4 block">{role.icon}</span>
                <h3 className="font-display font-bold text-[oklch(0.78_0.15_85)] text-base leading-tight mb-1">
                  {role.title}
                </h3>
                <p className="text-xs text-[oklch(0.78_0.15_85/0.8)] font-semibold mb-3">
                  {role.org}
                </p>
                <ul className="space-y-2">
                  {role.lines.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-xs text-[oklch(0.70_0.025_165)]"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[oklch(0.78_0.15_85/0.6)]" />
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Badge
                    variant="outline"
                    className="text-[10px] border-[oklch(0.78_0.15_85/0.4)] text-[oklch(0.78_0.15_85)] bg-[oklch(0.78_0.15_85/0.08)]"
                  >
                    {role.badge}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <GoldDivider />

        {/* Technical Skills */}
        <section>
          <SectionTitle>💻 Elite Technical Arsenal</SectionTitle>
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
                className={`group relative rounded-2xl border ${skill.border} bg-gradient-to-br ${skill.colorClass} p-5 overflow-hidden hover:scale-[1.02] transition-all duration-300`}
              >
                <span className="text-2xl mb-3 block">{skill.emoji}</span>
                <h3
                  className={`font-display font-semibold ${skill.textAccent} text-sm leading-snug mb-2`}
                >
                  {skill.title}
                </h3>
                <p className="text-xs text-[oklch(0.62_0.025_165)] leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <GoldDivider />

        {/* Digital Agency Services */}
        <section>
          <SectionTitle urdu="مکمل سوشل میڈیا گروتھ + لائف ٹائم کمائی">
            🇵🇰 پاکستان کی نمبر 1 ڈیجیٹل ایجنسی
          </SectionTitle>
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
                className="relative rounded-2xl bg-gradient-to-br from-[oklch(0.22_0.08_165)] to-[oklch(0.14_0.025_165)] p-5 border border-[oklch(0.35_0.08_165/0.5)] hover:scale-[1.02] transition-all duration-300"
              >
                <Badge
                  variant="outline"
                  className="text-[10px] font-bold border-[oklch(0.65_0.18_72/0.5)] text-[oklch(0.78_0.15_85)] bg-[oklch(0.78_0.15_85/0.08)] mb-3"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {svc.badge}
                </Badge>
                <p
                  className="text-sm font-semibold text-[oklch(0.90_0.020_165)] mb-3"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    direction: "rtl",
                    textAlign: "right",
                  }}
                >
                  {svc.name}
                </p>
                <p className="text-xs text-[oklch(0.50_0.025_165)] line-through">
                  مارکیٹ: {svc.market}
                </p>
                <p className="text-base font-extrabold text-[oklch(0.78_0.15_85)]">
                  {svc.offer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <GoldDivider />

        {/* Contact */}
        <section data-ocid="about.contact.section">
          <SectionTitle urdu="فوری شروعات — ابھی رابطہ کریں">
            📞 رابطہ
          </SectionTitle>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-[oklch(0.78_0.15_85/0.5)] bg-[oklch(0.13_0.025_165/0.95)] overflow-hidden"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-[oklch(0.88_0.14_88)] via-[oklch(0.65_0.18_72)] to-[oklch(0.82_0.15_85)]" />
            <div className="p-6 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-sm font-bold text-[oklch(0.78_0.15_85)] tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email
                  </h3>
                  <div className="space-y-3">
                    {[
                      "codepayon@gmail.com",
                      "freepremiumapplicationapk@gmail.com",
                    ].map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 text-[oklch(0.78_0.025_165)] hover:text-[oklch(0.78_0.15_85)] text-sm group transition-colors"
                      >
                        <span>📧</span>
                        <span className="group-hover:underline underline-offset-2 break-all">
                          {email}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[oklch(0.78_0.15_85)] tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Phone className="h-4 w-4" /> WhatsApp / Call
                  </h3>
                  <div className="space-y-3">
                    {["+92 316 4971661", "+92 332 3449779"].map((num) => (
                      <p
                        key={num}
                        className="flex items-center gap-2 text-[oklch(0.78_0.025_165)] text-sm"
                      >
                        <span>📱</span>
                        {num}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="my-7 bg-[oklch(0.78_0.15_85/0.2)]" />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  data-ocid="about.whatsapp1.button"
                  asChild
                  className="flex-1 bg-[oklch(0.36_0.12_155)] hover:bg-[oklch(0.42_0.14_155)] text-white rounded-xl px-6 py-2.5 font-bold"
                >
                  <a
                    href="https://wa.me/923164971661"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="h-4 w-4 mr-2" /> WhatsApp 1
                  </a>
                </Button>
                <Button
                  data-ocid="about.whatsapp2.button"
                  asChild
                  className="flex-1 bg-[oklch(0.36_0.12_155)] hover:bg-[oklch(0.42_0.14_155)] text-white rounded-xl px-6 py-2.5 font-bold"
                >
                  <a
                    href="https://wa.me/923323449779"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="h-4 w-4 mr-2" /> WhatsApp 2
                  </a>
                </Button>
              </div>

              <Separator className="my-7 bg-[oklch(0.78_0.15_85/0.2)]" />

              <div
                data-ocid="about.jazzcash.card"
                className="rounded-xl border border-[oklch(0.65_0.18_30/0.5)] bg-gradient-to-r from-[oklch(0.22_0.10_30/0.25)] to-[oklch(0.18_0.06_55/0.20)] p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-5 w-5 text-[oklch(0.75_0.18_30)]" />
                  <h3 className="font-display text-sm font-bold text-[oklch(0.82_0.15_30)] uppercase">
                    JazzCash Payment
                  </h3>
                </div>
                <p className="text-xl font-extrabold text-[oklch(0.78_0.15_85)] mb-1">
                  💳 03122000372
                </p>
                <p
                  className="text-xs text-[oklch(0.60_0.025_165)]"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    direction: "rtl",
                  }}
                >
                  پیمنٹ کے بعد اسکرین شاٹ WhatsApp کریں
                </p>
              </div>

              <div className="flex items-center gap-3 text-[oklch(0.68_0.025_165)] text-sm mt-6">
                <MapPin className="h-5 w-5 text-[oklch(0.78_0.15_85)] flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[oklch(0.82_0.025_165)]">
                    USA Office
                  </span>{" "}
                  — Montana, USCDO &nbsp;|&nbsp;
                  <span className="font-semibold text-[oklch(0.82_0.025_165)]">
                    Canada
                  </span>{" "}
                  — Ontario
                </div>
              </div>

              <div className="mt-6 text-center rounded-xl bg-gradient-to-r from-[oklch(0.78_0.15_85/0.08)] to-[oklch(0.65_0.18_72/0.08)] border border-[oklch(0.78_0.15_85/0.25)] px-6 py-4">
                <p
                  className="text-sm font-bold gold-gradient-text"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  ✨ آج پیکج لیں، کل $ کمائیں!
                </p>
                <p
                  className="text-xs text-[oklch(0.60_0.025_165)] mt-1"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  🚀 آپ کی ڈیجیٹل کامیابی ہماری ذمہ داری!
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* External Links */}
        <GoldDivider />
        <section>
          <SectionTitle>🔗 Visit &amp; Learn More</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              data-ocid="about.blogspot.link"
              href="https://codepayon.blogspot.com/2026/02/build-your-digital-empire.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-[oklch(0.55_0.18_30/0.4)] bg-gradient-to-br from-[oklch(0.20_0.08_30)] to-[oklch(0.14_0.025_165)] p-5 hover:scale-[1.02] transition-all"
            >
              <span className="text-2xl mt-0.5">🔗</span>
              <div>
                <p className="text-sm font-bold text-[oklch(0.80_0.15_30)] mb-1">
                  ڈیجیٹل مارکیٹنگ پیکج
                </p>
                <p className="text-xs text-[oklch(0.55_0.025_165)] flex items-center gap-1">
                  Build Your Digital Empire{" "}
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                </p>
              </div>
            </a>
            <a
              data-ocid="about.agency.link"
              href="https://digital-marketing-agency-landing-page-1h6.caffeine.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-[oklch(0.50_0.18_165/0.4)] bg-gradient-to-br from-[oklch(0.20_0.10_165)] to-[oklch(0.14_0.025_165)] p-5 hover:scale-[1.02] transition-all"
            >
              <span className="text-2xl mt-0.5">🌐</span>
              <div>
                <p className="text-sm font-bold text-[oklch(0.70_0.18_165)] mb-1">
                  ڈیجیٹل مارکیٹنگ ایجنسی
                </p>
                <p className="text-xs text-[oklch(0.55_0.025_165)] flex items-center gap-1">
                  Official Agency Website{" "}
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>

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
            <span className="text-[oklch(0.78_0.15_85)] font-semibold">
              Muhammed Saleem Khan
            </span>{" "}
            |{" "}
            <span className="text-[oklch(0.78_0.15_85)] font-semibold">
              PakizaaRishta.pk
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROOT APP
───────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div
      data-ocid="app.page"
      className="min-h-screen bg-background text-foreground"
    >
      <NavBar page={page} setPage={setPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          {page === "home" && <HomePage setPage={setPage} />}
          {page === "profiles" && <ProfilesPage />}
          {page === "about" && <AboutPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
