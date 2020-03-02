const API_KEY = '14d17c0b28d274a88196b19b61ec9ff3';

export default function getWeatherData(cityName) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`).then(response => response.json())
}
