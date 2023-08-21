import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "@vercel/postgres";

export const campaignTable = pgTable("file", {
    id: serial("id").primaryKey(),
    campaign: varchar("campaign", { length: 255 }).notNull(),
    ddv: varchar("ddv", { length: 255 }).notNull(),
    payout: integer("payout").notNull(),
    net: integer("net").notNull(),
    didnumber: integer("didnumber").notNull(),
    timings: varchar("timings", { length: 255 }).notNull(),
    form: varchar("form", { length: 255 }).notNull(),
});
export const db = drizzle(sql);