function yelpZipBuild(zipData) {

    var data = zipData.businesses;//------------------handle to enter the business data

    $("#yelp_info").removeClass("d-none");
    $("#yelp_card").empty();

    for (var bizIndex = 0; bizIndex < data.length; bizIndex++) {
        /*
        $("#yelp_card").append("<p><b>Name: </b><a href='" + bdata.url + "' target='_blank'>" + bdata.name + "</a></p>");
        $("#yelp_card").append("<img src='" + bdata.image_url + "' alt='" + bdata.name + "'>");
        $("#yelp_card").append("<p><b>Price: </b>" + bdata.price + "</p>");
        $("#yelp_card").append("<p><b>Rating: </b>" + bdata.rating + " stars (" + bdata.review_count + " reviews)</p>");
        $("#yelp_card").append("<hr />");
        */

        var bdata = data[bizIndex];//-------------------Grabs the index of the business object we are currently on
        var bizName = bdata.name;///--------------------handle to grab on specific business name
        var categories = bdata.categories;//------------handle for each category array 
        var bLat = bdata.coordinates.latitude;//-------latitude of business
        var bLong = bdata.coordinates.longitude;//------longitude of business
        var bPhone = bdata.display_phone;//-------------business display phone number 
        var bID = bdata.id;//---------------------------YELP ID of business
        var bImageURL = bdata.image_url;//--------------IMAGE URL of food from the business provided by YELP
        var bIsClosed = bdata.is_closed;//--------------is business open or closed, Is closed = FALSE||TRUE
        var bLocation = bdata.location.display_address[0] + bdata.location.display_address[1];//Address string from array
        var bPriceScale = bdata.price;//----------------YELP $ price scale of $-$$$$$/1$-5$
        var bRating = bdata.rating;//-------------------Business Rating scale of 1-5 stars
        var bRateAmt = bdata.review_count;//------------Business Amount of Reviews
        var bYelpURL = bdata.url;//---------------------Business Yelp WEB URL
        //-------------------------individual business data console logged -------------------------------------
        console.log("Business Name: " + bizName);
        console.log("Business is closed: " + bIsClosed);
        console.log("Business YELP ID: " + bID);
        console.log("Business Lattitude: " + bLat + " & Longitude: " + bLong);
        console.log("Business Phone Number: " + bPhone);
        console.log("Business IMAGE URL: " + bImageURL);
        console.log("Business Address: " + bLocation);
        console.log("Business Cost Scale (1$-5$): " + bPriceScale);
        console.log("Business is Rated: " + bRating + " Stars By :" + bRateAmt + " Reviews");
        console.log("Business Yelp WEB LINK: " + bYelpURL);

        console.log("----------Categories-----------");

        for (var catIndex = 0; catIndex < categories.length; catIndex++) {
            // for loop to loop through each category array index
            var titles = categories[catIndex].title;//handle of each title pulled from the category array from yelp 
            console.log(titles);//console log to show 
        }
        console.log("-------End Of Categories-------");

        console.log("-------------------------------------------------------------")
    }
}
function yelpZipSearch(zip) {
    var queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + zip;
    $.ajax({
        url: queryURL,
        method: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Authorization', 'Bearer B1I0rlGshjXHt65WqN_FCjVQZJ1u7WTRQfp1dfhoEg7cGf9XJup4IqcU8XNS25xqEYkgt2lQBIxFVJpy-txbhKYhWUUwUaiM-JDwmI1h0Maal1uPbakPpv8CNL6GXHYx');
        },
        success: function (data) {
            yelpZipBuild(data);
        }
    });
}