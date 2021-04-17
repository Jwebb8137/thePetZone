import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function BarChart({ width, height, data, label }){
  const ref = useRef();
  const padding = 1;

  useEffect(() => {
      const svg = d3.select(ref.current)
          .attr("width", `${width}vw`)
          .attr("height", height)
  }, []);

  useEffect(() => {
      draw();
  }, [data]);

  const draw = () => {
      
      const svg = d3.select(ref.current);
      var selection = svg.selectAll("rect").data(data);
      var yScale = d3.scale.linear()
                          .domain([0, d3.max(data)])
                          .range([0, height - 50]);
      
      selection
          .transition().duration(300)
              .attr("height", (d) => yScale(d))
              .attr("y", (d) => height - yScale(d))

      selection
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 100 / data.length + "%")
          .attr("y", (d) => height)
          .attr("width", 100 / data.length - padding + "%")
          .attr("height", 0)
          .attr("fill", (d) => `rgb(3 ${100 + d * 3 } 60)`)
          .transition().duration(300)
              .attr("height", (d) => yScale(d))
              .attr("y", (d) => height - yScale(d))

       selection
          .enter()
          .append("text")
          .text((d) => d)
          .style("font-family", "Sniglet")
          .style("font-size", "20px")
          .attr("x", (d, i) => i * 100 / data.length + (100 / data.length / 2.75) + "%")
          // .attr("y", (d) => height)
          .attr("width", 100 / data.length + "%")
          .attr("fill", "#393d4")
          .transition().duration(300)
              .attr("height", (d) => yScale(d))
              .attr("y", (d) => height - yScale(d + 1))
      
      selection
          .exit()
          .transition().duration(300)
              .attr("y", (d) => height)
              .attr("height", 0)
          .remove()
  }


  return (
      <div className="chart">
          <svg ref={ref}>
          </svg>
      </div>
      
  )

}

export default BarChart;
