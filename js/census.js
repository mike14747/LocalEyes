"use strict";

// object used dynamically creating the census table rows and cells
var tbody_object = [
    {
        name: "Population",
        variable: "DP05_0001E"
    },
    {
        name: "Median Age",
        variable: "DP05_0018E"
    },
    {
        name: "Age 18 and under",
        variable: "DP05_0019PE"
    },
    {
        name: "Age 65+",
        variable: "DP05_0024PE"
    },
    {
        name: "Age: under 5",
        variable: "DP05_0005PE"
    },
    {
        name: "Age: 5-9",
        variable: "DP05_0006PE"
    },
    {
        name: "Age: 10-14",
        variable: "DP05_0007PE"
    },
    {
        name: "Age: 15-19",
        variable: "DP05_0008PE"
    },
    {
        name: "Age: 20-24",
        variable: "DP05_0009PE"
    },
    {
        name: "Age: 25-34",
        variable: "DP05_0010PE"
    },
    {
        name: "Age: 35-44",
        variable: "DP05_0011PE"
    },
    {
        name: "Age: 45-54",
        variable: "DP05_0012PE"
    },
    {
        name: "Age: 55-59",
        variable: "DP05_0013PE"
    },
    {
        name: "Age: 60-64",
        variable: "DP05_0014PE"
    },
    {
        name: "Age: 65-74",
        variable: "DP05_0015PE"
    },
    {
        name: "Age: 75-84",
        variable: "DP05_0016PE"
    },
    {
        name: "Age: 85+",
        variable: "DP05_0017PE"
    },
    {
        name: "Males",
        variable: "DP05_0002PE"
    },
    {
        name: "Females",
        variable: "DP05_0003PE"
    },
    {
        name: "Median Household Income",
        variable: "DP03_0062E"
    },
    {
        name: "Mean Household Income",
        variable: "DP03_0063E"
    },
    {
        name: "Median Home Value",
        variable: "DP04_0089E"
    },
    {
        name: "Gross Rent",
        variable: "DP04_0134E"
    },
    {
        name: "25yo+ HS Grad",
        variable: "DP02_0060PE"
    },
    {
        name: "Poverty Rate",
        variable: "DP03_0119PE"
    },
    {
        name: "Race - White",
        variable: "DP05_0037PE"
    },
    {
        name: "Race - Black / AfricanAm",
        variable: "DP05_0038PE"
    },
    {
        name: "Race - Hispanic / Latino",
        variable: "DP05_0071PE"
    },
    {
        name: "Race - Asian",
        variable: "DP05_0044PE"
    },
    {
        name: "Race - NativeAm / Alaskan",
        variable: "DP05_0039PE"
    },
    {
        name: "Race - Hawaiian / PacificIsl",
        variable: "DP05_0052PE"
    },
    {
        name: "Race - Other",
        variable: "DP05_0057PE"
    },
    {
        name: "Race - 2 or more",
        variable: "DP05_0035PE"
    }
];

var varString = "";
for (var i = 0; i < tbody_object.length; i++) {
    varString += "," + tbody_object[i].variable;
}

function census(zip) {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";

    var queryURL = "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME" + varString + "&for=zip+code+tabulation+area:" + zip + "&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            $("#census_table").removeClass("d-none");
            $("#this_zip").text(zipCode);
            for (var i = 1; i < response[0].length - 1 ; i++) {
                let a = i - 1;
                if (response[1][i] < 0) {
                    $("#czip" + a).text("N/A");
                } else {
                    if (response[0][i].slice(-2) == "PE") {
                        if (response[0][i] == "DP02_0060PE") {
                            let hsGradRate = 100 - response[1][i];
                            $("#czip" + a).text(hsGradRate + "%");
                        } else {
                            $("#czip" + a).text(response[1][i] + "%");
                        }
                    } else if (response[0][i] == "DP05_0001E" || response[0][i] == "DP03_0062E" || response[0][i] == "DP03_0063E" || response[0][i] == "DP04_0089E" || response[0][i] == "DP04_0134E") {
                        $("#czip" + a).text(Number(response[1][i]).toLocaleString("en"));
                    } else {
                        $("#czip" + a).text(response[1][i]);
                    }
                }
            }
        }
    });
    return;
}

function censusAvg() {
    var apiKey = "599c1fceaf4dbdd36e8883a85282f4b2cbb5cd65";
    var queryURL =
        "https://api.census.gov/data/2017/acs/acs5/profile?get=NAME" + varString + "&for=us:1&key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        if (response.length > 0) {
            for (var i = 1; i < response[0].length - 1; i++) {
                let a = i - 1;
                if (response[1][i] < 0) {
                    $("#cus" + a).text("N/A");
                } else {
                    if (response[0][i].slice(-2) == "PE") {
                        if (response[0][i] == "DP02_0060PE") {
                            let hsGradRate = 100 - response[1][i];
                            $("#cus" + a).text(hsGradRate + "%");
                        } else {
                            $("#cus" + a).text(response[1][i] + "%");
                        }
                    } else if (response[0][i] == "DP05_0001E" || response[0][i] == "DP03_0062E" || response[0][i] == "DP03_0063E" || response[0][i] == "DP04_0089E" || response[0][i] == "DP04_0134E") {
                        $("#cus" + a).text(Number(response[1][i]).toLocaleString("en"));
                    } else {
                        $("#cus" + a).text(response[1][i]);
                    }
                }
            }
        }
    });
    return;
}