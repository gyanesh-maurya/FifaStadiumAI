"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Navigation, 
  Users, 
  Languages, 
  Car, 
  ShieldAlert, 
  ClipboardList, 
  PieChart, 
  Utensils, 
  Leaf, 
  Clock, 
  Brain
} from "lucide-react";

const features = [
  { icon: Navigation, title: "AI Navigation", desc: "Natural language navigation to seats, gates, and washrooms." },
  { icon: Users, title: "Crowd Intelligence", desc: "Live congestion heatmaps and AI predicted crowd movement." },
  { icon: Languages, title: "Multilingual Assistant", desc: "Instant voice and text translation in 8+ global languages." },
  { icon: Brain, title: "Accessibility Copilot", desc: "Wheelchair routes, large fonts, and blind assistance guidance." },
  { icon: Car, title: "Transportation AI", desc: "Parking predictions, metro guidance, and live ETAs." },
  { icon: ShieldAlert, title: "Emergency AI", desc: "Automated incident reports and optimal evacuation routes." },
  { icon: ClipboardList, title: "Volunteer Copilot", desc: "AI-generated task instructions and priority shift assignments." },
  { icon: PieChart, title: "Organizer Dashboard", desc: "Real-time analytics and predictive resource allocation." },
  { icon: Utensils, title: "Food Recommendations", desc: "Shortest queue predictions and dietary preference matching." },
  { icon: Leaf, title: "Sustainability Assistant", desc: "Carbon footprint tracking and waste management guidance." },
  { icon: Clock, title: "Match Day Timeline", desc: "Personalized event countdowns and contextual seat reminders." },
  { icon: Brain, title: "Personal AI", desc: "Remembers your preferences, favorite team, and accessibility needs." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Powerful GenAI Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            StadiumAI is equipped with 12 generative AI capabilities to completely transform the stadium experience for every role.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full bg-card/60 backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-1 border-primary/10 group cursor-default">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary/20">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-foreground/70">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
