import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {name, email, message} = req.body;

  const transporter = nodemailer.createTransport({
    host: 'email-smtp.sa-east-1.amazonaws.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'admin@cefafortaleza.org.br',
    to: process.env.SMTP_RECEIVER,
    subject: 'Nova Mensagem de cefa.com.br',
    html: `
      <h3>New message from My Website:</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({success: true});
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false});
  }
}
