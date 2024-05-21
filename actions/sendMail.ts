"use server";

import { EmailTemplate } from "@/emails/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function testFunction() {
  await console.log("Hello");
}

export async function sendMail(name: String, email: String, umessage: String) {
  try {
    const { data, error } = await resend.emails.send({
      from: "portfolio@resend.dev",
      to: ["brianvalentinoadhitya@gmail.com"],
      subject: `Message from ${name}`,
      react: EmailTemplate({ name, email, umessage }) as React.ReactElement,
    });

    console.log(data, error);

    if (error) {
      console.log("error 1");
      return JSON.parse(
        JSON.stringify(NextResponse.json({ error }, { status: 400 }))
      );
    }
    return JSON.parse(
      JSON.stringify(NextResponse.json({ data }, { status: 200 }))
    );
  } catch (e) {
    console.log("error 2");
    return JSON.parse(
      JSON.stringify(NextResponse.json({ e }, { status: 500 }))
    );
  }
}
