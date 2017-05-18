var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=57f8560e58b246c12a5df0f437973564';

module.exports = {
    getTemperatura:function(location,unit){
        switch(unit){
            case('°C'):
                unit = 'metric';
                break;
            case('°F'):
                unit = 'imperial';
                break;
            case('K'):
                unit = 'default';
                break;
        }
        console.log(unit);
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=${unit}`;
        return axios.get(requestUrl).then((response) => {
            if(response.data.cod && response.data.count == 0){
                throw new Error('Localização inválida');
            } else{
                console.log(response);
                return response.data.list[0].main.temp;
            }
        },(response) => {
            throw new Error('Localização inválida');
        });
    }
}