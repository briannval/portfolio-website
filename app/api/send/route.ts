import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {name, email, umessage}= structuredClone(body);

    const data = await resend.emails.send({
      from: email,
      to: "brianvalentinoadhitya@gmail.com",
      subject: `Message from ${name}`,
      text: umessage,
    });

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
