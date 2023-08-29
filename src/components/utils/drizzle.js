import { integer, pgTable, serial, varchar, json } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "@vercel/postgres";
import { relations } from "drizzle-orm";

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


export const users = pgTable("users", {
    id: serial('id').primaryKey(),
    firstName: varchar("firstName", { length: 255 }).notNull(),
    lastName: varchar("lastName", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phoneNumber: integer("phoneNumber").notNull(),
    companyName: varchar("companyName", { length: 255 }).notNull(),
    skypeHandle: varchar("skypeHandle", { lenght: 255 }).notNull(),
    address: varchar("address", { length: 255 }).notNull(),
    city: varchar("city", { length: 255 }).notNull(),
    state: varchar("state", { length: 255 }).notNull(),
    zipCode: integer("zipCode").notNull(),
    country: varchar("country").notNull(),
    verticals: json("verticals").notNull(),
    userVerified: integer("userVerified", { mode: 'boolean' }).notNull(),
})
export const usersRelations = relations(users, ({ one, many }) => ({
    earnings: one(earnings, {
        fields: [users.id],
        references: [earnings.userId]
    }),
    chartdata: many(chartdata)
}))

export const earnings = pgTable("earnings", {
    id: serial('id').primaryKey(),
    userid: integer("userid").notNull().references(() => users.id),
    calltoday: integer("calltoday").notNull(),
    billablestoday: integer("billablestoday").notNull(),
    earningtoday: integer("earningtoday").notNull(),
    totalearning: integer("totalearning").notNull(),
    totalbillables: integer("totalbillables").notNull(),
    totalcalls: integer("totalcalls").notNull(),
})

export const chartdata = pgTable("chartdata", {
    id: serial('id').primaryKey(),
    userid: integer("userid").notNull(),
    date: varchar("date", { length: 255 }).notNull(),
    earnings: integer("earnings").notNull(),
})

export const chartdataRelations = relations(chartdata, ({ one }) => ({
    userId: one(users, {
        fields: [chartdata.userid],
        references: [users.id]
    }),
}))
export const db = drizzle(sql);

