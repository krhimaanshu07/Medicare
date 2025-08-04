# Medicare - AI-Powered Medical Imaging Platform

## Overview

Medicare is a comprehensive medical AI platform that provides cutting-edge imaging enhancement solutions for healthcare institutions. The platform features three main products: MedicareHD™ for ultra-high definition MRI enhancement, MedicarePET™ for AI-enhanced PET imaging with dose reduction, and MedicareSYNTH™ for synthetic imaging technology. The application serves as both a marketing website and a platform for demo booking, newsletter subscriptions, and contact management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for home, products, solutions, research, company, and resources
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack React Query for server state management and API interactions
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in custom components
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with JSON responses
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request/response logging middleware for API endpoints
- **Storage Interface**: Abstract storage interface with in-memory implementation for demo bookings, newsletter subscriptions, and contact submissions

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with Zod schema validation
- **Connection**: Neon Database serverless connection (@neondatabase/serverless)
- **Schema Management**: Centralized schema definitions in shared directory with type generation
- **Tables**: Users, demo bookings, newsletter subscriptions, and contact submissions with UUID primary keys

### Development and Build System
- **Build Tool**: Vite for frontend with React plugin and runtime error overlay
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Hot Reload**: Vite HMR integration with Express server in development
- **Production**: esbuild for server bundling, static file serving for frontend
- **Environment**: Environment-based configuration with development and production modes

### API Structure
- **Demo Bookings**: POST /api/demo-bookings (create), GET /api/demo-bookings (list)
- **Newsletter**: POST /api/newsletter (subscribe), DELETE /api/newsletter/:email (unsubscribe)
- **Contact**: POST /api/contact (submit), GET /api/contact (list submissions)
- **Validation**: Zod schema validation for all API endpoints with structured error responses
- **Response Format**: Consistent JSON responses with success/error indicators

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack React Query for state management
- **UI Framework**: Radix UI primitives, shadcn/ui components, Tailwind CSS for styling
- **Database**: Drizzle ORM, Neon Database serverless connection, PostgreSQL dialect
- **Server**: Express.js, TypeScript runtime with tsx, Vite for development server
- **Validation**: Zod for schema validation, react-hook-form with resolvers for form handling

### Development Tools
- **Build Tools**: Vite with React plugin, esbuild for production builds, TypeScript compiler
- **Development**: Replit-specific plugins for cartographer and runtime error overlay
- **Animation**: Framer Motion for UI animations and page transitions
- **Utilities**: date-fns for date manipulation, clsx and tailwind-merge for className handling

### Third-Party Services
- **Database Hosting**: Neon Database for PostgreSQL hosting
- **Image CDN**: Unsplash for placeholder images throughout the application
- **Component Library**: Extensive Radix UI integration for accessible components
- **Form Handling**: React Hook Form with Zod resolvers for type-safe form validation