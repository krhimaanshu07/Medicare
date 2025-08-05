import { createServer } from "http";
import { setupVite, log } from "./vite";
import app from "./app";

// Development server startup
const server = createServer(app);

(async () => {
  await setupVite(app, server);
  
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
  }, () => {
    log(`serving on port ${port}`);
  });
})(); 