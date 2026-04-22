"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Technology", href: "/#technology" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_12px_rgba(18,50,59,0.09)]" : "shadow-none border-b border-[#E2E8F0]"
        }`}
    >
      <div className="container-wide">
        <div className="flex justify-between items-center h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dvqu8jllv/image/upload/v1776773778/roompe-logo_u4dpdy.png"
              alt="RoomPe"
              width={140}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link key={l.name} href={l.href} className="nav-link font-medium">
                {l.name}
              </Link>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-gold text-sm px-6 py-2.5 rounded-lg">
              Partner With Us
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 text-[#718096] hover:text-[#12323B] transition-colors rounded-lg hover:bg-[#F8FAFC]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white border-t border-[#E2E8F0]"
      >
        <div className="container-wide py-6 flex flex-col gap-1">
          {links.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, x: -8 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-[#718096] hover:text-[#12323B] font-medium text-base rounded-lg hover:bg-[#F8FAFC] transition-colors"
              >
                {l.name}
              </Link>
            </motion.div>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-gold mt-3 justify-center text-sm py-3"
          >
            Partner With Us
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}