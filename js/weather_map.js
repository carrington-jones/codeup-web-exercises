<!--MapBox-->

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


// marker.on('dragend', function(){
//     $('#logLatMarker').html(marker.getLngLat().toString())
// })

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
    });
})


var hersheyCoordinates = [40.2859, -76.6502]
$.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + hersheyCoordinates[0] + "&lon=" + hersheyCoordinates[1] + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function (resp) {
    console.log(resp);//This logs entire weather object
    for (var i = 0; i < 5; i++) {
        var html = "";
        var dailyForecast = resp.daily[i];
        var date = new Date(dailyForecast.dt * 1000);
        var Day = date.toLocaleString('en-us', {weekday: 'long'});
        var Month = date.toLocaleString('en-us', {month: 'long'});
        var numberDate = date.toLocaleString('en-us', {day: 'numeric'});
        var numberYear = date.toLocaleString("en-US", {year: "numeric"})
        html += "<div>"
        html += '<h1>' + Day + ' ' + Month + ' ' + numberDate + ' ' + numberYear + '</h1>';
        html += '<p>High / Low</p>';
        html += '<p>' + dailyForecast.temp.max.toFixed(1) + 'F / ';
        html += +dailyForecast.temp.min.toFixed(1) + ' F</p>';
        html += "</div>"
        $('#weatherforecast').append(html);
    }
});


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