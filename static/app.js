// REQUEST THE DATA
const url5 = "http://127.0.0.1:5000/servers";
d3.json(url5).then(function(data) {
  console.log(data)
  // var stackedData = d3.stack(data)
  // console.log(stackedData)
  var name= Object.values(data['name'])
  // console.log(name)
  var food = Object.values(data['food sales'])
  var liquor = Object.values(data['liquor sales'])
  var wine = Object.values(data['wine sales'])

  var trace1 = {
    x: name,
    y: wine,
    opacity : .7,
    type: 'bar',
    name: 'wine sales',
    text: name,
    marker: { color : 'Blue',
      size: 8,
      line: {
        color: 'MediumPurple',
        width: 1
    }
   }
  };

  var trace3 = {
    x: name,
    y: liquor,
    yaxis: 'y3',
    opacity : .7,
    type: 'bar',
    size: 10,
    name: 'liquor sales',
    text: name,
    marker: { color : 'brown',
      size: 4,
      line: {
        color: 'MediumPurple',
        width: 1
    }
   }
  };

  var trace2 = {
    x: name,
    y: food,
    yaxis: 'y2',
    opacity : .4,
    type: 'bar',
    name: 'food sales',
    marker: { color : 'green',
      size: 12,
      line: {
        color: 'MediumPurple',
        width: 2
      }
      }
  };
  
  var data = [ trace1,trace2,trace3];
  
  var layout = {
    title: 'servers food, liquor and wine sales',
    xaxis: {
      tickmode: 'auto',
      showticksuffix: 'first',
      ticksuffix: 'string',

    },
    yaxis: {
      title: 'Sales'
    },
    yaxis2:{
      // title: '',
      // titlefont: {color: 'rgb(148, 103, 189)'},
      // tickfont: {color: 'rgb(148, 103, 189)'},
      overlaying: 'y',
      side: 'right'
    },
    yaxis3:{
      // title: '',
      // titlefont: {color: 'rgb(148, 103, 189)'},
      // tickfont: {color: 'rgb(148, 103, 189)'},
      overlaying: 'y',
      side: 'right'
    }
  };
  

Plotly.newPlot('my_dataviz', data, layout);
});
