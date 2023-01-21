


const output = document.querySelector('.output');

//uncomment the next if you want this code to fetch without adding products. 
//const url = "https://script.google.com/macros/s/AKfycbz8rV5i0_idjKC86kr60wR-rOaM4ha5ZsPYIPvbCiqf1piaOsYNS-lOfvk8LpvI8VB21Q/exec";

//uncomment the next if you want this code to fetch and add new product at the same time. 
const url = "https://script.google.com/macros/s/AKfycbx4vlQCP-JY6bogKnpnqw9aB89ZhPFfhzGZW_F_64S96uuB_axONWr85h_kW8WRHMsSFg/exec";
//document.addEventListener('DOMContentLoaded', init);
var temp1 = [];
var temp2 = [];
var temp3 = [];
var moist1 = [];
var moist2 = [];
var moist3 = [];
var xValues = [0,];


setInterval(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (i = 1; i < data.length; i++) {
                temp1.push(data[i].temp1);
                temp2.push(data[i].temp2);
                temp3.push(data[i].temp3);
                moist1.push(data[i].moist1);
                moist2.push(data[i].moist2);
                moist3.push(data[i].moist3);
                xValues.push(data[i].timee);
            }
            init()
        });
}, 1000);

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
                data:temp1.slice(temp1.length - 10)
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 0, max: 40 } }],
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
                data:temp2.slice(temp2.length - 10)
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 0, max: 40 } }],
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
                data:temp3.slice(temp3.length - 10)
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 0, max: 40 } }],
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
                data:moist1.slice(moist1.length - 10)
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 0, max: 70 } }],
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
    new Chart("Chart5", {
        type: "line",
        data: {
            labels: xValues.slice(xValues.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data:moist2.slice(moist2.length - 10)
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 0, max: 70 } }],
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
    new Chart("Chart6", {
        type: "line",
        data: {
            labels: xValues.slice(xValues.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data:moist3.slice(moist3.length - 10)
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: 0, max: 70 } }],
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
    new Chart("Chart7", {
        type: "line",
        data: {
            labels: temp1.slice(temp1.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data:moist1.slice(moist1.length - 10)
            }]
        },
        options: {
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
    new Chart("Chart8", {
        type: "line",
        data: {
            labels: temp2.slice(temp2.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data:moist2.slice(moist2.length - 10)
            }]
        },
        options: {
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
    new Chart("Chart9", {
        type: "line",
        data: {
            labels: temp3.slice(temp3.length - 10),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgb(255,33,79,0.2)",
                pointBackgroundColor: "rgb(255,33,79)",
                data:moist3.slice(moist3.length - 10)
            }]
        },
        options: {
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
    tempreading = temp1[temp1.length-1];
    moistreading = moist2[moist2.length-1];
    document.getElementById("test").innerHTML = tempreading +" C";
    document.getElementById("test2").innerHTML = moistreading +" %";

    console.log(tempreading);
}
