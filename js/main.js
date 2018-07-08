import { select } from "d3-selection";

window.addEventListener("load", function() {
  const width = 1040,
    height = 520;

  const chart = select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
});
