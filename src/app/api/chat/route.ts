import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;
    
    // For the hackathon, we simulate an AI response if no real API key is present.
    // In a real scenario, you'd use `streamText` from 'ai' and '@ai-sdk/openai'.
    
    let mockResponse = "I am StadiumAI. How can I assist you with your FIFA World Cup experience today?";
    
    const lowerMsg = lastMessage.toLowerCase();
    
    if (lowerMsg.includes("gate 4")) {
      mockResponse = "Gate 4 is located on the North side of the stadium. It's a 3-minute walk from your current location. Would you like walking directions on the map?";
    } else if (lowerMsg.includes("food") || lowerMsg.includes("queue")) {
      mockResponse = "The 'Burger & Fries' stall near Section 112 has the shortest queue right now (approx. 2 min wait). The 'Taco Stand' at Section 105 has a 10 min wait.";
    } else if (lowerMsg.includes("seat") && lowerMsg.includes("b12")) {
      mockResponse = "Your seat B12 in Row 15 is in the VIP fan zone. Proceed to Level 2 via Elevator 3. Enjoy the match!";
    } else if (lowerMsg.includes("blind") || lowerMsg.includes("visually impaired")) {
      mockResponse = "I have activated the Accessibility Copilot. I will read directions out loud and route you via tactile pathways. A volunteer has also been notified to assist you at Gate 1.";
    } else if (lowerMsg.includes("emergency") || lowerMsg.includes("sos")) {
      mockResponse = "[EMERGENCY MODE ACTIVATED] Security and medical teams have been dispatched to your location. Please stay calm. The nearest medical station is 50 meters to your left.";
    } else if (lowerMsg.includes("hindi")) {
      mockResponse = "नमस्ते! मैं स्टेडियम एआई हूं। मैं आपकी कैसे मदद कर सकता हूं?";
    } else if (lowerMsg.includes("parking")) {
      mockResponse = "Parking Lot B currently has 45 available spaces. Traffic is light. Estimated time to park: 5 minutes.";
    } else {
      mockResponse = "That's a great question! As your Stadium Copilot, I can help you with navigation, food recommendations, accessible routes, and live match updates. What do you need help with right now?";
    }

    // Return a mocked SSE stream compatible with Vercel AI SDK useChat
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const chunks = mockResponse.split(' ');
        for (const chunk of chunks) {
          controller.enqueue(encoder.encode(`0:"${chunk} "\n`));
          await new Promise(resolve => setTimeout(resolve, 50)); // Simulate typing delay
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
