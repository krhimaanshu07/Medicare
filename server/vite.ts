import express, { type Express } from "express";
import path from "path";
import { createServer } from "http";
import { createServer as createViteServer } from "vite";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist/public");
  app.use(express.static(distPath));

  // SPA fallback for non-API GET requests
  app.get("*", (req, res) => {
    if (req.path.startsWith("/api/")) {
      return res.status(404).json({ error: "API endpoint not found" });
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

export async function setupVite(app: Express, server: any) {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });
  
  app.use(vite.middlewares);
}

export const log = console.log; 