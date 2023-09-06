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
    const { token, password } = req;

    //need to decrypt a token and  get a user id:
    const decodeJWT = jwt.decode(token);
    const user = await db
      .select()
      .from(schema.customer)
      .where(eq(schema.customer.id, token.userId));

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    //checking time of forgetPassword token is not expired
    const now = new Date();
    const currentTime = new Date(now.getTime());
    if (user[0].forgotPasswordToken < currentTime) {
      return NextResponse.json(
        { message: "Your token has been expired!" },
        { status: 400 }
      );
    }

     //update password
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await db
      .update(schema.customer)
      .set({ password: hashPassword })
      .where(eq(schema.customer.id, user[0].id));

      return NextResponse.json(
        { message: "Password updated successfully!" },
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
