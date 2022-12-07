var locationUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Denver&limit=1&appid=7590f1b542e088ea96b7e08570642814"
var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=39.73&lon=104.99&appid=7590f1b542e088ea96b7e08570642814&units=imperial";

fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })

fetch(locationUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })