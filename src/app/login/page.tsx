"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight, Fan, Shield, Briefcase, Users, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const roles = [
  { id: "fan", title: "Fan", icon: Fan, desc: "Navigate stadium, find food, enjoy the match." },
  { id: "security", title: "Security", icon: Shield, desc: "Manage crowds, emergencies, and safety." },
  { id: "organizer", title: "Organizer", icon: LayoutDashboard, desc: "Monitor analytics and resources." },
  { id: "volunteer", title: "Volunteer", icon: Users, desc: "Receive AI tasks and assignments." },
  { id: "staff", title: "Staff", icon: Briefcase, desc: "Manage stalls, entry gates, logistics." },
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("fan");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      router.push(`/dashboard/${selectedRole}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 -right-1/4 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2 group mb-4">
            <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
              <Globe className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight">StadiumAI</span>
          </Link>
          <p className="text-muted-foreground text-center">
            Sign in to your personalized Stadium Copilot
          </p>
        </div>

        <Card className="backdrop-blur-xl bg-card/60 border-primary/20 shadow-2xl">
          <Tabs defaultValue="login" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="guest">Continue as Guest</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required className="bg-background/50" />
                  </div>

                  <div className="pt-4 space-y-4">
                    <Label>Select Role</Label>
                    <div className="grid grid-cols-1 gap-2 h-48 overflow-y-auto pr-2 custom-scrollbar">
                      {roles.map((role) => (
                        <div
                          key={role.id}
                          onClick={() => setSelectedRole(role.id)}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border ${
                            selectedRole === role.id
                              ? "border-primary bg-primary/10 shadow-sm"
                              : "border-border/50 hover:border-primary/50 hover:bg-muted/50"
                          }`}
                        >
                          <role.icon className={`w-5 h-5 ${selectedRole === role.id ? "text-primary" : "text-muted-foreground"}`} />
                          <div>
                            <p className="font-medium text-sm">{role.title}</p>
                            <p className="text-xs text-muted-foreground">{role.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" className="w-full mt-6 h-11 rounded-xl" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                    {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="guest">
                <div className="space-y-4 text-center py-6">
                  <Globe className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">Guest Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Continue as a fan with limited features. Perfect for exploring StadiumAI.
                  </p>
                  <Button 
                    className="w-full mt-4 h-11 rounded-xl" 
                    variant="outline"
                    onClick={() => {
                      setSelectedRole("fan");
                      router.push("/dashboard/fan");
                    }}
                  >
                    Enter as Fan
                  </Button>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </motion.div>
    </div>
  );
}
