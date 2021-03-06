import React from "react";
import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-datalabels'

const DoughnutChart = (props) => {
  let labels = ["Deaths", "Recovered", "Active"];

  let customLabels = labels.map(
    (label, index) => `${label}: ${props.data[index]}`
  );

  const chartdata = {
    labels: customLabels,
    datasets: [
      {
        label: "Markets Monitored",
        data: props.data,
        backgroundColor: ["red", "green", "yellow", "#00A6B4", "#6800B4"],
      },
    ],
  };
  return (
    <Doughnut
      data={chartdata}
      options={{
        responsive: true,
        //   maintainAspectRatio: true,
        legend: { display: true, position: "right" },

        datalabels: {
          display: true,
          color: "white",
        },
        tooltips: {
          backgroundColor: "#5a6e7f",
        },
      }}
    />
  );
};

export default DoughnutChart;
