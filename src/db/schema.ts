import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
  jsonb,
  pgEnum,
  index,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

// Enums

export const projectTypeEnum = pgEnum('project_type', [
  'ai_automation',
  'software_development',
  'product_design',
  'business_solutions',
  'it_consulting',
  'multiple',
]);

export const inquiryStatusEnum = pgEnum('inquiry_status', [
  'new',
  'contacted',
  'closed',
]);

export const budgetRangeEnum = pgEnum('budget_range', [
  'under_5k',
  '5k_15k',
  '15k_50k',
  '50k_plus',
]);

// Inquiries (Contact Form Submissions)

export const inquiries = pgTable(
  'inquiries',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    company: varchar('company', { length: 255 }),
    projectType: projectTypeEnum('project_type'),
    budgetRange: budgetRangeEnum('budget_range'),
    timeline: varchar('timeline', { length: 100 }),
    description: text('description'),
    status: varchar('status', { length: 50 }).default('new').notNull(),
    ipAddress: varchar('ip_address', { length: 45 }),
    userAgent: text('user_agent'),
    isSpam: boolean('is_spam').default(false).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    emailIdx: index('inquiries_email_idx').on(table.email),
    statusIdx: index('inquiries_status_idx').on(table.status),
    createdAtIdx: index('inquiries_created_at_idx').on(table.createdAt),
  })
);

// Newsletter Subscribers

export const newsletterSubscribers = pgTable(
  'newsletter_subscribers',
  {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull(),
    isActive: boolean('is_active').default(true).notNull(),
    source: varchar('source', { length: 100 }).default('website'),
    confirmedAt: timestamp('confirmed_at', { withTimezone: true }),
    unsubscribedAt: timestamp('unsubscribed_at', { withTimezone: true }),
    ipAddress: varchar('ip_address', { length: 45 }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    emailUnique: uniqueIndex('newsletter_email_unique').on(table.email),
    activeIdx: index('newsletter_active_idx').on(table.isActive),
  })
);
// Projects (Case Studies)

export const projects = pgTable(
  'projects',
  {
    id: serial('id').primaryKey(),
    slug: varchar('slug', { length: 255 }).notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    summary: text('summary'),
    serviceCategory: varchar('service_category', { length: 100 }),
    tags: jsonb('tags').$type<string[]>().default([]),
    problem: text('problem'),
    approach: text('approach'),
    solution: text('solution'),
    impact: text('impact'),
    isPublished: boolean('is_published').default(false).notNull(),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    slugUnique: uniqueIndex('projects_slug_unique').on(table.slug),
    publishedIdx: index('projects_published_idx').on(table.isPublished),
  })
);

// Services

export const services = pgTable(
  'services',
  {
    id: serial('id').primaryKey(),
    slug: varchar('slug', { length: 255 }).notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    shortDescription: text('short_description'),
    description: text('description'),
    icon: varchar('icon', { length: 100 }),
    capabilities: jsonb('capabilities').$type<string[]>().default([]),
    outcomes: jsonb('outcomes').$type<string[]>().default([]),
    isPublished: boolean('is_published').default(false).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    slugUnique: uniqueIndex('services_slug_unique').on(table.slug),
  })
);

// Insights (Blog Posts / Articles)

export const insights = pgTable(
  'insights',
  {
    id: serial('id').primaryKey(),
    slug: varchar('slug', { length: 255 }).notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    excerpt: text('excerpt'),
    content: text('content'),
    category: varchar('category', { length: 100 }),
    tags: jsonb('tags').$type<string[]>().default([]),
    author: varchar('author', { length: 255 }).default('QuantumFuze Strategy Team'),
    isPublished: boolean('is_published').default(false).notNull(),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    slugUnique: uniqueIndex('insights_slug_unique').on(table.slug),
    categoryIdx: index('insights_category_idx').on(table.category),
    publishedIdx: index('insights_published_idx').on(table.isPublished),
  })
);

// Admin Users

export const adminUsers = pgTable(
  'admin_users',
  {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    role: varchar('role', { length: 50 }).default('editor').notNull(),
    isActive: boolean('is_active').default(true).notNull(),
    lastLoginAt: timestamp('last_login_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    emailUnique: uniqueIndex('admin_users_email_unique').on(table.email),
  })
);

// Type Exports

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type NewNewsletterSubscriber = typeof newsletterSubscribers.$inferInsert;
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Service = typeof services.$inferSelect;
export type NewService = typeof services.$inferInsert;
export type Insight = typeof insights.$inferSelect;
export type NewInsight = typeof insights.$inferInsert;
export type AdminUser = typeof adminUsers.$inferSelect;
export type NewAdminUser = typeof adminUsers.$inferInsert;
