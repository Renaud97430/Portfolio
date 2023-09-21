emailjs.init('user_-KtcAA_LaYCO8WY4k'); // Remplacez 'your_user_id' par votre identifiant d'utilisateur Email.js

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
  
    // Récupérez les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Envoyez l'email en utilisant Email.js
    emailjs
      .send('service_your_service_id', 'template_template_fx20rkq', {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(
        function (response) {
          console.log('Email envoyé avec succès', response);
          alert('Email envoyé avec succès');
          // Réinitialisez le formulaire après l'envoi
          document.getElementById('contact-form').reset();
        },
        function (error) {
          console.error('Erreur lors de l\'envoi de l\'email', error);
          alert('Erreur lors de l\'envoi de l\'email');
        }
      );
  });
  