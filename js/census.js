"use strict";

var tbody_array = ["<tr><td class='desc_td'>Population</td><td id='czip1' class='text-right'>---</td><td id='cus1' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Median Age</td><td id='czip22' class='text-right'>---</td><td id='cus22' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age 18 and under</td><td id='czip2' class='text-right'>---</td><td id='cus2' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age 65+</td><td id='czip3' class='text-right'>---</td><td id='cus3' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: under 5</td><td id='czip4' class='text-right'>---</td><td id='cus4' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 5-9</td><td id='czip5' class='text-right'>---</td><td id='cus5' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 10-14</td><td id='czip6' class='text-right'>---</td><td id='cus6' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 15-19</td><td id='czip7' class='text-right'>---</td><td id='cus7' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 20-24</td><td id='czip8' class='text-right'>---</td><td id='cus8' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 25-34</td><td id='czip9' class='text-right'>---</td><td id='cus9' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 35-44</td><td id='czip10' class='text-right'>---</td><td id='cus10' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 45-54</td><td id='czip11' class='text-right'>---</td><td id='cus11' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 55-59</td><td id='czip12' class='text-right'>---</td><td id='cus12' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 60-64</td><td id='czip13' class='text-right'>---</td><td id='cus13' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 65-74</td><td id='czip14' class='text-right'>---</td><td id='cus14' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 75-84</td><td id='czip15' class='text-right'>---</td><td id='cus15' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Age: 85+</td><td id='czip16' class='text-right'>---</td><td id='cus16' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Males</td><td id='czip18' class='text-right'>---</td><td id='cus18' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Females</td><td id='czip19' class='text-right'>---</td><td id='cus19' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Median Household Income</td><td id='czip20' class='text-right'>---</td><td id='cus20' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Median Household Income</td><td id='czip21' class='text-right'>---</td><td id='cus21' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Median Home Value</td><td id='czip23' class='text-right'>---</td><td id='cus23' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Gross Rent</td><td id='czip24' class='text-right'>---</td><td id='cus24' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>25yo+ Graduted HS</td><td id='czip25' class='text-right'>---</td><td id='cus25' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Poverty Rate</td><td id='czip26' class='text-right'>---</td><td id='cus26' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Race - White</td><td id='czip27' class='text-right'>---</td><td id='cus27' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Race - Black/AfricanAm</td><td id='czip28' class='text-right'>---</td><td id='cus28' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Race - Hispanic/Latino</td><td id='czip29' class='text-right'>---</td><td id='cus29' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Race - Asian</td><td id='czip30' class='text-right'>---</td><td id='cus30' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Race - NativeAm/Alaskan</td><td id='czip31' class='text-right'>---</td><td id='cus31' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Race - Hawaiian/PacificIsl</td><td id='czip32' class='text-right'>---</td><td id='cus32' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Race - Other</td><td id='czip33' class='text-right'>---</td><td id='cus33' class='text-right'>---</td></tr>", "<tr><td class='desc_td'>Race - 2 or more</td><td id='czip34' class='text-right'>---</td><td id='cus34' class='text-right'>---</td></tr>"];

