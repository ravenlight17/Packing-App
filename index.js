import { WeatherApi } from './js/components/weatherComp.js';
import { weatherApi } from './js/api/weather.js';

document.querySelector('#test').style.color = 'purple';
document.querySelector('#test').style.backgroundColor = 'green';
const boxer = document.querySelector('#boxer');

//Enable Weather Custom Component:
window.customElements.define('weather-api', WeatherApi);

// window.customElements.define('daily-forecast', DailyForecast)

export const showWeatherDets = function (data) {
  const { address, description } = data;

  for (let i = 0; i < data.days.length; i++) {
    console.log(data.days.length);
    const { datetime, temp, icon, description, humidity } = data.days[i];
    console.log(icon);

    console.log(address, description);

    //Connecting Custom element with Weather API data
    const boxer = document.querySelector('#boxer');
    const dailyForecastCont = document.createElement('div');
    const custEl = document.createElement('weather-api');
    // const weatherBox = dailyForecastCont.appendChild(custEl);
    const weatherBox = boxer.appendChild(custEl);

    const form = document.getElementById('form');
    // form.after(weatherBox);
    const wd = weatherDate(datetime);
    console.log(wd);
    custEl.setAttribute('location', address);
    // custEl.setAttribute('date', `${datetime} ${weatherDate(datetime)}` );
    custEl.setAttribute('date', wd);
    custEl.setAttribute('temp', `${temp}°`);

    showWeatherImg(icon, custEl);

    custEl.setAttribute('description', description);
    custEl.setAttribute('humidity', humidity);
  }
};
