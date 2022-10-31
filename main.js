import { WeatherApi } from './js/components/weatherComp.js';
import { weatherApi } from './js/api/weather.js';
import { totTravelVal } from './js/api/arrWeather.js';

//Destination Inputed and connected to fetch
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const destInputVal = document.getElementById('location').value;
  // const totTravelVal = document.getElementById('traveldays').value;
  weatherApi(destInputVal, totTravelVal);
});

//Enable Weather Custom Component:
window.customElements.define('weather-api', WeatherApi);
