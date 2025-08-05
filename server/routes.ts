import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoBookingSchema, insertNewsletterSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<void> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      vercel: !!process.env.VERCEL
    });
  });

  // Demo booking routes
  app.post("/api/demo-bookings", async (req, res) => {
    try {
      const validatedData = insertDemoBookingSchema.parse(req.body);
      const booking = await storage.createDemoBooking(validatedData);
      res.json({ success: true, booking });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.get("/api/demo-bookings", async (req, res) => {
    try {
      const bookings = await storage.getDemoBookings();
      res.json({ success: true, bookings });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Newsletter subscription routes
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.json({ success: true, subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.delete("/api/newsletter/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const success = await storage.unsubscribeNewsletter(email);
      if (success) {
        res.json({ success: true, message: "Unsubscribed successfully" });
      } else {
        res.status(404).json({ success: false, message: "Email not found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Contact form routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

}
