//MapBox

//MAP//
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
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

// Code that runs when marker is dropped
marker.on('dragend', function () {
    var markerLngLat = marker.getLngLat();
    var draggedMarkerName = reverseGeocode(markerLngLat, MAPBOX_ACCESS_TOKEN).then(function (results) {
        $("#weatherTitle").html("Weather Forecast for " + results.features[2].place_name)
        console.log(results)
    });

    // This code updates weather cards and data based on where marker is dropped.
    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + markerLngLat.lat + "&lon=" + markerLngLat.lng + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function (markerData) {
        console.log(markerData);//This logs entire weather object
        var html = "";
        for (var i = 0; i < 5; i++) {
            var dailyForecast = markerData.daily[i];
            var icons = dailyForecast.weather[0].icon
            var description = dailyForecast.weather[0].main
            var date = new Date(dailyForecast.dt * 1000);
            var Day = date.toLocaleString('en-us', {weekday: 'long'});
            var Month = date.toLocaleString('en-us', {month: 'long'});
            var numberDate = date.toLocaleString('en-us', {day: 'numeric'});
            html += "<div class='card text-center col-2 m-3 d-flex shadow-lg p-3 mb-5 bg-white rounded'>"
            html += '<h2>' + Day + '</h2>' + '<br> ' + '<h4>' + Month + ' ' + numberDate + '</h4>';
            html += '<p>' + "<img src=http://openweathermap.org/img/w/" + icons + ".png" + ">" + '</p>' //Icons from OpenWeather API
            html += '<p>' + description + '</p>';
            html += '<p>High / Low</p>';
            html += '<p>' + Math.round(dailyForecast.temp.max) + 'F / ';
            html += Math.round(dailyForecast.temp.min) + ' F</p>';
            html += '<p>' + 'Wind Speed - ' + Math.round(dailyForecast.wind_speed) + ' MPH' + '</p>';
            html += "</div>"
        }
        $('#weatherForecast').html(html);
    });
})

//Code for flying to user input on Map
$("#btn").click(function (e) {
    e.preventDefault()
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
                var icons = dailyForecast.weather[0].icon
                var description = dailyForecast.weather[0].main
                var date = new Date(dailyForecast.dt * 1000);
                var Day = date.toLocaleString('en-us', {weekday: 'long'});
                var Month = date.toLocaleString('en-us', {month: 'long'});
                var numberDate = date.toLocaleString('en-us', {day: 'numeric'});
                html += "<div class='card text-center col-2 m-3 d-flex shadow-lg p-3 mb-5 bg-white rounded'>"
                html += '<h2>' + Day + '</h2>' + '<br> ' + '<h4>' + Month + ' ' + numberDate + '</h4>';
                html += '<p>' + "<img src=http://openweathermap.org/img/w/" + icons + ".png" + ">" + '</p>' //Icons from OpenWeather API
                html += '<p>' + description + '</p>';
                html += '<p>High / Low</p>';
                html += '<p>' + Math.round(dailyForecast.temp.max) + 'F / ';
                html += Math.round(dailyForecast.temp.min) + ' F</p>';
                html += '<p>' + 'Wind Speed - ' + Math.round(dailyForecast.wind_speed) + ' MPH' + '</p>';
                html += "</div>"
            }
            $('#weatherForecast').html(html);
        });
    });
})


var hersheyCoordinates = {lat: 40.2859,lng: -76.6502}
var hersheyCoordinates2 = [40.2859, -76.6502]

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
        var icons = dailyForecast.weather[0].icon
        var description = dailyForecast.weather[0].main
        var date = new Date(dailyForecast.dt * 1000);
        var Day = date.toLocaleString('en-us', {weekday: 'long'});
        var Month = date.toLocaleString('en-us', {month: 'long'});
        var numberDate = date.toLocaleString('en-us', {day: 'numeric'});
        html += "<div class='card text-center col-2 m-3 d-flex shadow-lg p-3 mb-5 bg-white rounded'>"
        html += '<h2>' + Day + '</h2>' + '<br> ' + '<h4>' + Month + ' ' + numberDate + '</h4>';
        html += '<p>' + "<img src=http://openweathermap.org/img/w/" + icons + ".png" + ">" + '</p>' //Icons from OpenWeather API
        html += '<p>' + description + '</p>';
        html += '<p>High / Low</p>';
        html += '<p>' + Math.round(dailyForecast.temp.max) + 'F / ';
        html += Math.round(dailyForecast.temp.min) + ' F</p>';
        html += '<p>' + 'Wind Speed - ' + Math.round(dailyForecast.wind_speed) + ' MPH' + '</p>';
        html += "</div>"
    }
    $('#weatherForecast').html(html);
}

//Popular Destinations dropdown attempt
var parisCoordinates = {lat: 48.8566, lng: 2.3522}
var parisCoordinates2 = [48.8566, 2.3522]
var tokyoCoordinates = {lat: 35.6762, lng: 139.6503}
var tokyoCoordinates2 = [35.6762, 139.6503]
var munichCoordinates = {lat: 48.1351, lng: 11.5820}
var munichCoordinates2 = [48.1351, 11.5820]

