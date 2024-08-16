const width=960, height=600;
const tooltip = d3.select("#tooltip");
const svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height)

const path = d3.geoPath()

Promise.all([
    d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"),
    d3.csv("PopData.csv")
]).then(function([countyData, popData]) {
    console.log(popData)
    const geojson = topojson.feature(countyData, countyData.objects.counties);
  
    const dataEdu = new Map();
    popData.forEach(function(d) {
        dataEdu.set(Number(d.FIPStxt), Number(d.POP_ESTIMATE_2023.replace(/,/g, "")));
    });
    
    const color = d3.scaleQuantize()
        .domain([0, 100000]) 
        .range(d3.schemeBlues[9]);

    svg.selectAll("path")
        .data(geojson.features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", function(d) {
            const geoId = d.id;
            const value = dataEdu.get(geoId);
            return value ? color(value) : "#ccc";
        })
        .attr("class", "county")
        .attr("stroke", "white")
        .attr("data-education", function(d) {
            const geoId = d.id;
            const value = dataEdu.get(geoId);
            return `${value}`
        })
        .on("mouseover", function(event, d) {
            const geoId = d.id;
            const value = dataEdu.get(geoId);
            const county = popData.find(c => Number(c.FIPStxt )=== geoId);
            tooltip.style("opacity", 1)
                .html(`${county ? `${county.Area_Name}, ${county.State}: ${county.POP_ESTIMATE_2023}person` : "No data available"}`)
                .attr("data-education",  `${value}`)
        })
        .on("mousemove", function(event) {
            const [xPos, yPos] = d3.pointer(event);
            tooltip.style("left", `${xPos + 290}px`)
                   .style("top", `${yPos + 170}px`);
        })
        .on("mouseout", function() {
            tooltip.style("opacity", 0);
        });
  
  const legendWidth = 200;
  const legendHeight = 15;
  const legendColors = 10;

  const legend = svg.append("g")
    .attr("transform", `translate(600, 0)`)
    .attr("id", "legend");

  const legendScale = d3.scaleLinear()
    .domain([0, legendColors - 1])
    .range([0, legendWidth]);

  const legendRectWidth = legendWidth / legendColors;
  const legendData = d3.range(legendColors-1);

  legend.selectAll("rect")
        .data(legendData)
        .enter().append("rect")
        .attr("x", d => legendScale(d))
        .attr("y", 0)
        .attr("width", legendRectWidth)
        .attr("height", legendHeight)
        .style("fill", d => color(color.domain()[0] + (color.domain()[1] - color.domain()[0]) * (d / (legendColors - 1))));

  const legendAxisScale = d3.scaleLinear()
                            .domain(color.domain())
                            .range([0, legendWidth]);

  const legendAxis = d3.axisBottom(legendAxisScale)
                       .ticks(5);

  legend.append("g")
        .attr("transform", `translate(0, ${legendHeight})`)
        .call(legendAxis);
});