const TOKEN = "f333d350742402a2631976cfea6580e2";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${TOKEN}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weatherText = document.querySelector("#weather-text");
    const weatherCity = document.querySelector("#weather-city");
    weatherCity.innerText = data.name;
    weatherText.innerText = `${data.weather[0].main} / ${data.main.temp}℃`
  });
  }

function onGeoErr(){
  alert("Cannot find. No weather info.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