function popularDestination(coordinates2) {
    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates2[0] + "&lon=" + coordinates2[1] + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function (data1) {
        // console.log(data1);//This logs entire weather object
        var html = "";
        for (var i = 0; i < 5; i++) {
            var dailyForecast = data1.daily[i];
            var icons = dailyForecast.weather[0].icon
            var description = dailyForecast.weather[0].main
            var date = new Date(dailyForecast.dt * 1000);
            var Day = date.toLocaleString('en-us', {weekday: 'long'});
            var Month = date.toLocaleString('en-us', {month: 'long'});
            var numberDate = date.toLocaleString('en-us', {day: 'numeric'});
            html += "<div class='card text-center col-2 m-3 d-flex shadow-lg p-3 mb-5 bg-white rounded'>"
            html += '<h2>' + Day + '</h2>' + '<br> ' + '<h4>' + Month + ' ' + numberDate + '</h4>';
            html += '<p>' + "<img src=http://openweathermap.org/img/w/" + icons + ".png" + ">" + '</p>' //Icons from OpenWeather API
            html += '<p>' + description + '</p>';
            html += '<p>High / Low</p>';
            html += '<p>' + Math.round(dailyForecast.temp.max) + 'F / ';
            html += Math.round(dailyForecast.temp.min) + ' F</p>';
            html += '<p>' + 'Wind Speed - ' + Math.round(dailyForecast.wind_speed) + ' MPH' + '</p>';
            html += "</div>"
        }
        $('#weatherForecast').html(html);
    });
}
//function for flying to Paris and updated map, marker, pop, and weather
function popularDestinationParis() {
    var popularDestination1 = reverseGeocode(parisCoordinates, MAPBOX_ACCESS_TOKEN).then(function (results) {
        $("#weatherTitle").html("Weather Forecast for " + results.features[2].place_name)
        console.log(results)
    });
    geocode("Paris", MAPBOX_ACCESS_TOKEN).then(function (info) {
        var parisCoordinates3 = {
            lng: info[0],
            lat: info[1]
        }
        marker.setLngLat(parisCoordinates);
        popup.setHTML("<h5>" + "Paris, France" + "</h5>" + "<br>" + "<p>" + "Paris holds the world record for capital with the least amount of stop signs with the grand total of…0" + "</p>")
        map.flyTo({center: parisCoordinates3});
        popularDestination(parisCoordinates2);
    });
}
//function for flying to Tokyo and updated map, marker, pop, and weather
function popularDestinationTokyo() {
    var popularDestination1 = reverseGeocode(tokyoCoordinates, MAPBOX_ACCESS_TOKEN).then(function (results) {
        $("#weatherTitle").html("Weather Forecast for " + results.features[2].place_name)
        console.log(results)
    });
    geocode("Tokyo", MAPBOX_ACCESS_TOKEN).then(function (info) {
        var tokyoCoordinates3 = {
            lng: info[0],
            lat: info[1]
        }
        marker.setLngLat(tokyoCoordinates);
        popup.setHTML("<h5>" + "Tokyo, Japan" + "</h5>" + "<br>" + "<p>" + "Tokyo is the largest metropolitan area in the world" + "</p>")
        map.flyTo({center: tokyoCoordinates3});
        popularDestination(tokyoCoordinates2);
    });
}
//function for flying to Munich and updated map, marker, pop, and weather
function popularDestinationMunich() {
    var popularDestination1 = reverseGeocode(munichCoordinates, MAPBOX_ACCESS_TOKEN).then(function (results) {
        $("#weatherTitle").html("Weather Forecast for " + results.features[2].place_name)
        console.log(results)
    });
    geocode("Munich", MAPBOX_ACCESS_TOKEN).then(function (info) {
        var munichCoordinates3 = {
            lng: info[0],
            lat: info[1]
        }
        marker.setLngLat(munichCoordinates);
        popup.setHTML("<h5>" + "Munich, Germany" + "</h5>" + "<br>" + "<p>" + "Munich is further north than any major US city." + "</p>");
        map.flyTo({center: munichCoordinates3});
        popularDestination(munichCoordinates2);
    });
}
//This function will fly to home aka the initial spot of Hershey, PA
function flyHome() {
    var popularDestination1 = reverseGeocode(hersheyCoordinates, MAPBOX_ACCESS_TOKEN).then(function (results) {
        $("#weatherTitle").html("Weather Forecast for " + results.features[2].place_name)
        console.log(results)
    });
    geocode("Hershey", MAPBOX_ACCESS_TOKEN).then(function (info) {
        var hersheyCoordinates3 = {
            lng: info[0],
            lat: info[1]
        }
        marker.setLngLat(hersheyCoordinates);
        popup.setHTML("<h5>" + "Munich, Germany" + "</h5>" + "<br>" + "<p>" + "Munich is further north than any major US city." + "</p>");
        map.flyTo({center: hersheyCoordinates3});
        popularDestination(hersheyCoordinates2);
    });
}