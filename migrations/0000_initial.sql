CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
	"username" text NOT NULL UNIQUE,
	"password" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "demo_bookings" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"institution" text NOT NULL,
	"primary_interest" text NOT NULL,
	"preferred_date" text NOT NULL,
	"preferred_time" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "newsletter_subscriptions" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
	"email" text NOT NULL UNIQUE,
	"subscribed_at" timestamp DEFAULT now(),
	"is_active" boolean DEFAULT true
);

CREATE TABLE IF NOT EXISTS "contact_submissions" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"email" text NOT NULL,
	"company" text,
	"message" text NOT NULL,
	"submitted_at" timestamp DEFAULT now()
); 