import React from "react";
import { Bar } from "react-chartjs-2";

const TechStack = ({ data, rows }) => {
  let labels = [];
  let values = [];

  function createGraphData(numberOfRows) {
    if (data.length > 0) {
      const map = data.reduce(function (obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
      }, {});
      for (let i = 0; i < numberOfRows; i++) {
        console.log(i);

        let highest = Object.keys(map).reduce((a, b) =>
          map[a] > map[b] ? a : b
        );
        console.log(highest);
        labels.push(highest);
        values.push((map[highest] / data.length) * 100);
        delete map[highest];
      }
    } else {
      labels.push("No data");
      values.push(0);
    }
  }

  createGraphData(rows);

  return (
    <div style={{ height: "fit-content" }}>
      <Bar
        options={{
          indexAxis: "y",
          elements: {
            bar: {
              borderWidth: 0,
            },
          },
          scales: {
            x: {
              max: 10,
            },
          },
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: "Technology in use",
              data: values,
              backgroundColor: [
                "#003f5c",
                "#58508d",
                "#bc5090",
                "#ff6361",
                "#ffa600",
                "#40cc4c",
              ],
            },
          
          ],
        }}
        height={150}
        width={400}
      />
    </div>
  );
};

export default TechStack;
