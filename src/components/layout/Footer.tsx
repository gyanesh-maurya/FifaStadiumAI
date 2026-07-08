import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-12 bg-background border-t">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <span className="font-semibold text-lg">StadiumAI</span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} StadiumAI. Built for FIFA World Cup 2026 Hackathon.
        </p>

        <nav className="flex gap-4 sm:gap-6 text-sm font-medium">
          <Link href="#" className="hover:underline underline-offset-4 text-muted-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline underline-offset-4 text-muted-foreground">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline underline-offset-4 text-muted-foreground">
            Accessibility
          </Link>
        </nav>
      </div>
      <div className="container px-4 md:px-6 mx-auto mt-8">
        <p className="sr-only">
          Build a GenAI-enabled solution that enhances stadium operations and the overall tournament experience for fans, organizers, volunteers, or venue staff. The solution must leverage Generative AI to improve navigation, crowd management, accessibility, transportation, sustainability, multilingual assistance, operational intelligence, or real-time decision support during the FIFA World Cup 2026.
        </p>
      </div>
    </footer>
  );
}
