import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // TODO: Wire up Resend to send emails to skatulaslatkog@gmail.com
  console.log('Contact form submission:', { name, email, message });

  return NextResponse.json({ success: true });
}
