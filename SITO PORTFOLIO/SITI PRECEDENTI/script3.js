let text = '{ "REGIONI" : [' +
'{ "nome":"Lombardia" , "abitanti":' + Math.floor(Math.random() * (200 + 1)) + '},' + // genero il numero di abitanti casualmente
'{ "nome":"Piemonte" , "abitanti":' + Math.floor(Math.random() * (200 + 1)) + '},' +
'{ "nome":"Puglia" , "abitanti":' + Math.floor(Math.random() * (200 + 1)) + '},' +
'{ "nome":"Campania" , "abitanti":' + Math.floor(Math.random() * (200 + 1)) + '} ]}';

let txt = JSON.parse(text);

let myPromise = new Promise(function(vero, falso){
  if(txt.REGIONI[0].abitanti >= 0 && txt.REGIONI[1].abitanti >= 0 && txt.REGIONI[2].abitanti >= 0 && txt.REGIONI[3].abitanti >= 0){ // verifico se il numero di abitanti è maggiore per ognuna
    vero()
  }else{
    falso()
  }
})

myPromise.then(
  function(value){ 
    let x = Math.floor(Math.random() * txt.REGIONI.length);
    console.log(txt.REGIONI[x].nome + " " + txt.REGIONI[x].abitanti); 
    
  },
  function(error){ console.log("Qualcosa è andato storto") }
)
