import { 
  type User, 
  type InsertUser,
  type DemoBooking,
  type InsertDemoBooking,
  type Newsletter,
  type InsertNewsletter,
  type ContactSubmission,
  type InsertContact
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Demo booking methods
  createDemoBooking(booking: InsertDemoBooking): Promise<DemoBooking>;
  getDemoBookings(): Promise<DemoBooking[]>;
  getDemoBooking(id: string): Promise<DemoBooking | undefined>;
  
  // Newsletter methods
  createNewsletterSubscription(subscription: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
  unsubscribeNewsletter(email: string): Promise<boolean>;
  
  // Contact methods
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private demoBookings: Map<string, DemoBooking>;
  private newsletters: Map<string, Newsletter>;
  private contacts: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.demoBookings = new Map();
    this.newsletters = new Map();
    this.contacts = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDemoBooking(insertBooking: InsertDemoBooking): Promise<DemoBooking> {
    const id = randomUUID();
    const booking: DemoBooking = { 
      ...insertBooking, 
      id,
      createdAt: new Date()
    };
    this.demoBookings.set(id, booking);
    return booking;
  }

  async getDemoBookings(): Promise<DemoBooking[]> {
    return Array.from(this.demoBookings.values());
  }

  async getDemoBooking(id: string): Promise<DemoBooking | undefined> {
    return this.demoBookings.get(id);
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date(),
      isActive: true
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async unsubscribeNewsletter(email: string): Promise<boolean> {
    const newsletter = Array.from(this.newsletters.values()).find(n => n.email === email);
    if (newsletter) {
      newsletter.isActive = false;
      this.newsletters.set(newsletter.id, newsletter);
      return true;
    }
    return false;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contact: ContactSubmission = {
      ...insertContact,
      id,
      submittedAt: new Date(),
      company: insertContact.company ?? null
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }
}

import { DbStorage } from "./db-storage";

// Use database storage in production, memory storage in development
export const storage = process.env.NODE_ENV === "production" 
  ? new DbStorage() 
  : new MemStorage();
