// Funzione per visualizzare i dati meteorologici attuali
function displayWeather(data) {
    // Pulizia dei contenuti precedenti
    temperatura.value = '';
    situazione_meteo.value = '';
    img_meteo.src = "";
    hourlyForecastDiv.innerHTML = '';
    
    // Controllo se ci sono errori nella risposta
    if (data.cod === '404') {
        alert("Error 404"); // Avviso in caso di errore 404
    } else {
        // Estrazione dei dati dai risultati della richiesta
        var cityName = data.name;
        var valore_temperatura = Math.round(data['main']['temp']); 
        var umidità = data['main']['humidity']; 
        var pressione = data['main']['pressure']; 
        var percepiti_come = Math.round(data['main']['feels_like']); 
        var temp_min = Math.round(data['main']['temp_min']);
        var temp_max = Math.round(data['main']['temp_max']);
        var descrizione = data.weather[0].description;
        var codice_icona_meteo = data.weather[0].icon;
        var sorgente_risorsa = `https://openweathermap.org/img/wn/${codice_icona_meteo}@4x.png`;
        var velocitàVento = data['wind']['speed']; 
        var angolazione_vento = data['wind']['deg']; 
        var currentTimeStamp = data.dt;
        var currentTime = new Date(currentTimeStamp * 1000);
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var ore = hours + ":" + minutes;

        // Aggiornamento dei contenuti HTML con i dati ottenuti
        altre_info.textContent = 'Altri dati utili';
        percepita.textContent = 'Percepiti come ' + percepiti_come+ "°";
        temperatura.textContent = valore_temperatura + "°";
        temp_min_max.textContent = temp_max + "° /" + temp_min + "°";
        situazione_meteo.textContent = "Situazione cielo: " + descrizione;
        citta_mostrata.textContent = cityName + ", ora locale: " + ore;
        img_meteo.src = sorgente_risorsa;
        img_meteo.alt = descrizione;
        valore_umidità.textContent ='umidità: '+ umidità + "%";
        valore_pressione.textContent = 'pressione: '+pressione + "mbar";
        velocità_vento.textContent= "Velocità del vento: "+velocitàVento+ "m/s";
        direzione_vento.textContent= "Direzione vento: " + angolazione_vento +"°";
        showImage(); // Funzione per mostrare l'immagine
    }
}

// Funzione per visualizzare le previsioni orarie
function displayHourlyForecast(hourlyData) {
    // Selezione delle prossime 8 ore
    let next24Hours = hourlyData.slice(0, 8);
    next24Hours.forEach(item => {
        // Estrazione dei dati per ciascuna ora
        const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp); // Convert to Celsius
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        // Creazione dell'HTML per ciascuna previsione oraria
        const hourlyItemHtml = `
        <div class="hourly-item">
            <span>${hour}:00</span>
            <img src="${iconUrl}" alt="Hourly Weather Icon">
            <span>${temperature}°C</span>
        </div>
    `;
        // Aggiunta dell'HTML al contenitore delle previsioni orarie
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

// Funzione per mostrare l'immagine meteorologica
function showImage() {
    img_meteo.style.display = 'block'; // Rende visibile l'immagine una volta caricata
}
