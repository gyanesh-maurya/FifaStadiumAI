import { ReactNode } from "react";
import Link from "next/link";
import { Globe, LogOut, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StadiumAIWidget } from "@/components/ai/StadiumAIWidget";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md shadow-sm">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight hidden sm:inline-block">StadiumAI</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            
            <div className="flex items-center gap-2 border-l pl-4 ml-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>FN</AvatarFallback>
              </Avatar>
              <Link href="/login">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <LogOut className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container px-4 md:px-6 py-6 mx-auto relative">
        {children}
      </main>

      {/* Global AI Assistant for logged in users */}
      <StadiumAIWidget />
    </div>
  );
}
