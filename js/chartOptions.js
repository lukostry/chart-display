var CHART_OPTIONS = CHART_OPTIONS || {};

CHART_OPTIONS = (function() {

    var lineChartOptions = {
        title: "Revenue per week",
        colors: ["#ed6e37", "#259e01", "#15a0c8"],
        vAxis: {
            gridlines: {
                count: 3
            },
            textStyle: {
                color: "#05415b",
                fontName: "open_sansregular",
                fontSize: 12,
                bold: false,
                italic: false
            }
        },
        legend: { position: 'bottom' },
        pointSize: 7,
        chartArea: {
            width: "85%",
            height: "65%"
        },
        hAxis: {
            textStyle: {
                color: "#05415b",
                fontName: "open_sansregular",
                fontSize: 12,
                bold: false,
                italic: false
            }
        }
    };

    var colChartOptions = {
        title: "Installations per day",
        colors: ["#ed6e37", "#259e01", "#15a0c8"],
        vAxis: {
            gridlines: {
                count: 3
            },
            textStyle: {
                color: "#05415b",
                fontName: "open_sansregular",
                fontSize: 12,
                bold: false,
                italic: false
            }
        },
        legend: { position: 'bottom' },
        chartArea: {
            width: "85%",
            height: "65%"
        },
        hAxis: {
            textStyle: {
                color: "#05415b",
                fontName: "open_sansregular",
                fontSize: 12,
                bold: false,
                italic: false
            }
        }
    };

    return {
        colChartOptions: colChartOptions,
        lineChartOptions: lineChartOptions
    }
}());
