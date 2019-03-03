import { select } from "d3-selection";

window.addEventListener("load", function() {
  const width = 1040;
  const height = 520;

  select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
});
