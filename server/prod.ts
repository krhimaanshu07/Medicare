import app from './app';
import { serveStatic } from './vite';

// Add static file serving for production
serveStatic(app);

const port = parseInt(process.env.PORT || '5000', 10);
app.listen(port, '0.0.0.0', () => {
  console.log(`Production server running on port ${port}`);
}); 