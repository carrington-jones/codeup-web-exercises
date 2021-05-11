//MapBox

//MAP//
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
    center: [-76.6502, 40.2859], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

//Map Controls//
map.addControl(new mapboxgl.NavigationControl());

//Map Marker//
var marker = new mapboxgl.Marker({
    draggable: true,
    color: "red"
}).setLngLat([-76.6502, 40.2859])
    .addTo(map);

//Popup//
var popup = new mapboxgl.Popup()
    .setLngLat(marker.getLngLat())
    .setHTML("<h3>Hello World!</h3>")
    .setMaxWidth("300px")
marker.setPopup(popup);

//Code that runs when marker is dropped
marker.on('dragend', function(){
    var markerLngLat = marker.getLngLat();
    //Need to rework after lunch. Will update the cards but no luck on re-doing header
    var dragmarkername = reverseGeocode(markerLngLat, MAPBOX_ACCESS_TOKEN).then(function (info) {});
    // $("#weatherTitle").html("Weather Forecast for " + dragmarkername);
    // console.log(markerLngLat)

    //This code updates weather cards and data based on where marker is dropped.
    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + markerLngLat.lat + "&lon=" + markerLngLat.lng + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function (markerData) {
        console.log(markerData);//This logs entire weather object
        var html = "";
        for (var i = 0; i < 5; i++) {
            var dailyForecast = markerData.daily[i];
            var description = dailyForecast.weather[0].main
            var date = new Date(dailyForecast.dt * 1000);
            var Day = date.toLocaleString('en-us', {weekday: 'long'});
            var Month = date.toLocaleString('en-us', {month: 'long'});
            var numberDate = date.toLocaleString('en-us', {day: 'numeric'});
            html += "<div class='card text-center col-2 mb-3 d-flex'>"
            html += '<h3>' + Day + ' ' + Month + ' ' + numberDate + '</h3>';
            html += '<p>' + description + '</p>';
            html += '<p>High / Low</p>';
            html += '<p>' + Math.round(dailyForecast.temp.max) + 'F / ';
            html += +Math.round(dailyForecast.temp.min) + ' F</p>';
            html += "</div>"
        }
        $('#weatherForecast').html(html);
    });

})


//Code for flying to user input on Map
$("#btn").click(function () {
    var userInput = $("#userWeatherInput").val();
    geocode(userInput, MAPBOX_ACCESS_TOKEN).then(function (info) {
        var userMarker1 = {
            lng: info[0],
            lat: info[1]
        };
        marker.setLngLat(userMarker1);
        popup.setHTML("<h3>" + userInput + "</h3>");
        map.flyTo({center: userMarker1});
        console.log(userMarker1);
        $("#weatherTitle").html("Weather Forecast for " + userInput);//Changes Header of page based on user input
        // THIS CHANGES WEATHER BASED ON USER INPUT
        $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + info[1] + "&lon=" + info[0] + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function (data) {
            console.log(data);//This logs entire weather object
            var html = "";
            for (var i = 0; i < 5; i++) {
                var dailyForecast = data.daily[i];
                var description = dailyForecast.weather[0].main
                var date = new Date(dailyForecast.dt * 1000);
                var Day = date.toLocaleString('en-us', {weekday: 'long'});
                var Month = date.toLocaleString('en-us', {month: 'long'});
                var numberDate = date.toLocaleString('en-us', {day: 'numeric'});
                html += "<div class='card text-center col-2 mb-3 d-flex'>"
                html += '<h3>' + Day + ' ' + Month + ' ' + numberDate + '</h3>';
                html += '<p>' + description + '</p>';
                html += '<p>High / Low</p>';
                html += '<p>' + Math.round(dailyForecast.temp.max) + 'F / ';
                html += +Math.round(dailyForecast.temp.min) + ' F</p>';
                html += "</div>"
            }
            $('#weatherForecast').html(html);
        });
    });
})
// var hersheyCoordinates = [40.2859, -76.6502]
//Initial Starting point. Hershey, PA
var lat = 40.2859
var lng = -76.6502


//Initial Weather on page load
function weatherMap() {
    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lng + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function (resp) {
        console.log(resp);
        renderWeather(resp);
    });
}

weatherMap();

//This logs and displays entire weather object
function renderWeather(resp) {
    var html = "";
    for (var i = 0; i < 5; i++) {
        var dailyForecast = resp.daily[i];
        var description = dailyForecast.weather[0].main
        var date = new Date(dailyForecast.dt * 1000);
        var Day = date.toLocaleString('en-us', {weekday: 'long'});
        var Month = date.toLocaleString('en-us', {month: 'long'});
        var numberDate = date.toLocaleString('en-us', {day: 'numeric'});
        html += "<div class='card text-center col-2 mb-3 d-flex'>"
        html += '<h3>' + Day + ' ' + Month + ' ' + numberDate + '</h3>';
        html += '<p>' + description + '</p>';
        html += '<p>High / Low</p>';
        html += '<p>' + Math.round(dailyForecast.temp.max) + 'F / ';
        html += +Math.round(dailyForecast.temp.min) + ' F</p>';
        html += "</div>"
    }
    $('#weatherForecast').html(html);
}

// var today = resp.daily[0]; //Current Date formula
// var todayDate = new Date(today.dt * 1000);
// console.log(todayDate);
// $("#todaysDate").html(todayDate)
//
// var weatherForecast1 = resp.daily[0]; //Today forecast formula
// var weatherForecast2 = weatherForecast1.weather[0].description;
// console.log(weatherForecast2)
// $("#weatherForecast1").html(weatherForecast2)
//
// var dailyHigh1 = resp.daily[0] //Today Temp High Formula
// var dailyHigh2 = Math.round(dailyHigh1.temp.max)
// console.log(dailyHigh2)
// $("#todaysHigh").html(dailyHigh2 + " degrees")
//
// var dailyLow1 = resp.daily[0] //Today Temp Low Formula
// var dailyLow2 = Math.round(dailyLow1.temp.min)
// console.log(dailyLow2)
// $("#todaysLow").html(dailyLow2 + " degrees")


// $.get("http://api.openweathermap.org/data/2.5/onecall", {
//     APPID: WEATHER_MAP_TOKEN,
//     lat: 29.423017,
//     lon: -98.48527,
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
// });