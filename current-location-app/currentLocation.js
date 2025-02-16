const location_button = document.getElementById("current-location-button");

async function getGeoLocation(lat, long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=ebbf5cda5c11471d93c165648251602&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}

async function successLocation(position) {
    const result = await getGeoLocation(position.coords.latitude,
    position.coords.longitude);
    console.log(result.location.region);
}
function errorLocation() {
    console.log("Invalid Location");
}

location_button.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
});