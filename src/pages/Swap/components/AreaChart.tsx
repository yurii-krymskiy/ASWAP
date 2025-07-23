import React from "react";
import "../../../configs/chartConfig";
import { Line } from "react-chartjs-2";

const AreaChart = () => {
  // Create a gradient for the background
  const createGradient = (ctx: CanvasRenderingContext2D): CanvasGradient => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400); // top to bottom gradient
    gradient.addColorStop(0, "rgba(53, 162, 235, 0.2)"); // Blue at the top
    gradient.addColorStop(1, "rgba(53, 162, 235, 0)"); // Transparent at the bottom
    return gradient;
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to be responsive

    scales: {
      y: {
        border: {
          display: false,
          dash: [6, 6],
          dashOffset: 6,
        },
        grid: {
          display: true,
          color: "rgba(169, 169, 169, 0.1)", // Light grid lines
          lineWidth: 1,
        },
      },
      x: {
        grid: {
          display: false, // No grid lines on the x-axis
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smooth the line
        borderWidth: 2, // Line width
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false, // No title
      },
    },
  };

  const labels = ["09/11", "09/11", "09/11", "09/11", "09/11", "09/11"];

  interface Dataset {
    fill: boolean;
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => CanvasGradient;
  }

  interface ChartData {
    labels: string[];
    datasets: Dataset[];
  }

  const values = [10, 15, 6, 9, 4, 2, 11, 8];

  const data: ChartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: values,
        borderColor: "#1165AB",
        backgroundColor: (context) => {
          const { ctx } = context.chart;
          return createGradient(ctx);
        },
      },
    ],
  };

  return (
    <Line options={options} data={data} />
  );
};

export default AreaChart;
