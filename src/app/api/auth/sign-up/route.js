import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    console.log("route of sign up")
  try {
    const req = request.json();
    console.log("Req of sign-up route is=====", req);
  } catch (error) {
    console.log("Error is ====", error);
    NextResponse.json({ message: "Request is invalid", status: 400 });
  }
}
