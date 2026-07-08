import { POST } from '../app/api/chat/route';
import { NextRequest } from 'next/server';

describe('Chat API Route', () => {
  it('returns 400 for invalid payloads', async () => {
    const req = new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 400 for excessively long messages', async () => {
    const req = new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        messages: [{ content: 'a'.repeat(600) }],
      }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  const testCases = [
    { input: 'Where is gate 4?', expectedMatch: 'Crowd Management' },
    { input: 'Long food queue', expectedMatch: 'Operational Intelligence' },
    { input: 'My seat is b12', expectedMatch: 'Real-time Decision Making' },
    { input: 'I need accessibility routing', expectedMatch: 'Accessibility Copilot' },
    { input: 'Emergency sos', expectedMatch: 'EMERGENCY MODE' },
    { input: 'Translate to hindi', expectedMatch: 'Multilingual Assistance' },
    { input: 'Where is parking?', expectedMatch: 'Transportation' },
    { input: 'Where can I recycle?', expectedMatch: 'Sustainability' },
    { input: 'Hello!', expectedMatch: 'That\\'s a great question!' },
  ];

  for (const { input, expectedMatch } of testCases) {
    it(`handles input: ${input}`, async () => {
      const req = new Request('http://localhost/api/chat', {
        method: 'POST',
        body: JSON.stringify({
          messages: [{ content: input }],
        }),
      });

      const res = await POST(req);
      expect(res.status).toBe(200);
      
      const body = await res.text();
      // The stream is encoded as SSE style: 0:"Word "
      // We can just check if the raw text contains the expected match
      expect(body).toContain(expectedMatch.split(' ')[0]); // Check first word of match to be safe from splitting
    });
  }
});
