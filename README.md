# JPR Abogados - Corporate Website

This is the official website for **JPR Abogados**, a boutique legal firm based in Monterrey, Mexico. The site is a modern Single Page Application (SPA) built with React, designed to reflect a "Clean & Corporate" aesthetic using a Navy Blue and Gold color palette.

## Features

-   **Modern Design:** Fully responsive layout with a premium feel using Styled Components.
-   **Animations:** Smooth entry animations using `framer-motion`.
-   **Contact Form:** Functional contact form integrated with a serverless backend.
-   **Backend:** Netlify Functions handle form submissions, saving data to a Neon (PostgreSQL) database and sending email notifications via Nodemailer.

## Tech Stack

-   **Frontend:** React (Vite), Styled Components, Framer Motion.
-   **Backend:** Netlify Functions (Node.js).
-   **Database:** Neon Serverless PostgreSQL.
-   **Email:** Nodemailer (SMTP).

## Project Structure

-   `src/components`: Reusable UI components (Buttons, Input fields, Layout wrappers).
-   `src/sections`: Main page sections (Hero, About, Services, Philosophy, Contact).
-   `src/styles`: Global styles and theme definitions (`theme.js`).
-   `netlify/functions`: Serverless functions for backend logic.

## Setup & Installation

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## Environment Variables

To enable the contact form functionality, you must configure the following environment variables in your deployment environment (e.g., Netlify Dashboard):

| Variable | Description |
| :--- | :--- |
| `DATABASE_URL` | Connection string for your Neon PostgreSQL database. |
| `SMTP_HOST` | Hostname of your SMTP email provider (e.g., `smtp.gmail.com`). |
| `SMTP_PORT` | Port for the SMTP server (usually `587` or `465`). |
| `SMTP_USER` | Username/Email for the SMTP account. |
| `SMTP_PASS` | Password or App Password for the SMTP account. |
| `NOTIFICATION_EMAIL`| The email address that will receive the contact form submissions. |

## Database Setup

Run the SQL script located in `database.sql` to create the necessary table for storing contact submissions.
