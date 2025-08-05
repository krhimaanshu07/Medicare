import app from './app';
import { serveStatic } from './vite';

export default app;

if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
  serveStatic(app);
  const port = parseInt(process.env.PORT || '5000', 10);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Production server running on port ${port}`);
  });
}
 