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
    const response = await db.select().from(schema.customer)
        .where(eq(schema.customer.id, param));
    return NextResponse.json({ response }, { status: 200 });

}
export async function POST(req) {

    const payout = 10;
    const { billablestoday, callstoday } = await req.json();
    const { searchParams } = new URL(req.url);
    const param = searchParams.get("id");

    // check if userdata exists
    const getuser = await db.select().from(schema.earnings)
        .where(eq(schema.earnings.userid, param));

    let response;
    // userdata doesnot exists add user data
    if (getuser.length == 0) {
        response = await db.insert(schema.earnings).values(
            {
                userid: param,
                calltoday: callstoday,
                billablestoday: billablestoday,
                earningtoday: payout * billablestoday,
                totalearning: payout * billablestoday,
                totalbillables: billablestoday,
                totalcalls: callstoday,
            }).returning();
    }
    else {
        response = await db.update(schema.earnings)
            .set({
                userid: param,
                calltoday: callstoday,
                billablestoday: billablestoday,
                earningtoday: payout * billablestoday,
                totalearning: getuser[0].totalearning + (payout * billablestoday),
                totalbillables: getuser[0].totalbillables + billablestoday,
                totalcalls: getuser[0].totalcalls + callstoday,
            })
            .where(eq(schema.earnings.userid, param))
            .returning();
    }
    // get date of today
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    // add userdata to chartdata table to create charts
    const chartdata = await db.insert(schema.chartdata).values(
        {
            userid: param,
            date: `${day}-${month}-${year}`,
            earnings: payout * billablestoday,
        }).returning();

    console.log(response);

    return NextResponse.json({ response }, { status: 200 });

}

export async function PUT(req) {

    const { searchParams } = new URL(req.url);
    const param = searchParams.get("id");

    // get the user first 
    const getuser = await db.query.earnings.findFirst({
        where: eq(schema.earnings.userid, param)
    })

    // get the payout
    const payout = await db.query.availability.findFirst({
        where: eq(schema.availability.userid, param)
    });
    const response = await db.update(schema.earnings)
        .set({
            userid: param,
            calltoday: 0,
            billablestoday: 0,
            earningtoday: 0,
            totalearning: getuser.totalearning - (getuser.billablestoday * payout.payout),
            totalbillables: getuser.totalbillables - getuser.billablestoday,
            totalcalls: getuser.totalcalls - getuser.calltoday,
        })
        .where(eq(schema.earnings.userid, param))
        .returning({
            id: schema.earnings.id,
            userid: schema.earnings.userid,
            calltoday: schema.earnings.calltoday,
            billablestoday: schema.earnings.billablestoday,
            earningtoday: schema.earnings.earningtoday,
            totalbillables: schema.earnings.totalbillables,
            totalcalls: schema.earnings.totalcalls,
            totalearning: schema.earnings.totalearning,
        })
    console.log(response);
    return NextResponse.json({ response }, { status: 200 });

}