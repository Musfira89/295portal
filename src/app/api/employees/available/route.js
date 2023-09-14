import { NextResponse } from "next/server";
import * as schema from '../../../../components/utils/drizzle'
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq } from "drizzle-orm";

const client = postgres(process.env.POSTGRES_URL + "?sslmode=require");
const db = drizzle(client, { schema });

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const param = searchParams.get("id");
    const response = await db.query.availability.findFirst({
        where: eq(schema.availability.userid, param),
    })
    return NextResponse.json(response, { status: 200 });
}
export async function PUT(req) {

    const { searchParams } = new URL(req.url);
    const param = searchParams.get("userid");
    const res = await req.json();
    const { online, payout, campid } = res;
    // check if user exists
    const user = await db.query.availability.findFirst({
        where: eq(schema.availability.userid, param)
    })
    if (user) {
        const response = await db.update(schema.availability)
            .set({ online: online, payout: payout, campid: campid })
            .where(eq(schema.availability.userid, param))
        console.log(response)
    }
    else {
        const response = await db.insert(schema.availability)
            .values({ userid: param, online: online, payout: payout, campid: campid })
        console.log(response)
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
}