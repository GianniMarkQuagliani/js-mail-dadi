//Creare un arrey di email consentite
const emailCostante = ['email1@example.com', 'email2@example.com', 'email3@example.com'];
//Assegnare il pulsante  "Verifica Email" a una variabile
const verificaEmailBtn = document.getElementById('verificaEmailBtn');
//Aggiungere un event listener al pulsante  "Verifica Email" per gestire il clic
verificaEmailBtn.addEventListener('click', function () {
    //Dichiarazione di una variabile che contiene l'email inserita dall'utente.
    const emailUtente = document.getElementById('emailInput').value;
    //Dichiarazione di un elemento DOM che rappresenta il risultato della verifica email.
    const risultatoEmail = document.getElementById("risultatoEmail");
    console.log(emailUtente);

});