//Creare un arrey di email consentite
const emailConsentite = ['email1@example.com', 'email2@example.com', 'email3@example.com'];
//Assegnare il pulsante  "Verifica Email" a una variabile
const verificaEmailBtn = document.getElementById('verificaEmailBtn');
//Aggiungere un event listener al pulsante  "Verifica Email" per gestire il clic
verificaEmailBtn.addEventListener('click', function () {
    //Dichiarazione di una variabile che contiene l'email inserita dall'utente.
    const emailUtente = document.getElementById('emailInput').value;
    //Dichiarazione di un elemento DOM che rappresenta il risultato della verifica email.
    const risultatoEmail = document.getElementById('risultatoEmail');
    //Verificare se l'email dell'utente è nella lista delle email consentite, poi stampare
    if (emailConsentite.includes(emailUtente)) {
        //Se l'email è autorizzata, imposta il risultato della verifica su "Accesso consentito".
        risultatoEmail.textContent = 'Accesso consentito. Benvenuto!';
    } else {
        //Se l'email non è autorizzata, imposta il risultato della verifica su "Accesso negato".
        risultatoEmail.textContent = 'Accesso negato. La tua email non è autorizzata.';
    }
});

//Assegnare il pulsante "Gioca ai Dadi" a una variabile
const giocaDadiBtn = document.getElementById('giocaDadiBtn');
//.
const risultatoDadi = document.getElementById('risultatoDadi');