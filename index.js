const axios = require('axios').default;
const input = process.argv.slice(2)
const city = input[0]
const country = input[1]
const key = "69d7a728a3649ef6441e5b6eb61eca68"

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${key}`)
    .then(function(response) {
        console.log(`It is now ${response.data.main.temp}°C in ${city}`);
        console.log(`The current weather conditions are: ${response.data.weather[0].description}`);
    })
    .catch(function(error) {
        console.log(error);
    });

axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
    .then(function(response) {
        response.data.list.map(res => {
            console.log(res.dt_txt);
            res.weather.map(x => {
                console.log(x.description)
            })
        })
    })
    .catch(function(error) {
        console.log(`${error} I've made a terrible mistake`);
    });