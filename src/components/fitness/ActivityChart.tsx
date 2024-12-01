// src/components/fitness/ActivityChart.tsx

import React from "react";
import { Line } from "react-chartjs-2";
import { useFitnessData } from "../../hooks/useFitnessData";
import { ChartData, ChartOptions } from "chart.js";

interface ActivityChartProps {}

const ActivityChart: React.FC<ActivityChartProps> = () => {
  const { activityData } = useFitnessData();

  // Transform data for Chart.js
  const data: ChartData<"line"> = {
    labels: activityData.map((activity) => activity.date),
    datasets: [
      {
        label: "Steps",
        data: activityData.map((activity) => activity.steps),
        fill: false,
        borderColor: "#0070f3",
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Steps",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Activity Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
