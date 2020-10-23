var dataset = [
  { "name": "A", "para1": 0, "para2": 5 },
  { "name": "B", "para1": 1, "para2": 6 },
  { "name": "C", "para1": 2, "para2": 7 },
  { "name": "D", "para1": 3, "para2": 8 },
  { "name": "E", "para1": 4, "para2": 9 }
]

// 1行目のkeyだけを取り出す
var names = d3.keys(dataset[0]);

var table = d3.select("body")
  .append("table")
  .attr("border", "1") // 枠線表示;

table.append("thead")
  .append("tr")
  .selectAll("th")
  .data(names)
  .enter()
  .append("th")
  .text(function(d) { return d; });

table.append("tbody")
  .selectAll("tr")
  .data(dataset)
  .enter()
  .append("tr")
  .selectAll("td")
  // オブジェクトのキーを配列として取り出してくる
  .data(function(row) { return d3.entries(row); })
  .enter()
  .append("td")
  .text(function(d) { return d.value; });