const submitButton = $(".submitButton");
submitButton.click(function(e) {
    e.preventDefault();
    var searchEntry = $(this).prev().val()
    fetchApis(searchEntry);
})

function fetchApis(location) {
    var locationUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&limit=1&appid=7590f1b542e088ea96b7e08570642814";
    fetch(locationUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let latitude = data[0].lat;
            let longitude = data[0].lon;
            var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=7590f1b542e088ea96b7e08570642814&units=imperial"
            fetch(weatherUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    for(var i=0; i < 5; i++) {
                        var date = data.list[i*8].dt_txt.split(' ');
                        var wind = data.list[i*8].wind.speed;
                        var weatherData = data.list[i*8].main;
                        updateForecast(i, date[0], weatherData.temp, wind, weatherData.humidity);
                    }
                    var date = data.list[39].dt_txt.split(' ');
                    var wind = data.list[39].wind.speed;
                    var weatherData = data.list[39].main;
                    updateForecast(5, date[0], weatherData.temp, wind, weatherData.humidity);
                })
        })
}

function updateForecast(day, date, temp, wind, humidity) {
    $("#day"+day).text(date);
    $("#temp"+day).text("Temp: "+ temp+" °F");
    $("#wind"+day).text("Wind: "+wind+" MPH");
    $("#humidity"+day).text("Humidity: "+humidity+"%");
}