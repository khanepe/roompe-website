"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, Bed, GraduationCap, ShieldCheck, UserCheck, Utensils } from "lucide-react";

export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" as const } }
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center items-center text-center mt-12 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-clay-base rounded-clay shadow-clay border border-white/50 p-8 md:p-16 lg:p-24 w-full relative overflow-hidden"
        >
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-16 h-16 bg-clay-accent3 rounded-full blur-2xl opacity-40" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 w-24 h-24 bg-clay-accent2 rounded-full blur-2xl opacity-40" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/4 w-32 h-32 bg-clay-accent1 rounded-full blur-3xl opacity-30" 
          />

          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10">
            <motion.div variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/40 shadow-clay-btn border border-white backdrop-blur-sm text-clay-textMain font-medium text-sm">
              🚀 Western India&apos;s Fastest Growing Student Housing
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-clay-textMain leading-tight mb-6">
              Redefining <span className="text-clay-accent3">Student Housing</span> & Management.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-clay-textMuted max-w-2xl mx-auto mb-10">
              Let universities focus on studies and student activities, while we take care of all daily hostel management from room allocation to check-out.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-clay-accent3 text-white px-8 py-4 rounded-clay-sm shadow-clay-btn font-bold text-lg"
              >
                Get Started
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-clay-base text-clay-textMain px-8 py-4 rounded-clay-sm shadow-clay-btn border border-white font-bold text-lg"
              >
                Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="about" className="max-w-6xl mx-auto mb-24">
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "300+", label: "Beds Managed", icon: Bed },
            { value: "5", label: "Campuses Live", icon: GraduationCap },
            { value: "$1M", label: "Bootstrapped ARR", icon: Building2 },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border border-white/50 p-8 flex flex-col items-center justify-center text-center">
              <div className="bg-white/40 p-4 rounded-full shadow-clay-btn mb-4">
                <stat.icon className="w-8 h-8 text-clay-accent3" />
              </div>
              <h3 className="text-4xl font-extrabold text-clay-textMain mb-2">{stat.value}</h3>
              <p className="text-clay-textMuted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-clay-textMain mb-4">Our Models & Services</h2>
          <p className="text-clay-textMuted max-w-2xl mx-auto">We offer comprehensive end-to-end B2B solutions tailored for educational institutions.</p>
        </div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border border-white/50 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-clay-accent3/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold text-clay-textMain mb-4">Lease to Operate</h3>
            <p className="text-clay-textMuted mb-6">Universities lease their property to RoomPe. We handle everything from the ground up, guaranteeing revenue and maintaining the property at enterprise standards.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-clay-textMain"><span className="w-2 h-2 bg-clay-accent3 rounded-full mr-3"></span> Zero operational headache</li>
              <li className="flex items-center text-clay-textMain"><span className="w-2 h-2 bg-clay-accent3 rounded-full mr-3"></span> Fixed rental yield</li>
              <li className="flex items-center text-clay-textMain"><span className="w-2 h-2 bg-clay-accent3 rounded-full mr-3"></span> Premium maintenance</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border border-white/50 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-clay-accent2/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold text-clay-textMain mb-4">Management Contract</h3>
            <p className="text-clay-textMuted mb-6">Institutions retain full control while RoomPe operates the hostel management layer. We deploy our staff, tech, and SOPs to ensure smooth day-to-day running.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-clay-textMain"><span className="w-2 h-2 bg-clay-accent2 rounded-full mr-3"></span> Tech-driven allocation</li>
              <li className="flex items-center text-clay-textMain"><span className="w-2 h-2 bg-clay-accent2 rounded-full mr-3"></span> Staffing & Security</li>
              <li className="flex items-center text-clay-textMain"><span className="w-2 h-2 bg-clay-accent2 rounded-full mr-3"></span> Quality control & Audits</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* End to End Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Food Services", icon: Utensils },
            { label: "Housekeeping", icon: Building2 },
            { label: "Security", icon: ShieldCheck },
            { label: "Staffing", icon: UserCheck },
          ].map((feat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-clay-base rounded-clay-sm shadow-clay border border-white/40 p-6 flex flex-col items-center justify-center text-center">
              <feat.icon className="w-8 h-8 text-clay-accent1 mb-3" />
              <span className="font-semibold text-clay-textMain">{feat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision & Expansion */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-clay-base rounded-clay shadow-clay border border-white/50 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-clay-textMain">Expanding Horizons</h2>
            <p className="text-clay-textMuted text-lg leading-relaxed">
              Founded in 2020 by Deval Patel & Satya Mehta, RoomPe has quickly established itself in 5 campuses across Gujarat. 
              Our vision is to scale this operational excellence to more institutions.
            </p>
            <div className="pt-4">
              <h4 className="font-bold text-clay-textMain mb-3">Target Cities</h4>
              <div className="flex flex-wrap gap-3">
                {['Ahmedabad', 'Gandhinagar', 'Vadodara', 'Rajkot', 'Surat', 'Bhavnagar'].map((city) => (
                  <span key={city} className="bg-white/50 shadow-clay-btn px-4 py-2 rounded-full text-sm font-semibold text-clay-textMain border border-white">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4">
               <h4 className="font-bold text-clay-textMain mb-3">Future Roadmap</h4>
               <p className="text-clay-textMuted">Residential Schools • Corporate Accommodations</p>
            </div>
          </div>
          <div className="flex-1 w-full relative h-[300px] md:h-[400px] bg-white/20 rounded-clay shadow-clay-active border border-white/30 flex items-center justify-center overflow-hidden">
             {/* Abstract Map Graphic */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-clay-accent3 via-transparent to-transparent"></div>
             <Building2 className="w-32 h-32 text-clay-accent1 opacity-50" />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-clay-base rounded-clay shadow-clay border border-white/50 p-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-clay-textMain mb-6">Ready to upgrade your campus?</h2>
          <p className="text-clay-textMuted text-lg mb-8 max-w-xl mx-auto">
            Partner with RoomPe and transform your student housing into a premium, hassle-free enterprise operation.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-clay-accent3 text-white px-10 py-4 rounded-clay-sm shadow-clay-btn font-bold text-xl"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}