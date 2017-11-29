function weeklyRuns(){
    var ctx = document.getElementById("weekruns").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
            datasets: [{
                label: 'Weekly Miles',
                data: [5, 8, 6, 12, 9, 4, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Distance',
                        fontSize: 14
                    },
                    ticks: {
                        beginAtZero:true,
                        fontSize:14
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 14
                    }
                }]
            },
            legend: { display: false },
            title: {
              display: true,
              text: 'This Weeks Runs',
              fontSize: 14
            }
        }
    });
}
function weeklyWellness(){
    var ctx = document.getElementById("wellness").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
            datasets: [{
                label: '',
                data: [5, 8, 6, 4, 9, 4, 9],
                backgroundColor: 'rgba(52, 152, 219, 0.3)',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Score',
                        fontSize: 14
                    },
                    ticks: {
                        beginAtZero:true,
                        fontSize:14
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 14
                    }
                }]
            },
            legend: { display: false },
            title: {
              display: true,
              text: 'Weekly Wellness',
              fontSize: 14
            }
        }
    });
}

window.onload = function() {
    weeklyRuns();
    weeklyWellness();
};