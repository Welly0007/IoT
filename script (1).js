



const output = document.querySelector('.output');

//uncomment the next if you want this code to fetch without adding products. 
//const url = "https://script.google.com/macros/s/AKfycbx6K35OiEJwh3-KzV_3IT41GrXK06fww8QO1zGtt1QLwWqIh-nJ-MJZ6l4wKp_OyhsTrg/exec";

//uncomment the next if you want this code to fetch and add new product at the same time. 
const url = "https://script.google.com/macros/s/AKfycbxC6OEhN9UJYeqX6xjAqQHaooIXP16UT0z1JbSrw-R2zycodCgUY023arKMKCV22tt_DA/exec";
//document.addEventListener('DOMContentLoaded', init);
var temp_i = [];
var temp_o = [];
var phValues = [];
var uv = [];
var xValues = [0,];


setInterval(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (i = 1; i < data.length; i++) {
                temp_i.push(data[i].temp_inside);
                temp_o.push(data[i].temp_outside);
                phValues.push(data[i].pH_value);
                uv.push(data[i].UV_index);
                xValues.push(data[i].timee);
            }
            init()
        });
}, 5000);


function init() {
    new Chart("Chart1", {
        type: "line",
        data: {
            labels: xValues.slice(xValues.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data: temp_i.slice(temp_i.length - 10)
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 15, max: 60 } }],
            },
            animation: {
                duration: 0
            },
            elements: {
                point :{
                    radius: 5,
                }
                
            }
        }
        
    });

    new Chart("Chart2", {
        type: "line",
        data: {
            labels: xValues.slice(xValues.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data: temp_o.slice(temp_o.length - 10),
            }]
        },
        options: {
            maintainAspectRatio: false,

            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 15, max: 60 } }],
            },
            animation: {
                duration: 0
            }
        }
    });




    new Chart("Chart3", {
        type: "line",
        data: {
            labels: xValues.slice(xValues.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data: phValues.slice(phValues.length - 10)
            }]
        },
        options: {
            maintainAspectRatio: false,

            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 6.5, max: 7.9 } }],
            },
            animation: {
                duration: 0
            }
        }
    });


    new Chart("Chart4", {
        type: "line",
        data: {
            labels: xValues.slice(xValues.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data: uv.slice(uv.length - 10)
            }]
        },
        options: {
            maintainAspectRatio: false,

            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 0, max: 2500 } }],
            },
            animation: {
                duration: 0
            }
        }
    });


}

