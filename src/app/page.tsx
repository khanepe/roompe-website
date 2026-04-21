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
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-[#F8FAFC]">
      <Navbar />

      {/* Structured Enterprise Hero Section */}
      <section className="relative w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-center items-center mt-12 mb-24 overflow-hidden rounded-xl border border-estate-border bg-white p-8 lg:p-16">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left: Text & CTAs */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="text-left lg:col-span-6">
            <motion.div variants={fadeUp} className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full bg-estate-mint/10 border border-estate-mint/20 text-estate-navy font-semibold text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-estate-mint mr-2"></span> Enterprise Proptech
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-estate-navy leading-tight mb-6 tracking-tight">
              Elevating <span className="text-estate-mint">Student <br className="hidden md:block"/> Living.</span> <br className="hidden md:block"/> Redefining <span className="text-estate-mint">Operations.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-estate-muted max-w-xl mb-10 leading-relaxed">
              Western India&apos;s premier B2B student housing partner. We transform hostel infrastructure into seamless, tech-enabled experiences.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-estate-gold text-estate-navy px-8 py-3.5 rounded-lg font-bold text-lg transition-all border border-estate-gold hover:opacity-90"
              >
                Partner With Us
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-estate-navy px-8 py-3.5 rounded-lg border border-estate-border font-bold text-lg hover:bg-gray-50 transition-all"
              >
                Explore Models
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Architectural Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:col-span-6 w-full h-[500px] flex items-center justify-center bg-[#F8FAFC] rounded-xl border border-estate-border p-6"
          >
            <div className="relative w-full h-full max-w-md flex flex-col gap-6">
              {/* Graphic Card 1 */}
              <div className="bg-white border border-estate-border rounded-xl p-6 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-estate-navy rounded-lg flex items-center justify-center">
                    <Building2 className="text-white w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-1/3 bg-estate-border rounded-full"></div>
                    <div className="h-6 w-3/4 bg-estate-navy rounded-md"></div>
                  </div>
                  
                  <div className="pt-6 space-y-3">
                    <div className="flex items-center justify-between bg-[#F8FAFC] p-4 rounded-lg border border-estate-border">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-estate-mint/10 flex items-center justify-center">
                          <Bed className="text-estate-mint w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-estate-muted uppercase">Occupancy</div>
                          <div className="text-lg font-bold text-estate-navy">98.5%</div>
                        </div>
                      </div>
                      <CheckCircle className="text-estate-mint w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between bg-[#F8FAFC] p-4 rounded-lg border border-estate-border">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-estate-navy/5 flex items-center justify-center">
                          <ShieldCheck className="text-estate-navy w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-estate-muted uppercase">Security Logs</div>
                          <div className="text-lg font-bold text-estate-navy">Active</div>
                        </div>
                      </div>
                      <CheckCircle className="text-estate-mint w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Card 2 - overlapping slightly if desired, or just below */}
              <div className="absolute -bottom-8 -right-8 w-64 bg-white border border-estate-border rounded-xl p-5 z-20">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-estate-navy/5 flex items-center justify-center">
                    <SmartphoneNfc className="text-estate-navy w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 bg-estate-mint/10 text-estate-mint rounded-full text-xs font-bold tracking-wide border border-estate-mint/20">Live System</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-estate-navy mb-1">24/7</div>
                  <div className="text-sm font-semibold text-estate-muted">Automated Operations</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section id="about" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-estate-navy">
            Trusted by <span className="text-estate-mint">top institutions</span>. <br className="hidden sm:block"/> Managing <span className="text-estate-mint">300+ beds</span> across <span className="text-estate-mint">5 campuses</span>.
          </h2>
        </div>
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { value: "300+", label: "Beds Managed", icon: Bed },
            { value: "5", label: "Campuses Live", icon: GraduationCap },
            { value: "$1M", label: "Bootstrapped ARR", icon: Building2 },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-white border border-estate-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-estate-mint transition-colors cursor-pointer">
              <div className="bg-[#F8FAFC] p-4 rounded-lg mb-6 border border-estate-border">
                <stat.icon className="w-6 h-6 text-estate-mint" />
              </div>
              <h3 className="text-4xl font-extrabold text-estate-navy mb-2">{stat.value}</h3>
              <p className="text-estate-muted font-semibold uppercase tracking-wider text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
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