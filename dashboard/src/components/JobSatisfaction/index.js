import React from "react";
import { Doughnut } from "react-chartjs-2";

const JobSatisfaction = ({ satisfactionIndex }) => {
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;

  let jobSatisfaction = satisfactionIndex.map((satisfaction) => {
    return satisfaction.job_satisfaction;
  });
  for (let i = 0; i < jobSatisfaction.length; i++) {
    switch (jobSatisfaction[i]) {
      case 1:
        one++;
        break;
      case 2:
        two++;
        break;
      case 3:
        three++;
        break;
      case 4:
        four++;
        break;
      case 5:
        five++;
        break;

      default:
    }
  }
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            "Very Dissatisfied",
            "Dissatisfied",
            "Satisfied",
            "Happy",
            "Very Happy",
          ],
          datasets: [
            {
              label: "Current Salary",
              data: [one, two, three, four, five],
              backgroundColor: [
                "#003f5c",
                "#58508d",
                "#bc5090",
                "#ff6361",
                "#ffa600",
                "#40cc4c",
              ],
              borderColor: [
                "#003f5c",
                "#58508d",
                "#bc5090",
                "#ff6361",
                "#ffa600",
                "#40cc4c",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
      <p style={{ color: "#003f5c", fontWeight: "bold" }}>Job Satisfaction</p>
    </div>
  );
};

export default JobSatisfaction;
