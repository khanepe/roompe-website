"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Building2, Bed, GraduationCap, ShieldCheck, UserCheck,
  Utensils, Smartphone, CheckCircle, ArrowUpRight, Sparkles,
  MapPin, TrendingUp, Lock, Star, ChevronRight, Zap, Phone, Mail,
} from "lucide-react";

/* ─── Animation presets ──────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* ─── Helpers ────────────────────────────────────────────────── */
function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <span
      className="section-label"
      style={
        light
          ? { background: "rgba(75,161,143,0.18)", borderColor: "rgba(75,161,143,0.4)", color: "#81C9BD" }
          : {}
      }
    >
      <Sparkles size={10} />
      {text}
    </span>
  );
}

/* ─── STAT CARD (light background) ──────────────────────────── */
function StatCard({
  value, label, icon: Icon, accent,
}: { value: string; label: string; icon: React.FC<{ className?: string; style?: React.CSSProperties }>; accent: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(18,50,59,0.10)" }}
      transition={{ duration: 0.25 }}
      className="card flex flex-col items-center text-center p-6 md:p-10 cursor-default"
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
        style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}
      >
        <Icon className="w-7 h-7" style={{ color: accent }} />
      </div>
      <span
        className="mb-2 block"
        style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "#12323B" }}
      >
        {value}
      </span>
      <span className="text-xs font-bold uppercase tracking-widest text-[#718096]">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── SERVICE CARD (light section) ──────────────────────────── */
function ServiceCard({
  badge, title, highlight, body, features, accentColor, delay,
}: {
  badge: string; title: string; highlight: string; body: string;
  features: string[]; accentColor: string; delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay }}
      whileHover={{ y: -6 }}
      className="card flex flex-col h-full p-8 md:p-10 cursor-default group"
    >
      {/* Status badge mimicking property status pill */}
      <span
        className="section-label self-start mb-6"
        style={{ background: `${accentColor}12`, borderColor: `${accentColor}28`, color: accentColor }}
      >
        {badge}
      </span>

      <h3 className="display-md mb-4">
        {title}{" "}
        <span className="text-mint">{highlight}</span>
      </h3>
      <p className="text-muted leading-relaxed flex-grow mb-8">{body}</p>

      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm font-medium text-[#12323B]">
            <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#4BA18F]" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="btn-outline-mint self-start"
      >
        Learn more <ChevronRight size={14} />
      </Link>
    </motion.div>
  );
}

