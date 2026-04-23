// components/sections/AboutSection.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig, stats } from "@/constants/siteData";
import Button from "@/components/common/Button";
import { Section, SectionHeader } from "@/components/common/Section";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <Section id="about" variant="alternate">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
            <Image
              src="/images/doctor-7.jpg"
              alt="Renova Life Care medical team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#428a26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">BMDC Certified</p>
                  <p className="text-sm text-slate-500">All doctors verified</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="font-heading font-bold text-3xl text-primary">15+</p>
                <p className="text-xs text-slate-500">Years</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <p className="font-heading font-bold text-3xl text-primary">50K+</p>
                <p className="text-xs text-slate-500">Patients</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <SectionHeader
            label="About Us"
            title="Compassionate Care, <span class='text-primary'>Expert Medicine</span>"
            subtitle={siteConfig.description}
            align="left"
            titleClassName="!text-left"
          />

          <div className="space-y-4">
            {[
              { icon: "🩺", title: "Expert Doctors", desc: "BMDC-certified specialists with international training" },
              { icon: "🏥", title: "Modern Facilities", desc: "State-of-the-art equipment and hygienic environment" },
              { icon: "💙", title: "Patient-First Approach", desc: "Compassionate care tailored to your needs" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-slate-50 rounded-xl">
                <p className="font-heading font-bold text-2xl text-primary">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary" href="/about">
              Learn More About Us
            </Button>
            <Button variant="secondary" href="/doctors">
              Meet Our Doctors
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}