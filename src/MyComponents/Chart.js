import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
const labels = ["Science", "Science-Assignments", "Mathematics", "Mathematics-Assignments", "English", "English-Assignments"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Completion",
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 16,   
      data: [10, 10, 10, 10, 10, 10],
    },
  ],
};
const PieChart = () => {
  return (
    <div className="mt-4 lg:w-[40%] content-start mb-4">
      <Doughnut data={data} />
    </div>
  );
};
export default PieChart;