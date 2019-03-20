"use strict"

var imgText = "";

function yelpZipBuild(zipData) {

    // handle to enter the business data
    var data = zipData.businesses;

    $("#yelp_info").removeClass("d-none");

    for (var bizIndex = 0; bizIndex < data.length; bizIndex++) {
        var bdata = data[bizIndex]; // Grabs the index of the business object we are currently on
        if (!bdata.price) {
            var price = "?";
        } else {
            var price = bdata.price;
        }
        $("#yelp_card").append("<p><a href='" + bdata.url + "' target='_blank'><img src='images/Yelp_burst_positive_RGB.png' alt='Yelp' width='33px' height='36px' class='mr-2'>" + bdata.name + "</a> - " + price + "</p>");
        $("#yelp_card").append("<p>" + bdata.display_phone + "</p>");
        if (bdata.rating == 0) {
            imgText = "images/small_0.png";
        } else if (bdata.rating == 1) {
            imgText = "images/small_1.png";
        } else if (bdata.rating == 1.5) {
            imgText = "images/small_1_half.png";
        } else if (bdata.rating == 2) {
            imgText = "images/small_2.png";
        } else if (bdata.rating == 2.5) {
            imgText = "images/small_2_half.png";
        } else if (bdata.rating == 3) {
            imgText = "images/small_3.png";
        } else if (bdata.rating == 3.5) {
            imgText = "images/small_3_half.png";
        } else if (bdata.rating == 4) {
            imgText = "images/small_4.png";
        } else if (bdata.rating == 4.5) {
            imgText = "images/small_4_half.png";
        } else if (bdata.rating == 5) {
            imgText = "images/small_5.png";
        }
        $("#yelp_card").append("<p class='small'><img src='" + imgText + "' alt='" + bdata.review_count + "' class='mr-2'>" + bdata.review_count + " reviews</p>");
        $("#yelp_card").append("<hr />");
    }
}
function yelpZipSearch(zip) {
    var queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + zip + "&radius=10000&limit=10";
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