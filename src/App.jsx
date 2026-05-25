import React from "react";
import {
  FaArrowRight,
  FaBars,
  FaTimes,
  FaCheck,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaDiscord,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  ASSETS                                                                    */
/* -------------------------------------------------------------------------- */

const testimonialFiles = import.meta.glob(
  "./assets/testimonials/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" }
);

const testimonials = Object.entries(testimonialFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, image], index) => {
    const title =
      path
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()) ||
      `Result ${index + 1}`;
    return { title, image };
  });

// Drop a single hero image into src/assets/hero/ — the first file found is used.
const heroImageFiles = import.meta.glob(
  "./assets/hero/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" }
);

const heroImage =
  Object.entries(heroImageFiles).sort(([a], [b]) => a.localeCompare(b))[0]?.[1] ||
  null;

/* -------------------------------------------------------------------------- */
/*  CONTENT                                                                   */
/* -------------------------------------------------------------------------- */

const packages = [
  {
    name: "Public",
    price: "Free",
    period: "Lifetime access",
    description:
      "Start with the foundation before entering a guided mentorship path.",
    features: ["Basic trading", "Starter lessons", "Beginner friendly"],
    cta: "Start free",
  },
  {
    name: "Express",
    price: "Ask",
    period: "Lifetime access",
    description:
      "Full mentorship access with private support, replay content, weekly mentoring, and propfirm guidance.",
    features: [
      "All course features",
      "Private 1-on-1 access",
      "Weekly mentoring",
      "Replay content",
      "24/7 propfirm guide",
      "Consultation",
    ],
    cta: "Request pricing",
    popular: true,
  },
  {
    name: "Evaluation",
    price: "749K",
    priceUnit: "IDR",
    period: "Lifetime access",
    description:
      "Focused preparation for traders entering evaluation or funded-account challenges.",
    features: [
      "Trading bootcamp",
      "Replay content",
      "Propfirm guide",
      "Weekly mentoring",
      "Consultation",
    ],
    cta: "Join evaluation",
  },
];

const features = [
  {
    title: "Trading framework",
    text: "A structured system for market context, entries, risk, and execution.",
  },
  {
    title: "Mentor feedback",
    text: "Weekly guidance, consultation, and private review on selected packages.",
  },
  {
    title: "Replay vault",
    text: "Rewatch course material and mentoring sessions whenever you need.",
  },
  {
    title: "Propfirm prep",
    text: "Prepare around rules, drawdown, risk limits, and consistency.",
  },
];

const process = [
  {
    title: "Map the framework",
    text: "Understand context, setup quality, risk, and execution rules before taking trades.",
  },
  {
    title: "Review with structure",
    text: "Use replay content and mentoring feedback to spot mistakes and refine decisions.",
  },
  {
    title: "Build consistency",
    text: "Turn your process into repeatable habits before evaluation or funded challenges.",
  },
];

const stats = [
  ["01", "Structured trading path"],
  ["02", "Weekly mentoring"],
  ["03", "Replay content"],
  ["04", "Propfirm guidance"],
];

const faqs = [
  {
    q: "Is this financial advice?",
    a: "No. The mentorship is for education and guidance only. Nothing here should be treated as investment recommendation.",
  },
  {
    q: "Do I get replay access?",
    a: "Yes, replay content is included in selected packages and remains available for the lifetime of your access.",
  },
  {
    q: "Can beginners join?",
    a: "Yes. The Public package is designed as a beginner-friendly starting point before moving into deeper mentorship.",
  },
  {
    q: "How is mentoring delivered?",
    a: "Weekly sessions, private 1-on-1 access on selected packages, and ongoing consultation around your trading.",
  },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/yourusername", icon: FaInstagram },
  { name: "YouTube", href: "https://youtube.com/@yourusername", icon: FaYoutube },
  { name: "Telegram", href: "https://t.me/yourusername", icon: FaTelegramPlane },
  { name: "Discord", href: "https://discord.gg/7nh5p27PRZ", icon: FaDiscord },
];

