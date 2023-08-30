import { integer, pgTable, serial, varchar, json } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "@vercel/postgres";

export const campaign = pgTable("campaign", {
    id: serial("id").primaryKey(),
    campaign: varchar("campaign", { length: 255 }).notNull(),
    ddv: varchar("ddv", { length: 255 }).notNull(),
    payout: integer("payout").notNull(),
    net: integer("net").notNull(),
    states: varchar("states", { length: 255 }).notNull(),
    didnumber: integer("didnumber").notNull(),
    timings: varchar("timings", { length: 255 }).notNull(),
    form: varchar("form", { length: 255 }).notNull(),
});
export const db = drizzle(sql);

export const users = pgTable("users", {
    id: serial('id').primaryKey(),
    firstName: varchar("firstName", { length: 300 }).notNull(),
    lastName: varchar("lastName", { length: 300 }).notNull(),
    email: varchar("email", { length: 300 }).notNull(),
    password: varchar("password",{length:300}).notNull(),
    phoneNumber: integer("phoneNumber").notNull(),
    companyName: varchar("companyName", { length: 300 }).notNull(),
    skypeHandle: varchar("skypeHandle", { lenght: 300 }).notNull(),
    address: varchar("address", { length: 300 }).notNull(),
    city: varchar("city", { length: 300 }).notNull(),
    state: varchar("state", { length: 300 }).notNull(),
    zipCode: integer("zipCode").notNull(),
    country: varchar("country").notNull(),
    verticals: json("verticals").notNull(),
    userVerified: integer("userVerified", { mode: 'boolean' }).notNull(),
})