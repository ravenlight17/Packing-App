import { WeatherApi } from './js/components/weatherComp.js';
import { weatherApi } from './js/api/weather.js';
import { totTravelVal } from './js/suppComponents/sliderFeature.js';
import { DailyForecast } from './js/components/dailyForecastComp.js';
const KEY_GM = import.meta.env.VITE_GOOGLEMAP_KEY;

//Destination Inputed and connected to fetch
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const destInputVal = document.getElementById('location').value;
  const totTravelVal = document.getElementById('traveldays').value;
  weatherApi(destInputVal, totTravelVal);
});

//Enable Weather Custom Component:
window.customElements.define('weather-api', WeatherApi);
window.customElements.define('daily-forecast', DailyForecast);

//Google Map Api 
const body = document.querySelector('body');
const script = document.createElement('script'); 
script.src= `https://maps.googleapis.com/maps/api/js?key=${KEY_GM}&callback=initMap&sensor=false&libraries=places`; 
body.append(script); 



/* <script async defer src=`https://maps.googleapis.com/maps/api/js?key=${VITE_GOOGLEMAP_KEY}&callback=initMap`></script> */