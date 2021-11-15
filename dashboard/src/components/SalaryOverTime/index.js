import React from "react";
import { Line } from "react-chartjs-2";

const SalaryOverTime = ({ gradData }) => {
  let salaries = gradData.responses.map((response) => {
    return response.current_salary;
  });

  let labels = gradData.responses.map((response) => {
    return response.timestamp.slice(0, 10);
  });

  return (
    <div>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Salary progression",
              data: salaries,
              backgroundColor: ["#003f5c"],
              borderColor: ["#003f5c"],
              borderWidth: 2,
              tension: 0.3,
              spanGaps: false,
            },
          ],
        }}
        height={500}
        width={800}
      />
    </div>
  );
};

export default SalaryOverTime;
