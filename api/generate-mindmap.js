// api/generate-mindmap.js
// Vercel serverless function — runs server-side, keeps API key safe

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { markdown } = req.body;
  if (!markdown || typeof markdown !== 'string') {
    return res.status(400).json({ error: 'Missing markdown body' });
  }

  
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured on server' });
  }

  const systemPrompt = `You are a mind map data extractor. Given a personal life document in Markdown, you extract structured data for an interactive mind map and return ONLY valid JSON — no prose, no markdown fences.

The JSON must follow this exact schema:
{
  "nodes": [
    {
      "id": "string (unique, slug-style, e.g. 'dad' or 'ev-loss')",
      "label": "string (short display name, max 4 words)",
      "sub": "string (subtitle, max 6 words, can be empty string)",
      "x": number (canvas x coordinate),
      "y": number (canvas y coordinate),
      "cls": "string (one of: root, family, friends, hobbies, events, career, leadership — add 'branch-head' after a space for top-level branch nodes e.g. 'family branch-head')",
      "detail": "string (2-4 sentence description drawn from the document)"
    }
  ],
  "edges": [
    ["fromId", "toId"]
  ]
}

Layout rules:
- Root node at x:0, y:0
- 6 main branches radiating out: family (x:-560,y:-260), friends (x:-200,y:-420), hobbies (x:200,y:-420), events (x:560,y:-260), career (x:0,y:420), leadership (x:-560,y:260)
- Leaf nodes spread around their branch head at distance 140-200px
- events leaves go right (x: 640-760), career leaves spread horizontally below (y: 560-600)
- family leaves go left (x: -680 to -760)
- Avoid overlapping nodes — space leaves at least 100px apart
- Always include a root node with id "root"

Color class rules:
- family = coral nodes
- friends = teal nodes  
- hobbies = green nodes
- events = amber nodes
- career = blue nodes
- leadership = purple nodes`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: `Extract a mind map from this document:\n\n${markdown}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(502).json({ error: 'Anthropic API error', detail: err });
    }

    const data = await response.json();
    const raw = data.content?.[0]?.text ?? '';

    // Strip any accidental markdown fences
    const cleaned = raw.replace(/^```(?:json)?\n?/m, '').replace(/\n?```$/m, '').trim();

    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (e) {
      return res.status(502).json({ error: 'Failed to parse JSON from Claude', raw });
    }

    return res.status(200).json(parsed);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
