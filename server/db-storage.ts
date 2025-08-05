import { 
  type User, 
  type InsertUser,
  type DemoBooking,
  type InsertDemoBooking,
  type Newsletter,
  type InsertNewsletter,
  type ContactSubmission,
  type InsertContact,
  users,
  demoBookings,
  newsletterSubscriptions,
  contactSubmissions
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export class DbStorage {
  constructor() {
    if (!db) {
      throw new Error('Database connection not available');
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    if (!db) throw new Error('Database not available');
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!db) throw new Error('Database not available');
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!db) throw new Error('Database not available');
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createDemoBooking(insertBooking: InsertDemoBooking): Promise<DemoBooking> {
    if (!db) throw new Error('Database not available');
    const result = await db.insert(demoBookings).values(insertBooking).returning();
    return result[0];
  }

  async getDemoBookings(): Promise<DemoBooking[]> {
    if (!db) throw new Error('Database not available');
    return await db.select().from(demoBookings);
  }

  async getDemoBooking(id: string): Promise<DemoBooking | undefined> {
    if (!db) throw new Error('Database not available');
    const result = await db.select().from(demoBookings).where(eq(demoBookings.id, id)).limit(1);
    return result[0];
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    if (!db) throw new Error('Database not available');
    const result = await db.insert(newsletterSubscriptions).values(insertNewsletter).returning();
    return result[0];
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    if (!db) throw new Error('Database not available');
    return await db.select().from(newsletterSubscriptions);
  }

  async unsubscribeNewsletter(email: string): Promise<boolean> {
    if (!db) throw new Error('Database not available');
    const result = await db
      .update(newsletterSubscriptions)
      .set({ isActive: false })
      .where(eq(newsletterSubscriptions.email, email))
      .returning();
    return result.length > 0;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    if (!db) throw new Error('Database not available');
    const result = await db.insert(contactSubmissions).values(insertContact).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    if (!db) throw new Error('Database not available');
    return await db.select().from(contactSubmissions);
  }
} 