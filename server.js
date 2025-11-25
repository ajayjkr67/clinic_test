// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import SibApiV3Sdk from 'sib-api-v3-sdk';

const app = express();
app.use(cors());
app.use(bodyParser.json());

SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_KEY;
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

app.post('/send-email', async (req, res) => {
  try {
    const { first_name, last_name, email, user_phone, message } = req.body;

    const sendSmtpEmail = {
      sender: { email: 'ajayjkr66@gmail.com', name: 'Clinic Name' }, // verified sender
      to: [{ email: 'ajayjkr66@gmail.com' }], // recipient
      subject: 'New Contact Form Submission',
      htmlContent: `<h2>New message from website</h2>
                    <p><strong>Name:</strong> ${first_name} ${last_name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${user_phone}</p>
                    <p><strong>Message:</strong><br>${message}</p>`
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default app;
