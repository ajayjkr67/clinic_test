const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const SibApiV3Sdk = require('sib-api-v3-sdk');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Brevo API key
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_KEY;
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

app.post('/send-email', async (req, res) => {
    const { first_name, last_name, email, user_phone, message } = req.body;

    if (!first_name || !email || !message) return res.status(400).send('Required fields missing');

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail({
        to: [{ email: 'ajayjkr66@gmail.com' }], // Clinic inbox
        sender: { email: 'ajayjkr66@gmail.com', name: 'Clinic Name' },
        subject: `New message from ${first_name} ${last_name}`,
        textContent: `Name: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${user_phone}\n\nMessage:\n${message}`
    });

    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        res.send('Email sent successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error sending email');
    }
});

app.listen(process.env.PORT || 5000, () => console.log('Server running'));
