var countryname = [];
var l1 = new Array(4);
var l2 = new Array(4);
var l3 = new Array(4);
var l4 = new Array(4);
var inputs = new Array(4);

const apiUrl = 'https://restcountries.com/v2/all';
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }

        return response.json();
    })
    .then(data => {
        for (i = 0; i < 16; i++) {
            const val = Math.floor(Math.random() * 250)
            countryname.push(data[val].name);
        }
         lists();
    })
    .catch(error => {
        console.error(error);
    });

async function lists() {
    for (let i = 0; i < 16; i++) {
            document.getElementById(i + 1).innerHTML = countryname[i];
    }
}

const forms = document.getElementsByTagName("form");
async function assignValues() {
let index = 0;
//getting a number 1 -16
var numbers = [];
for (var i = 0; i <= 15; i++) {
    numbers.push(i);
}
// Shuffle the array using the Fisher-Yates shuffle algorithm
for (var i = numbers.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}
console.log(l1);
    // Loop through the form
    for (let i = 0; i < forms.length; i++) {
        // Get the label elements in the form
        const labels = forms[i].getElementsByTagName("label");
        // Loop through the label elements
        for (let j = 0; j < labels.length; j++) {
            // Assign a value to the label element
             labels[j].innerHTML = countryname[numbers[index]];
             index++;
            if (i == 0) {
                l1[j]= labels[j].innerHTML;
            }
            if (i == 1) {
                l2[j]= labels[j].innerHTML;
            }
            if (i == 2) {
                l3[j]= labels[j].innerHTML;
            }
            if (i == 3) {
                l4[j]= labels[j].innerHTML;
            }
        }
    }
}

async function getValue() {
    // Get the form element
    const form = document.getElementById("RegForm");
    // Get the value of the input field
    inputs[0] = form.elements["feild1"].value;
    inputs[1] = form.elements["feild2"].value;
    inputs[2] = form.elements["feild3"].value;
    inputs[3] = form.elements["feild4"].value;
    createChart(l1[0],l1[1],l1[2],l1[3],inputs[0],inputs[1],inputs[2],inputs[3])

}
function getValue1() {
    // Get the form element
    const form = document.getElementById("RegForm1");

    // Get the value of the input field
    inputs[0] = form.elements["G2name"].value;
    inputs[1] = form.elements["G2name1"].value;
    inputs[2] = form.elements["G2name2"].value;
    inputs[3] = form.elements["G2name3"].value;
    createChart(l2[0],l2[1],l2[2],l2[3],inputs[0],inputs[1],inputs[2],inputs[3])
}
function getValue2() {
    // Get the form element
    const form = document.getElementById("RegForm2");

    // Get the value of the input field
    inputs[0] = form.elements["G3name1"].value;
    inputs[1] = form.elements["G3name2"].value;
    inputs[2] = form.elements["G3name3"].value;
    inputs[3] = form.elements["G3name4"].value;
    createChart(l3[0],l3[1],l3[2],l3[3],inputs[0],inputs[1],inputs[2],inputs[3])
}
function getValue3() {
    // Get the form element
    const form = document.getElementById("RegForm3");

    // Get the value of the input field
    inputs[0] = form.elements["G4name"].value;
    inputs[1] = form.elements["G4name1"].value;
    inputs[2] = form.elements["G4name2"].value;
    inputs[3] = form.elements["G4name3"].value;
    createChart(l4[0],l4[1],l4[2],l4[3],inputs[0],inputs[1],inputs[2],inputs[3])
}

//Here are the valus passed from the cards and try to draw pie chart and Bar chart
async function createChart(country1,country2,country3,country4,score1,score2,score3,score4){
    document.getElementById('chart1').innerHTML="";
    document.getElementById('chart2').innerHTML="";
    console.log(country1);
    console.log(country2);
    console.log(country3);
    console.log(country4);
    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);
 // Create the initial chart
await Highcharts.chart('chart1', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'The countries score for FIFA vote pie chart'
    },
    series: [{
        name: 'score',
        data: [
            [country1, parseFloat(score1)],
            [country2, parseFloat(score2)],
            [country3, parseFloat(score3)],
            [country4, parseFloat(score4)]
        ]
    }
]
});
await Highcharts.chart('chart2', {
    title: {
        text: 'The countries score for FIFA vote bar graph',
        align: 'left'
    },
    xAxis: {
        categories: [country1,country2, country3,country4]
    },
    yAxis: {
        title: {
            text: 'score'
        }
    },
    series: [{
        type: 'column',
        name: '2023',
        data: [parseFloat(score1), parseFloat(score2), parseFloat(score3), parseFloat(score4)]
    }]
    }
    );
}