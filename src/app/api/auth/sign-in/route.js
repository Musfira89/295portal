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
    const { email, password } = req;
    console.log("Req from login page is=====", req);
    //Get user from email
    const user = await db
      .select()
      .from(schema.customer)
      .where(eq(schema.customer.email, email));
    console.log("user form sign in page=====", user);
    if (!user) {
      return NextResponse.json({ message: "User doesnot exist" });
    }
    
    //check if password is valid
    if (user[0].password !== null) {
      const validPassword = await bcrypt.compare(password, user[0].password);
      if (validPassword) {
        //generate a token
        const secret = new TextEncoder().encode(process.env.JOSE_KEY);
        const alg = "HS256";
        const token = await new jose.SignJWT({ id: user[0].id.toString() })
          .setProtectedHeader({ alg })
          .setIssuedAt()
          .setExpirationTime("2h")
          .sign(secret);

        const response = NextResponse.json({
          message: "Login Successfull",
          success: true,
        });

        response.cookies.set("token", token, {
          httpOnly: true, 
        });
        return response;
      } else {
        return NextResponse.json({
          message: "Username or password doesnot match",
          status: 400,
        });
      }
    }
  } catch (error) {
    NextResponse.json({ message: "Request is invalid", status: 400 });
  }
}
