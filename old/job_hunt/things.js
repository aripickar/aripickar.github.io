let data = {
  nodes: [
    { id: "Applied To Directly"},
    { id: "Applied On Handshake"},
    { id: "Referred"},
    { id: "Recruiter Reached Out"},
    { id: "Ghosted"},
    { id: "Denied"},
    { id: "I Stopped Process"},
    { id: "Coding Challenge"},
    { id: "Interview"},
    { id: "Onsite"},
    { id: "Offer"},
    { id: "Accepted"}
    { id: "Return Offer"}
  ], 
  links = [
  {source: "Applied To Directly", target = "Coding Challenge", value = 7},
  {source: "Applied To Directly", target = "Interview", value = 2},
  {source: "Applied To Directly", target = "Ghosted", value = 9},
  {source: "Applied To Directly", target = "Denied", value = 3},
  {source: "Applied On Handshake", target = "Coding Challenge", value = 4},
  {source: "Applied On Handshake", target = "Interview", value = 1},
  {source: "Applied On Handshake", target = "Denied", value = 2},
  {source: "Applied On Handshake", target = "Ghosted", value = 1},
  {source: "Referred", target = "Coding Challenge", value = 1},
  {source: "Referred", target = "Denied", value = 2},
  {source: "Referred", target = "Ghosted", value = 2},
  {source: "Recruiter Reached Out", target = "Interview", value = 2},
  {source: "Recruiter Reached Out", target = "I Stopped Process", value = 5},
  {source: "Recruiter Reached Out", target = "Denied", value = 2},
  {source: "Coding Challenge", target = "Interview", value = 5},
  {source: "Coding Challenge", target = "Ghosted", value = 2},
  {source: "Coding Challenge", target = "I Stopped Process", value = 2},
  {source: "Coding Challenge", target = "Coding Challenge", value = 1},
  {source: "Coding Challenge", target = "Denied", value = 3},
  {source: "Interview", target = "Interview", value = 3},
  {source: "Interview", target = "Onsite", value = 6},
  {source: "Interview", target = "Denied", value = 3},
  {source: "Interview", target = "I Stopped Process", value = 2},
  {source: "Onsite", target = "Denied", value = 4},
  {source: "Onsite", target = "I Stopped Process", value = 1},
  {source: "Onsite", target = "Offer", value = 1},
  {source: "Return Offer", target = "Offer", value = 1},
  {source: "Offer", target = "Accepted", value = 1},
  ]
}

const sankey = d3.sankey()
                 .size([width, height])
                 .nodeId(d => d.id)
                 .nodeWidth(20)
                 .nodePadding(10)
                 .nodeAlign(d3.sankeyCenter);

let graph = sankey(data);

let links = svg.append("g")
               .classed("links", true)
               .selectAll("path")
               .data(graph.links)
               .enter()
               .append("path")
               .classed("link", true)
               .attr("d", d3.sankeyLinkHorizontal())
               .attr("fill", "none")
               .attr("stroke", "#606060")
               .attr("stroke-width", d => d.width)
               .attr("stoke-opacity", 0.5);

let nodes = svg.append("g")
               .classed("nodes", true)
               .selectAll("rect")
               .data(graph.nodes)
               .enter()
               .append("rect")
               .classed("node", true)
               .attr("x", d => d.x0)
               .attr("y", d => d.y0)
               .attr("width", d => d.x1 - d.x0)
               .attr("height", d => d.y1 - d.y0)
               .attr("fill", "blue")
               .attr("opacity", 0.8);

               

