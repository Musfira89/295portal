import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { db } from "@/app/db/drizzle";
import { eq } from "drizzle-orm";
import { customers } from "../components/utils/drizzle";
import * as jose from "jose";

export const sendEmailForForgetPassword = async ({ email, userId }) => {
    const now = new Date();
    const oneHour = new Date(now.getTime() + 60 * 60 * 1000); // 1 hr in milliseconds
    try {
  
      //create jwt token data here
      const tokenData = {
        userId: userId,
      };
  
      //creating a token using jose ===
      const secret = new TextEncoder().encode(
        "zlro3KCwoNBw0Q3RcPF2N1Zctye1ztTszlro3KCwoNBw0Q3RcPF2N1Zctye1ztTs"
      );
  
      const alg = "HS256";
      const hashedToken = await new jose.SignJWT(tokenData)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer("urn:example:issuer")
        .setAudience("urn:example:audience")
        .setExpirationTime("2h")
        .sign(secret);
  
  
      const user = await db.select().from(users).where(eq(users.userName, email));
      if (!user) {
        return NextResponse.json({ message: "User doesnot exist" });
      }
  
      await db.insert(passwordRecovery).values({
        userId: user[0].userId,
        userName: user[0].userName,
        forgotPasswordToken: hashedToken,
        tokenExpiry: oneHour,
      });
  
      const transport = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: 'waniakz019@gmail.com',
          pass: 'peomnmekllunckyi'
        }
      });
  
      const mailOptions = {
        from: "waniakz019@gmail",
        to: email,
        subject: "Reset your Password",
        html: `<p>Click <a href='${process.env.NEXT_PUBLIC_BASE_URL}/forget-password?token=${hashedToken}'>here</a> to Reset your password or copy paste the link in your browser <br> ${process.env.NEXT_PUBLIC_BASE_URL}/forget-password?token=${hashedToken} </p>`,
      };
      const mailResponse = await transport.sendMail(mailOptions);
      return mailResponse;
    } catch (error) {
      let err = error;
      return NextResponse.json(
        {
          success: false,
          error: err.toString(),
          message:
            "Unable to process the request: an error occurred while to database",
        },
        { status: 500 }
      );
    }
  };
  