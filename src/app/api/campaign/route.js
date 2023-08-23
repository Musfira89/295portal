import { NextResponse } from "next/server";
import * as schema from '../../../components/utils/drizzle'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq } from "drizzle-orm";

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

export async function PUT(req) {
    const res = await req.json();

    const response = await db.update(schema.campaign)
        .set({
            campaign: res.campaign,
            ddv: res.ddv,
            payout: res.payout,
            net: res.net,
            states: res.states,
            didnumber: res.didnumber,
            timings: res.timings,
            form: res.form
        }).where(eq(schema.campaign.id, res.id)).returning();
    return NextResponse.json({ response }, { status: 200 });
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const param = searchParams.get("id");
        console.log(param)
        const response = await db.delete(schema.campaign).where(eq(schema.campaign.id, param));
        console.log(response)
        return NextResponse.json({ response }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}