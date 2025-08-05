# CareVision

A modern healthcare technology platform built with React, TypeScript, and Express.js.

## Features

- **Frontend**: React with TypeScript, Tailwind CSS, and Radix UI components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel-ready with serverless functions

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   # Create a .env file with:
   DATABASE_URL=your_neon_database_url
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5000 in your browser

## Vercel Deployment

### Prerequisites

1. **Database Setup**: 
   - Create a Neon PostgreSQL database
   - Get your database connection URL

2. **Vercel Account**: 
   - Sign up at [vercel.com](https://vercel.com)

### Deployment Steps

1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Set Environment Variables**:
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add `DATABASE_URL` with your Neon database URL

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Environment Variables Required

- `DATABASE_URL`: Your Neon PostgreSQL database connection string
- `NODE_ENV`: Set to "production" (automatically set by Vercel)

### Build Process

The deployment uses a custom build command that:
1. Builds the client-side React application
2. Bundles the server-side Express.js application
3. Runs database migrations to set up tables

### Database Schema

The application includes the following tables:
- `users`: User authentication data
- `demo_bookings`: Demo session bookings
- `newsletter_subscriptions`: Email newsletter subscriptions
- `contact_submissions`: Contact form submissions

## API Endpoints

- `POST /api/demo-bookings`: Create a demo booking
- `GET /api/demo-bookings`: Get all demo bookings
- `POST /api/newsletter`: Subscribe to newsletter
- `DELETE /api/newsletter/:email`: Unsubscribe from newsletter
- `POST /api/contact`: Submit contact form
- `GET /api/contact`: Get all contact submissions

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Radix UI
- **Backend**: Express.js, TypeScript, Drizzle ORM
- **Database**: PostgreSQL (Neon)
- **Deployment**: Vercel
- **Build Tools**: Vite, esbuild 