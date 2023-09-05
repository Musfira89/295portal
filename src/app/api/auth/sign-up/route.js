import { NextResponse } from "next/server";
import * as schema from "../../../../components/utils/drizzle";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { eq } from "drizzle-orm";

const client = postgres(process.env.POSTGRES_URL + "?sslmode=require");
const db = drizzle(client, { schema });

export async function POST(request) {
  console.log("route of sign up ============");
  try {
    const req = await request.json();
    console.log("Req of sign-up route is=====", req);
    // //Get user from email
    const userDB = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, req.email));
    console.log("user value from db is ====", userDB);

      //hash password
      const salt = await bcrypt.genSalt(10); //genSalt will create a salt with the 10 rounds - Salt is a cryptographically secure random string that is added to a password before it's hashed,
      console.log("Salt of password is ==========", salt)
      const hashPassword = await bcrypt.hash(req.password, salt);

    if (!userDB) {
      await db.insert(schema.users).values({
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        password: hashPassword,
        phoneNumber: req.phoneNumber,
        companyName: req.companyName,
        skypeHandle: req.skypeHandle,
        address: req.address,
        city: req.city,
        state: req.state,
        zipCode: req.zipCode,
        country: req.country,
        verticals: { checkbox: req.checkBox },
        userVerified: false,
      });
      return NextResponse.json({ message: "Successfull", status: 200 });
    } else {
      return NextResponse.json({ message: "User already exist", status: 400 });
    }
  } catch (error) {
    console.log("Error is ====", error);
    NextResponse.json({ message: "Request is invalid", status: 400 });
  }
}
