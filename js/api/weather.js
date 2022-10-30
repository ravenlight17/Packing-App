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

  const img = document.createElement('img');

  const showWeatherDets = function () {
    const { address } = data;
    const { icon, description } = dataLonLat.weather[0];
    const { temp } = data.currentConditions;
    const { humidity } = data.currentConditions;

    console.log(address, icon, description, temp, humidity);

    document.querySelector(
      '#destination'
    ).textContent = `Weather in ${address}`;
    document.querySelector('#temp').textContent = `Temperature: ${temp}°`;
    document.querySelector(
      '#icon'
    ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(
      '#description'
    ).textContent = `Description: ${description}`;
    document.querySelector('#humidity').innerText = `Humidity: ${humidity}`;
  };

  showWeatherDets();

  // data.days.forEach((showWeatherDets, totTravelVal) => {
  //   console.log(totTravelVal, showWeatherDets);
  // });
}
