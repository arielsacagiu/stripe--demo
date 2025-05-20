// Demo-safe, logic-disabled version
// Watermark: DEMO VERSION - LOGIC DISABLED - AUTHORSHIP PROTECTED

export default function handler(req, res) {
  res.status(403).json({ error: 'Demo mode: API logic disabled.' });
}
