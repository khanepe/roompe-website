"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-estate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img src="https://res.cloudinary.com/dvqu8jllv/image/upload/v1776772997/Untitled_design_1_lciep9.png" alt="RoomPe Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-estate-navy text-sm font-semibold hover:text-estate-mint transition-colors">
                {link.name}
              </Link>
            ))}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-estate-gold text-estate-navy px-6 py-2.5 rounded-lg font-bold transition-all"
            >
              Partner With Us
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-estate-navy p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-estate-border px-4 pt-2 pb-6 flex flex-col space-y-4"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-estate-navy font-semibold text-lg py-2 hover:text-estate-mint transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-estate-gold text-estate-navy px-6 py-3 rounded-lg font-bold mt-4">
            Partner With Us
          </button>
        </motion.div>
      )}
    </nav>
  );
}