<template>
  <!-- https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b -->
  <svg id="d3Container" viewBox="0 0 1000 500"></svg>
</template>
<script>
import * as d3 from "d3";

export default {
  name: "D3Histogram",
  async mounted() {
    //source: https://bl.ocks.org/caravinden/d04238c4c9770020ff6867ee92c7dac1
    const svg = d3.select("#d3Container"),
      margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50,
      },
      width = 1000 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      g = svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    const y = d3.scaleLinear().rangeRound([height, 0]);

    const data = await d3.tsv("./data/morley.tsv");

    x.domain(
      data.map(function (d) {
        return d.Run;
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return Number(d.Speed);
      }),
    ]);

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Speed");

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return x(d.Run);
      })
      .attr("y", function (d) {
        return y(Number(d.Speed));
      })
      .attr("width", x.bandwidth())
      .attr("height", function (d) {
        return height - y(Number(d.Speed));
      });
  },
};
</script>
<style scoped lang="scss">
svg {
  width: 90%;
  max-width: 1000px;
  height: 100%;
}

/* needed since it is dynamically created */
::v-deep(.bar) {
  fill: steelblue;
}

::v-deep(.bar:hover) {
  fill: brown;
}
</style>
