import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { projectType, budget, name, email, description } = await req.json();

    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['rvkaira@gmail.com'],
      subject: 'New Project Inquiry',
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
