"use strict";

var regExp = /^(\d{5})?$/;
var zipCode = "";
var lat = "";
var lon = "";
var direction = "";
var newRow = "";
var endRow = "";

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
            $("#weather_card").append("<div id='w'_icon'><img src='http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Current Conditions'><span class='pl-4'>" + response.list[0].weather[0].main + "</span></div>");
            $("#weather_card").append("<p><b>Temperature: </b>" + Math.round(response.list[0].main.temp) + "&deg;</p>");
            $("#weather_card").append("<p><b>Humidity: </b>" + response.list[0].main.humidity + "</p>");
            var dir = response.list[0].wind.deg;
            if (dir >= 337.5 && dir < 22.5) {
                direction = "N";
            } else if (dir >= 22.5 && dir < 67.5) {
                direction = "NE";
            } else if (dir >= 67.5 && dir < 112.5) {
                direction = "E";
            } else if (dir >= 112.5 && dir < 157.5) {
                direction = "SE";
            } else if (dir >= 157.5 && dir < 202.5) {
                direction = "S";
            } else if (dir >= 202.5 && dir < 247.5) {
                direction = "SW";
            } else if (dir >= 247.5 && dir < 292.5) {
                direction = "W";
            } else if (dir >= 292.5 && dir < 337.5) {
                direction = "NW";
            }
            $("#weather_card").append("<p><b>Wind: </b>" + Math.round(response.list[0].wind.speed) + " mph " + direction + "</p>");
        }
    });
    return;
}

function zipSearch(zip) {
    // zipcodedownload.com api key (500 free call per month)
    var apiKey = "d92773d2cf28477d8a92f5065339354b";
    var queryURL = "https://zipcodedownload.com:5430/Filter?format=json&citytype=d&cityname=&postalcode=" + zip + "&country=us5&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#weather_card").empty();
            $("#zip_header").empty();
            $("#zip_card").empty();
            $("#yelp_card").empty();
            $("#parks_card").empty();
            $("#census_card").empty();
            $("#census_tbody").empty();
            // dynamically create the census table using these 2 variables and the tbody_array
            newRow = "<tr><td class='desc_td'>";
            endRow = "---</td></tr>";
            for (var i = 0; i < tbody_array.length; i++) {
                $("#census_tbody").append(newRow + tbody_array[i] + endRow);
            }
            $("#error_row").addClass("d-none");
            $("#zip_info").removeClass("d-none");
            $("#zip_header").append(zipCode + " Info");
            $("#zip_card").append("<p><b>City: </b>" + response[0].city_name + "</p>");
            $("#zip_card").append("<p><b>State: </b>" + response[0].province + "</p>");
            $("#zip_card").append("<p><b>Latitude: </b>" + response[0].lat + "</p>");
            lat = response[0].lat;
            $("#zip_card").append("<p><b>Longitude: </b>" + response[0].lon + "</p>");
            lon = response[0].lon;
            $("#zip_card").append("<p><b>Area Code: </b>" + response[0].area_code + "</p>");
            $("#zip_card").append("<p><b>Time Zone: </b>" + response[0].time_zone + "</p>");
            weather(zipCode);
            $("#this_zip").text("This Zip");
            census(zipCode);
            censusAvg();
            yelpZipSearch(zipCode);
            parkSearch(lat, lon);
        } else {
            // the submitted zip code was not valid
            $("#results_row").addClass("d-none");
            $("#error_row").removeClass("d-none");
            $("#sub_zip").text(zipCode);
        }
    });
    return;
}

$("#submit_zip").on("click", function (event) {
    event.preventDefault();
    zipCode = $("#zip_code_search").val().trim();
    if (!zipCode == "" && zipCode.match(regExp)) {
        // zip code was submitted
        $("#results_row").removeClass("d-none");
        $("#zip_code_search").val("");
        zipSearch(zipCode);
    }
});