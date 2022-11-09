// import { WeatherApi } from './js/components/weatherComp.js';
// import { weatherApi } from './js/api/weather.js';
// // import { totTravelVal } from './js/suppComponents/sliderFeature.js';
// import { DailyForecast } from './js/components/dailyForecastComp.js';
// import { autocomplete, initAutocomplete, onPlaceChanged } from './js/api/apiLocPicker.js';

// const KEY_GM = import.meta.env.VITE_GOOGLEMAP_KEY;

// Destination Inputed and connected to fetch
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const startDate = document.getElementById('whenFrom').value;
  const endDate = document.getElementById('whenTo').value;
  const destInputVal = document.getElementById('autocomplete').value;
  const totTravelVal = document.getElementById('traveldays').value;

  console.log(startDate);
  console.log(endDate);
  console.log(destInputVal);
 

  // weatherApi(lat, long);
  // weatherApi(destInputVal, startDate, endDate);

  //Enable Weather Custom Component:
// window.customElements.define('weather-api', WeatherApi);
// window.customElements.define('daily-forecast', DailyForecast);

// $(function() {
//   $('#map').locationpicker({
//      location: {latitude: 40.7128, longitude: -74.0060},   
//      radius: 0,
//      zoom: 9,
//      inputBinding: {
//      //   latitudeInput: $('#lat'),
//      //   longitudeInput: $('#lng'),
//         locationNameInput: $('#location')
//      },
//      enableAutocomplete: true,
//      onchanged: function(currentLocation, radius, isMarkerDropped) {
//       weatherApi(currentLocation.latitude, currentLocation.longitude );
//       console.log(currentLocation.latitude, currentLocation.longitude)
//         alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
//       }
//   }); 
// });
// });

// let autocomplete; 

// function initAutocomplete(){
//   autocomplete = new google.maps.places.Autocomplete(
//     document.getElementById('autocomplete'),
//     {
//       types:['establishment'], 
//       componentRestrictions: {'country': ['AU']},
//       fields: ['place_id', 'geometry', 'name']
//     });

//     autocomplete.addEventListener('place_changed', onPlaceChanged);
// }




// function onPlaceChanged(){
//   var place = autocomplete.getPlace(); 
//   if(!place.geometry){
//     document.getElementById('autocomplete').placeholder = 'Enter a place'; 
//   } else {
//     document.getElementById('details').innerHTML = place.name;
//   }

// }












// console.log(destInputVal);

//Google Map Api 
// const body = document.querySelector('head');
// const script = document.createElement('script'); 
// script.src= `https://maps.googleapis.com/maps/api/js?key=${KEY_GM}&callback=initMap&libraries=places`; 
// script.defer = true;
// head.append(script); 



/* <script async defer src=`https://maps.googleapis.com/maps/api/js?key=${VITE_GOOGLEMAP_KEY}&callback=initMap`></script> */




//pass line 61 into the weatherapi() in line 60

// autocomplete; 
// initAutocomplete(); onPlaceChanged();

