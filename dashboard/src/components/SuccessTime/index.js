import React from "react";
import { Line } from "react-chartjs-2";

const SuccessTime = ({ times }) => {
  let oneMonth = 0;
  let twoMonths = 0;
  let threeMonths = 0;
  let fourMonths = 0;

  const duration = times.map((time) => {
    const timeDiff = Math.abs(
      new Date(time.graduationDate.slice(0, 10)) -
        new Date(time.firstJobDate.slice(0, 10))
    );
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  });
  for (let i = 0; i < duration.length; i++) {
    switch (true) {
      case duration[i] >= 120:
        fourMonths++;
        break;
      case duration[i] >= 90:
        threeMonths++;
        break;
      case duration[i] >= 60:
        twoMonths++;
        break;
      case duration[i] >= 30:
        oneMonth++;
        break;

      default:
    }
  }
  return (
    <div>
      <Line
        data={{
          labels: [
            "0 - 1 months",
            "1 - 2 months",
            "2 - 3 months",
            "3 - 4 months",
          ],
          datasets: [
            {
              // fill: {
              //   target: "origin",
              // },
              label: "Time taken to secure first job",
              tension: 0.3,
              data: [oneMonth, twoMonths, threeMonths, fourMonths],
              // data: [10, 23, 2, 1],
              backgroundColor: ["#003f5c"],
              borderColor: ["#003f5c"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            // title: {
            //   display: true,
            //   text: "Time taken to secure first job",
            // },
          },
        }}
        height={350}
        width={800}
      />
      <br />
    </div>
  );
};

export default SuccessTime;
