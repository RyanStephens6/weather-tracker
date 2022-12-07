var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=39.73&lon=104.99&appid=7590f1b542e088ea96b7e08570642814";
console.log(requestUrl);

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })