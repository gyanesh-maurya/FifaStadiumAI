"use client";

import dynamic from "next/dynamic";
import { toast } from "sonner";

const StadiumMap = dynamic(() => import("@/components/map/StadiumMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] flex items-center justify-center bg-muted/20 animate-pulse rounded-2xl"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>
});

import { 
  MapPin, 
  Navigation, 
  Ticket, 
  Utensils, 
  Clock,
  QrCode
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FanDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome, Alex!</h1>
          <p className="text-muted-foreground">Here is your match day overview for today.</p>
        </div>
        <Button 
          className="rounded-full shadow-lg"
          onClick={() => toast.success("QR Code Ticket opened", { description: "Gate 4, Block 112, Row 15, Seat B12" })}
        >
          <QrCode className="w-4 h-4 mr-2" />
          Show Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Match Info Card */}
        <Card className="col-span-1 md:col-span-2 border-primary/20 bg-card/50 backdrop-blur-sm shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">Live Match</Badge>
              <div className="flex items-center text-sm font-medium text-destructive animate-pulse">
                <span className="w-2 h-2 bg-destructive rounded-full mr-2" />
                45:00
              </div>
            </div>
            <CardTitle className="text-2xl mt-4">Argentina vs France</CardTitle>
            <CardDescription>Final • FIFA World Cup 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-2 shadow-sm border border-border">🇦🇷</div>
                <span className="font-bold text-xl">2</span>
              </div>
              <div className="text-2xl font-bold text-muted-foreground">-</div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-2xl mb-2 shadow-sm border border-border">🇫🇷</div>
                <span className="font-bold text-xl">1</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seat Info Card */}
        <Card className="col-span-1 border-primary/10 bg-gradient-to-br from-card to-muted/20 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Ticket className="w-5 h-5 mr-2 text-primary" />
              Your Seat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Gate</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Block</p>
                <p className="text-2xl font-bold">112</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Row</p>
                <p className="text-2xl font-bold">15</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Seat</p>
                <p className="text-2xl font-bold text-primary">B12</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4 h-10"
              onClick={() => toast.info("Opening Navigation...", { description: "Generating shortest route to Gate 4." })}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Navigate to Seat
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
          <TabsTrigger value="map">Stadium Map</TabsTrigger>
          <TabsTrigger value="food">Food & Queue</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="map" className="mt-6">
          <Card className="border-border/50 shadow-sm overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle>Interactive Map</CardTitle>
              <CardDescription>Find your way around the stadium</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full relative flex items-center justify-center bg-muted/10">
                <StadiumMap />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="food" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Burger & Fries", location: "Near Gate 4", wait: "5 min", status: "Fast", icon: Utensils },
              { name: "Taco Stand", location: "Section 105", wait: "15 min", status: "Busy", icon: Utensils },
              { name: "Drinks Station", location: "Section 112", wait: "2 min", status: "Very Fast", icon: Utensils },
            ].map((stall, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold flex items-center gap-2">
                      <stall.icon className="w-4 h-4 text-primary" />
                      {stall.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {stall.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant={stall.wait.includes("15") ? "destructive" : "secondary"}>
                      <Clock className="w-3 h-3 mr-1" /> {stall.wait}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {[
                  { time: "16:00", title: "Gates Open", desc: "Arrive early to avoid queues.", done: true },
                  { time: "17:30", title: "Warm-up Starts", desc: "Players are on the pitch.", done: true },
                  { time: "18:00", title: "Kickoff", desc: "The match begins!", done: false, active: true },
                  { time: "18:45", title: "Halftime", desc: "Grab food and drinks.", done: false },
                ].map((event, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-muted text-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {event.done ? <div className="w-3 h-3 bg-primary rounded-full" /> : event.active ? <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" /> : <div className="w-3 h-3 bg-muted-foreground/30 rounded-full" />}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border shadow-sm bg-card">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-bold ${event.active ? "text-primary" : ""}`}>{event.title}</h4>
                        <span className="text-xs font-medium text-muted-foreground">{event.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
