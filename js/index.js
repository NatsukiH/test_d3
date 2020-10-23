dataset = [1, 2, 3, 4, 5, 6];

var div = d3.selectAll("div")
  .data(dataset);
 
var divEnter = div
  .enter()
  .append("div");
 
var divUpdate = divEnter.merge(div);
 
divUpdate
  .style("color", "blue")
  .text(function(d){return "this data is " + d;});

dataset = ['A', 'B'];
var div = d3.selectAll("div")
  .data(dataset)
  .style("color", "red")
  .text(function(d){return "this data is " + d;});
 
div.exit()
  .style("color", "green");