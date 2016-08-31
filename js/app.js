var MY_APP = MY_APP || {};

MY_APP = (function() {

    var xhr = new XMLHttpRequest();
    var labels = ["", "Net Comp", "AnalyzerHR", "Question Right"];
    var dataToColumnChart = [labels];
    var dataToLineChart = [labels];

    xhr.onload = function() {

        if(xhr.status === 200) {
            responseObject = JSON.parse(xhr.responseText);

            console.log(responseObject.data[0]);

            for (var i=0, dataRowColChart=[], dataRowLineChart=[]; i<responseObject.data.length; i++) {
                dataRowColChart.push(responseObject.data[i]["week"]);
                dataRowLineChart.push(responseObject.data[i]["week"]);
                dataRowColChart.push(responseObject.data[i]["Net Comp"]);
                dataRowColChart.push(responseObject.data[i]["AnalyzerHR"]);
                dataRowColChart.push(responseObject.data[i]["Question Right"]);
                dataToColumnChart.push(dataRowColChart);

                for (var j=1; j<dataRowColChart.length; j++) {
                    dataRowLineChart[j] = dataRowColChart[j] * 100;
                }
                dataToLineChart.push(dataRowLineChart);

                dataRowLineChart = [];
                dataRowColChart = [];
            }
            console.log(dataToLineChart);
        }
    };

    xhr.open("GET", "data/data.json", true);
    xhr.send(null);

    return {
        dataToColumnChart: dataToColumnChart,
        dataToLineChart: dataToLineChart
    };

}());
