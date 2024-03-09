const input = document.querySelector('input')
const button = document.querySelector('.check-weather')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

import API_KEY from './config/config.js';

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const USER_API_KEY = '&appid=' + API_KEY
const API_UNITS = '&units=metric'


const getWeather = () => {
    const city = input.value || 'London';
    const URL = API_LINK + city + USER_API_KEY + API_UNITS;

    axios
        .get( URL )
        .then( ( res ) => updateWeatherDisplay( res.data ) )
        .catch( handleApiError );
};

const updateWeatherDisplay = ( data )=> {
    const temp = data.main.temp;
    const hum = data.main.humidity;
    const status = Object.assign( {}, ...data.weather );

    cityName.textContent = data.name;
    temperature.textContent = Math.floor( temp ) + '℃';
    humidity.textContent = hum + '%';
    weather.textContent = status.main;

    warning.textContent = '';
    input.value = '';

    const iconSrc = setWeatherIcon( status.id );
    photo.setAttribute( 'src', iconSrc );
};

const setWeatherIcon = ( statusId ) => {
    if ( statusId >= 200 && statusId < 300 )
    {
        return './img/thunderstorm.png';
    }
    else if (statusId >= 300 && statusId < 400)
    {
        return './img/drizzle.png';
    }
    else if (statusId >= 500 && statusId < 600)
    {
        return './img/rain.png';
    }
    else if (statusId >= 600 && statusId < 700)
    {
        return './img/ice.png';
    }
    else if (statusId >= 700 && statusId < 800)
    {
        return './img/fog.png';
    }
    else if (statusId === 800)
    {
        return './img/sun.png';
    }
    else if (statusId > 800 && statusId < 900)
    {
        return './img/cloud.png';
    }
    else
    {
        return './img/unknown.png';
    }
};

const handleApiError = () => {
    warning.textContent = 'City name is incorrect!';
};



const enterCheck = (e) => {
    if (e.key === 'Enter') {
        getWeather();
    }
};

getWeather();
input.addEventListener('keyup', enterCheck);
button.addEventListener('click', getWeather);