import React from "react";
import { Chart as ChartJS } from "chart.js";
import { Bar } from "react-chartjs-2";

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1
    }
  },
  responsive: true
};

// const labels = ["June", "July"];

const data = {
  datasets: [
    {
      label: "Dataset 1",
      data: [11, 27],
      backgroundColor: ["yellow", "wheat"]
    }
  ]
};

export function HorzChart() {
  return (
    <div style={{width:'8rem'}}>
        <Bar options={options} data={data} />
    </div>
  )
}
