"use client";

import { motion } from "framer-motion";
import { Check, Mail, Zap, Shield, Star, Lightbulb, Users, ThumbsUp, Leaf } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <main className="min-h-screen bg-white text-[#002B5B]">
      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-panel top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Zap className="h-8 w-8 text-[#002B5B]" />
              <span className="text-2xl font-extrabold tracking-tight">EXECUTOR <span className="text-[#EA5455]">Killer</span></span>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="mailto:electricmosquitokiller@gmail.com" className="bg-[#002B5B] hover:bg-[#001D3D] text-white transition-colors flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full shadow-md">
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 flex items-center border-b border-gray-200">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#002B5B]/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-[#002B5B]/10 text-[#002B5B] px-4 py-2 rounded-full font-bold mb-8 text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>#1 Rated Mosquito Killer 2026</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold text-[#002B5B] leading-tight mb-6">
                Protect Your Family from <span className="text-[#EA5455]">Mosquitoes</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                Experience peaceful, bite-free nights. Our electric mosquito killer is safe, quiet, chemical-free, and 100% effective for any room in your house.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 bg-white p-6 rounded-2xl border-l-4 border-[#EA5455] shadow-md">
                <div className="flex flex-col">
                  <span className="text-gray-400 line-through text-lg font-semibold">Rs. 2,000</span>
                  <span className="text-4xl font-extrabold text-[#EA5455]">Rs. 1,500 <span className="text-xl font-bold text-gray-500">/ piece</span></span>
                </div>
                <div className="bg-[#EA5455] text-white px-3 py-1.5 rounded-lg font-bold text-sm bounce-soft self-start mt-2 shadow-sm">
                  Limited Time Offer!
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <a href="#order" className="pulse-glow inline-flex justify-center items-center px-10 py-5 text-lg font-bold rounded-full text-white bg-[#002B5B] hover:bg-[#001D3D] transition-all transform hover:-translate-y-1 shadow-lg w-full sm:w-auto text-center">
                  Order Now at Discount
                </a>
              </motion.div>

              <motion.ul variants={stagger} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['100% Chemical Free', 'Safe & Ultra-Quiet', 'Energy Efficient (Low Bill)', 'Easy to Clean Design'].map((feature, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="bg-[#002B5B]/10 p-1.5 rounded-full"><Check className="h-4 w-4 text-[#002B5B] font-bold" /></div>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-md mx-auto mt-12 lg:mt-0"
            >
              <div className="absolute -top-6 -right-6 z-20 float-badge bg-[#EA5455] text-white w-32 h-32 rounded-full flex flex-col items-center justify-center font-bold text-center border-4 border-white shadow-xl">
                <span className="text-sm">Price</span>
                <span className="text-2xl leading-none">Rs. 1500<br/><span className="text-sm">/ piece</span></span>
              </div>
              
              <div className="relative rounded-3xl overflow-hidden float-img shadow-2xl border-4 border-white bg-white aspect-[3/4] flex items-center justify-center p-4">
                 {/* USING THE USER PROVIDED FRONT IMAGE directly if it exists, otherwise fall back */}
                 <img src="/front-image-png.png" alt="Front View" className="w-full h-full object-contain" onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                 }} />
                 <div className="absolute inset-0 flex-col items-center justify-center p-8 text-center text-gray-500 bg-gray-100 hidden">
                    <Zap className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="font-bold text-xl mb-2">Front Image Needed</p>
                    <p className="text-sm">Save your 1st image as <br/>`public/front-image.png`</p>
                 </div>
                 
                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-max z-30">
                    <span className="inline-flex items-center gap-2 bg-[#EA5455] text-white px-4 py-2 rounded-full font-bold shadow-lg border-2 border-white text-sm pulse-glow">
                      <Zap className="h-4 w-4 text-yellow-300 fill-yellow-300" /> 2 Hours Battery
                    </span>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-[#002B5B] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-90 font-semibold">
           <div className="flex items-center gap-2"><Shield className="w-5 h-5"/> 100% Safe </div>
           <div className="flex items-center gap-2"><Zap className="w-5 h-5"/> High Efficiency</div>
           <div className="flex items-center gap-2"><ThumbsUp className="w-5 h-5"/> Premium Quality</div>
           <div className="flex items-center gap-2"><Leaf className="w-5 h-5"/> Eco-Friendly</div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-extrabold text-[#002B5B] mb-6"
             >
               How It Works
             </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600 font-medium"
             >
                Built with advanced technology to ensure maximum protection for you and your family.
             </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/5] flex items-center justify-center">
                 {/* USING THE USER PROVIDED DETAILS IMAGE */}
                 <img src="/details-image-png.jpeg" alt="Device Features" className="w-full h-full object-cover" onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                 }} />
                 <div className="absolute inset-0 flex-col items-center justify-center p-8 text-center text-gray-500 bg-gray-100 hidden">
                    <Shield className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="font-bold text-xl mb-2">Details Image Needed</p>
                    <p className="text-sm">Save your 2nd image as <br/>`public/details-image.png`</p>
                 </div>
              </div>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-max z-30">
                <span className="inline-flex items-center gap-2 bg-[#EA5455] text-white px-6 py-3 rounded-full font-bold shadow-lg border-2 border-white pulse-glow">
                  <Zap className="h-5 w-5 text-yellow-300 fill-yellow-300" /> 2 Hours Battery Timing
                </span>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Switch Button", desc: "Easy one-touch operation. Turn it on and let it do the work instantly." },
                  { icon: Lightbulb, title: "LED Lamp Beads", desc: "Attracts mosquitoes with highly effective, specially calibrated UV light." },
                  { icon: Zap, title: "High-Voltage Grid", desc: "Instantly zaps and eliminates pests upon contact with the internal grid." },
                  { icon: Shield, title: "PVC Protective Cover", desc: "100% safe exterior grid prevents accidental shocks for kids and pets." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 hover:border-[#002B5B]/30"
                  >
                    <div className="bg-[#002B5B]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-[#002B5B]">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#002B5B] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50 border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-extrabold text-[#002B5B] mb-16 pt-8"
             >
               Why Every Home Needs This
             </motion.h2>

             <div className="flex flex-col lg:flex-row gap-12 items-center pb-8 border-b-0">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="flex-1 w-full max-w-lg mx-auto"
               >
                 <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] flex items-center justify-center relative">
                   <img src="/mosquitoes-image-png.jpeg" alt="Mosquitoes Killed" className="w-full h-full object-cover" onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                   }} />
                   <div className="absolute inset-0 flex-col items-center justify-center p-8 text-center text-gray-500 bg-gray-100 hidden">
                      <Zap className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="font-bold text-xl mb-2">3rd Image Needed</p>
                      <p className="text-sm">Save your 3rd image as <br/>`public/mosquitoes-image.png`</p>
                   </div>
                 </div>
                 
                 <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-max z-30">
                  <span className="inline-flex items-center gap-2 bg-[#EA5455] text-white px-6 py-3 rounded-full font-bold shadow-lg border-2 border-white pulse-glow">
                    <Zap className="h-5 w-5 text-yellow-300 fill-yellow-300" /> 2 Hours Battery Timing
                  </span>
                 </div>
               </motion.div>

               <div className="flex-1 grid gap-6">
                 {[
                    { icon: Users, title: "Family Safe", desc: "No poisonous sprays, no smoke, no chemicals. Completely safe to use around babies and pregnant women." },
                    { icon: Zap, title: "Energy Saving", desc: "Consumes very little electricity. You can leave it on all night without worrying about your electric bill." },
                    { icon: Shield, title: "Durable Design", desc: "Made with high-quality, sturdy materials designed to last for years of continuous use." }
                 ].map((benefit, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 * i }}
                       className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start text-left gap-4"
                    >
                       <div className="bg-[#EA5455]/10 p-4 rounded-full flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-[#EA5455]" />
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-[#002B5B] mb-2">{benefit.title}</h3>
                         <p className="text-gray-600 font-medium text-sm">{benefit.desc}</p>
                       </div>
                    </motion.div>
                 ))}
               </div>
             </div>
         </div>
      </section>

      {/* Exclusive Deal Section */}
      <section className="py-24 bg-gradient-to-br from-[#002B5B] to-[#001D3D] relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#EA5455]/20 rounded-full blur-[100px] -z-0" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#00e5ff]/10 rounded-full blur-[100px] -z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 bg-[#EA5455] text-white px-5 py-2.5 rounded-full font-bold mb-6 shadow-lg pulse-glow text-sm uppercase tracking-wider"
             >
               <Zap className="h-4 w-4 fill-white" />
               Limited Time Mega Deal
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-5xl font-extrabold text-white mb-6"
             >
               Family Protection Bundle
             </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-blue-100 font-medium"
             >
                Secure every room in your house. Get our exclusive Pack of 5 at an unbeatable wholesale price.
             </motion.p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 flex-1 flex flex-col justify-center order-2 md:order-1"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="bg-[#EA5455] text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm">Save Big!</div>
                <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Bundle Offer</div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Pack of 5 Devices</h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Perfect for multi-room homes, offices, or gifting to loved ones. Equip your entire space with safe, quiet mosquito protection.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[30px] -mr-16 -mt-16" />
                <div className="flex flex-wrap items-end gap-x-4 gap-y-2 mb-2 relative z-10">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#EA5455]">Rs. 6,000</span>
                  <span className="text-xl text-blue-200 line-through pb-1">Rs. 10,000</span>
                </div>
                <div className="text-white font-bold text-lg relative z-10">
                  That's just Rs. 1,200 per piece!
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {['Cover up to 5 individual rooms', 'One simple delivery package', 'Maximum discount guaranteed', 'Stock limits apply!'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-50 font-medium tracking-wide">
                    <div className="bg-[#EA5455] p-1.5 rounded-full shadow-md flex-shrink-0"><Check className="h-3 w-3 text-white font-bold" /></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#order" className="group inline-flex justify-center items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl text-[#002B5B] bg-white hover:bg-gray-50 hover:text-[#EA5455] transition-all transform hover:-translate-y-1 shadow-xl w-full sm:w-auto text-center">
                Claim This Bundle Now <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full md:w-1/2 min-h-[300px] md:min-h-full bg-white flex items-center justify-center p-8 order-1 md:order-2"
            >
              <div className="absolute top-6 right-6 z-20 bg-[#EA5455] text-white w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center font-bold text-center shadow-[0_10px_30px_rgba(234,84,85,0.4)] transform rotate-12 border-4 border-white">
                <span className="text-[10px] sm:text-xs uppercase opacity-90">Only</span>
                <span className="text-xl sm:text-2xl leading-none my-1 shadow-sm">1200</span>
                <span className="text-[10px] sm:text-xs opacity-90">/ piece</span>
              </div>
              
              {/* USING THE USER PROVIDED DEAL IMAGE */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 w-full h-full flex justify-center items-center"
              >
                <img src="/deal-image.png" alt="Pack of 5 Deal" className="w-full max-w-[450px] h-auto object-contain drop-shadow-2xl rounded-2xl" onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   if (e.currentTarget.parentElement?.nextElementSibling) {
                       (e.currentTarget.parentElement.nextElementSibling as HTMLElement).style.display = 'flex';
                   }
                }} />
              </motion.div>
              <div className="absolute inset-0 flex-col items-center justify-center p-8 text-center text-gray-500 bg-gray-50 hidden md:flex">
                 <Star className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                 <p className="font-bold text-xl mb-2">Bundle Image Needed</p>
                 <p className="text-sm">Save your 5-pack image as <br/>`public/deal-image.png`</p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="order" className="py-32 relative overflow-hidden bg-[#002B5B]">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Don't Let Mosquitoes <br/><span className="text-[#EA5455]">Ruin Your Sleep!</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium"
          >
            Stock is extremely limited! Order now to claim your device at the revolutionary discounted price of 
            <span className="font-bold text-white ml-2 text-2xl">Rs. 1,500 / piece</span> 
            <span className="line-through text-lg text-blue-300/80 ml-2">Rs. 2,000</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] inline-block w-full max-w-2xl border-t-8 border-[#EA5455]"
          >
            <h3 className="text-3xl font-extrabold text-[#002B5B] mb-8">Contact to Order Now:</h3>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:electricmosquitokiller@gmail.com" className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold text-gray-600 hover:text-[#002B5B] transition-colors group">
                <div className="bg-gray-50 p-3 rounded-full group-hover:bg-[#002B5B]/5 transition-colors">
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-[#002B5B] transition-colors" />
                </div>
                <span className="break-all text-left">electricmosquitokiller@gmail.com</span>
              </a>
            </div>
            
            <p className="mt-8 text-sm text-gray-400 font-semibold">* Free Delivery options available. Contact us for details.</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 bg-[#001D3D] text-center text-blue-200/50 text-sm font-medium">
        <p className="mb-2">Executor Company - DHA Phase 5 Khadda Market, Karachi.</p>
        <p>&copy; 2026 Executor Mosquito Killer - All Rights Reserved.</p>
      </footer>
    </main>
  );
}
