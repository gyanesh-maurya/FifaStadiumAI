"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, Mic, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function StadiumAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Hi there! I am StadiumAI, your FIFA 2026 Copilot. How can I help you navigate the stadium, find food, or get match info?",
      },
    ],
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4"
          >
            <Card className="w-[350px] md:w-[400px] h-[500px] flex flex-col shadow-2xl border-primary/20 backdrop-blur-xl bg-card/95 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b bg-primary/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10 border-2 border-primary">
                      <AvatarImage src="/ai-avatar.png" />
                      <AvatarFallback className="bg-primary/20 text-primary"><Bot size={20} /></AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">StadiumAI</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-primary" /> Active Copilot
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full hover:bg-background/50" aria-label="Close AI chat">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar" aria-live="polite">
                {messages.map((m) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={m.id}
                    className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <Avatar className="h-8 w-8 shrink-0">
                      {m.role === "assistant" ? (
                        <AvatarFallback className="bg-primary/20 text-primary"><Bot size={16} /></AvatarFallback>
                      ) : (
                        <AvatarFallback className="bg-secondary text-secondary-foreground">U</AvatarFallback>
                      )}
                    </Avatar>
                    
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        m.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-muted rounded-tl-sm border border-border/50"
                      }`}
                    >
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 flex-row">
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="bg-primary/20 text-primary"><Bot size={16} /></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <span className="text-xs text-muted-foreground">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions */}
              {messages.length === 1 && (
                 <div className="px-4 pb-2 flex flex-wrap gap-2">
                    <Badge 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary" 
                      onClick={() => append({ role: 'user', content: "Where is Gate 4?" })}
                      tabIndex={0}
                      onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") append({ role: 'user', content: "Where is Gate 4?" }) }}
                    >
                      Where is Gate 4?
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary" 
                      onClick={() => append({ role: 'user', content: "Which food stall has the shortest queue?" })}
                      tabIndex={0}
                      onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") append({ role: 'user', content: "Which food stall has the shortest queue?" }) }}
                    >
                      Shortest food queue?
                    </Badge>
                 </div>
              )}

              <div className="p-3 border-t bg-background/50">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Button type="button" variant="ghost" size="icon" className="shrink-0 rounded-full text-muted-foreground hover:text-primary" aria-label="Use voice input">
                    <Mic className="h-5 w-5" />
                  </Button>
                  <label htmlFor="chat-input" className="sr-only">Message StadiumAI</label>
                  <Input
                    id="chat-input"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask StadiumAI anything..."
                    className="flex-1 bg-background border-primary/20 focus-visible:ring-primary/30 rounded-full px-4"
                  />
                  <Button type="submit" disabled={isLoading || !input.trim()} size="icon" className="shrink-0 rounded-full shadow-md" aria-label="Send message">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors border-2 ${
          isOpen 
            ? "bg-secondary text-secondary-foreground border-transparent" 
            : "bg-primary text-primary-foreground border-primary/50 shadow-primary/30"
        }`}
        aria-label={isOpen ? "Close AI Copilot" : "Open AI Copilot"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
