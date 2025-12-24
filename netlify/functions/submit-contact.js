const { Client } = require('pg');
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, phone, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Faltan campos obligatorios' };
  }

  // 1. Save to Database (Neon/Postgres)
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Neon requires SSL
  });

  try {
    await client.connect();

    // Insert data
    const text = 'INSERT INTO contact_submissions(name, email, phone, message) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [name, email, phone, message];
    await client.query(text, values);

    await client.end();

    // 2. Send Email Notification (Nodemailer)
    // Note: For production, use environment variables for SMTP credentials.
    // If SMTP_HOST is not set, we skip email sending or mock it.
    if (process.env.SMTP_HOST) {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: '"JPR Abogados Web" <no-reply@jprabogados.mx>',
            to: process.env.NOTIFICATION_EMAIL || 'contacto@jprabogados.mx',
            subject: `Nuevo mensaje de contacto: ${name}`,
            text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje:\n${message}`,
            html: `<p><strong>Nombre:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Teléfono:</strong> ${phone}</p>
                   <p><strong>Mensaje:</strong><br/>${message}</p>`,
        });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Mensaje enviado correctamente' }),
    };

  } catch (error) {
    console.error('Error processing submission:', error);
    // Ensure client is closed if error occurs during connection
    try { await client.end(); } catch(e) {}

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error interno del servidor', details: error.toString() }),
    };
  }
};
