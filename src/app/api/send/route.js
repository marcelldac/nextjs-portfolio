import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = "dacmarcell@gmail.com";

export async function GET() {
  try {
    return NextResponse({ message: "Ok" });
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: email,
      to: toEmail,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Nova mensagem vinda do portfólio:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
