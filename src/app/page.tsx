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

  // Isometric cube components for the hero background
  const IsometricCube = ({ delay, scale, x, y, color }: { delay: number, scale: number, x: number | string, y: number | string, color: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`absolute ${color} backdrop-blur-sm border border-white/40 shadow-clay`}
      style={{
        left: x,
        top: y,
        width: 100 * scale,
        height: 100 * scale,
        transform: "rotateX(60deg) rotateZ(45deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div 
        animate={{ z: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        className="absolute inset-0 bg-white/20 border-t border-l border-white/60"
        style={{ transform: "translateZ(20px)" }}
      />
    </motion.div>
  );

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <Navbar />

      {/* Bespoke Hero Section */}
      <section className="relative max-w-7xl mx-auto min-h-[85vh] flex flex-col lg:flex-row justify-center items-center mt-12 mb-24 overflow-hidden rounded-3xl p-8 lg:p-16">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-clay-teal/20 to-clay-indigo/20 rounded-full blur-3xl mix-blend-multiply" />
          <div className="absolute -bottom-32 -left-32 w-[800px] h-[800px] bg-gradient-to-tr from-clay-orange/10 to-clay-ochre/20 rounded-full blur-3xl mix-blend-multiply" />
        </div>

        {/* Geometric/Isometric Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
           <IsometricCube delay={0.2} scale={1.5} x="60%" y="20%" color="bg-clay-teal/30" />
           <IsometricCube delay={0.4} scale={1} x="80%" y="50%" color="bg-clay-ochre/30" />
           <IsometricCube delay={0.6} scale={2} x="70%" y="60%" color="bg-clay-indigo/20" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left: Text & CTAs (Asymmetric) */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="text-left lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-block mb-6 px-5 py-2 rounded-full bg-white/60 shadow-clay-btn border border-white/80 backdrop-blur-md text-clay-navy font-bold text-sm tracking-wide uppercase">
              <span className="text-clay-orange mr-2">✦</span> Enterprise Proptech
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-clay-navy leading-[1.1] mb-6 tracking-tight">
              Elevating Student <br className="hidden md:block"/> Living. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-orange via-clay-ochre to-clay-teal">
                Redefining Operations.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-clay-navy/80 max-w-xl mb-10 font-medium leading-relaxed">
              Western India&apos;s premier B2B student housing partner. We transform hostel infrastructure into seamless, tech-enabled experiences.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-clay-orange to-[#ff8c61] text-white px-10 py-4 rounded-clay-sm shadow-[0_10px_25px_-5px_rgba(255,107,53,0.5)] font-bold text-lg transition-all"
              >
                Partner With Us
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/70 backdrop-blur-xl text-clay-navy px-10 py-4 rounded-clay-sm shadow-clay-btn border border-white/80 font-bold text-lg hover:bg-white transition-all"
              >
                Explore Models
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Bespoke Visual Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:col-span-5 w-full h-[550px] flex items-center justify-center"
          >
            {/* Interactive Nodes Graphic */}
            <div className="relative w-full h-full max-w-md">
               <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-0 w-full h-4/5 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_-10px_rgba(19,51,63,0.1)] rounded-[2.5rem] p-8 z-10 flex flex-col justify-between"
               >
                 <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-clay-teal to-clay-indigo rounded-2xl flex items-center justify-center shadow-lg border border-white/50 mb-8">
                       <Building2 className="text-white w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-1/3 bg-clay-navy/10 rounded-full"></div>
                      <div className="h-8 w-3/4 bg-clay-navy/90 rounded-lg"></div>
                    </div>
                    
                    <div className="pt-6 space-y-4">
                      <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-white/60 shadow-sm">
                         <div className="w-12 h-12 rounded-xl bg-clay-orange/10 flex items-center justify-center">
                           <Bed className="text-clay-orange w-6 h-6" />
                         </div>
                         <div>
                           <div className="text-xs font-bold text-clay-navy/60 uppercase">Occupancy</div>
                           <div className="text-xl font-bold text-clay-navy">98.5%</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-white/60 shadow-sm">
                         <div className="w-12 h-12 rounded-xl bg-clay-teal/10 flex items-center justify-center">
                           <ShieldCheck className="text-clay-teal w-6 h-6" />
                         </div>
                         <div>
                           <div className="text-xs font-bold text-clay-navy/60 uppercase">Security Logs</div>
                           <div className="text-xl font-bold text-clay-navy">Active</div>
                         </div>
                      </div>
                    </div>
                 </div>

                 {/* Decorative geometric connection */}
                 <svg className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-24 h-24 hidden lg:block opacity-50" viewBox="0 0 100 100">
                    <path d="M0 50 L100 50" stroke="#13333F" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx="100" cy="50" r="4" fill="#13333F" />
                 </svg>
               </motion.div>

               <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-0 -right-8 lg:-right-16 w-64 h-64 bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_-10px_rgba(19,51,63,0.15)] rounded-3xl p-6 z-20"
               >
                 <div className="h-full flex flex-col">
                   <div className="flex justify-between items-start mb-6">
                     <div className="w-10 h-10 rounded-xl bg-clay-ochre/20 flex items-center justify-center">
                       <SmartphoneNfc className="text-clay-ochre w-5 h-5" />
                     </div>
                     <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-wide">Live</span>
                   </div>
                   <div className="mt-auto">
                     <div className="text-3xl font-bold text-clay-navy mb-1">24/7</div>
                     <div className="text-sm font-semibold text-clay-navy/60">Automated Operations</div>
                   </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-clay-teal to-clay-indigo">
            Trusted by top institutions. <br className="hidden sm:block"/>
            Managing 300+ beds across 5 campuses.
          </h2>
        </div>
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "300+", label: "Beds Managed", icon: Bed, color: "text-clay-teal" },
            { value: "5", label: "Campuses Live", icon: GraduationCap, color: "text-clay-orange" },
            { value: "$1M", label: "Bootstrapped ARR", icon: Building2, color: "text-clay-indigo" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border border-white/50 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center">
              <div className="bg-white/80 p-4 rounded-full shadow-clay-btn mb-4 border border-white/90">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <h3 className="text-4xl font-extrabold text-clay-navy mb-2">{stat.value}</h3>
              <p className="text-clay-navy/70 font-bold uppercase tracking-wider text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-clay-orange to-clay-ochre mb-4">Our Operating Models</h2>
          <p className="text-clay-navy/70 max-w-2xl mx-auto font-medium text-lg">We offer comprehensive end-to-end B2B solutions tailored for educational institutions.</p>
        </div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border-t-4 border-t-clay-teal border-x border-x-white/50 border-b border-b-white/50 backdrop-blur-md p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-clay-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold text-clay-navy mb-4">Turnkey Asset Management</h3>
            <p className="text-clay-navy/80 mb-6 font-medium leading-relaxed">
              We lease your hostel infrastructure, providing institutions with guaranteed, fixed rental yields. Zero operational headaches, premium maintenance, and a superior student experience.
            </p>
            <ul className="space-y-4 font-bold text-sm">
              <li className="flex items-center text-clay-navy"><CheckCircle className="w-5 h-5 text-clay-teal mr-3" /> Guaranteed Revenue</li>
              <li className="flex items-center text-clay-navy"><CheckCircle className="w-5 h-5 text-clay-teal mr-3" /> Zero Operational Headaches</li>
              <li className="flex items-center text-clay-navy"><CheckCircle className="w-5 h-5 text-clay-teal mr-3" /> Premium Maintenance</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-clay-base rounded-clay shadow-clay border-t-4 border-t-clay-orange border-x border-x-white/50 border-b border-b-white/50 backdrop-blur-md p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-clay-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold text-clay-navy mb-4">Operations Powered by RoomPe</h3>
            <p className="text-clay-navy/80 mb-6 font-medium leading-relaxed">
              Retain complete ownership while leveraging our proprietary technology, trained hospitality staff, and rigorous SOPs. We integrate seamlessly into your campus to elevate daily management.
            </p>
            <ul className="space-y-4 font-bold text-sm">
              <li className="flex items-center text-clay-navy"><CheckCircle className="w-5 h-5 text-clay-orange mr-3" /> Proprietary Tech Stack</li>
              <li className="flex items-center text-clay-navy"><CheckCircle className="w-5 h-5 text-clay-orange mr-3" /> Trained Hospitality Staff</li>
              <li className="flex items-center text-clay-navy"><CheckCircle className="w-5 h-5 text-clay-orange mr-3" /> Rigorous SOPs</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech-Enabled Housing */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-clay-base rounded-clay shadow-clay border border-white/50 backdrop-blur-md p-8 md:p-16 relative overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-clay-indigo to-clay-teal mb-6">
                 Driven by Technology. <br/>Designed for Comfort.
               </h2>
               <p className="text-clay-navy/80 text-lg font-medium leading-relaxed mb-8">
                 The RoomPe App ecosystem brings full transparency to campus housing. From digital room allocations and automated laundry tracking to smart security and maintenance ticketing, we put campus control at your students&apos; fingertips.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { title: "Digital Allocation", desc: "Seamless onboarding" },
                    { title: "Smart Ticketing", desc: "Quick resolutions" },
                    { title: "Automated Laundry", desc: "App-based tracking" },
                    { title: "Secure Access", desc: "Digital passes & logs" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/60 border border-white/80 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-clay-navy mb-1">{item.title}</h4>
                      <p className="text-sm font-medium text-clay-navy/60">{item.desc}</p>
                    </div>
                  ))}
               </div>
             </div>
             <div className="relative h-[450px] flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-clay-teal/20 to-clay-ochre/20 rounded-full blur-3xl opacity-60"></div>
               <div className="relative z-10 bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-10px_rgba(19,51,63,0.15)] rounded-[2.5rem] p-4 w-72 h-[480px] flex flex-col items-center">
                 <div className="w-24 h-6 bg-clay-navy/10 rounded-b-2xl absolute top-0"></div>
                 <div className="mt-8 flex-1 w-full bg-white/80 rounded-[1.5rem] p-5 shadow-inner overflow-hidden relative flex flex-col border border-white/50">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h4 className="font-extrabold text-clay-navy text-base">Hello, Student</h4>
                        <p className="text-xs font-bold text-clay-navy/50">Room 402, Block B</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-clay-teal/10 flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-clay-teal" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100/50 flex items-center gap-4">
                         <div className="p-3 bg-clay-orange/10 rounded-xl"><Utensils className="w-5 h-5 text-clay-orange" /></div>
                         <div><p className="text-sm font-bold text-clay-navy">Dinner Menu</p><p className="text-[11px] font-medium text-clay-navy/50">View today&apos;s meal</p></div>
                      </div>
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100/50 flex items-center gap-4">
                         <div className="p-3 bg-clay-indigo/10 rounded-xl"><Smartphone className="w-5 h-5 text-clay-indigo" /></div>
                         <div><p className="text-sm font-bold text-clay-navy">Laundry Status</p><p className="text-[11px] font-medium text-clay-navy/50">Ready for pickup</p></div>
                      </div>
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100/50 flex items-center gap-4">
                         <div className="p-3 bg-clay-teal/10 rounded-xl"><ShieldCheck className="w-5 h-5 text-clay-teal" /></div>
                         <div><p className="text-sm font-bold text-clay-navy">Gate Pass</p><p className="text-[11px] font-medium text-clay-navy/50">Approved for weekend</p></div>
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
          className="bg-clay-base rounded-clay shadow-clay border border-white/50 backdrop-blur-md p-12 lg:p-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-clay-navy to-clay-indigo mb-6">Ready to upgrade your campus?</h2>
          <p className="text-clay-navy/70 text-lg mb-10 max-w-xl mx-auto font-medium">
            Partner with RoomPe and transform your student housing into a premium, hassle-free enterprise operation.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-clay-indigo to-blue-500 text-white px-12 py-5 rounded-clay-sm shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)] font-bold text-xl transition-all"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}