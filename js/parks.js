var hpapikey = '&key=200431910-75a8709c24c09cae9d1a234790e13e78';// hiking project APIkey
var queryURL = 'https://www.hikingproject.com/data/get-trails?lat=';
function parkData(data) {//data in imperial 
    $("#parks_info").removeClass("d-none");
    $("#parks_card").empty();
    var trails = data.trails;

    for (var trailIndex = 0; trailIndex < trails.length; trailIndex++) {
        var tdata = trails[trailIndex];//Trail data object handle from hiking project API
        var newDiv = $("<div class='clearfix border-bottom'>");
        newDiv.append("<p><a href='" + tdata.url + "' target='_blank'>" + tdata.name + "</a></p>");
        newDiv.append("<img src='" + tdata.imgSqSmall + "' alt='" + tdata.name + "' class='float-left mr-2 mb-1'>");
        newDiv.append("<p class='small'><b>Length: </b>" + tdata.length + " miles</p>");
        newDiv.append("<p class='small'>" + tdata.stars + " stars (" + tdata.starVotes + " reviews)</p>");
        newDiv.append("<p class='small'><b>Loc:</b> " + tdata.location + "</p>");
        
        $("#parks_card").append(newDiv);
        // train name => tdata.name
        // trail ID => tdata.id
        // ascent in feet => tdata.ascent
        // descent in feet => tdata.descent
        // trail difficulty => tdata.difficulty (green = easy --- greenBlue = Easy/Intermediate --- Blue = Intermediate --- blueBlack = Intermediate/Difficult --- black = Difficult --- doubleBlack = Extremely Difficult)
        // trail high point in feet => tdata.high
        // trail low point in feet => tdata.low
        // trail length in miles => tdata.length
        // IMAGE URLS
        // Large Image URL => tdata.imgMedium
        // Medium Image URL => tdata.imgSmallMed
        // Small Image URL => tdata.imgSmall
        // Small Square Image URL => tdata.imgSqSmall
        //--------------------------------------------
        // city and state => tdata.location
        // Trail Latitude => tdata.latitude
        // Trail Longitude => tdata.longitude
        // rating in stars => tdata.stars
        // number of reviews => tdata.starVotes
        // description => tdata.summary
        // trail URL on hikingproject.com => tdata.url
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