function census(zip) {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";
    var queryURL = "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME,DP05_0001E,DP05_0019PE,DP05_0024PE,DP05_0005PE,DP05_0006PE,DP05_0007PE,DP05_0008PE,DP05_0009PE,DP05_0010PE,DP05_0011PE,DP05_0012PE,DP05_0013PE,DP05_0014PE,DP05_0015PE,DP05_0016PE,DP05_0017PE,DP05_0004E,DP05_0002PE,DP05_0003PE,DP03_0062E,DP03_0063E,DP05_0018E,DP04_0089E,DP04_0134E,DP02_0060PE,DP03_0119PE,DP05_0037PE,DP05_0038PE,DP05_0071PE,DP05_0044PE,DP05_0039PE,DP05_0052PE,DP05_0057PE,DP05_0035PE&for=zip+code+tabulation+area:" + zip + "&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#census_table").removeClass("d-none");
            $("#this_zip").text(zipCode);
            $("#czip1").text(Number(response[1][1]).toLocaleString('en'));
            $("#czip22").text(response[1][22]);
            $("#czip2").text(response[1][2] + "%");
            $("#czip3").text(response[1][3] + "%");
            $("#czip4").text(response[1][4] + "%");
            $("#czip5").text(response[1][5] + "%");
            $("#czip6").text(response[1][6] + "%");
            $("#czip7").text(response[1][7] + "%");
            $("#czip8").text(response[1][8] + "%");
            $("#czip9").text(response[1][9] + "%");
            $("#czip10").text(response[1][10] + "%");
            $("#czip11").text(response[1][11] + "%");
            $("#czip12").text(response[1][12] + "%");
            $("#czip13").text(response[1][13] + "%");
            $("#czip14").text(response[1][14] + "%");
            $("#czip15").text(response[1][15] + "%");
            $("#czip16").text(response[1][16] + "%");
            $("#czip18").text(response[1][18] + "%");
            $("#czip19").text(response[1][19] + "%");
            $("#czip20").text(Number(response[1][20]).toLocaleString('en'));
            $("#czip21").text(Number(response[1][21]).toLocaleString('en'));
            $("#czip23").text(Number(response[1][23]).toLocaleString('en'));
            $("#czip24").text(Number(response[1][24]).toLocaleString('en'));
            var hsGradRate = 100 - response[1][25];
            $("#czip25").text(hsGradRate + "%");
            $("#czip26").text(response[1][26] + "%");
            $("#czip27").text(response[1][27] + "%");
            $("#czip28").text(response[1][28] + "%");
            $("#czip29").text(response[1][29] + "%");
            $("#czip30").text(response[1][30] + "%");
            $("#czip31").text(response[1][31] + "%");
            $("#czip32").text(response[1][32] + "%");
            $("#czip33").text(response[1][33] + "%");
            $("#czip34").text(response[1][34] + "%");


            $("#census_info").removeClass("d-none");
            $("#census_zip").text(zip);
            $("#census_card").append("<p><b>Population: </b>" + Number(response[1][1]).toLocaleString('en') + "</p>");
            $("#census_card").append("<hr />");
            $("#census_card").append("<p><b>Median Age: </b>" + response[1][22] + "</p>");
            $("#census_card").append("<p><b>Age 18 and under: </b>" + response[1][2] + "%</p>");
            $("#census_card").append("<p><b>Age 65+: </b>" + response[1][3] + "%</p>");
            $("#census_card").append("<hr />");
            $("#census_card").append("<p><b>Age under 5: </b>" + response[1][4] + "%</p>");
            $("#census_card").append("<p><b>Age 5-9: </b>" + response[1][5] + "%</p>");
            $("#census_card").append("<p><b>Age 10-14: </b>" + response[1][6] + "%</p>");
            $("#census_card").append("<p><b>Age 15-19: </b>" + response[1][7] + "%</p>");
            $("#census_card").append("<p><b>Age 20-24: </b>" + response[1][8] + "%</p>");
            $("#census_card").append("<p><b>Age 25-34: </b>" + response[1][9] + "%</p>");
            $("#census_card").append("<p><b>Age 35-44: </b>" + response[1][10] + "%</p>");
            $("#census_card").append("<p><b>Age 45-54: </b>" + response[1][11] + "%</p>");
            $("#census_card").append("<p><b>Age 55-59: </b>" + response[1][12] + "%</p>");
            $("#census_card").append("<p><b>Age 60-64: </b>" + response[1][13] + "%</p>");
            $("#census_card").append("<p><b>Age 65-74: </b>" + response[1][14] + "%</p>");
            $("#census_card").append("<p><b>Age 75-84: </b>" + response[1][15] + "%</p>");
            $("#census_card").append("<p><b>Age 85+: </b>" + response[1][16] + "%</p>");
            $("#census_card").append("<hr />");
            // $("#census_card").append("<p><b>Males / 100 Females: </b>" + response[1][17] + "</p>");
            $("#census_card").append("<p><b>Males: </b>" + response[1][18] + "%</p>");
            $("#census_card").append("<p><b>Females: </b>" + response[1][19] + "%</p>");
            $("#census_card").append("<hr />");
            $("#census_card").append("<p><b>Median Household Income: </b>$" + Number(response[1][20]).toLocaleString('en') + "</p>");
            var localMHI = {
                name: "local",
                value: response[1][20]
            }
            houseHoldIncome.push(localMHI);
            $("#census_card").append("<p><b>Mean Household Income: </b>$" + Number(response[1][21]).toLocaleString('en') + "</p>");
            if (response[1][23] < 0) {
                var medHomeValue = "N/A";
            } else {
                var medHomeValue = Number(response[1][23]).toLocaleString('en');
            }
            $("#census_card").append("<p><b>Median Home Value: </b>$" + medHomeValue + "</p>");
            if (response[1][24] < 0) {
                var grossRent = "N/A";
            } else {
                var grossRent = Number(response[1][24]).toLocaleString('en');
            }
            $("#census_card").append("<p><b>Gross Rent: </b>$" + grossRent + "</p>");
            $("#census_card").append("<hr />");
            var hsGradRate = 100 - response[1][25];
            $("#census_card").append("<p><b>25yo+ Graduted HS: </b>" + hsGradRate + "%</p>");
            $("#census_card").append("<p><b>Poverty Rate: </b>" + response[1][26] + "%</p>");
            $("#census_card").append("<hr />");
            $("#census_card").append("<p><b>Race - White: </b>" + response[1][27] + "%</p>");
            $("#census_card").append("<p><b>Race - Black/AfricanAm: </b>" + response[1][28] + "%</p>");
            $("#census_card").append("<p><b>Race - Hispanic/Latino: </b>" + response[1][29] + "%</p>");
            $("#census_card").append("<p><b>Race - Asian: </b>" + response[1][30] + "%</p>");
            $("#census_card").append("<p><b>Race - NativeAm/Alaskan: </b>" + response[1][31] + "%</p>");
            $("#census_card").append("<p><b>Race - Hawaiian/PacificIsl: </b>" + response[1][32] + "%</p>");
            $("#census_card").append("<p><b>Race - Other: </b>" + response[1][33] + "%</p>");
            $("#census_card").append("<p><b>Race - 2 or more: </b>" + response[1][34] + "%</p>");
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

            
            $("#cus1").text(Number(response[1][1]).toLocaleString('en'));
            $("#cus22").text(response[1][22]);
            $("#cus2").text(response[1][2] + "%");
            $("#cus3").text(response[1][3] + "%");
            $("#cus4").text(response[1][4] + "%");
            $("#cus5").text(response[1][5] + "%");
            $("#cus6").text(response[1][6] + "%");
            $("#cus7").text(response[1][7] + "%");
            $("#cus8").text(response[1][8] + "%");
            $("#cus9").text(response[1][9] + "%");
            $("#cus10").text(response[1][10] + "%");
            $("#cus11").text(response[1][11] + "%");
            $("#cus12").text(response[1][12] + "%");
            $("#cus13").text(response[1][13] + "%");
            $("#cus14").text(response[1][14] + "%");
            $("#cus15").text(response[1][15] + "%");
            $("#cus16").text(response[1][16] + "%");
            $("#cus18").text(response[1][18] + "%");
            $("#cus19").text(response[1][19] + "%");
            $("#cus20").text(Number(response[1][20]).toLocaleString('en'));
            $("#cus21").text(Number(response[1][21]).toLocaleString('en'));
            $("#cus23").text(Number(response[1][23]).toLocaleString('en'));
            $("#cus24").text(Number(response[1][24]).toLocaleString('en'));
            var hsGradRate = 100 - response[1][25];
            $("#cus25").text(hsGradRate + "%");
            $("#cus26").text(response[1][26] + "%");
            $("#cus27").text(response[1][27] + "%");
            $("#cus28").text(response[1][28] + "%");
            $("#cus29").text(response[1][29] + "%");
            $("#cus30").text(response[1][30] + "%");
            $("#cus31").text(response[1][31] + "%");
            $("#cus32").text(response[1][32] + "%");
            $("#cus33").text(response[1][33] + "%");
            $("#cus34").text(response[1][34] + "%");



            $("#census_avg_card").append("<p><b>Population: </b>" + Number(response[1][1]).toLocaleString('en') + "</p>");
            $("#census_avg_card").append("<hr />");
            $("#census_avg_card").append("<p><b>Median Age: </b>" + response[1][22] + "</p>");
            $("#census_avg_card").append("<p><b>Age 18 and under: </b>" + response[1][2] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 65+: </b>" + response[1][3] + "%</p>");
            $("#census_avg_card").append("<hr />");
            $("#census_avg_card").append("<p><b>Age under 5: </b>" + response[1][4] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 5-9: </b>" + response[1][5] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 10-14: </b>" + response[1][6] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 15-19: </b>" + response[1][7] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 20-24: </b>" + response[1][8] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 25-34: </b>" + response[1][9] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 35-44: </b>" + response[1][10] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 45-54: </b>" + response[1][11] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 55-59: </b>" + response[1][12] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 60-64: </b>" + response[1][13] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 65-74: </b>" + response[1][14] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 75-84: </b>" + response[1][15] + "%</p>");
            $("#census_avg_card").append("<p><b>Age 85+: </b>" + response[1][16] + "%</p>");
            $("#census_avg_card").append("<hr />");
            // $("#census_avg_card").append("<p><b>Males / 100 Females: </b>" + response[1][17] + "</p>");
            $("#census_avg_card").append("<p><b>Males: </b>" + response[1][18] + "%</p>");
            $("#census_avg_card").append("<p><b>Females: </b>" + response[1][19] + "%</p>");
            $("#census_avg_card").append("<hr />");
            $("#census_avg_card").append("<p><b>Median Household Income: </b>$" + Number(response[1][20]).toLocaleString('en') + "</p>");
            var usMHI = {
                name: "us",
                value: response[1][20]
            }
            houseHoldIncome.push(usMHI);
            $("#census_avg_card").append("<p><b>Mean Household Income: </b>$" + Number(response[1][21]).toLocaleString('en') + "</p>");
            $("#census_avg_card").append("<p><b>Median Home Value: </b>$" + Number(response[1][23]).toLocaleString('en') + "</p>");
            $("#census_avg_card").append("<p><b>Gross Rent: </b>$" + Number(response[1][24]).toLocaleString('en') + "</p>");
            $("#census_avg_card").append("<hr />");
            var hsGradRate = 100 - response[1][25];
            $("#census_avg_card").append("<p><b>25yo+ Graduted HS: </b>" + hsGradRate + "%</p>");
            $("#census_avg_card").append("<p><b>Poverty Rate: </b>" + response[1][26] + "%</p>");
            $("#census_avg_card").append("<hr />");
            $("#census_avg_card").append("<p><b>Race - White: </b>" + response[1][27] + "%</p>");
            $("#census_avg_card").append("<p><b>Race - Black/AfricanAm: </b>" + response[1][28] + "%</p>");
            $("#census_avg_card").append("<p><b>Race - Hispanic/Latino: </b>" + response[1][29] + "%</p>");
            $("#census_avg_card").append("<p><b>Race - Asian: </b>" + response[1][30] + "%</p>");
            $("#census_avg_card").append("<p><b>Race - NativeAm/Alaskan: </b>" + response[1][31] + "%</p>");
            $("#census_avg_card").append("<p><b>Race - Hawaiian/PacificIsl: </b>" + response[1][32] + "%</p>");
            $("#census_avg_card").append("<p><b>Race - Other: </b>" + response[1][33] + "%</p>");
            $("#census_avg_card").append("<p><b>Race - 2 or more: </b>" + response[1][34] + "%</p>");
        }
    });
    return;
}