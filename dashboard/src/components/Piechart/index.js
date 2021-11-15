import React from "react";
import { Pie } from "react-chartjs-2";

const Piechart = ({ employmentStatus }) => {
  let employed = 0;
  let unEmployed = 0;

  let isEmployed = employmentStatus.map((employed) => {
    return employed.tech_role;
  });
  for (let i = 0; i < isEmployed.length; i++) {
    isEmployed[i] ? employed++ : unEmployed++;
  }

  return (
    <div>
      <Pie
        data={{
          labels: ["Employed", "Unemployed"],
          datasets: [
            {
              label: "Employment Status",
              data: [employed, unEmployed],
              backgroundColor: ["#58508d", "#ff6361"],
            },
          ],
        }}
        height={250}
        width={800}
      />
      <p style={{ color: "#003f5c", fontWeight: "bold" }}>Employment Status</p>
    </div>
  );
};

export default Piechart;

// "#003f5c",
// "#58508d",
// "#bc5090",
// "#ff6361",
// "#ffa600",
// "#40cc4c",
