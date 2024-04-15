let classe = '{ "Compagni" : [' +
    '{ "nome":"Alex" , "cognome":"Barbiera" },' +
    '{ "nome":"Alex" , "cognome":"Bonura" },' +
    '{ "nome":"Marco" , "cognome":"Bottari" },' +
    '{ "nome":"Federico" , "cognome":"Cupardo" },' +
    '{ "nome":"Omar" , "cognome":"Dambrogi" },' +
    '{ "nome":"Federico" , "cognome":"Grassi" },' +
    '{ "nome":"Gabriel" , "cognome":"Graziano" },' +
    '{ "nome":"Karla" , "cognome":"Herrera" },' +
    '{ "nome":"Carlo" , "cognome":"Laguda" },' +
    '{ "nome":"Simone" , "cognome":"Marro" },' +
    '{ "nome":"Leonardo" , "cognome":"Matta" },' +
    '{ "nome":"Tommaso" , "cognome":"Mattioni" },' +
    '{ "nome":"Rocco" , "cognome":"Mazza" },' +
    '{ "nome":"Birane" , "cognome":"Mergane" },' +
    '{ "nome":"Sebastian" , "cognome":"Mihali" },' +
    '{ "nome":"Gabriele" , "cognome":"Papagni" },' +
    '{ "nome":"Matteo" , "cognome":"Sbarra" },' +
    '{ "nome":"Iljas" , "cognome":"Toci" },' +
    '{ "nome":"Roberto" , "cognome":"Valendino" },' +
    '{ "nome":"Ahmed" , "cognome":"Moustafa" }]}'

const oggetto = JSON.parse(classe);
const input = getElementById('inputNumber');

function funNumber() {
    var numero = parseFloat(inputNumber.value);
    if (numero < 21) {
        document.getElementById("show").innerHTML = oggetto.Compagni[numero - 1].nome + " " + oggetto.Compagni[numero - 1].cognome;
    } else {
        alert("Numero inferiore o oltre al quantitativo di compagni di classe")
    }
}