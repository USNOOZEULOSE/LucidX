"use client";
import { Chart } from "chart.js/auto";

export default function WalletDisplay({isUserLoggedIn}) {
  // const organisations = ["Unicef","UNHR","Gate Foundation"]

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
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
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
      labels: ["2015", "2014"],
      datasets: [
        {
          label: "Amount donated in a year",
          data: [300, 150],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
          ],
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
            beginAtZero: true,
          },
        },
      },
    });
  }, []);
  return (
    <div>
      {!isUserLoggedIn ? (
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2">
            <div className="text-4xl font-bold m-4">Hello, Welcome to LucidX</div>
            <div className="bg-gradient-to-t from-indigo-300 to-indigo-300 w-full h-[500px]">
              <canvas id="donations"></canvas>
            </div>
          </div>
          <div className="w-1/2">
          <canvas className="mt-10 w-1/2 overflow-hidden h-[300px]" id="donationsBar"></canvas>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-t from-indigo-300 to-indigo-300 w-full h-[500px] flex items-center justify-center">
          <div className="w-[819px] h-[300px] bg-white bg-opacity-60 rounded-3xl flex items-center justify-center">
            <h1>Please connect</h1>
          </div>
        </div>
      )}
    </div>
  );
}
