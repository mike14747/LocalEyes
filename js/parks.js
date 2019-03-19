var hpapikey = '&key=200431910-75a8709c24c09cae9d1a234790e13e78';// hiking project APIkey
var queryURL = 'https://www.hikingproject.com/data/get-trails?lat=';
function parkData(data) {//data in imperial 
    $("#parks_info").removeClass("d-none");
    $("#parks_card").empty();
    var trails = data.trails;

    for (var trailIndex = 0; trailIndex < trails.length; trailIndex++) {
        var tdata = trails[trailIndex];//Trail data object handle from hiking project API
        $("#parks_card").append("<p><b>Trail Name: </b><a href='" + tdata.url + "' target='_blank'>" + tdata.name + "</a></p>");
        $("#parks_card").append("<img src='" + tdata.imgSmall + "' alt='" + tdata.name + "'>");
        $("#parks_card").append("<p><b>Trail Length: </b>" + tdata.length + " miles</p>");
        $("#parks_card").append("<p><b>Rating: </b>" + tdata.stars + " stars (" + tdata.starVotes + " reviews)</p>");
        $("#parks_card").append("<hr />");
        var tName = tdata.name; //----------------Trail name
        var trailID = tdata.id;//-----------------Trail ID number to find more info
        var tAscent = tdata.ascent;//------------Trail Ascent in imperial scale in feet (#')
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