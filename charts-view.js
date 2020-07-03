const ctx = document.getElementById('myChart1').getContext('2d');
const chart = new Chart(ctx, {

    type: 'line',

    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },


    options: {}
});

const ctx2 = document.getElementById('myChart2').getContext('2d');
const chart2 = new Chart(ctx2, {

    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(101,112,182)',
            borderColor: 'rgb(70,14,85)',
            data: [50, 0, 5, 90, 5, 30, 20]
        }]
    },

    // Configuration options go here
    options: {}
});