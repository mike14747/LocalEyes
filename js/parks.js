"use strict"

var hpapikey = '&key=200431910-75a8709c24c09cae9d1a234790e13e78';// hiking project APIkey
var queryURL = 'https://www.hikingproject.com/data/get-trails?lat=';
function parkData(data) {//data in imperial 
    $("#parks_info").removeClass("d-none");
    var trails = data.trails;

    for (var trailIndex = 0; trailIndex < trails.length; trailIndex++) {
        var tdata = trails[trailIndex];//Trail data object handle from hiking project API
        var newDiv = $("<div class='clearfix border-bottom'>");
        newDiv.append("<p class='my-2'><a href='" + tdata.url + "' target='_blank'>" + tdata.name + "</a></p>");
        newDiv.append("<img src='" + tdata.imgSqSmall + "' alt='" + tdata.name + "' class='float-left mr-2 mb-1'>");
        newDiv.append("<p class='small my-2'><b>Length: </b>" + tdata.length + " miles</p>");
        newDiv.append("<p class='small my-2'>" + tdata.stars + " stars (" + tdata.starVotes + " reviews)</p>");
        newDiv.append("<p class='small my-2'><b>Loc:</b> " + tdata.location + "</p>");
        $("#parks_card").append(newDiv);
    }
}
function parkSearch(latt, long) {
    queryURL = queryURL + latt + '&lon=' + long + '&maxDistance=100' + hpapikey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (trailData) {
        parkData(trailData);
    });
}