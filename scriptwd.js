const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const weatherContainer = document.getElementById('weather-container');

searchButton.addEventListener('click', () => {
    const location = searchInput.value;
    if (location.trim() !== '') {
        getWeather(location);
    }
});

function getWeather(location) {
    const apiKey = 'e2da29889dae49c28ee82915241506';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function displayWeather(data) {
    const locationName = data.location.name;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    weatherContainer.innerHTML = `
        <h2>${locationName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${condition}</p>
    `;
}
