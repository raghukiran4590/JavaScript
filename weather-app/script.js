const button = document.getElementById("search-button");
const city = document.getElementById("city-input"); 
const cityName = document.getElementById("city-name"); 
const cityTime = document.getElementById("city-time"); 
const cityTemp = document.getElementById("city-temp"); 

//Async Await are used to used to write code in a more cleaner way and most importantly avoid the need to explicitly configure the promise chanining.

async function getWeatherData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=ebbf5cda5c11471d93c165648251602&q=${cityName}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = city.value;
    const result = await getWeatherData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
})