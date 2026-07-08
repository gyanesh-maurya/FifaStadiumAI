"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground p-1.5 rounded-full"
          >
            <Globe className="w-5 h-5" />
          </motion.div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            StadiumAI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </Link>
          <Link href="#impact" className="text-muted-foreground hover:text-primary transition-colors">
            Impact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              Sign In
            </Button>
          </Link>
          <Link href="/dashboard/fan">
            <Button size="sm" className="rounded-full px-6">
              Launch App
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4"
        >
          <Link href="#features" className="text-muted-foreground hover:text-primary px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>
            Features
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-primary px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>
            How it Works
          </Link>
          <Link href="#impact" className="text-muted-foreground hover:text-primary px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>
            Impact
          </Link>
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
            </Link>
            <Link href="/dashboard/fan" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full justify-center">
                Launch App
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
