const searchFormEl = document.querySelector("#search-form")
const queryEl = document.querySelector("#query")
const mainContent = document.querySelector("#result")
const cityName = document.querySelector("#city-name")
const countryName = document.querySelector("#country-name")
const temperatur = document.querySelector("temperatur")

// {
//     "coord": {
//         "lon": 8.46,
//         "lat": 49.49
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 296.3,
//         "feels_like": 294.21,
//         "temp_min": 295.37,
//         "temp_max": 297.59,
//         "pressure": 1020,
//         "humidity": 40
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 2.6,
//         "deg": 170
//     },
//     "clouds": {
//         "all": 2
//     },
//     "dt": 1596017500,
//     "sys": {
//         "type": 1,
//         "id": 1291,
//         "country": "DE",
//         "sunrise": 1595994814,
//         "sunset": 1596049888
//     },
//     "timezone": 7200,
//     "id": 2873891,
//     "name": "Mannheim",
//     "cod": 200
// }

const eventCallback = event => {
    event.preventDefault();
    const query = queryEl.value;
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=fdfc6e45eed561448f289208c53d7b43&units=metric`)
        .then(response => response.json())
        .then(json => {
            const weatherResults = json
            mainContent.innerHTML = ""

            console.log(weatherResults)

            const parent = document.createElement("div")
            const city = document.createElement("div")
            const country = document.createElement("div")
            const temperatur = document.createElement("div")

            city.innerHTML = weatherResults.name
            country.innerHTML = weatherResults.sys.country
            temperatur.innerHTML = weatherResults.main.temp


            parent.appendChild(city)
            parent.appendChild(country)
            parent.appendChild(temperatur)
            mainContent.appendChild(parent)

        });

};
searchFormEl.addEventListener("submit", eventCallback);

