                                                                                                            

let input = document.getElementById("input");
let button = document.getElementById("btn");
let dataDiv = document.getElementById("data");

function updateUi(data) {
    let newData = document.createElement("div");
    newData.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} K</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
    `;
    dataDiv.appendChild(newData);


}

function operation() {
    let cityName = input.value;
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=48f2e22dcbee22cd4783c78f5fc94ed2`;
    fetch(API)
        .then(response => response.json())
        .then(data => {
            updateUi(data);
            console.log(data.name, data.sys.country, data.main.temp, data.weather[0].description, data.wind.speed, data.main.humidity, data.main.pressure);
        }).catch(error => {
            console.log(error);
        });
}


button.addEventListener("click", operation);