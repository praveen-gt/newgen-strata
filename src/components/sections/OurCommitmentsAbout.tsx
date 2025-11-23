"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Shield, Star, CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// Types
// ==========================================
interface CommitmentItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  details: string[];
  colors: string;
}

interface OrbitValue {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  angle: number;
}

// ============================
// Animation Variants
// ============================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ============================
// Section Header Component
// ============================
const SectionHeader = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="text-center max-w-3xl mx-auto mb-20"
  >
    <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
      Our Promise
    </Badge>

    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
      The Commitments of{" "}
      <span className="text-gradient-wimbledon">NewGen Strata Services</span>
    </h2>

    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
      We have three fundamental commitments we make to our clients, our professional
      & trade service providers, and our own staff — and we are ready and willing to
      be held to these and challenged on them at any time.
    </p>
  </motion.div>
);

// ============================
// Interactive Commitment Cards
// ============================
// const InteractiveCommitmentCard = ({ title, icon: Icon, description, details, colors, index }) => {
const InteractiveCommitmentCard = ({
  title,
  icon: Icon,
  description,
  details,
  colors,
  index,
}: CommitmentItem & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative group"
    >
      <motion.div
        layout
        className={`
          relative rounded-3xl p-8 shadow-xl 
          backdrop-blur-sm border border-white/20 
          bg-white transition-all duration-500
        `}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Top section: Icon + Sparkles */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors} backdrop-blur-sm`}>
            <Icon className="h-8 w-8 text-brand-dark" />
          </div>

          <Sparkles className="h-6 w-6 text-brand-dark opacity-70 rotate-45" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          {description}
        </p>

        {/* ALWAYS VISIBLE DETAILS (expanded look) */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          {details.map((detail, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-600 text-sm">{detail}</p>
            </div>
          ))}
        </div>

        {/* Decorative light blur */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </motion.div>
    </motion.div>
  );
};


// ============================
// Advanced Commitments Grid
// ============================
const AdvancedCommitmentsGrid = () => {
  const commitments = [
    {
      title: "Capability",
      icon: Award,
      description: "Deep knowledge and expertise in all aspects of owners corporation management",
      details: [
        "Comprehensive understanding of strata legislation and compliance requirements",
        "Expert team with decades of combined industry experience",
        "Continuous professional development and industry certifications",
        "Proven track record across diverse property portfolios"
      ],
      colors: "from-[#c2ff6b] to-[#9ecc52]",
    },
    {
      title: "Reliability",
      icon: Clock,
      description: "Consistent, dependable service you can count on every time",
      details: [
        "24/7 emergency response and support availability",
        "Guaranteed response times for all inquiries and issues",
        "Proactive maintenance scheduling and reminders",
        "Consistent service delivery across all properties"
      ],
      colors: "from-[#ffd700] to-[#ffb700]",
    },
    {
      title: "Integrity",
      icon: Shield,
      description: "Honesty and transparency in everything we do",
      details: [
        "Clear, transparent pricing with no hidden fees",
        "Open communication and regular progress updates",
        "Ethical business practices and vendor management",
        "Complete accountability in all our operations"
      ],
      colors: "from-[#7dd3ff] to-[#4fb3e8]",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
      {commitments.map((item, index) => (
        <InteractiveCommitmentCard key={item.title} {...item} index={index} />
      ))}
    </div>
  );
};

// ============================
// Value Orbit Visualization
// ============================
const ValueOrbit = () => {
  // const values = [
  const values: OrbitValue[] = [
    { icon: Award, label: "Capability", color: "from-[#c2ff6b] to-[#9ecc52]", angle: 270 }, // Top
    { icon: Shield, label: "Integrity", color: "from-[#7dd3ff] to-[#4fb3e8]", angle: 0 }, // Right
    { icon: Star, label: "Quality", color: "from-[#ff6bda] to-[#e84fb3]", angle: 90 }, // Bottom
    { icon: Clock, label: "Reliability", color: "from-[#ffd700] to-[#ffb700]", angle: 180 }, // Left
  ];
  const [positions, setPositions] = React.useState({
    left: 43,
    top: 39,
    radius: 220,
  });

  React.useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setPositions({
          left: 40,
          top: 41,
          radius: 130,
        });
      } else if (width < 768) {
        setPositions({
          left: 42,
          top: 40,
          radius: 170,
        });
      } else {
        setPositions({
          left: 43,
          top: 39,
          radius: 220,
        });
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative max-w-4xl mx-auto mb-20 py-8 md:py-16 px-4"
    >
      {/* Container - responsive sizing */}
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
        {/* Orbital rings - responsive sizing */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] rounded-full border-2 border-dashed border-primary/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] md:w-[400px] md:h-[400px] rounded-full border-2 border-dotted border-secondary/30"
        />

        {/* Orbiting values - positioned in a circle */}
        {values.map((value, index) => {
          // Responsive radius calculation
          // const getRadius = () => {
          //   if (typeof window !== 'undefined') {
          //     if (window.innerWidth < 640) return 130; // mobile
          //     if (window.innerWidth < 768) return 170; // tablet
          //     return 220; // desktop
          //   }
          //   return 220; // default
          // };


          const { left, top, radius } = positions;
          const angleRad = (value.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              // style={{
              //   position: 'absolute',
              //   left: `calc(${leftPos}% + ${x}px)`,
              //   top: `calc(${topPos}% + ${y}px)`,
              //   transform: 'translate(-50%, -50%)',
              //   zIndex: 30,
              // }}
              style={{
                position: 'absolute',
                left: `calc(${left}% + ${x}px)`,
                top: `calc(${top}% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: 30,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl md:rounded-2xl shadow-xl bg-gradient-to-br ${value.color} flex items-center justify-center backdrop-blur-sm border-2 md:border-4 border-white cursor-pointer group relative`}
              >
                <div className="text-center">
                  <value.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 text-brand-dark mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-brand-dark text-xs sm:text-xs md:text-sm">{value.label}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Center core - responsive sizing */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-2xl flex items-center justify-center z-10 border-2 md:border-4 border-white"
        >
          <div className="text-center">
            <p className="font-bold text-white text-sm sm:text-base md:text-lg leading-tight">
              OUR<br />CUSTOMERS
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ============================
// Quote Block Component
// ============================
const QuoteBlock = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative text-center bg-gradient-to-br from-white via-primary/5 to-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-primary/20 overflow-hidden"
  >
    {/* Decorative quote marks */}
    <div className="absolute top-6 left-6 text-8xl text-primary/10 font-serif leading-none">&quot;</div>
    <div className="absolute bottom-6 right-6 text-8xl text-primary/10 font-serif leading-none">&quot;</div>

    <div className="relative z-10">
      <blockquote className="text-2xl md:text-4xl font-semibold text-brand-dark mb-4 leading-relaxed">
        The quality is long remembered after the price is forgotten
      </blockquote>
      <div className="flex items-center justify-center gap-2 text-gray-600 font-medium text-lg">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
        <p>NewGen Strata Services</p>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
      </div>
    </div>
  </motion.div>
);

// ============================
// Main Component
// ============================
export default function OurCommitmentsAbout() {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeader />
        <ValueOrbit />
        <AdvancedCommitmentsGrid />
        <QuoteBlock />
      </div>
    </section>
  );
}