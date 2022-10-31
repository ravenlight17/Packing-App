const KEY = import.meta.env.VITE_OW_KEY;
const KEY_VC = import.meta.env.VITE_VC_KEY;

//WeatherAPI Function connects input to fetch

export async function weatherApi(destInputVal, totTravelVal) {
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${destInputVal}?unitGroup=us&key=${KEY_VC}&contentType=json`;

  const response = await fetch(URL);
  const data = await response.json();

  console.log(data);

  const URLlongLat = `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${KEY}`;

  const respLonLat = await fetch(URLlongLat);
  const dataLonLat = await respLonLat.json();
  console.log(dataLonLat);

  const showWeatherDets = function () {
    const { address, description } = data;
    const { icon } = dataLonLat.weather[0];
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

  // const getDataDaysLengthTotal = data.days.length;
  // const getTotalTravelValueInput = Number(totTravelVal);
  // const getLenghtMinusInput = getDataDaysLengthTotal - getTotalTravelValueInput;

  // console.log(
  //   getDataDaysLengthTotal,
  //   getTotalTravelValueInput,
  //   getLenghtMinusInput
  // );

  // console.log(getDataDaysLengthTotal);
  // for (let i = 0; i < data.days.length - getLenghtMinusInput; i++) {
  //   const dd = data.days[i];
  //   const b = document.createElement('div');
  //   const a = document.getElementById('app');

  //   a.after(b);

  //   b.textContent = `${dd}  ${showWeatherDets()}`;
  /************************************** */
  // data.days.forEach((showWeatherDets, totTravelVal) => {
  //   console.log(totTravelVal, showWeatherDets);
  // });
}
