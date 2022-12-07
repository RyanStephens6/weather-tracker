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
                    console.log(data);
                    
                })
        })
}
