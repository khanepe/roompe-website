"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const LINKS = {
  company: [
    { name: "About RoomPe", href: "/#about" },
    { name: "Our Models", href: "/#services" },
    { name: "Technology", href: "/#technology" },
    { name: "Partner With Us", href: "/contact" },
  ],
  services: [
    { name: "Turnkey Management", href: "/#services" },
    { name: "Tech-Powered Ops", href: "/#services" },
    { name: "RoomPe App", href: "/#technology" },
  ],
  cities: ["Ahmedabad", "Gandhinagar", "Vadodara", "Rajkot", "Surat", "Bhavnagar"],
};

const CONTACT = [
  { icon: Mail, label: "satya@roompe.co.in", href: "mailto:satya@roompe.co.in" },
  { icon: Phone, label: "+91 93282 27697", href: "tel:+919328227697" },
  { icon: MapPin, label: "Ahmedabad, Gujarat, India", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#12323B" }}>

      {/* ── Gradient accent line at top ───────────────────────── */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, #4BA18F 0%, #12323B 55%, #F1C46E 100%)" }} />

      {/* ── Main grid ─────────────────────────────────────────── */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">

          {/* Brand + contact */}
          <div className="lg:col-span-4">
            {/* Logo on white pill so it's visible on navy bg */}
            <Link href="/" className="inline-block mb-7">
              <div
                className="inline-flex items-center px-5 py-3 rounded-2xl"
                style={{ background: "#FFFFFF" }}
              >
                <Image
                  src="https://res.cloudinary.com/dvqu8jllv/image/upload/v1776773778/roompe-logo_u4dpdy.png"
                  alt="RoomPe"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Western India&apos;s premier B2B student housing partner, elevating student
              living and simplifying campus operations for universities across Gujarat.
            </p>

            <div className="flex flex-col gap-3">
              {CONTACT.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-sm transition-colors group w-fit"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(75,161,143,0.12)", border: "1px solid rgba(75,161,143,0.2)" }}
                  >
                    <Icon size={12} style={{ color: "#4BA18F" }} />
                  </div>
                  <span className="group-hover:text-white transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-black uppercase tracking-[0.14em] mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              {LINKS.company.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm inline-flex items-center gap-1.5 group"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <span className="group-hover:text-white transition-colors">{l.name}</span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-black uppercase tracking-[0.14em] mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
              Solutions
            </h4>
            <ul className="flex flex-col gap-3.5">
              {LINKS.services.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm inline-flex items-center gap-1.5 group"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <span className="group-hover:text-white transition-colors">{l.name}</span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-black uppercase tracking-[0.14em] mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
              Key Locations
            </h4>
            <ul className="flex flex-col gap-2.5">
              {LINKS.cities.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#4BA18F" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{city}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── CTA strip ──────────────────────────────────────── */}
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <p className="text-white font-bold text-base mb-1">
              Ready to upgrade your campus?
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Join 5 Gujarat institutions already transforming student housing with RoomPe.
            </p>
          </div>
          <Link href="/contact" className="btn-gold flex-shrink-0 whitespace-nowrap">
            Partner With Us <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────── */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} className="mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {year} RoomPe Pvt Ltd. All rights reserved. Built with ❤️ in Gujarat.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link key={item} href="#" className="text-xs transition-colors" style={{ color: "rgba(255,255,255,0.3)" }}>
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}