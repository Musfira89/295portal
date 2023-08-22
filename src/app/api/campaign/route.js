import { NextResponse } from "next/server";
import * as schema from '../../../components/utils/drizzle'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(process.env.POSTGRES_URL + "?sslmode=require");
const db = drizzle(client, { schema });

export async function GET() {
    const response = await db.select().from(schema.campaign);
    return NextResponse.json({ response }, { status: 200 });
}

export async function POST(req) {
    const res = await req.json();
    console.log(res)
    const response = await db.insert(schema.campaign)
        .values({
            campaign: res[0].value,
            ddv: res[1].value,
            payout: res[2].value,
            net: res[3].value,
            states: res[4].value,
            didnumber: res[5].value,
            timings: res[6].value,
            form: res[7].value
        }).returning();
    console.log(response)
    return NextResponse.json({ response }, { status: 200 });
}