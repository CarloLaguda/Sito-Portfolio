function inviaEmail(){
    // Inizializza EmailJS con la public key
    emailjs.init('M2VR5CY4e3xmchZmS');
    // Recupera i valori dai campi del modulo
    const nome = document.getElementById('name');
    const contatto = document.getElementById('contact');
    const messaggio = document.getElementById('message');
    const btn = document.getElementById('button');
    // Controlla se i campi sono vuoti
    if (nome.value === '' || contatto.value === '' || messaggio.value === '') {
        alert("Per favore, completa tutti i campi prima di inviare l'email.");
        return; // Interrompe l'esecuzione della funzione se i campi sono vuoti
    }
    // Crea un oggetto con i parametri per l'invio dell'email
    const params = {
        nome: nome.value,
        contatto: contatto.value,
        messaggio: messaggio.value
    };
    // Cambia il testo del pulsante durante l'invio
    btn.textContent = 'invio...';
    // Invia l'email tramite EmailJS
    emailjs.send("service_vf3n3sk", "template_sd6f2da", params)
    .then(function (response) {
        // Mostra un messaggio di successo
        alert("Email inviata con successo!");
        // Resetta i campi del modulo dopo l'invio
        nome.value = '';
        contatto.value = '';
        messaggio.value = '';
        btn.textContent = 'Invia';
    }, function (error) {
        // Mostra un messaggio di errore in caso di fallimento
        alert("Errore durante l'invio dell'email: " + error);
        // Resetta i campi del modulo in caso di errore
        btn.textContent = 'Invia';
        nome.value = '';
        contatto.value = '';
        messaggio.value = '';
    });
}