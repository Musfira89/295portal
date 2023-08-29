import { NextResponse } from "next/server";
import * as schema from '../../../components/utils/drizzle'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq } from "drizzle-orm";

const client = postgres(process.env.POSTGRES_URL + "?sslmode=require");
const db = drizzle(client, { schema });

export async function GET() {
    try {
        const response = await db.select().from(schema.users);
        return NextResponse.json({ response }, { status: 200 });
    } catch (err) {
        console.log(err);
    }
}
