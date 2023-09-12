//Creare un arrey di email consentite
const emailConsentite = ['email1@example.com', 'email2@example.com', 'email3@example.com'];
console.log(emailConsentite);
//Assegnare il pulsante  "Verifica Email" a una variabile
const verificaEmailBtn = document.getElementById('verificaEmailBtn');
console.log(verificaEmailBtn);
//Aggiungere un event listener al pulsante  "Verifica Email" per gestire il clic
verificaEmailBtn.addEventListener('click', function () {
    //Dichiarazione di una variabile che contiene l'email inserita dall'utente.
    const emailUtente = document.getElementById('emailInput').value;
    //Dichiarazione di un elemento DOM che rappresenta il risultato della verifica email.
    const risultatoEmail = document.getElementById('risultatoEmail');
    console.log(risultatoEmail);
    //Verificare se l'email dell'utente è nella lista delle email consentite, poi stampare
    if (emailConsentite.includes(emailUtente)) {
        //Se l'email è autorizzata, imposta il risultato della verifica su "Accesso consentito".
        risultatoEmail.textContent = 'Accesso consentito. Benvenuto!';
        console.log(risultatoEmail.textContent);
    } else {
        //Se l'email non è autorizzata, imposta il risultato della verifica su "Accesso negato".
        risultatoEmail.textContent = 'Accesso negato. La tua email non è autorizzata.';
        console.log(risultatoEmail.textContent);
    }
});

//Assegnare il pulsante "Gioca ai Dadi" a una variabile
const giocaDadiBtn = document.getElementById('giocaDadiBtn');
//Dichiarazione di un elemento DOM che rappresenta il risultato del gioco dei dadi.
const risultatoDadi = document.getElementById('risultatoDadi');
//Aggiungere un event listener al pulsante "Gioca ai Dadi" per gestire il clic
giocaDadiBtn.addEventListener('click', function () {
    //Generare un numero causale da 1 a 6 per il giocatore
    const punteggioGiocatore = Math.floor(Math.random() * 6) + 1;
    console.log(punteggioGiocatore);
    //Generare un numero causale da 1 a 6 per il pc
    const punteggioPc = Math.floor(Math.random() * 6) + 1;
    console.log(punteggioPc);
    //Se il punteggio del giocatore è maggiore del punteggio del pc
    if (punteggioGiocatore > punteggioPc) {
        //Imposta il risultato del gioco dei dadi su "Il giocatore ha vinto!".
        risultatoDadi.textContent = 'Il giocatore ha vinto!';
        console.log(risultatoDadi.textContent);
    } else if (punteggioGiocatore < punteggioPc) {
        //Imposta il risultato del gioco dei dadi su "Il computer ha vinto!".
        risultatoDadi.textContent = 'Il computer ha vinto!';
        console.log(risultatoDadi.textContent);
    } else {
        //Imposta il risultato del gioco dei dadi su "è un pareggio!".
        risultatoDadi.textContent = 'è un pareggio!';
        console.log(risultatoDadi.textContent);
    }
});