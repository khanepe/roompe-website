"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail, Phone, MapPin, ArrowUpRight, CheckCircle,
  Building2, Clock, Users,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const PARTNER_TYPES = [
  "University / College",
  "Private Hostel Owner",
  "Real Estate Developer",
  "Residential School",
  "Corporate Housing",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  institution: string;
  partnerType: string;
  capacity: string;
  city: string;
  message: string;
};

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  partnerType: "",
  capacity: "",
  city: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <main>
      <Navbar />

      {/* ── Hero banner ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#12323B", paddingTop: "clamp(9rem, 15vw, 10rem)", paddingBottom: "clamp(8rem, 10vw, 8rem)" }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial mint glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 70% 30%, rgba(75,161,143,0.12) 0%, transparent 65%)" }}
        />

        <div className="container-wide relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(75,161,143,0.15)", border: "1px solid rgba(75,161,143,0.35)", color: "#81C9BD" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4BA18F] animate-pulse" />
                Partnership Enquiries
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-white mb-6 max-w-3xl"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em" }}
            >
              Partner with RoomPe.<br />
              Unlock {" "}
              <span style={{ color: "#F1C46E" }}>better living.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed max-w-xl mb-8 md:mb-10"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Whether you manage a 60-bed hostel or a 600-bed residential campus, we have a model built for you. Our partnership team responds within one business day.
            </motion.p>

            {/* Quick contact pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {(
                [
                  { icon: Mail, label: "contact@roompe.co.in", href: "mailto:contact@roompe.co.in" },
                  { icon: Phone, label: "+91 93282 27697", href: "tel:+919328227697" },
                  { icon: MapPin, label: "Ahmedabad, Gujarat", href: "#" },
                ] as { icon: React.ElementType; label: string; href: string }[]
              ).map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <Icon size={13} style={{ color: "#F1C46E" }} />
                  {label}
                </a>
              ))}
            </motion.div>

          </motion.div>
        </div>

        {/* Seamless gradient into white — absolutely at the very bottom, no gap */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "60px", background: "linear-gradient(to bottom, transparent, #FFFFFF)" }}
        />
      </section>

      {/* ── Main content ───────────────────────────────────────── */}
      <section className="section-light pt-12 pb-16 md:pt-20 md:pb-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* ── Left: Info panel ─────────────────────────────── */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Quick contact */}
              <motion.div variants={fadeUp} className="card p-5 md:p-7">
                <h2 className="display-md mb-6">Get in touch</h2>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: Mail, label: "Email", value: "contact@roompe.co.in", href: "mailto:contact@roompe.co.in" },
                    { icon: Phone, label: "Phone", value: "+91 93282 27697", href: "tel:+919328227697" },
                    { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India", href: "#" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(75,161,143,0.1)", border: "1px solid rgba(75,161,143,0.2)" }}
                      >
                        <Icon size={16} style={{ color: "#4BA18F" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#718096" }}>{label}</p>
                        <p className="text-sm font-semibold text-[#12323B] group-hover:text-[#4BA18F] transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* What to expect */}
              <motion.div variants={fadeUp} className="card p-5 md:p-7">
                <h3 className="font-bold text-[#12323B] mb-5">What happens next?</h3>
                <ol className="flex flex-col gap-5">
                  {[
                    { step: "01", title: "We review your enquiry", desc: "Our partnership team reviews your requirements and tailors a response." },
                    { step: "02", title: "Discovery call", desc: "A 30-minute call to understand your campus, capacity, and goals." },
                    { step: "03", title: "Custom proposal", desc: "We prepare a detailed proposal with pricing, SLAs, and a tech walkthrough." },
                    { step: "04", title: "Onboarding", desc: "Smooth handover — campus live within 2–4 weeks." },
                  ].map(({ step, title, desc }) => (
                    <li key={step} className="flex items-start gap-4">
                      <span
                        className="text-xs font-black flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(75,161,143,0.1)", color: "#4BA18F" }}
                      >
                        {step}
                      </span>
                      <div>
                        <p className="font-semibold text-sm text-[#12323B] mb-0.5">{title}</p>
                        <p className="text-xs text-[#718096] leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl p-6 grid grid-cols-3 gap-4"
                style={{ background: "#12323B" }}
              >
                {[
                  { icon: Building2, value: "5", label: "Campuses" },
                  { icon: Users, value: "1000+", label: "Residents" },
                  { icon: Clock, value: "< 24h", label: "Response" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center">
                    <Icon className="w-4 h-4 mx-auto mb-2" style={{ color: "#4BA18F" }} />
                    <p className="text-lg font-bold text-white">{value}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: Contact form ───────────────────────────── */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              {status === "success" ? (
                <div
                  className="card p-8 md:p-12 flex flex-col items-center text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(75,161,143,0.12)" }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: "#4BA18F" }} />
                  </div>
                  <h2 className="display-md text-[#12323B] mb-3">Message Sent!</h2>
                  <p className="text-muted text-lg mb-8 max-w-sm">
                    Thank you for reaching out. Our partnership team will get back to you within
                    one business day.
                  </p>
                  <Link href="/" className="btn-outline-mint">
                    Back to Homepage
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 md:p-10">
                  <h2 className="display-md text-[#12323B] mb-2">Send us a message</h2>
                  <p className="text-muted mb-8 text-sm">
                    Tell us about your institution and we&apos;ll get back to you within 24 hours.
                  </p>

                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        id="name" type="text" required placeholder="Dr. Anil Mehta"
                        className="form-input" value={form.name} onChange={set("name")}
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">Work Email *</label>
                      <input
                        id="email" type="email" required placeholder="name@institution.edu.in"
                        className="form-input" value={form.email} onChange={set("email")}
                      />
                    </div>
                  </div>

                  {/* Row: Phone + Institution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone" type="tel" required placeholder="+91 98765 43210"
                        className="form-input" value={form.phone} onChange={set("phone")}
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="institution">Institution Name *</label>
                      <input
                        id="institution" type="text" required placeholder="ABC University"
                        className="form-input" value={form.institution} onChange={set("institution")}
                      />
                    </div>
                  </div>

                  {/* Row: Partner type + City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label" htmlFor="partnerType">Partner Type *</label>
                      <select
                        id="partnerType" required
                        className="form-input"
                        value={form.partnerType} onChange={set("partnerType")}
                      >
                        <option value="">Select type…</option>
                        {PARTNER_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="city">City *</label>
                      <input
                        id="city" type="text" required placeholder="Ahmedabad"
                        className="form-input" value={form.city} onChange={set("city")}
                      />
                    </div>
                  </div>

                  {/* Bed capacity */}
                  <div className="mb-5">
                    <label className="form-label" htmlFor="capacity">Estimated Bed Capacity</label>
                    <input
                      id="capacity" type="text" placeholder="e.g. 200 beds"
                      className="form-input" value={form.capacity} onChange={set("capacity")}
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label className="form-label" htmlFor="message">Tell us more *</label>
                    <textarea
                      id="message" required rows={5}
                      placeholder="Describe your current situation, pain points, and what you're looking to achieve…"
                      className="form-input resize-none"
                      value={form.message} onChange={set("message")}
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-red-500 text-sm mb-5 font-medium">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold w-full justify-center text-base py-4 rounded-xl"
                    style={{ opacity: status === "loading" ? 0.7 : 1 }}
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                    {status !== "loading" && <ArrowUpRight size={18} />}
                  </button>

                  <p className="text-center text-xs mt-4" style={{ color: "#A0AEC0" }}>
                    By submitting you agree to our{" "}
                    <Link href="#" className="underline hover:text-[#4BA18F]">Privacy Policy.</Link>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
