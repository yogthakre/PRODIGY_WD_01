const apiKey = 'YOUR_API_KEY_HERE';  // Replace with your OpenWeatherMap API key

async function getWeatherByLocation() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherData(location);
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(null, latitude, longitude);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
}

async function fetchWeatherData(location, lat, lon) {
    let url;
    if (location) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayWeatherData(data) {
    if (data.cod === 200) {
        const weatherInfoDiv = document.getElementById('weatherInfo');
        const { name, main, weather, wind } = data;
        weatherInfoDiv.innerHTML = `
            <h2>Weather in ${name}</h2>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp} °C</p>
            <p>Humidity: ${main.humidity} %</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
        `;
    } else {
        alert("Location not found!");
    }
}

window.onload = getWeatherByLocation;
