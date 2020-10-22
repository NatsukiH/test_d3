var dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88]
  ];
  var width = 400;
  var height = 300;
 
  var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
  var padding = 30;
 
  var xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d){return d[0];})])
    .range([padding, width - padding]);
 
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d){return d[1];})])
    .range([height - padding, padding]);
 
  var axisx = d3.axisBottom(xScale);
  var axisy = d3.axisLeft(yScale);
  svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
    .call(axisx);
 
  svg.append("g")
    .attr("transform", "translate(" + padding + "," + 0 + ")")
    .call(axisy);
 
  svg.append("g")
    .selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", function(d) {
        return xScale(d[0]);
   })
   .attr("cy", function(d) {
        return yScale(d[1]);
   })
   .attr("fill", "SkyBlue")
   .attr("r", 4);
 ;