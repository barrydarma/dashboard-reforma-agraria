var ctx = document.getElementById("myChart");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Empty"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(209, 219, 232, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,0.3)',
                'rgba(209, 219, 232, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            
                ticks: {
                    beginAtZero: true
                }
    
        }
    }
});