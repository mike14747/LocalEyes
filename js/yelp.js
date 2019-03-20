function yelpZipBuild(zipData) {

    var data = zipData.businesses;//------------------handle to enter the business data

    $("#yelp_info").removeClass("d-none");
    $("#yelp_card").empty();

    for (var bizIndex = 0; bizIndex < data.length; bizIndex++) {
        var bdata = data[bizIndex]; // Grabs the index of the business object we are currently on
        if (!bdata.price) {
            var price = "?";
        } else {
            var price = bdata.price;
        }
        $("#yelp_card").append("<p><a href='" + bdata.url + "' target='_blank'>" + bdata.name + "</a> - " + price + "</p>");
        // $("#yelp_card").append("<img src='" + bdata.image_url + "' alt='" + bdata.name + "'>");
        $("#yelp_card").append("<p>" + bdata.display_phone + "</p>");
        $("#yelp_card").append("<p class='small'>" + bdata.rating + " stars (" + bdata.review_count + " reviews)</p>");
        if (bdata.is_closed) {
            $("#yelp_card").append("<p class='text-danger'>Closed</p>");
        } else {
            $("#yelp_card").append("<p class='text-success'>Open now</p>");
        }
        $("#yelp_card").append("<hr />");

        // business name => bdata.name
        // category array => bdata.categories
        // latitude => bdata.coordinates.latitude
        // longitude => bdata.coordinates.longitude
        // phone => bdata.display_phone
        // yelp ID => bdata.id
        // image URL => bdata.image_url
        // is closed (FALSE||TRUE) => bdata.is_closed
        // address string from array => bdata.location.display_address[0] + bdata.location.display_address[1]
        // price in $ => bdata.price
        // rating => bdata.rating
        // number of reviews => bdata.review_count
        // yelp web url => bdata.url
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