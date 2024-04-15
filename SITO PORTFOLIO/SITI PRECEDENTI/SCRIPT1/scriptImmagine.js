let lampadinaAccesa = false;

function Cambia_auto() {
    const IMGMACCHINA = document.getElementById('IMGMACCHINA');
    const bottone = document.getElementById('bottone');
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