import axios from "axios";

function searchCity(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function currentCity(event) {
  event.preventDefault();
  let apiKey = "YOUR_API_KEY";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchCity);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", currentCity);
