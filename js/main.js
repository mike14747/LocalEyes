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
    // openweathermap.org api
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
            $("#weather_card").append("<p><b>Temperature: </b>" + response.list[0].main.temp + "</p>");
            $("#weather_card").append("<p><b>Humidity: </b>" + response.list[0].main.humidity + "</p>");
            $("#weather_card").append("<p><b>Wind Speed: </b>" + response.list[0].wind.speed + "</p>");
            $("#weather_card").append("<p><b>Wind Direction: </b>" + response.list[0].wind.deg + "</p>");
            $("#weather_card").append("<p><b>Summary: </b>" + response.list[0].weather[0].main + "</p>");
        }
    });
    return;
}

function census(zip) {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";
    var queryURL = "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME,DP05_0001E,DP05_0019PE,DP05_0024PE,DP05_0004E,DP03_0062E,DP05_0018E,DP04_0089E,DP04_0134E,DP02_0060PE,DP03_0119PE&for=zip+code+tabulation+area:" + zip + "&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#census_info").removeClass("d-none");
            $("#census_card").empty();
            $("#census_card").append("<p><b>Population: </b>" + response[1][1] + "</p>");
            $("#census_card").append("<p><b>18 and under percent: </b>" + response[1][2] + "</p>");
            $("#census_card").append("<p><b>65+ percent: </b>" + response[1][3] + "</p>");
            $("#census_card").append("<p><b>Males / 100 Females: </b>" + response[1][4] + "</p>");
            $("#census_card").append("<p><b>Median Household Income: </b>" + response[1][5] + "</p>");
            $("#census_card").append("<p><b>Median Age: </b>" + response[1][6] + "</p>");
            $("#census_card").append("<p><b>Median Home Value: </b>" + response[1][7] + "</p>");
            $("#census_card").append("<p><b>Gross Rent: </b>" + response[1][8] + "</p>");
            var hsGradRate = 100 - response[1][9];
            $("#census_card").append("<p><b>25+ Graduted HS: </b>" + hsGradRate + "</p>");
            $("#census_card").append("<p><b>Poverty Rate: </b>" + response[1][10] + "</p>");
        }
    });
    return;
}

function censusAvg() {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";
    var queryURL = "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME,DP05_0001E,DP05_0019PE,DP05_0024PE,DP05_0004E,DP03_0062E,DP05_0018E,DP04_0089E,DP04_0134E,DP02_0060PE,DP03_0119PE&for=us:1&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#census_avg_info").removeClass("d-none");
            $("#census_avg_card").empty();
            $("#census_avg_card").append("<p><b>Population: </b>" + response[1][1] + "</p>");
            $("#census_avg_card").append("<p><b>18 and under percent: </b>" + response[1][2] + "</p>");
            $("#census_avg_card").append("<p><b>65+ percent: </b>" + response[1][3] + "</p>");
            $("#census_avg_card").append("<p><b>Males / 100 Females: </b>" + response[1][4] + "</p>");
            $("#census_avg_card").append("<p><b>Median Household Income: </b>" + response[1][5] + "</p>");
            $("#census_avg_card").append("<p><b>Median Age: </b>" + response[1][6] + "</p>");
            $("#census_avg_card").append("<p><b>Median Home Value: </b>" + response[1][7] + "</p>");
            $("#census_avg_card").append("<p><b>Gross Rent: </b>" + response[1][8] + "</p>");
            var hsGradRate = 100 - response[1][9];
            $("#census_avg_card").append("<p><b>25+ Graduted HS: </b>" + hsGradRate + "</p>");
            $("#census_avg_card").append("<p><b>Poverty Rate: </b>" + response[1][10] + "</p>");
        }
    });
    return;
}

function zipSearch(zip) {
    // zipcodedownload.com api key
    var apiKey = "4af80d5a852a405d9baad6ce23a015b0";
    var queryURL = "https://zipcodedownload.com:5430/Filter?format=json&citytype=d&cityname=&postalcode=" + zip + "&country=us5&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#zip_info").removeClass("d-none");
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