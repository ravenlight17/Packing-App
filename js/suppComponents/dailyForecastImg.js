/*TODO:
- check if we can specifically identify the start date of the forecast
- include icon in the array template for daily forecast
        -- create an object that holds the key value pairs 
        -- create an array that holds the info
- morning or evening icon needs to be configured

*/
export const setDailyForecastImg = function(data){
    if(data === 'clear sky'){
        const icon = '01d'; 
        const custEl = document.querySelector('daily-forecast');
        custEl.setAttribute('img',
        `http://openweathermap.org/img/wn/${icon}@2x.png`);

    } else if(data === 'few clouds'){ 
        const icon = '02d'; 
        const custEl = document.querySelector('daily-forecast');
        custEl.setAttribute('img',
        `http://openweathermap.org/img/wn/${icon}@2x.png`);
       
    }
    else if(data === 'scattered clouds'){ 
        const icon = '03d'; 
        const custEl = document.querySelector('daily-forecast');
        custEl.setAttribute('img',
        `http://openweathermap.org/img/wn/${icon}@2x.png`);
       
    }else if(data === 'broken clouds'){ 
        const icon = '04d'; 
        const custEl = document.querySelector('daily-forecast');
        custEl.setAttribute('img',
        `http://openweathermap.org/img/wn/${icon}@2x.png`);
       
    }else if(data === 'shower rain'){ 
        const icon = '09d'; 
        const custEl = document.querySelector('daily-forecast');
        custEl.setAttribute('img',
        `http://openweathermap.org/img/wn/${icon}@2x.png`);
       
    }else if(data === 'shower rain'){ 
        const icon = '09d'; 
        const custEl = document.querySelector('daily-forecast');
        custEl.setAttribute('img',
        `http://openweathermap.org/img/wn/${icon}@2x.png`);
       
    }else if(data === 'shower rain'){ 
        const icon = '09d'; 
        const custEl = document.querySelector('daily-forecast');
        custEl.setAttribute('img',
        `http://openweathermap.org/img/wn/${icon}@2x.png`);
       
    } else {
        console.log('test')
    }



}

