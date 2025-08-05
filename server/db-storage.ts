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
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createDemoBooking(insertBooking: InsertDemoBooking): Promise<DemoBooking> {
    const result = await db.insert(demoBookings).values(insertBooking).returning();
    return result[0];
  }

  async getDemoBookings(): Promise<DemoBooking[]> {
    return await db.select().from(demoBookings);
  }

  async getDemoBooking(id: string): Promise<DemoBooking | undefined> {
    const result = await db.select().from(demoBookings).where(eq(demoBookings.id, id)).limit(1);
    return result[0];
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const result = await db.insert(newsletterSubscriptions).values(insertNewsletter).returning();
    return result[0];
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return await db.select().from(newsletterSubscriptions);
  }

  async unsubscribeNewsletter(email: string): Promise<boolean> {
    const result = await db
      .update(newsletterSubscriptions)
      .set({ isActive: false })
      .where(eq(newsletterSubscriptions.email, email))
      .returning();
    return result.length > 0;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(insertContact).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }
} 