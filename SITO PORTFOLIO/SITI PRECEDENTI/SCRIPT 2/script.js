let lampadinaAccesa = false;
let primo = 0;
let secondo = 0 ;
const IMGMACCHINA = document.getElementById('IMGMACCHINA');
const bottone = document.getElementById('bottone');
function Cambia_auto() {
    if (lampadinaAccesa){
        IMGMACCHINA.src = "IMMAGINI/ferrari.jpg";
        bottone.textContent = 'Torna al peggio';
        lampadinaAccesa = false;
    }
    else{
        IMGMACCHINA.src = "IMMAGINI/RedBull.jpg"
        bottone.textContent = 'Passa a qualcosa di meglio';
        lampadinaAccesa = true;
    }
  }
function OperazioniValore() {
    var primoNumero = document.getElementById('primo_numero');
    var secondoNumero = document.getElementById('secondo_numero');
    // Ottenere il valore dalla casella di testo
    primo = parseFloat(primoNumero.value);
    secondo = parseFloat(secondoNumero.value);
    var somma = primo + secondo;
    var sottrazione = primo - secondo;
    var moltiplicazione = primo * secondo;
    var divisione = primo / secondo;
    document.getElementById('somma').value = somma;
    document.getElementById('sottrazione').value = sottrazione;
    document.getElementById('moltiplicazione').value = moltiplicazione;
    document.getElementById('divisione').value = divisione;
}

IMGMACCHINA.addEventListener('click', () => {
    let risultato = Math.pow(primo, secondo);
    document.getElementById('elevamento').value = risultato;
});

