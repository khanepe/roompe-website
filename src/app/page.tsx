"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, Bed, GraduationCap, ShieldCheck, UserCheck, Utensils, Smartphone, CheckCircle,  } from "lucide-react";

export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <main className="min-h-screen pb-12 bg-[#F8FAFC]">
      <Navbar />

      {/* Full-Bleed Image Hero Section */}
      <section 
        className="relative w-full min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center mt-0 mb-24"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dvqu8jllv/image/upload/v1776774773/Untitled_design_4_fondbs.jpg')" }}
      >
        <div className="absolute inset-0 bg-estate-navy/60 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 mt-12">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col items-center">
            <motion.div variants={fadeUp} className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full bg-estate-mint/20 border border-estate-mint/30 text-white font-semibold text-sm tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-estate-mint mr-2"></span> Enterprise Proptech
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Elevating <span className="text-estate-mint">Student <br className="hidden md:block"/> Living.</span> <br className="hidden md:block"/> Redefining <span className="text-estate-mint">Operations.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed font-medium">
              Western India&apos;s premier B2B student housing partner. We transform hostel infrastructure into seamless, tech-enabled experiences.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-estate-gold text-estate-navy px-10 py-4 rounded-lg font-bold text-lg transition-all hover:bg-[#E5B542]"
              >
                Partner With Us
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-lg border border-white/30 font-bold text-lg hover:bg-white/20 transition-all"
              >
                Explore Models
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section id="about" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="w-full bg-estate-mint py-20 mb-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-estate-navy">
              Trusted by top institutions. <br className="hidden sm:block"/> Managing 300+ beds across 5 campuses.
            </h2>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { value: "300+", label: "Beds Managed", icon: Bed },
              { value: "5", label: "Campuses Live", icon: GraduationCap },
              { value: "$1M", label: "Bootstrapped ARR", icon: Building2 },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="p-8 flex flex-col items-center justify-center text-center transition-transform cursor-pointer">
                <div className="p-4 rounded-lg mb-6 border border-estate-navy/10 bg-estate-navy/5">
                  <stat.icon className="w-8 h-8 text-estate-navy" />
                </div>
                <h3 className="text-4xl font-extrabold text-estate-navy mb-2">{stat.value}</h3>
                <p className="text-estate-navy/80 font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section id="services" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-estate-navy mb-4">Our <span className="text-estate-mint">Operating Models</span></h2>
          <p className="text-estate-muted max-w-2xl mx-auto text-lg">We offer comprehensive end-to-end B2B solutions tailored for educational institutions.</p>
        </div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="bg-white rounded-xl border border-estate-border p-8 md:p-10 flex flex-col h-full hover:border-estate-mint transition-colors cursor-pointer">
            <h3 className="text-2xl font-bold text-estate-navy mb-4"><span className="text-estate-mint">Turnkey</span> Asset Management</h3>
            <p className="text-estate-muted mb-8 leading-relaxed flex-grow">
              We lease your hostel infrastructure, providing institutions with guaranteed, fixed rental yields. Zero operational headaches, premium maintenance, and a superior student experience.
            </p>
            <ul className="space-y-4 font-semibold text-sm">
              <li className="flex items-center text-estate-navy"><CheckCircle className="w-5 h-5 text-estate-mint mr-3" /> Guaranteed Revenue</li>
              <li className="flex items-center text-estate-navy"><CheckCircle className="w-5 h-5 text-estate-mint mr-3" /> Zero Operational Headaches</li>
              <li className="flex items-center text-estate-navy"><CheckCircle className="w-5 h-5 text-estate-mint mr-3" /> Premium Maintenance</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="bg-white rounded-xl border border-estate-border p-8 md:p-10 flex flex-col h-full hover:border-estate-mint transition-colors cursor-pointer">
            <h3 className="text-2xl font-bold text-estate-navy mb-4">Operations Powered by <span className="text-estate-mint">RoomPe</span></h3>
            <p className="text-estate-muted mb-8 leading-relaxed flex-grow">
              Retain complete ownership while leveraging our proprietary technology, trained hospitality staff, and rigorous SOPs. We integrate seamlessly into your campus to elevate daily management.
            </p>
            <ul className="space-y-4 font-semibold text-sm">
              <li className="flex items-center text-estate-navy"><CheckCircle className="w-5 h-5 text-estate-mint mr-3" /> Proprietary Tech Stack</li>
              <li className="flex items-center text-estate-navy"><CheckCircle className="w-5 h-5 text-estate-mint mr-3" /> Trained Hospitality Staff</li>
              <li className="flex items-center text-estate-navy"><CheckCircle className="w-5 h-5 text-estate-mint mr-3" /> Rigorous SOPs</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Tech-Enabled Housing */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-24">
        <div className="bg-white rounded-xl border border-estate-border p-8 md:p-16">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-estate-navy mb-6">
                 Driven by <span className="text-estate-mint">Technology</span>. <br/>Designed for <span className="text-estate-mint">Comfort</span>.
               </h2>
               <p className="text-estate-muted text-lg leading-relaxed mb-8">
                 The RoomPe App ecosystem brings full transparency to campus housing. From digital room allocations and automated laundry tracking to smart security and maintenance ticketing, we put campus control at your students&apos; fingertips.
               </p>
               <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Digital Allocation", desc: "Seamless onboarding" },
                    { title: "Smart Ticketing", desc: "Quick resolutions" },
                    { title: "Automated Laundry", desc: "App-based tracking" },
                    { title: "Secure Access", desc: "Digital passes & logs" }
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ y: -8 }} variants={fadeUp} className="bg-[#F8FAFC] border border-estate-border hover:border-estate-mint transition-colors p-5 rounded-lg cursor-pointer">
                      <h4 className="font-bold text-estate-navy mb-1">{item.title}</h4>
                      <p className="text-sm text-estate-muted">{item.desc}</p>
                    </motion.div>
                  ))}
               </motion.div>
             </div>
             
             {/* App UI Representation */}
             <div className="relative flex items-center justify-center">
               <div className="bg-[#F8FAFC] border border-estate-border rounded-[2rem] p-4 w-72 h-[500px] flex flex-col relative">
                 <div className="w-20 h-5 bg-estate-border rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2"></div>
                 <div className="mt-6 flex-1 w-full bg-white rounded-[1.2rem] p-5 border border-estate-border overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h4 className="font-bold text-estate-navy text-sm">Hello, Student</h4>
                        <p className="text-xs text-estate-muted">Room 402, Block B</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-estate-navy/5 flex items-center justify-center border border-estate-border">
                        <UserCheck className="w-5 h-5 text-estate-navy" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#F8FAFC] p-3.5 rounded-lg border border-estate-border flex items-center gap-3">
                         <div className="p-2 bg-white rounded-md border border-estate-border"><Utensils className="w-4 h-4 text-estate-navy" /></div>
                         <div><p className="text-sm font-bold text-estate-navy">Dinner Menu</p><p className="text-[11px] text-estate-muted">View today&apos;s meal</p></div>
                      </div>
                      <div className="bg-[#F8FAFC] p-3.5 rounded-lg border border-estate-border flex items-center gap-3">
                         <div className="p-2 bg-white rounded-md border border-estate-border"><Smartphone className="w-4 h-4 text-estate-navy" /></div>
                         <div><p className="text-sm font-bold text-estate-navy">Laundry Status</p><p className="text-[11px] text-estate-muted">Ready for pickup</p></div>
                      </div>
                      <div className="bg-[#F8FAFC] p-3.5 rounded-lg border border-estate-border flex items-center gap-3">
                         <div className="p-2 bg-white rounded-md border border-estate-border"><ShieldCheck className="w-4 h-4 text-estate-navy" /></div>
                         <div><p className="text-sm font-bold text-estate-navy">Gate Pass</p><p className="text-[11px] text-estate-muted">Approved for weekend</p></div>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </motion.section>

      {/* Expanding Horizons Section */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="w-full bg-estate-navy py-24 mb-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Expanding Horizons</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Founded in 2020 by Deval Patel & Satya Mehta, RoomPe has quickly established itself in 5 campuses across Gujarat. 
              Our vision is to scale this operational excellence to more institutions.
            </p>
            <div className="pt-4">
              <h4 className="font-bold text-white mb-3">Target Cities</h4>
              <div className="flex flex-wrap gap-3">
                {['Ahmedabad', 'Gandhinagar', 'Vadodara', 'Rajkot', 'Surat', 'Bhavnagar'].map((city) => (
                  <span key={city} className="bg-estate-navy px-4 py-2 rounded-full text-sm font-semibold text-estate-mint border border-estate-mint/30">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4">
               <h4 className="font-bold text-white mb-3">Future Roadmap</h4>
               <p className="text-estate-gold font-semibold">Residential Schools • Corporate Accommodations</p>
            </div>
          </div>
          <div className="flex-1 w-full relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
             {/* Abstract Map Graphic */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-estate-mint/20 via-transparent to-transparent"></div>
             <Building2 className="w-32 h-32 text-estate-gold opacity-50" />
          </div>
        </div>
      </motion.section>


      {/* CTA Section */}
      <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="bg-white rounded-xl border border-estate-border p-12 lg:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-estate-navy mb-6">Ready to <span className="text-estate-mint">upgrade</span> your campus?</h2>
          <p className="text-estate-muted text-lg mb-10 max-w-xl mx-auto">
            Partner with RoomPe and transform your student housing into a premium, hassle-free enterprise operation.
          </p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-estate-gold text-estate-navy px-10 py-4 rounded-lg font-bold text-lg transition-all hover:opacity-90"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}