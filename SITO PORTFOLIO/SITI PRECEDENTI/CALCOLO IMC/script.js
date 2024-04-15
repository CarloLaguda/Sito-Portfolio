const altezza = document.getElementById('txtaltezza'); // dichiarazione costanti
const peso = document.getElementById('txtpeso');
const eta = document.getElementById('txtEta');
const result = document.getElementById('result');
const button = document.getElementById('button');
const prova = document.getElementById('prova');
let pesoKg = 0; // dichiarazione variabili
let altezzaM = 0;
let IMC = 0;
let anni = 0;
let ME = ""; //Maggior Età
let statoIMC = ""; //se obeso o meno

function confermaDati() {
    pesoKg = parseFloat(peso.value);
    altezzaM = parseFloat(altezza.value);
    anni = parseFloat(eta.value);
    IMC = pesoKg / Math.pow(altezzaM, 2)
    IMC = IMC.toFixed(2);
    ME = verifica_Eta(anni);
    statoIMC = stabilisci_IMC(IMC);
    result.textContent = "Il tuo indice di massa corporea è: " + IMC + ", classificabile come soggetto " + statoIMC + "." + " In base alla tua età sei " + ME + " ."
}
// verifico se maggiorenne o meno
function verifica_Eta(anni) {
    if (anni > 17) {
        ME = "maggiorenne"
    } else {
        ME = "minorenne"
    }
    return ME;
}
// verifico se obeso o no
function stabilisci_IMC(IMC) {
    if (IMC < 18.50) {
        statoIMC = "sottopeso"
    } else {
        if (IMC < 24.50) {
            statoIMC = "normopeso"
        } else {
            if (IMC < 30) {
                statoIMC = "sovrappeso"
            } else {
                if (IMC >= 30) {
                    statoIMC = "obeso"
                }
            }
        }
    }
    return statoIMC;
}