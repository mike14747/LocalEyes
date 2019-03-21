"use strict";

// object used dynamically creating the census table rows and cells
var tbody_object = [
    {
        name: "Population",
        id: "1"
    },
    {
        name: "Median Age",
        id: "22"
    },
    {
        name: "Age 18 and under",
        id: "2"
    },
    {
        name: "Age 65+",
        id: "3"
    },
    {
        name: "Age: under 5",
        id: "4"
    },
    {
        name: "Age: 5-9",
        id: "5"
    },
    {
        name: "Age: 10-14",
        id: "6"
    },
    {
        name: "Age: 15-19",
        id: "7"
    },
    {
        name: "Age: 20-24",
        id: "8"
    },
    {
        name: "Age: 25-34",
        id: "9"
    },
    {
        name: "Age: 35-44",
        id: "10"
    },
    {
        name: "Age: 45-54",
        id: "11"
    },
    {
        name: "Age: 55-59",
        id: "12"
    },
    {
        name: "Age: 60-64",
        id: "13"
    },
    {
        name: "Age: 65-74",
        id: "14"
    },
    {
        name: "Age: 75-84",
        id: "15"
    },
    {
        name: "Age: 85+",
        id: "16"
    },
    {
        name: "Males",
        id: "18"
    },
    {
        name: "Females",
        id: "19"
    },
    {
        name: "Median Household Income",
        id: "20"
    },
    {
        name: "Mean Household Income",
        id: "21"
    },
    {
        name: "Median Home Value",
        id: "23"
    },
    {
        name: "Gross Rent",
        id: "24"
    },
    {
        name: "25yo+ HS Grad",
        id: "25"
    },
    {
        name: "Poverty Rate",
        id: "26"
    },
    {
        name: "Race - White",
        id: "27"
    },
    {
        name: "Race - Black / AfricanAm",
        id: "28"
    },
    {
        name: "Race - Hispanic / Latino",
        id: "29"
    },
    {
        name: "Race - Asian",
        id: "30"
    },
    {
        name: "Race - NativeAm / Alaskan",
        id: "31"
    },
    {
        name: "Race - Hawaiian / PacificIsl",
        id: "32"
    },
    {
        name: "Race - Other",
        id: "33"
    },
    {
        name: "Race - 2 or more",
        id: "34"
    }
];

function census(zip) {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";
    var queryURL =
        "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME,DP05_0001E,DP05_0019PE,DP05_0024PE,DP05_0005PE,DP05_0006PE,DP05_0007PE,DP05_0008PE,DP05_0009PE,DP05_0010PE,DP05_0011PE,DP05_0012PE,DP05_0013PE,DP05_0014PE,DP05_0015PE,DP05_0016PE,DP05_0017PE,DP05_0004E,DP05_0002PE,DP05_0003PE,DP03_0062E,DP03_0063E,DP05_0018E,DP04_0089E,DP04_0134E,DP02_0060PE,DP03_0119PE,DP05_0037PE,DP05_0038PE,DP05_0071PE,DP05_0044PE,DP05_0039PE,DP05_0052PE,DP05_0057PE,DP05_0035PE&for=zip+code+tabulation+area:" +
        zip +
        "&key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#census_table").removeClass("d-none");
            $("#this_zip").text(zipCode);
            $("#czip1").text(Number(response[1][1]).toLocaleString("en"));
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
            $("#czip20").text(Number(response[1][20]).toLocaleString("en"));
            $("#czip21").text(Number(response[1][21]).toLocaleString("en"));
            if (response[1][23] < 0) {
                $("#czip23").text("N/A");
            } else {
                $("#czip23").text(Number(response[1][23]).toLocaleString("en"));
            }
            if (response[1][24] < 0) {
                $("#czip24").text("N/A");
            } else {
                $("#czip24").text(Number(response[1][24]).toLocaleString("en"));
            }
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
        }
    });
    return;
}

function censusAvg() {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";
    var queryURL =
        "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME,DP05_0001E,DP05_0019PE,DP05_0024PE,DP05_0005PE,DP05_0006PE,DP05_0007PE,DP05_0008PE,DP05_0009PE,DP05_0010PE,DP05_0011PE,DP05_0012PE,DP05_0013PE,DP05_0014PE,DP05_0015PE,DP05_0016PE,DP05_0017PE,DP05_0004E,DP05_0002PE,DP05_0003PE,DP03_0062E,DP03_0063E,DP05_0018E,DP04_0089E,DP04_0134E,DP02_0060PE,DP03_0119PE,DP05_0037PE,DP05_0038PE,DP05_0071PE,DP05_0044PE,DP05_0039PE,DP05_0052PE,DP05_0057PE,DP05_0035PE&for=us:1&key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#cus1").text(Number(response[1][1]).toLocaleString("en"));
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
            $("#cus20").text(Number(response[1][20]).toLocaleString("en"));
            $("#cus21").text(Number(response[1][21]).toLocaleString("en"));
            $("#cus23").text(Number(response[1][23]).toLocaleString("en"));
            $("#cus24").text(Number(response[1][24]).toLocaleString("en"));
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
        }
    });
    return;
}