const nodemailer = require('nodemailer');

// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
  auth: {
    user: "dd328c2b7ca115", // Remplacez par votre adresse e-mail
    pass: "********9268", // Remplacez par votre mot de passe
  },
});

// Fonction pour envoyer un e-mail
function sendEmail(name, email, subject, message) {
  const mailOptions = {
    from: 'votre-email@gmail.com', // Remplacez par votre adresse e-mail
    to: 'destination@email.com', // Remplacez par l'adresse e-mail de destination
    subject: subject,
    text: `De: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail', error);
    } else {
      console.log('E-mail envoyé avec succès', info.response);
    }
  });
}

module.exports = sendEmail;
