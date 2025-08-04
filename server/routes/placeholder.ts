import { RequestHandler } from "express";

export const handlePlaceholder: RequestHandler = (req, res) => {
  const { width, height } = req.params;
  const w = parseInt(width) || 400;
  const h = parseInt(height) || 300;
  
  // Generate a simple SVG placeholder
  const svg = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(252,228,236);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgb(253,242,248);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(248,237,227);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle" dy=".3em">
        ${w} × ${h}
      </text>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
  res.send(svg);
};
