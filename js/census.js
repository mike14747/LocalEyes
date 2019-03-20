"use strict";

function census(zip) {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";
    var queryURL = "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME,DP05_0001E,DP05_0019PE,DP05_0024PE,DP05_0005PE,DP05_0006PE,DP05_0007PE,DP05_0008PE,DP05_0009PE,DP05_0010PE,DP05_0011PE,DP05_0012PE,DP05_0013PE,DP05_0014PE,DP05_0015PE,DP05_0016PE,DP05_0017PE,DP05_0004E,DP05_0002PE,DP05_0003PE,DP03_0062E,DP03_0063E,DP05_0018E,DP04_0089E,DP04_0134E,DP02_0060PE,DP03_0119PE,DP05_0037PE,DP05_0038PE,DP05_0071PE,DP05_0044PE,DP05_0039PE,DP05_0052PE,DP05_0057PE,DP05_0035PE&for=zip+code+tabulation+area:" + zip + "&key=" + apiKey;

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
            $("#census_card").append("<p><b>under 5 percent: </b>" + response[1][4] + "</p>");
            $("#census_card").append("<p><b>5-9 percent: </b>" + response[1][5] + "</p>");
            $("#census_card").append("<p><b>10-14 percent: </b>" + response[1][6] + "</p>");
            $("#census_card").append("<p><b>15-19 percent: </b>" + response[1][7] + "</p>");
            $("#census_card").append("<p><b>20-24 percent: </b>" + response[1][8] + "</p>");
            $("#census_card").append("<p><b>25-34 percent: </b>" + response[1][9] + "</p>");
            $("#census_card").append("<p><b>35-44 percent: </b>" + response[1][10] + "</p>");
            $("#census_card").append("<p><b>45-54 percent: </b>" + response[1][11] + "</p>");
            $("#census_card").append("<p><b>55-59 percent: </b>" + response[1][12] + "</p>");
            $("#census_card").append("<p><b>60-64 percent: </b>" + response[1][13] + "</p>");
            $("#census_card").append("<p><b>65-74 percent: </b>" + response[1][14] + "</p>");
            $("#census_card").append("<p><b>75-84 percent: </b>" + response[1][15] + "</p>");
            $("#census_card").append("<p><b>85+ percent: </b>" + response[1][16] + "</p>");
            $("#census_card").append("<p><b>Males / 100 Females: </b>" + response[1][17] + "</p>");
            $("#census_card").append("<p><b>Pecent Male: </b>" + response[1][18] + "</p>");
            $("#census_card").append("<p><b>Percent Females: </b>" + response[1][19] + "</p>");
            $("#census_card").append("<p><b>Median Household Income: </b>" + response[1][20] + "</p>");
            var localMHI = {
                name: "local",
                value: response[1][20]
            }
            houseHoldIncome.push(localMHI);
            $("#census_card").append("<p><b>Mean Household Income: </b>" + response[1][21] + "</p>");
            $("#census_card").append("<p><b>Median Age: </b>" + response[1][22] + "</p>");
            if (response[1][23] < 0) {
                var medHomeValue = "N/A";
            } else {
                var medHomeValue = response[1][23];
            }
            $("#census_card").append("<p><b>Median Home Value: </b>" + medHomeValue + "</p>");
            if (response[1][24] < 0) {
                var grossRent = "N/A";
            } else {
                var grossRent = response[1][24];
            }
            $("#census_card").append("<p><b>Gross Rent: </b>" + grossRent + "</p>");
            var hsGradRate = 100 - response[1][25];
            $("#census_card").append("<p><b>25yo+ Graduted HS: </b>" + hsGradRate + "</p>");
            $("#census_card").append("<p><b>Poverty Rate: </b>" + response[1][26] + "</p>");
            $("#census_card").append("<p><b>Race - % White: </b>" + response[1][27] + "</p>");
            $("#census_card").append("<p><b>Race - % Black/AfricanAm: </b>" + response[1][28] + "</p>");
            $("#census_card").append("<p><b>Race - % Hispanic/Latino: </b>" + response[1][29] + "</p>");
            $("#census_card").append("<p><b>Race - % Asian: </b>" + response[1][30] + "</p>");
            $("#census_card").append("<p><b>Race - % NativeAm/Alaskan: </b>" + response[1][31] + "</p>");
            $("#census_card").append("<p><b>Race - % Hawaiian/PacificIsl: </b>" + response[1][32] + "</p>");
            $("#census_card").append("<p><b>Race - % Other: </b>" + response[1][33] + "</p>");
            $("#census_card").append("<p><b>Race - % 2 or more: </b>" + response[1][34] + "</p>");
        }
    });
    return;
}

