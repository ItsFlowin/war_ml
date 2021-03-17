var barChart = document.getElementById('warscore');

function create_bar_plot(score)  {  
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

// Function to display inputs after page has reloaded
function repopulate(re_input) {
    console.log(re_input)
    // Check if inputs were entered
    if (!(Object.keys(re_input).length ===0 && re_input.constructor === Object)) {
        document.getElementById("inputAge").value = re_input.selectAge;
        document.getElementById("inputSalary").value = re_input.selectSalary;
        document.getElementById("inputwinPer").value = re_input.selectWins;
        document.getElementById("inputContract").value = re_input.selectContract;
        document.getElementById("inputDL").value = re_input.selectDL;
    }
};

document.getElementById("resetButton").onclick = function(){ reset() };

function reset() {
    let zero = 0;
    create_bar_plot(zero);
    document.getElementById(inputAge).value = null;
    document.getElementById(inputSalary).value = null;
    document.getElementById(inputwinPer).value = 50;
    document.getElementById(inputContract).value = null;
    document.getElementById(inputDL).value = null;
};
