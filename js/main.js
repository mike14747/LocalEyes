"use strict"

var regExp = /^(\d{5})?$/;
var zipCode = "";

var config = {
    apiKey: "AIzaSyB8QUFbKw8DxQ5Hcj17exFgjy_gcXGjPXk",
    authDomain: "localeyes-54238.firebaseapp.com",
    databaseURL: "https://localeyes-54238.firebaseio.com",
    projectId: "localeyes-54238",
    storageBucket: "localeyes-54238.appspot.com",
    messagingSenderId: "35407995613"
};
firebase.initializeApp(config);

$("#submit_zip").on("click", function () {
    event.preventDefault()
    zipCode = $("#zip_code").val().trim();
    if (zipCode == "" || !zipCode.match(regExp)) {
        // zip code was submitted
        
    }
});