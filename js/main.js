"use strict";

var regExp = /^(\d{5})?$/;
var zipCode = "";
var lat = "";
var lon = "";

var config = {
    apiKey: "AIzaSyB8QUFbKw8DxQ5Hcj17exFgjy_gcXGjPXk",
    authDomain: "localeyes-54238.firebaseapp.com",
    databaseURL: "https://localeyes-54238.firebaseio.com",
    projectId: "localeyes-54238",
    storageBucket: "localeyes-54238.appspot.com",
    messagingSenderId: "35407995613"
};
firebase.initializeApp(config);

function weather(zip) {
    // openweathermap.org api (60 free calls per minute)
    var apiKey = "4245352a3814173935fcebaa7e744e45";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + "&units=imperial&cnt=1&APPID=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.cod == 200) {
            $("#weather_info").removeClass("d-none");
            $("#weather_card").empty();
            $("#weather_card").append("<div id='w'_icon'><img src='http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Current Conditions'></div>");
            $("#weather_card").append("<p><b>Temperature: </b>" + response.list[0].main.temp + "&deg;</p>");
            $("#weather_card").append("<p><b>Humidity: </b>" + response.list[0].main.humidity + "</p>");
            $("#weather_card").append("<p><b>Wind Speed: </b>" + response.list[0].wind.speed + "</p>");
            $("#weather_card").append("<p><b>Wind Direction: </b>" + response.list[0].wind.deg + "</p>");
            $("#weather_card").append("<p><b>Summary: </b>" + response.list[0].weather[0].main + "</p>");
        }
    });
    return;
}

function zipSearch(zip) {
    // zipcodedownload.com api key (500 free call per month)
    var apiKey = "4af80d5a852a405d9baad6ce23a015b0";
    var queryURL = "https://zipcodedownload.com:5430/Filter?format=json&citytype=d&cityname=&postalcode=" + zip + "&country=us5&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#zip_info").removeClass("d-none");
            $("#zip_header").empty();
            $("#zip_header").append(zipCode + " Info");
            $("#zip_card").empty();
            $("#zip_card").append("<p><b>City: </b>" + response[0].city_name + "</p>");
            $("#zip_card").append("<p><b>State: </b>" + response[0].province + "</p>");
            $("#zip_card").append("<p><b>Latitude: </b>" + response[0].lat + "</p>");
            lat = response[0].lat;
            $("#zip_card").append("<p><b>Longitude: </b>" + response[0].lon + "</p>");
            lon = response[0].lon;
            $("#zip_card").append("<p><b>Area Code: </b>" + response[0].area_code + "</p>");
            $("#zip_card").append("<p><b>Time Zone: </b>" + response[0].time_zone + "</p>");
            // weather(lat, lon);
            parkSearch(lat,lon);
        }
    });
    return;
}

$("#submit_zip").on("click", function (event) {
    event.preventDefault();
    zipCode = $("#zip_code_search").val().trim();
    if (zipCode == "" || !zipCode.match(regExp)) {
        console.log("Validation failed");
    } else {
        // zip code was submitted
        $("#results_row").removeClass("d-none");
        $("#zip_code_search").val("");
        zipSearch(zipCode);
        weather(zipCode);
        census(zipCode);
        censusAvg();
    }
});