"use client";

import { motion } from "framer-motion";
import { ArrowDown, Database, Cpu, Smartphone, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Database,
    title: "Data Ingestion",
    desc: "Live stadium data, weather APIs, ticket info, and CCTV crowd feeds are streamed instantly."
  },
  {
    icon: Cpu,
    title: "AI Processing",
    desc: "LLMs and computer vision models process the data to generate insights and contextual responses."
  },
  {
    icon: Smartphone,
    title: "Role-Based Delivery",
    desc: "Insights are delivered to fans, security, and staff via personalized Next.js dashboards."
  },
  {
    icon: ShieldCheck,
    title: "Action & Resolution",
    desc: "Crowds are redirected, food queues minimized, and emergencies handled swiftly."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">How StadiumAI Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A seamless architecture that connects stadium infrastructure with generative AI models to provide real-time, actionable intelligence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/5 via-primary to-primary/5 -translate-x-1/2 z-0" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 w-full text-center md:text-right px-4 z-10">
                  {idx % 2 === 0 ? (
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  ) : (
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg text-left hidden md:block">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full"><step.icon className="w-6 h-6 text-primary" /></div>
                          <div>
                            <p className="font-semibold">{step.title}</p>
                            <p className="text-sm text-muted-foreground">System active</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="z-10 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                  <span className="text-xl font-bold">{idx + 1}</span>
                </div>

                <div className="flex-1 w-full text-center md:text-left px-4 z-10">
                  {idx % 2 !== 0 ? (
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  ) : (
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg hidden md:block">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full"><step.icon className="w-6 h-6 text-primary" /></div>
                          <div>
                            <p className="font-semibold">{step.title}</p>
                            <p className="text-sm text-muted-foreground">Processing data</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                {/* Mobile only icon display */}
                <div className="md:hidden">
                  <ArrowDown className="text-primary/30 w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
