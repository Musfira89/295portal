import { NextResponse } from "next/server";
import * as schema from "../../../../components/utils/drizzle";
import { customer } from "../../../../components/utils/drizzle";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

const client = postgres(process.env.POSTGRES_URL + "?sslmode=require");
const db = drizzle(client, { schema });

export async function POST(request) {
  try {
    const req = await request.json();
    console.log("Req of sign-up route is=====", req);
    // //Get user from email
    const userDB = await db
      .select()
      .from(schema.customer)
      .where(eq(schema.customer.email, req.email));
    console.log("user value from db is ====", userDB);

    //hash password
    const salt = await bcrypt.genSalt(10); //genSalt will create a salt with the 10 rounds - Salt is a cryptographically secure random string that is added to a password before it's hashed,
    const hashPassword = await bcrypt.hash(req.password, salt);
    console.log("Hashed password is ====", hashPassword);

    if (userDB.length == 0) {
    await db.insert(schema.customer).values({
      firstname: req.firstName,
      lastname: req.lastName,
      email: req.email,
      password: hashPassword,
      phonenumber: req.phoneNumber,
      companyname: req.companyName,
      skypehandle: req.skypeHandle,
      address: req.address,
      city: req.city,
      state: req.state,
      zipcode: req.zipCode,
      country: req.country,
      verticals: { checkbox: req.checkBox },
      userverified: false,
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
