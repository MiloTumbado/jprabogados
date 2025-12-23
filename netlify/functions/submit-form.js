const { Pool } = require('pg');
const nodemailer = require('nodemailer');

exports.handler = async function(event, _context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body);

    // 1. Validar los datos de entrada (ejemplo básico)
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Nombre, correo y mensaje son campos obligatorios.' }),
      };
    }

    // 2. Conectarse a la base de datos Neon y guardar los datos
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });

    const query = `
      INSERT INTO contact_submissions (name, email, phone, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `;
    const values = [name, email, phone, message];
    await pool.query(query, values);
    await pool.end();

    // 3. Enviar un correo de notificación con Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"JPR Abogados" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: 'Nuevo envío de formulario de contacto',
      html: `
        <p>Has recibido un nuevo mensaje a través del formulario de contacto:</p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Correo:</strong> ${email}</li>
          <li><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</li>
        </ul>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Formulario enviado correctamente.' }),
    };
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error interno del servidor.' }),
    };
  }
};
