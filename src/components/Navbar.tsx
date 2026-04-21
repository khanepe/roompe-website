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
    <nav className="fixed top-0 w-full z-50 p-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="max-w-6xl mx-auto bg-clay-base/50 backdrop-blur-md rounded-clay shadow-clay border border-white/50 p-4 flex justify-between items-center"
      >
        <Link href="/">
          <img src="https://res.cloudinary.com/dvqu8jllv/image/upload/v1776772997/Untitled_design_1_lciep9.png" alt="RoomPe Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-clay-navy font-semibold hover:text-clay-teal transition-colors">
              {link.name}
            </Link>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-clay-orange text-white px-6 py-2 rounded-clay-sm shadow-clay-btn font-bold hover:bg-opacity-90 transition-all"
          >
            Partner With Us
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-clay-textMain" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-4 right-4 bg-clay-base rounded-clay shadow-clay border border-white/50 p-6 flex flex-col space-y-4"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-clay-navy font-semibold text-lg border-b border-white/50 pb-2 hover:text-clay-teal transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-clay-orange text-white px-6 py-3 rounded-clay-sm shadow-clay-btn font-bold mt-4">
            Partner With Us
          </button>
        </motion.div>
      )}
    </nav>
  );
}