/* -------------------------------------------------------------------------- */
/*  NAVBAR                                                                    */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Framework", "#framework"],
    ["Process", "#process"],
    ["Pricing", "#pricing"],
    testimonials.length > 0 ? ["Results", "#results"] : null,
    ["FAQ", "#faq"],
  ].filter(Boolean);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#050607]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1220px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm font-bold tracking-[-0.02em] text-white">
            TTFL
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-white/50 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black transition-all duration-200 hover:bg-white/85 md:inline-flex"
        >
          Get started
          <FaArrowRight size={11} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/[0.08] bg-[#050607]/95 backdrop-blur-xl px-5 py-4 md:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/[0.06] py-4 text-sm font-medium text-white/70"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-white px-5 py-3.5 text-center text-sm font-semibold text-black"
            >
              Get started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO IMAGE                                                                */
/* -------------------------------------------------------------------------- */

function HeroImage() {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden bg-[#050607] sm:min-h-[360px] lg:min-h-[620px]">
      {heroImage ? (
        <>
          <motion.img
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* soft edges so the image blends with the page background */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050607] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050607]/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#050607] to-transparent lg:block" />
        </>
      ) : (
        <div className="flex h-full items-center justify-center p-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">
            Drop an image into
            <br />
            <span className="text-white/55">src/assets/hero/</span>
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  SHARED PRIMITIVES                                                         */
/* -------------------------------------------------------------------------- */

function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-white/25" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
        {children}
      </p>
    </div>
  );
}

function FeatureCard({ index, title, text }) {
  return (
    <div className="group relative overflow-hidden bg-[#07090b] p-6 transition-colors duration-300 hover:bg-[#0c0e11] sm:p-8">
      <div className="mb-10 flex items-baseline gap-3 sm:mb-14">
        <span className="text-[11px] font-semibold tracking-[0.22em] text-white/30">
          0{index + 1}
        </span>
        <span className="h-px w-10 bg-white/15 transition-all duration-500 group-hover:w-16 group-hover:bg-white/50" />
      </div>

      <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-[280px] text-[13.5px] leading-[1.65] text-white/45">
        {text}
      </p>
    </div>
  );
}

function PackageCard({ item }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={`group relative flex min-h-[480px] flex-col p-6 transition-colors duration-300 sm:min-h-[540px] sm:p-8 ${
        item.popular
          ? "bg-white text-black"
          : "bg-[#07090b] text-white hover:bg-[#0c0e11]"
      }`}
    >
      {item.popular && (
        <div className="absolute right-6 top-6 rounded-full bg-black px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
          Popular
        </div>
      )}

      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
          item.popular ? "text-black/45" : "text-white/35"
        }`}
      >
        {item.name}
      </p>

      <div className="mt-8 flex items-baseline gap-2 sm:mt-10">
        <h3 className="text-[48px] font-semibold leading-none tracking-[-0.05em] sm:text-[56px]">
          {item.price}
        </h3>
        {item.priceUnit && (
          <span
            className={`text-base font-medium tracking-[-0.02em] ${
              item.popular ? "text-black/55" : "text-white/55"
            }`}
          >
            {item.priceUnit}
          </span>
        )}
      </div>

      <p
        className={`mt-2 text-[13px] ${
          item.popular ? "text-black/50" : "text-white/45"
        }`}
      >
        {item.period}
      </p>

      <p
        className={`mt-6 text-[14px] leading-[1.6] sm:mt-7 ${
          item.popular ? "text-black/70" : "text-white/55"
        }`}
      >
        {item.description}
      </p>

      <div
        className={`my-7 h-px sm:my-8 ${
          item.popular ? "bg-black/10" : "bg-white/10"
        }`}
      />

      <div className="flex flex-1 flex-col gap-3.5">
        {item.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-[14px]">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                item.popular
                  ? "bg-black text-white"
                  : "bg-white/10 text-white/80"
              }`}
            >
              <FaCheck size={9} />
            </span>
            <span className={item.popular ? "text-black/75" : "text-white/65"}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className={`mt-8 flex items-center justify-between rounded-full px-6 py-4 text-[13.5px] font-semibold transition-all duration-200 sm:mt-10 ${
          item.popular
            ? "bg-black text-white hover:bg-black/85"
            : "bg-white text-black hover:bg-white/90"
        }`}
      >
        {item.cta}
        <FaArrowRight
          size={12}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </motion.article>
  );
}

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left sm:gap-6 sm:py-7"
      >
        <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-white sm:text-[17px]">
          {q}
        </h3>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 ${
            isOpen ? "rotate-180 border-white/30 bg-white/5" : ""
          }`}
        >
          {isOpen ? <FaMinus size={10} /> : <FaPlus size={10} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 text-[14px] leading-[1.7] text-white/55 sm:pb-7 sm:pr-12 sm:text-[14.5px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultsSection() {
  if (!testimonials.length) return null;

  return (
    <section
      id="results"
      className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
    >
      <div className="mb-12 max-w-2xl sm:mb-16">
        <SectionEyebrow>Results</SectionEyebrow>
        <h2 className="mt-6 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[40px] lg:text-5xl">
          Proof, feedback,
          <br />
          and student results.
        </h2>
      </div>

      {testimonials.length === 1 ? (
        <div className="mx-auto max-w-5xl overflow-hidden border border-white/10 bg-[#07090b]">
          <img
            src={testimonials[0].image}
            alt={testimonials[0].title}
            className="h-auto w-full object-contain grayscale transition duration-700 hover:grayscale-0"
          />
        </div>
      ) : (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="mb-4 break-inside-avoid overflow-hidden border border-white/10 bg-[#07090b]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-auto w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  APP                                                                       */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-white antialiased">
      <Navbar />

      <div className="mx-auto min-h-screen max-w-[1220px] border-x border-white/10">
        {/* HERO -------------------------------------------------------- */}
        <section className="grid pt-16 lg:min-h-screen lg:grid-cols-[1fr_0.95fr]">
          <div className="relative flex flex-col px-5 pb-16 pt-20 sm:px-8 sm:pt-24 lg:min-h-[620px] lg:px-10 lg:pb-0 lg:pt-28">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-6 flex items-center gap-2.5 sm:mb-7"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#8cc4dc] opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-[#8cc4dc]" />
                </span>
                <p className="text-[12px] font-medium tracking-[-0.005em] text-white/55">
                  Mentorship engine online
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl text-[44px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[60px] sm:leading-[0.98] lg:text-[72px] lg:tracking-[-0.055em]"
              >
                Trading clarity for serious execution.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 max-w-lg text-[15px] leading-[1.65] text-white/55 sm:mt-7 sm:text-[15.5px]"
              >
                A focused mentorship system for traders who want structure,
                replay access, propfirm preparation, and direct guidance.
              </motion.p>
            </div>

            <div className="relative z-10 mt-12 lg:mt-auto lg:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-10 grid grid-cols-2 gap-px bg-white/[0.08] sm:grid-cols-4 sm:mb-16"
              >
                {stats.map(([number, label]) => (
                  <div key={number} className="bg-[#050607] p-4 sm:p-5">
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-white/30">
                      {number}
                    </p>
                    <p className="mt-3 text-[12.5px] font-medium leading-snug text-white/75 sm:text-[13px]">
                      {label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.a
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                href="#pricing"
                className="group inline-flex w-full max-w-[420px] items-center justify-between gap-6 rounded-full bg-white py-4 pl-7 pr-3 text-[14px] font-semibold text-black transition-all duration-200 hover:bg-white/90 sm:py-[18px]"
              >
                <span>Start today</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight size={12} />
                </span>
              </motion.a>
            </div>
          </div>

          <HeroImage />
        </section>

        {/* FRAMEWORK --------------------------------------------------- */}
        <section
          id="framework"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <SectionEyebrow>Framework</SectionEyebrow>
              <h2 className="mt-6 max-w-lg text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[40px] lg:text-5xl">
                Essential features for traders who need structure.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden bg-white/[0.08] sm:grid-cols-2">
              {features.map((item, index) => (
                <FeatureCard key={item.title} index={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS ----------------------------------------------------- */}
        <section
          id="process"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <SectionEyebrow>Process</SectionEyebrow>
              <h2 className="mt-6 max-w-xl text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[40px] lg:text-5xl">
                From scattered learning to repeatable execution.
              </h2>
            </div>

            <div className="space-y-px bg-white/[0.08]">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className="group grid gap-4 bg-[#050607] p-6 transition-colors duration-300 hover:bg-[#0a0c0f] sm:grid-cols-[90px_1fr] sm:gap-6 sm:p-7"
                >
                  <div className="flex items-start">
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-white/30">
                      0{index + 1}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[20px] font-semibold tracking-[-0.025em] sm:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[14px] leading-[1.65] text-white/50">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING ----------------------------------------------------- */}
        <section
          id="pricing"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionEyebrow>Pricing</SectionEyebrow>
            </div>
            <h2 className="mt-6 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[40px] lg:text-5xl">
              Choose the path that fits your trading stage.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[14.5px] leading-[1.65] text-white/50 sm:text-[15px]">
              Start with the basics, move into full mentorship, or focus on
              evaluation preparation.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-visible bg-white/[0.08] sm:mt-16 lg:grid-cols-3">
            {packages.map((item) => (
              <PackageCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <ResultsSection />

        {/* FAQ --------------------------------------------------------- */}
        <section
          id="faq"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2 className="mt-6 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[40px] lg:text-5xl">
                Before
                <br />
                you join.
              </h2>
              <p className="mt-6 max-w-sm text-[14px] leading-[1.65] text-white/50 sm:text-[14.5px]">
                Common questions about access, structure, and what's included
                in each package.
              </p>
            </div>

            <div className="border-t border-white/[0.08]">
              {faqs.map((item, i) => (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT ----------------------------------------------------- */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-white/10 px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10"
        >
          {/* Subtle bloom */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(75,101,128,0.18)_0%,transparent_65%)] blur-[80px]" />

          <div className="relative">
            <div className="flex justify-center">
              <SectionEyebrow>Get started</SectionEyebrow>
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-[40px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[52px] lg:text-[64px] lg:tracking-[-0.055em]">
              Get the mentorship package that matches your goal.
            </h2>

            <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.65] text-white/50 sm:mt-7 sm:text-[15.5px]">
              Contact the mentor to confirm availability, package details, and
              the best starting point.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/6289507805622"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-[14px] font-semibold text-black transition-all duration-200 hover:bg-white/90"
              >
                <FaWhatsapp size={15} />
                Contact via WhatsApp
              </a>

              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 py-4 text-[14px] font-semibold text-white/75 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
              >
                <FaEnvelope size={14} />
                Send email
              </a>
            </div>

            <p className="mx-auto mt-12 max-w-md text-[11.5px] leading-[1.7] text-white/30">
              Trading involves risk. This mentorship is for education only, not
              financial advice or a guarantee of results.
            </p>
          </div>
        </section>

        {/* FOOTER ------------------------------------------------------ */}
        <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 text-[13px] text-white/40 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="text-sm font-bold tracking-[-0.02em] text-white">
                  TTFL
                </span>
              </div>
              <p>© 2026 TTFL. All rights reserved.</p>
              <p className="mt-1 text-[11.5px] text-white/25">
                Education only. Trading involves risk.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-200 hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}