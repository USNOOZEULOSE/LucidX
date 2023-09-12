"use client";
import { Chart } from "chart.js/auto";
import { useContext, useEffect, useState } from "react";

export default function WalletDisplay() {
  useEffect(() => {
    // Initialize the chart within the useEffect hook to ensure the DOM is ready.
    const beginnerElement = document.getElementById("donations");
    const existingChart = Chart.getChart(beginnerElement);
    if (existingChart) {
      existingChart.destroy();
    }
    const data = {
      labels: ["Unicef", "Gates Foundation", "America Cander Foundation"],
      datasets: [
        {
          label: "Amount donated",
          data: [300, 50, 100],
          backgroundColor: ["#ABC5FC", "#304C89", "#648DE5"],
          hoverOffset: 4,
        },
      ],
    };
    new Chart(beginnerElement, {
      type: "doughnut",
      data: data,
    });
    const beginnerElement2 = document.getElementById("donationsBar");

    // Check if there is an existing chart on the 'donationsBar' canvas and destroy it.
    const existingChart1 = Chart.getChart(beginnerElement2);
    if (existingChart1) {
      existingChart1.destroy();
    }

    const data1 = {
      labels: ["2023", "2022" ,"2021"],
      datasets: [
        {
          label: "Amount donated in a year",
          data: [300, 150 , 250],
          backgroundColor: ["#304C89", "#304C89" ,"#2321a3"],
          hoverOffset: 4,
        },
      ],
    };
    new Chart(beginnerElement2, {
      type: "bar", // Specify the chart type as horizontalBar
      data: data1,
      options: {
        indexAxis: "y",
        scales: {
          x: {
            display: false,
          },
          y: {
            grid: { display: false },
          },
        },
      },
    });
  }, []);
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 p-4">
          <div className="text-4xl font-bold m-4">Hello, Welcome to LucidX</div>
          <div className="bg-gradient-to-t from-indigo-300 to-indigo-300 w-full h-[500px]">
            <canvas
                className="rounded-3xl"
              id="donations"
              style={{
                background: `linear-gradient(0deg, rgba(158, 183, 229, 0.54) 3.17%, rgba(158, 183, 229, 0.00) 147.39%);
`,
              }}
            ></canvas>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <canvas
            className="mt-10 w-1/2 "
            id="donationsBar"
          ></canvas>
        </div>
      </div>
    </div>
  );
}
