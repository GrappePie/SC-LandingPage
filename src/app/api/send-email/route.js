import { Resend } from 'resend';
import { EmailTemplate } from "@/app/componets/email-template";
import { NextResponse, NextRequest } from 'next/server';

const resend = new Resend('re_KYMXhM2q_KHA7tzK8Xgv6j67HpKdLiSb4');
export async function POST(req, res) {
    const { name, email, subject, telephone } = await req.json();
    console.log(name, email, subject, telephone);
    if(!name || !email || !subject || !telephone) return NextResponse.json({message: 'Todos los campos son requeridos'}, { status: 400 });
    try {
        const data = await resend.emails.send({
            from: email,
            to: 'taffyapplegirl@gmail.com',
            subject: subject,
            react: EmailTemplate({ name, email, telephone })
        });
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}