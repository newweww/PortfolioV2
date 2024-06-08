import nodemailer from 'nodemailer';

export async function POST(request) {
    const { email, subject, message } = await request.json();

    // Create a transporter object using SMTP transport for Hotmail
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // Your Hotmail email address
            pass: process.env.EMAIL_PASS, // Your Hotmail email password
        },
    });

    // Set up email data
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: message,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
}
