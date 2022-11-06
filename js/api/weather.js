import { setDailyForecastImg } from "../suppComponents/dailyForecastImg";

const KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const KEY_VC = import.meta.env.VITE_VISUALCROSSING_KEY;
const KEY_GM = import.meta.env.VITE_GOOGLEMAP_KEY;

//WeatherAPI Function connects input to fetch

export async function weatherApi(destInputVal, totTravelVal) {

  // Visual Crossing API - 15 Day Forecast:
  // const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${destInputVal}?unitGroup=us&key=${KEY_VC}&contentType=json`;
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${destInputVal}?unitGroup=us&forecast?iconSet=icons1&contentType=json&forecastDays=${totTravelVal}&key=${KEY_VC}`;
  // const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?iconSet=icons1&aggregateHours=24&combinationMethod=aggregate&shortColumnNames=true&contentType=json&unitGroup=metric&locationMode=single&locations=49.1791,-122.3161&forecastDays=7&key=`; 

console.log(URL)

  const response = await fetch(URL);
  const data = await response.json();

  console.log(data);

  //Openweather - Icon
  const URLlongLat = `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${KEY}`;

  const respLonLat = await fetch(URLlongLat);
  const dataLonLat = await respLonLat.json();
  console.log(dataLonLat);

  //Google Map Location Lookup Api
  // const URL_GOOGLEMAP = `https://maps.google.com/maps/api/js?key=${KEY_GM}&libraries=places`;

  // const respGM = await fetch(URL_GOOGLEMAP);
  // const dataGM = await respGM.json();
  // console.log(dataGM);

  const showWeatherDets = function () {
    const { address, description } = data;
    // const { icon } = dataLonLat.weather[0];
    const { icon } = data.currentConditions;
    const { temp } = data.currentConditions;
    const { humidity } = data.currentConditions;

    console.log(address, icon, description, temp, humidity);

    //Connecting Custom element with Weather API data
    const custEl = document.querySelector('weather-api');

    custEl.setAttribute('location', address);
    custEl.setAttribute('temp', `${temp}°`);
    custEl.setAttribute(
      'img',
      `http://openweathermap.org/img/wn/${icon}@2x.png`
    );
    custEl.setAttribute('description', description);
    custEl.setAttribute('humidity', humidity);
    

    
  };
  
  showWeatherDets();

  //Array Config:

  const getDataDaysLengthTotal = data.days.length;
  const getTotalTravelValueInput = Number(totTravelVal);
  const getLenghtMinusInput = getDataDaysLengthTotal - getTotalTravelValueInput;

  for (let i = 0; i < data.days.length - getLenghtMinusInput; i++) {
    const temp = data.days[i].temp;
    const icon = data.days[i].conditions;
    const date = data.days[i].datetime;

    // const b = document.createElement('div');
    const a = document.getElementById('app');

    const newDate = new Date(date);

    // 👇️ Saturday
    console.log(
      newDate.toLocaleDateString('en-US', {
        weekday: 'short',
      })
    )
      const dailyForecastCont = document.createElement('div');
      const custEl = document.createElement('daily-forecast');

      // dailyForecastCont.append(custEl);
      a.after(custEl);
      custEl.setAttribute('temp', `${temp}°`);
      custEl.setAttribute('condition', icon );
      custEl.setAttribute('img', setDailyForecastImg(dataLonLat.weather[0].description));
      // custEl.setAttribute(
      //   'img',
      //   `http://openweathermap.org/img/wn/${icon}@2x.png`
      // );
      // custEl.setAttribute('description', description);
      custEl.setAttribute('date', date);
      console.log(dataLonLat.weather[0].description)

  }

  console.log(data);
  console.log(dataLonLat);
  // console.log(dataLonLat.daily.dt);

  /************************************** */
}
