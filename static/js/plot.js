function create_bar_plot(warscore)    
    var barData =[{
        x:['Players Age', 'Players Salary','Team Win Percentage', 'Percent Contract Complete', 'Number of DL Trips'],
        y:[0,0,0,0,0],
        type: 'bar'
    }];

    var barLayout ={
        title: 'Variable Importances',
        font: {
            family: 'Raleway, sans-serif'
        },
        showlegend: false,

        xaxis: {
            tickangle: -45
        },
        yaxis: {
            title: 'Importance Score',
            zeroline: false,
            gridwidth: 2,
            tickformat: '.2f'
        },
        bargap: 0.05
    };

    Plotly.newPlot('barPlot', barData, barLayout, {responsive: true});
}