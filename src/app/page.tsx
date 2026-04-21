"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, Bed, GraduationCap, ShieldCheck, UserCheck, Utensils, Smartphone, CheckCircle, SmartphoneNfc } from "lucide-react";

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
      <section className="max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center items-center mt-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Text & CTAs */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="text-left relative z-10">
            <motion.div variants={fadeUp} className="inline-block mb-6 px-5 py-2 rounded-full bg-white/40 shadow-clay-btn border border-white/60 backdrop-blur-md text-clay-textMain font-semibold text-sm">
              🚀 Western India&apos;s Fastest Growing Proptech
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-clay-textMain leading-tight mb-6">
              Elevating Student Living. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Simplifying Campus Operations.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-clay-textMuted max-w-2xl mb-10 font-medium">
              Western India&apos;s premier B2B student housing partner. We transform hostel infrastructure into seamless, tech-enabled experiences—so institutions can focus purely on education.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-clay-sm shadow-xl font-bold text-lg hover:shadow-2xl transition-all"
              >
                Partner With Us
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/50 backdrop-blur-md text-clay-textMain px-8 py-4 rounded-clay-sm shadow-clay-btn border border-white/60 font-bold text-lg hover:bg-white/70 transition-all"
              >
                Explore Models
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Visual representation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] flex items-center justify-center"
          >
            {/* Decorative blobs behind */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-20" 
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20" 
            />

            {/* Abstract Glassmorphism Dashboard Card */}
            <div className="relative w-full max-w-md bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6 z-10">
               <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center space-x-3">
                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Building2 className="text-white w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-clay-textMain text-lg">Hostel Alpha</h3>
                     <p className="text-xs text-clay-textMuted font-medium">Occupancy: 98%</p>
                   </div>
                 </div>
                 <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Online</div>
               </div>

               <div className="space-y-4">
                 <div className="bg-white/50 rounded-2xl p-4 shadow-sm border border-white/50 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                        <Bed className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-clay-textMain">Beds Allocated</p>
                        <p className="text-xs text-clay-textMuted">Today, 09:30 AM</p>
                      </div>
                    </div>
                    <span className="font-bold text-clay-textMain">+45</span>
                 </div>
                 
                 <div className="bg-white/50 rounded-2xl p-4 shadow-sm border border-white/50 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                        <SmartphoneNfc className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-clay-textMain">Maintenance Tickets</p>
                        <p className="text-xs text-clay-textMuted">Resolved: 12</p>
                      </div>
                    </div>
                    <span className="font-bold text-clay-textMain">3 Open</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-clay-textMain">
            Trusted by top institutions. <br className="hidden sm:block"/>
            Managing 300+ beds across 5 campuses with a rapidly expanding footprint.
          </h2>
        </div>
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "300+", label: "Beds Managed", icon: Bed },
            { value: "5", label: "Campuses Live", icon: GraduationCap },
            { value: "$1M", label: "Bootstrapped ARR", icon: Building2 },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border border-white/50 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center">
              <div className="bg-white/50 p-4 rounded-full shadow-clay-btn mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-extrabold text-clay-textMain mb-2">{stat.value}</h3>
              <p className="text-clay-textMuted font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-clay-textMain mb-4">Our Operating Models</h2>
          <p className="text-clay-textMuted max-w-2xl mx-auto font-medium">We offer comprehensive end-to-end B2B solutions tailored for educational institutions.</p>
        </div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border border-white/50 backdrop-blur-md p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold text-clay-textMain mb-4">Turnkey Asset Management</h3>
            <p className="text-clay-textMuted mb-6 font-medium leading-relaxed">
              We lease your hostel infrastructure, providing institutions with guaranteed, fixed rental yields. Zero operational headaches, premium maintenance, and a superior student experience.
            </p>
            <ul className="space-y-3 font-medium">
              <li className="flex items-center text-clay-textMain"><CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> Guaranteed Revenue</li>
              <li className="flex items-center text-clay-textMain"><CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> Zero Operational Headaches</li>
              <li className="flex items-center text-clay-textMain"><CheckCircle className="w-5 h-5 text-blue-600 mr-3" /> Premium Maintenance</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border border-white/50 backdrop-blur-md p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold text-clay-textMain mb-4">Operations Powered by RoomPe</h3>
            <p className="text-clay-textMuted mb-6 font-medium leading-relaxed">
              Retain complete ownership while leveraging our proprietary technology, trained hospitality staff, and rigorous SOPs. We integrate seamlessly into your campus to elevate daily management.
            </p>
            <ul className="space-y-3 font-medium">
              <li className="flex items-center text-clay-textMain"><CheckCircle className="w-5 h-5 text-purple-600 mr-3" /> Proprietary Tech Stack</li>
              <li className="flex items-center text-clay-textMain"><CheckCircle className="w-5 h-5 text-purple-600 mr-3" /> Trained Hospitality Staff</li>
              <li className="flex items-center text-clay-textMain"><CheckCircle className="w-5 h-5 text-purple-600 mr-3" /> Rigorous SOPs</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* New Section: Tech-Enabled Housing */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-clay-base rounded-clay shadow-clay border border-white/50 backdrop-blur-md p-8 md:p-16 relative overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold text-clay-textMain mb-6">Driven by Technology. <br/>Designed for Comfort.</h2>
               <p className="text-clay-textMuted text-lg font-medium leading-relaxed mb-8">
                 The RoomPe App ecosystem brings full transparency to campus housing. From digital room allocations and automated laundry tracking to smart security and maintenance ticketing, we put campus control at your students&apos; fingertips.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Digital Allocation", desc: "Seamless check-ins & onboarding" },
                    { title: "Smart Ticketing", desc: "Quick maintenance resolution" },
                    { title: "Automated Laundry", desc: "App-based scheduling" },
                    { title: "Secure Access", desc: "Digital passes & logs" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/40 border border-white/60 p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-clay-textMain">{item.title}</h4>
                      <p className="text-sm text-clay-textMuted">{item.desc}</p>
                    </div>
                  ))}
               </div>
             </div>
             <div className="relative h-[400px] flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 rounded-full blur-3xl"></div>
               <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2rem] p-4 w-64 h-[450px] flex flex-col items-center">
                 <div className="w-20 h-6 bg-black/10 rounded-b-xl absolute top-0"></div>
                 <div className="mt-8 flex-1 w-full bg-white/50 rounded-2xl p-4 shadow-inner overflow-hidden relative flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="font-bold text-sm">Hello, Student</h4>
                        <p className="text-xs text-gray-500">Room 402, Block B</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                         <div className="p-2 bg-orange-50 rounded-lg"><Utensils className="w-4 h-4 text-orange-500" /></div>
                         <div><p className="text-xs font-bold">Dinner Menu</p><p className="text-[10px] text-gray-400">View today&apos;s meal</p></div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                         <div className="p-2 bg-purple-50 rounded-lg"><Smartphone className="w-4 h-4 text-purple-500" /></div>
                         <div><p className="text-xs font-bold">Laundry Status</p><p className="text-[10px] text-gray-400">Ready for pickup</p></div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                         <div className="p-2 bg-blue-50 rounded-lg"><ShieldCheck className="w-4 h-4 text-blue-500" /></div>
                         <div><p className="text-xs font-bold">Gate Pass</p><p className="text-[10px] text-gray-400">Approved for weekend</p></div>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-clay-base rounded-clay shadow-clay border border-white/50 backdrop-blur-md p-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-clay-textMain mb-6">Ready to upgrade your campus?</h2>
          <p className="text-clay-textMuted text-lg mb-8 max-w-xl mx-auto font-medium">
            Partner with RoomPe and transform your student housing into a premium, hassle-free enterprise operation.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-clay-sm shadow-xl font-bold text-xl hover:shadow-2xl transition-all"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}