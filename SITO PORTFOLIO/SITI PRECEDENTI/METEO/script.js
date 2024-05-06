// Selezione degli elementi HTML
const città = document.getElementById('city');
const temperatura = document.getElementById('temperatura');
const citta_mostrata = document.getElementById('citta_ora');
const situazione_meteo = document.getElementById('Descrizione');
const img_meteo = document.getElementById('weather-icon');
const temp_min_max =  document.getElementById('temp_max_min');
const hourlyForecastDiv = document.getElementById('hourly-forecast');
const ora_previsioni = document.getElementById('ora_previsioni');
const icona_meteo_previsioni = document.getElementById('icona_meteo_previsioni');
const temperatura_previsioni =  document.getElementById('temperatura_previsioni');
const valore_umidità = document.getElementById('umidità');
const valore_pressione =  document.getElementById('pressione');
const percepita = document.getElementById('percepita');
const div_meteo = document.getElementById('div_meteo');
const altre_info = document.getElementById('altre_info');
const bottone = document.getElementById('bottone');
const velocità_vento = document.getElementById('velocità_vento');
const direzione_vento = document.getElementById('direzione_vento');
const press_umidity = document.getElementById('press_umidity');
const vento = document.getElementById('vento');
const titolo = document.getElementById('titolo');

// Event listener per il click sul bottone
bottone.addEventListener('click', function(){
    // Recupero il valore inserito nell'input per la città
    var input_city = città.value;

    // Controllo se è stato inserito un valore
    if (!input_city) {
        alert('Perfavore inserisci una città.'); // Avviso se non è stata inserita una città
        return;
    }

    // URL per la richiesta dei dati meteorologici attuali
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+input_city+'&appid=4a25c316b788d5dd6c8d7d95e9fc793f&units=metric&lang=it';
    
    // URL per la richiesta dei dati meteorologici previsionali
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+input_city+'&appid=4a25c316b788d5dd6c8d7d95e9fc793f&units=metric&lang=it';
    
    // Richiesta dei dati meteorologici attuali
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            // Applico stili e visualizzo i dati meteorologici attuali
            div_meteo.classList.add('weather-container');
            div_meteo.style.height = '1000px';
            div_meteo.style.backgroundColor = "#04296e";
            div_meteo.style.marginTop = "15px";
            press_umidity.classList.add('press_umidity');
            vento.classList.add('alba_tramonto');
            displayWeather(data);
        })
        .catch(error => {
            alert('Errore nel caricare il meto della tua città, riprova.' + error); // Avviso in caso di errore nella richiesta dei dati meteorologici attuali
        });

    // Richiesta dei dati meteorologici previsionali
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            // Visualizzo i dati meteorologici previsionali
            displayHourlyForecast(data.list);
        })
        .catch(error => { 
            alert('Errore nel caricare le previsioni meteo della tua città, riprova.' + error); // Avviso in caso di errore nella richiesta dei dati meteorologici previsionali
        });
});