function censusAvg() {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";
    var queryURL = "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME,DP05_0001E,DP05_0019PE,DP05_0024PE,DP05_0005PE,DP05_0006PE,DP05_0007PE,DP05_0008PE,DP05_0009PE,DP05_0010PE,DP05_0011PE,DP05_0012PE,DP05_0013PE,DP05_0014PE,DP05_0015PE,DP05_0016PE,DP05_0017PE,DP05_0004E,DP05_0002PE,DP05_0003PE,DP03_0062E,DP03_0063E,DP05_0018E,DP04_0089E,DP04_0134E,DP02_0060PE,DP03_0119PE,DP05_0037PE,DP05_0038PE,DP05_0071PE,DP05_0044PE,DP05_0039PE,DP05_0052PE,DP05_0057PE,DP05_0035PE&for=us:1&key=" + apiKey;

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
            $("#census_avg_card").append("<p><b>under 5 percent: </b>" + response[1][4] + "</p>");
            $("#census_avg_card").append("<p><b>5-9 percent: </b>" + response[1][5] + "</p>");
            $("#census_avg_card").append("<p><b>10-14 percent: </b>" + response[1][6] + "</p>");
            $("#census_avg_card").append("<p><b>15-19 percent: </b>" + response[1][7] + "</p>");
            $("#census_avg_card").append("<p><b>20-24 percent: </b>" + response[1][8] + "</p>");
            $("#census_avg_card").append("<p><b>25-34 percent: </b>" + response[1][9] + "</p>");
            $("#census_avg_card").append("<p><b>35-44 percent: </b>" + response[1][10] + "</p>");
            $("#census_avg_card").append("<p><b>45-54 percent: </b>" + response[1][11] + "</p>");
            $("#census_avg_card").append("<p><b>55-59 percent: </b>" + response[1][12] + "</p>");
            $("#census_avg_card").append("<p><b>60-64 percent: </b>" + response[1][13] + "</p>");
            $("#census_avg_card").append("<p><b>65-74 percent: </b>" + response[1][14] + "</p>");
            $("#census_avg_card").append("<p><b>75-84 percent: </b>" + response[1][15] + "</p>");
            $("#census_avg_card").append("<p><b>85+ percent: </b>" + response[1][16] + "</p>");
            $("#census_avg_card").append("<p><b>Males / 100 Females: </b>" + response[1][17] + "</p>");
            $("#census_avg_card").append("<p><b>Pecent Male: </b>" + response[1][18] + "</p>");
            $("#census_avg_card").append("<p><b>Percent Females: </b>" + response[1][19] + "</p>");
            $("#census_avg_card").append("<p><b>Median Household Income: </b>" + response[1][20] + "</p>");
            var usMHI = {
                name: "us",
                value: response[1][20]
            }
            houseHoldIncome.push(usMHI);
            $("#census_avg_card").append("<p><b>Mean Household Income: </b>" + response[1][21] + "</p>");
            $("#census_avg_card").append("<p><b>Median Age: </b>" + response[1][22] + "</p>");
            $("#census_avg_card").append("<p><b>Median Home Value: </b>" + response[1][23] + "</p>");
            $("#census_avg_card").append("<p><b>Gross Rent: </b>" + response[1][24] + "</p>");
            var hsGradRate = 100 - response[1][25];
            $("#census_avg_card").append("<p><b>25yo+ Graduted HS: </b>" + hsGradRate + "</p>");
            $("#census_avg_card").append("<p><b>Poverty Rate: </b>" + response[1][26] + "</p>");
            $("#census_avg_card").append("<p><b>Race - % White: </b>" + response[1][27] + "</p>");
            $("#census_avg_card").append("<p><b>Race - % Black/AfricanAm: </b>" + response[1][28] + "</p>");
            $("#census_avg_card").append("<p><b>Race - % Hispanic/Latino: </b>" + response[1][29] + "</p>");
            $("#census_avg_card").append("<p><b>Race - % Asian: </b>" + response[1][30] + "</p>");
            $("#census_avg_card").append("<p><b>Race - % NativeAm/Alaskan: </b>" + response[1][31] + "</p>");
            $("#census_avg_card").append("<p><b>Race - % Hawaiian/PacificIsl: </b>" + response[1][32] + "</p>");
            $("#census_avg_card").append("<p><b>Race - % Other: </b>" + response[1][33] + "</p>");
            $("#census_avg_card").append("<p><b>Race - % 2 or more: </b>" + response[1][34] + "</p>");
        }
    });
    return;
}