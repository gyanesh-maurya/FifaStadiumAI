"use client";

import { motion } from "framer-motion";
import { Trees, Accessibility, Zap, TicketCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    icon: Zap,
    title: "40%",
    label: "Reduction in Queue Times",
    desc: "AI crowd routing and food stall recommendations distribute traffic evenly."
  },
  {
    icon: Accessibility,
    title: "100%",
    label: "Accessible Routing",
    desc: "Ensuring every fan finds the right paths, elevators, and sensory rooms."
  },
  {
    icon: Trees,
    title: "15%",
    label: "Carbon Footprint Reduced",
    desc: "By promoting public transport AI predictions and waste management."
  },
  {
    icon: TicketCheck,
    title: "80,000+",
    label: "Fans Managed Seamlessly",
    desc: "Scalable architecture ensuring zero downtime during peak match hours."
  }
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">World Cup Impact</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our goal for the FIFA World Cup 2026 is to create the most efficient, sustainable, and accessible sporting event in history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-md text-primary-foreground h-full hover:bg-primary-foreground/20 transition-colors">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <metric.icon className="w-12 h-12 mb-6 text-blue-300" />
                  <h3 className="text-4xl font-black tracking-tighter mb-2">{metric.title}</h3>
                  <p className="font-semibold text-lg mb-2">{metric.label}</p>
                  <p className="text-sm text-primary-foreground/70">{metric.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
