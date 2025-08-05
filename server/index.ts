import { createServer } from "http";
import { setupVite, log } from "./vite";
import app from "./app";

// For Vercel serverless deployment, export the app
export default app;

// For development, start the server
if (process.env.NODE_ENV !== "production") {
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
}
