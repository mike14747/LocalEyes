var hpapikey = '&key=200431910-75a8709c24c09cae9d1a234790e13e78';// hiking project APIkey
var latitude = "41.38";
var longitude = "-81.70";
//get trails call to pull trails from hiking project api, + lat + long and +max distance in miles from that point and api key attached
//test query url 
var queryURL = 'https://www.hikingproject.com/data/get-trails?lat=';

console.log("parks js loaded");

function parkData(data) {//data in imperial 

    var trails = data.trails;

    console.log(data);

    for (var trailIndex = 0 ; trailIndex < trails.length ; trailIndex ++ ) {

        var tdata = trails[trailIndex];//---------Trail data object handle from hiking project API
        var tName = tdata.name; //----------------Trail name
        var trailID = tdata.id;//-----------------Trail ID number to find more info
        var tAscent =  tdata.ascent;//------------Trail Ascent in imperial scale in feet (#')
        var tDescent = tdata.descent;//-----------Trail Descent in Feet
        var tDiff = tdata.difficulty;//-----------Trail Difficulty in color measurement
        //green = easy --- greenBlue = Easy/Intermediate --- Blue = Intermediate --- blueBlack = Intermediate/Difficult --- black = Difficult --- doubleBlack = Extremely Difficult
        var tHigh = tdata.high;//-----------------Trail High point in Feet
        var tLow = tdata.low;//-------------------Trail Lowest point in Feet
        var tLength = tdata.length;//-------------Trail Length In Miles
        //---------------------------------------------------------------------IMAGE URLS----
        var tLGimg = tdata.imgMedium;//-----------Large Image URL
        var tMDimg = tdata.imgSmallMed;//---------Medium Image URL
        var tSMimg = tdata.imgSmall;//------------Small Image URL
        var tXSimg = tdata.imgSqSmall;//----------Small Square Image URL
        //-----------------------------------------------------------------------------------
        var tCity = tdata.location;//-------------City & State of Trail
        var tLat = tdata.latitude;//--------------Trail Latitude
        var tLong = tdata.longitude;//------------Trail Longitude
        var tStars = tdata.stars;//---------------Trail Stars (1-5) as a point of review for the trail by hikers
        var tStarNum = tdata.starVotes;//---------Trails number of Star reviews
        var tDescription = tdata.summary;//-------Description Sentence of the Trail
        var tLink = tdata.url;//------------------URL to take user to trail web page on hikingproject.com

        console.log("Trail name: " + tName );
        console.log("Location: " + tCity );
        console.log("Latitude: " + tLat );
        console.log("Longitude: " + tLong );
        console.log("Trail ID Number: " + trailID );
        console.log("Ascent in feet: " + tAscent );
        console.log("Descent in feet: " + tDescent );
        console.log("Trail Difficulty: " + tDiff );
        console.log("Trail High in feet: " + tHigh );
        console.log("Trail Low in feet: " + tLow );
        console.log("Trail Length In Miles: " +tLength);
        console.log("Rated: " + tStars + " Stars. By: " + tStarNum + " Votes" );
        console.log("Summary Sentence: " + tDescription );
        console.log("large img: " + tLGimg);
        console.log("Medium img: " + tMDimg);
        console.log("Small img: " + tSMimg);
        console.log("Small Square img: " + tXSimg);
        console.log("WEB URL: " + tLink);
        console.log("-------------------------------------------------------------------------------------");
    }
}
function parkSearch(latt, long) {

    queryURL = queryURL + latt + '&lon=' + long + '&maxDistance=100'+ hpapikey;
 
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(trailData) {
    //console.log(response);
    parkData(trailData);
    });
    console.log("ajax call to park");
}
parkSearch(latitude,longitude);