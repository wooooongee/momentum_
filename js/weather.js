const API_KEY = "59c65ec533ec03110b41ff4eb791f798";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url).then((res) =>
    res.json().then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
};

const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