/* ─── TECH FEATURE CARD (light section) ─────────────────────── */
function TechCard({
  title, desc, icon: Icon, color,
}: { title: string; desc: string; icon: React.FC<{ className?: string; style?: React.CSSProperties }>; color: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="card p-5 cursor-default group"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${color}12`, border: `1px solid ${color}20` }}
      >
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <h4 className="font-semibold text-[#12323B] text-sm mb-1 group-hover:text-[#4BA18F] transition-colors">
        {title}
      </h4>
      <p className="text-[#718096] text-xs leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ─── PHONE MOCKUP ───────────────────────────────────────────── */
function PhoneMockup() {
  const items = [
    { icon: Utensils, label: "Dinner Menu", sub: "View today's meal", color: "#F59E0B" },
    { icon: Smartphone, label: "Laundry Status", sub: "Ready for pickup", color: "#4BA18F" },
    { icon: ShieldCheck, label: "Gate Pass", sub: "Approved for weekend", color: "#12323B" },
    { icon: Star, label: "Room Rating", sub: "Block B — 4.8★", color: "#F1C46E" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative flex justify-center items-center"
    >
      {/* Glow */}
      <div className="absolute w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(75,161,143,0.15) 0%, transparent 70%)" }} />

      <div className="relative w-[268px]">
        {/* Shell */}
        <div
          className="rounded-[2.5rem] p-[2.5px]"
          style={{
            background: "linear-gradient(150deg, rgba(75,161,143,0.6) 0%, rgba(18,50,59,0.4) 60%, rgba(241,196,110,0.3) 100%)",
            boxShadow: "0 24px 64px rgba(18,50,59,0.3), 0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
          <div className="bg-white rounded-[2.3rem] overflow-hidden">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1">
              <span className="text-[10px] text-[#718096] font-semibold">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-1.5 rounded-sm bg-[#E2E8F0]" />
                <div className="w-2.5 h-1.5 rounded-sm bg-[#E2E8F0]" />
              </div>
            </div>
            {/* Notch */}
            <div className="flex justify-center">
              <div className="w-20 h-4 bg-white rounded-b-2xl border-b border-[#F8FAFC]" />
            </div>

            {/* Content */}
            <div className="px-5 pb-8 pt-3 space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] text-[#718096] font-medium">Welcome back 👋</p>
                  <h4 className="text-[#12323B] font-bold text-sm leading-tight">Aryan Sharma</h4>
                  <p className="text-[10px] font-semibold" style={{ color: "#4BA18F" }}>Room 402, Block B</p>
                </div>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "#12323B" }}
                >
                  <UserCheck className="w-4 h-4 text-white" />
                </div>
              </div>

              {items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}12` }}
                  >
                    <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#12323B]">{item.label}</p>
                    <p className="text-[9px] text-[#718096]">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-6 rounded-full blur-xl"
          style={{ background: "rgba(75,161,143,0.18)" }}
        />
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <main>
      <Navbar />

      {/* ══════════════════════ HERO — DARK ══════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#12323B" }}
      >
        {/* Parallax image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dvqu8jllv/image/upload/v1776774773/Untitled_design_4_fondbs.jpg')" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(18,50,59,0.72) 0%, rgba(18,50,59,0.60) 40%, rgba(18,50,59,0.95) 100%)" }} />
          {/* <div className="absolute inset-0 hero-grid" /> */}
        </motion.div>

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container-wide pt-24 pb-16 text-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center">

            <motion.div variants={fadeUp}>
              <SectionLabel text="Western India's #1 B2B Proptech" light />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-white mb-6 max-w-5xl"
              style={{
                fontSize: "clamp(1.85rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
              }}
            >
              Elevating{" "}
              <span style={{ color: "#4BA18F" }}>Student Living.</span>
              <br />
              Redefining{" "}
              <span style={{ color: "#F1C46E" }}>Campus Operations.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium"
              style={{ color: "rgba(255,255,255, 0.9)" }}
            >
              We partner with universities and colleges across Western India to operate
              world-class student hostels, combining tech with genuine
              hospitality, so institutions can focus on education.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold">
                Partner With Us <ArrowUpRight size={16} />
              </Link>
              <a href="#services" className="btn-outline-navy">
                Explore Models <ChevronRight size={16} />
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div variants={fadeUp} className="mt-8 md:mt-14 text-center">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-8"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Trusted by institutions across Gujarat
              </p>
              {/* <div className="flex flex-wrap items-center justify-center gap-8">
                {["PDPU", "Nirma University", "LD CE", "HNGU", "GTU"].map((name) => (
                  <span key={name} className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {name}
                  </span>
                ))}
              </div> */}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ══════════════════════ STATS — WHITE ════════════════════ */}
      <section id="about" className="section-light section-pad">
        <div className="container-wide">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-8 md:mb-14">
              <SectionLabel text="By the Numbers" />
              <h2 className="display-lg text-[#12323B] mb-3">
                Setting benchmarks across{" "}
                <span className="text-mint">Western India</span>
              </h2>
              <p className="text-muted text-base max-w-xl mx-auto">
                Trusted by institutions. Measured by real outcomes.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard value="1000+" label="Beds Managed" icon={Bed} accent="#4BA18F" />
              <StatCard value="5" label="Campuses Live" icon={GraduationCap} accent="#12323B" />
              <StatCard value="$1M+" label="Bootstrapped ARR" icon={TrendingUp} accent="#4BA18F" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ SERVICES — LIGHT ═════════════════ */}
      <section id="services" className="section-soft section-pad">
        <div className="container-wide">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-8 md:mb-14">
              <SectionLabel text="Our Operating Models" />
              <h2 className="display-lg text-[#12323B] mb-3">
                Two ways to work <span className="text-mint">with RoomPe</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                End-to-end B2B solutions tailored for educational institutions — choose the
                model that fits your ownership structure.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard
                badge="Full Management"
                title="Turnkey Asset"
                highlight="Management"
                body="We lease your hostel infrastructure and run it entirely on your behalf — delivering guaranteed, fixed rental yields with zero operational burden on your institution. You get premium returns while we handle every detail, from daily housekeeping to student onboarding."
                features={[
                  "Guaranteed fixed rental income",
                  "Zero operational headaches for your team",
                  "Premium preventive maintenance",
                  "Full regulatory compliance managed by us",
                ]}
                accentColor="#4BA18F"
                delay={0.05}
              />
              <ServiceCard
                badge="Tech-Powered Operations"
                title="Operations Powered"
                highlight="by RoomPe"
                body="Retain full ownership of your hostel while leveraging our proprietary technology platform, trained hospitality staff, and industry-leading SOPs. Our team integrates seamlessly into your campus to elevate daily management, student satisfaction, and occupancy rates."
                features={[
                  "Proprietary RoomPe App & dashboard",
                  "Trained, background-verified staff",
                  "ISO-grade operational SOPs",
                  "Real-time reporting & revenue analytics",
                ]}
                accentColor="#12323B"
                delay={0.12}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ TECHNOLOGY — LIGHT ═══════════════ */}
      <section id="technology" className="section-light section-pad">
        <div className="container-wide">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div>
                <motion.div variants={fadeUp}>
                  <SectionLabel text="The RoomPe Platform" />
                  <h2 className="display-lg text-[#12323B] mb-4">
                    Driven by <span className="text-mint">Technology.</span>
                    <br />
                    Built for <span className="text-mint">Comfort.</span>
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-6 md:mb-10">
                    Our proprietary app ecosystem brings complete transparency to campus
                    housing. Students manage their entire hostel experience from their
                    phone — from meal tracking and laundry status to gate passes and
                    maintenance requests. Institutions get a live analytics dashboard,
                    real-time occupancy data, and automated billing.
                  </p>
                </motion.div>

                <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Digital Room Allocation", desc: "Seamless onboarding — no paperwork, no queues", icon: GraduationCap, color: "#12323B" },
                    { title: "Smart Maintenance Ticketing", desc: "Students raise requests; staff resolve within SLA", icon: Zap, color: "#4BA18F" },
                    { title: "Automated Laundry Tracking", desc: "App-based pickup & delivery notifications", icon: Smartphone, color: "#F59E0B" },
                    { title: "Digital Gate Pass & Security", desc: "Biometric entry, visitor logs, and emergency protocols", icon: Lock, color: "#12323B" },
                  ].map((item) => (
                    <TechCard key={item.title} {...item} />
                  ))}
                </motion.div>
              </div>

              {/* Right: Phone */}
              <div className="hidden lg:flex justify-center">
                <PhoneMockup />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ OUR STORY — DARK NAVY ════════════ */}
      <section className="section-navy section-pad">
        <div className="container-wide">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {/* ── Header ─────────────────────────────────────── */}
            <motion.div variants={fadeUp} className="text-center mb-8 md:mb-14">
              <SectionLabel text="Our Story" light />
              <h2 className="display-lg text-white mb-4">
                <span style={{ color: "#F1C46E" }}>Expanding</span>{" "}
                <span style={{ color: "#4BA18F" }}>Horizons</span>
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
                Founded in 2020 by Deval Patel &amp; Satya Mehta — from a single campus in
                Ahmedabad to Gujarat&apos;s most trusted student housing partner.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* ── Timeline ─────────────────────────────────── */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl p-5 md:p-8 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {/* Gold top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{ height: "3px", background: "linear-gradient(90deg, #F1C46E 0%, #4BA18F 100%)" }}
                />

                <h3
                  className="font-bold text-lg mb-8 flex items-center gap-3"
                  style={{ color: "#FFFFFF" }}
                >
                  Our Journey
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{ background: "rgba(241,196,110,0.15)", color: "#F1C46E", border: "1px solid rgba(241,196,110,0.3)" }}
                  >
                    Since 2020
                  </span>
                </h3>

                <div className="flex flex-col gap-0">
                  {[
                    { year: "2020", event: "Founded in Ahmedabad by Deval Patel & Satya Mehta with a vision to fix broken hostel experiences.", gold: false },
                    { year: "2021", event: "First campus live — 60 beds, 1 institution. Proof that premium student living is possible at scale.", gold: false },
                    { year: "2022", event: "Scaled to 3 campuses and launched the RoomPe App — introducing fully digital hostel management.", gold: false },
                    { year: "2024", event: "1,000+ beds across 5 campuses. ₹1Cr+ bootstrapped ARR. Profitable, growing, and debt-free.", gold: true },
                    { year: "2025+", event: "Pan-Gujarat expansion targeting 2,000 beds. Entering Corporate Accommodations and Residential Schools.", gold: true },
                  ].map((item, i, arr) => (
                    <div key={item.year} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        {/* Milestone dots: gold for recent/future, mint for past */}
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                          style={{
                            background: item.gold ? "#F1C46E" : "#4BA18F",
                            boxShadow: item.gold ? "0 0 8px rgba(241,196,110,0.5)" : "0 0 6px rgba(75,161,143,0.4)",
                          }}
                        />
                        {i < arr.length - 1 && (
                          <div
                            className="w-px flex-1 mt-1 mb-1"
                            style={{ background: item.gold ? "rgba(241,196,110,0.25)" : "rgba(75,161,143,0.2)" }}
                          />
                        )}
                      </div>
                      <div className="pb-7">
                        <span
                          className="text-xs font-black uppercase tracking-widest block mb-1.5"
                          style={{ color: item.gold ? "#F1C46E" : "#4BA18F" }}
                        >
                          {item.year}
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                          {item.event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── Right panel ──────────────────────────────── */}
              <div className="space-y-6">

                {/* Target Markets */}
                <motion.div variants={fadeUp}>
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-xs font-black uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Target Markets
                    </p>
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded"
                      style={{ background: "rgba(241,196,110,0.12)", color: "#F1C46E", border: "1px solid rgba(241,196,110,0.25)" }}
                    >
                      Live Now
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { city: "Ahmedabad", live: true },
                      { city: "Gandhinagar", live: true },
                      { city: "Vadodara", live: false },
                      { city: "Rajkot", live: false },
                      { city: "Surat", live: false },
                      { city: "Bhavnagar", live: false },
                    ].map(({ city, live }) => (
                      <div
                        key={city}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                        style={
                          live
                            ? { background: "rgba(241,196,110,0.1)", border: "1px solid rgba(241,196,110,0.3)", color: "#F1C46E" }
                            : { background: "rgba(75,161,143,0.08)", border: "1px solid rgba(75,161,143,0.2)", color: "#81C9BD" }
                        }
                      >
                        <MapPin size={12} /> {city}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Future Roadmap */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(241,196,110,0.2)" }}
                >
                  <p
                    className="text-xs font-black uppercase tracking-widest mb-5 flex items-center gap-2"
                    style={{ color: "#F1C46E" }}
                  >
                    <TrendingUp size={11} />
                    Future Roadmap
                  </p>
                  <div className="space-y-3.5">
                    {[
                      "Residential Schools & Junior Colleges",
                      "Corporate Guest Houses",
                      "Co-living for Working Professionals",
                      "Hospital Staff Accommodation",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <ChevronRight size={14} style={{ color: "#F1C46E", flexShrink: 0 }} />
                        <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Bootstrapped & Profitable card */}
                <motion.div
                  variants={fadeUp}
                  className="rounded-2xl p-6 flex items-start gap-4"
                  style={{ background: "rgba(241,196,110,0.1)", border: "1px solid rgba(241,196,110,0.3)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(241,196,110,0.2)", border: "1px solid rgba(241,196,110,0.35)" }}
                  >
                    <TrendingUp className="w-5 h-5" style={{ color: "#F1C46E" }} />
                  </div>
                  <div>
                    <p style={{ color: "#F1C46E" }} className="font-bold text-sm mb-1.5">
                      Fully Bootstrapped &amp; Profitable
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                      Built with discipline from day one. No external funding — just real revenue,
                      real margins, and a sustainable model that institutions can rely on long-term.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ WHY ROOMPE — LIGHT ═══════════════ */}
      <section className="section-soft section-pad">
        <div className="container-wide">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-8 md:mb-14">
              <SectionLabel text="Why RoomPe" />
              <h2 className="display-lg text-[#12323B] mb-3">
                Built on <span className="text-mint">First Principles</span>
              </h2>
              <p className="text-muted text-lg max-w-lg mx-auto">
                Every system we build, every hire we make, every SOP we write — all serves
                one goal: a better campus experience that institutions are proud to offer.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: ShieldCheck, title: "Safety First", accent: "#12323B",
                  desc: "Biometric entry systems, 24/7 CCTV, trained security staff, and a digital gate pass system that keeps every campus secure.",
                },
                {
                  icon: Zap, title: "Tech at the Core", accent: "#4BA18F",
                  desc: "From room allocation to meal feedback, every touchpoint is powered by software. No spreadsheets, no guesswork.",
                },
                {
                  icon: Star, title: "Hospitality Standards", accent: "#F59E0B",
                  desc: "Our housekeeping and catering staff are trained to hotel standards. We believe students deserve better than outdated hostel culture.",
                },
                {
                  icon: TrendingUp, title: "Guaranteed Returns", accent: "#4BA18F",
                  desc: "Fixed rental yields from day one of handover. Institutions enjoy predictable income without the volatility of self-management.",
                },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="card p-5 md:p-7 flex flex-col gap-5 cursor-default group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${pillar.accent}10`, border: `1px solid ${pillar.accent}20` }}
                  >
                    <pillar.icon className="w-5 h-5" style={{ color: pillar.accent }} />
                  </div>
                  <div>
                    <h3 className="text-[#12323B] font-bold text-base mb-2 group-hover:text-[#4BA18F] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[#718096] text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CTA — ARCHITECTURAL SPLIT ════════ */}
      <section id="contact" className="section-soft section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left: copy + CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE }}
            >
              <SectionLabel text="Partner With Us" />
              <h2 className="display-lg text-[#12323B] mb-5">
                Ready to transform your campus <span className="text-mint">experience?</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
                Whether you own a 60-bed hostel or a 600-bed campus — we have a model
                built for you. Our partnership team responds within one business day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-gold">
                  Schedule a Conversation <ArrowUpRight size={16} />
                </Link>
                <a href="tel:+919876543210" className="btn-outline-mint">
                  <Phone size={15} /> Call Us Directly
                </a>
              </div>

              <div className="flex flex-col gap-3 pt-8" style={{ borderTop: "1px solid #E2E8F0" }}>
                {[
                  { icon: Mail, text: "hello@roompe.co.in", href: "mailto:hello@roompe.co.in" },
                  { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: MapPin, text: "Ahmedabad, Gujarat, India", href: "#" },
                ].map(({ icon: Icon, text, href }) => (
                  <a key={text} href={href} className="flex items-center gap-3 text-sm text-[#718096] hover:text-[#4BA18F] transition-colors group">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(75,161,143,0.08)", border: "1px solid rgba(75,161,143,0.18)" }}>
                      <Icon size={13} style={{ color: "#4BA18F" }} />
                    </div>
                    {text}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: benefit card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
              className="rounded-3xl overflow-hidden"
              style={{ background: "#12323B" }}
            >
              <div className="p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
                  What you get from day one
                </p>
                <div className="space-y-5">
                  {[
                    { title: "Guaranteed rental revenue", desc: "Fixed income from handover day, zero volatility." },
                    { title: "SLA-backed operations", desc: "Every function runs to measurable service levels." },
                    { title: "Full tech stack included", desc: "RoomPe App, dashboard, and analytics at no extra cost." },
                    { title: "Live within 2–4 weeks", desc: "Rapid onboarding — no long waiting periods." },
                    { title: "Background-verified staff", desc: "Hotel-trained hospitality and housekeeping teams." },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(75,161,143,0.2)", border: "1px solid rgba(75,161,143,0.4)" }}
                      >
                        <CheckCircle size={11} style={{ color: "#4BA18F" }} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{title}</p>
                        <p className="text-xs leading-relaxed mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Currently serving</p>
                  <div className="flex flex-wrap gap-2">
                    {["Darshan University", "Nirma University", "Navrachana University", "and More"].map((name) => (
                      <span
                        key={name}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: "rgba(75,161,143,0.1)", border: "1px solid rgba(75,161,143,0.2)", color: "#81C9BD" }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}