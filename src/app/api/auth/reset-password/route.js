import { NextResponse } from "next/server";
import * as schema from "../../../../components/utils/drizzle";
import { customer } from "../../../../components/utils/drizzle";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as jose from "jose";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

const client = postgres(process.env.POSTGRES_URL + "?sslmode=require");
const db = drizzle(client, { schema });

export async function POST(request) {
  try {
    const req = await request.json();
    const { email } = req;

    //whether email exist in db or not
    const user = await db
      .select()
      .from(schema.customer)
      .where(eq(schema.customer.email, email));
    if (!user) {
      return NextResponse.json({ message: "User doesnot exist" });
    }
    const userId = user[0].userId;
    const emailSend = await sendEmailForForgetPassword({ email, userId });
    return NextResponse.json(
      { message: "Email Send Successfully" },
      { status: 200 }
    );
  } catch (error) {
    // executed if adding browserDetails fails
    return NextResponse.json(
      {
        success: false,
        error: error.toString(),
        message:
          "Unable to process the request: an error occurred while to database",
      },
      { status: 500 }
    );
  }
}
