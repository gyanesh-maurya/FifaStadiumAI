"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot, Sparkles, Navigation, Globe2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
      
      {/* Animated abstract shapes behind */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px] -z-10"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -z-10"
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          <span>Award-Winning Hackathon Entry</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl"
        >
          Your Intelligent{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Stadium Copilot
          </span>{" "}
          for FIFA 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          Experience the World Cup like never before. AI-powered navigation, real-time crowd intelligence, and multi-lingual assistance for fans, staff, and security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/dashboard/fan" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto group rounded-full h-12 px-8">
              Launch StadiumAI
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#features" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-12 px-8 backdrop-blur-sm bg-background/50">
              Explore Features
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Navigation, title: "AI Navigation", desc: "Find seats & food easily" },
            { icon: Globe2, title: "Multilingual", desc: "Speaks 8+ languages" },
            { icon: Bot, title: "Smart Copilot", desc: "Contextual assistance" },
            { icon: Sparkles, title: "Live Updates", desc: "Crowd & match intel" },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
