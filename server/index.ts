import app from './app';

// For Vercel serverless deployment, export the app
export default app;

// For local production testing, start the server
if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
  const port = parseInt(process.env.PORT || '5000', 10);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Production server running on port ${port}`);
  });
}
 