"use client";
import { Chart } from "chart.js/auto";
import { useState,useEffect } from "react";
import { Button } from "flowbite-react";


export default function WalletDisplay() {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(true);
  // const organisations = ["Unicef","UNHR","Gate Foundation"]

  useEffect(() => {
    // Initialize the chart within the useEffect hook to ensure the DOM is ready.
    const beginnerElement = document.getElementById("donations");
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
  }, []);
  return (
    <div>
      {connected ? (
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="text-4xl font-bold">Hello, Welcome to LucidX</div>
            <div className="bg-gradient-to-t from-indigo-300 to-indigo-300 w-full h-[500px]">
              <canvas id="donations"></canvas>
            </div>
          </div>
          <canvas className="mt-10" id="donationsBar"></canvas>
        </div>
      ) : (
        <div className="bg-gradient-to-t from-indigo-300 to-indigo-300 w-full h-[500px] flex items-center justify-center">
          <div className="w-[819px] h-[300px] bg-white bg-opacity-60 rounded-3xl flex items-center justify-center">
            <Button
              className="bg-transparent text-black"
              onClick={() => {
                setConnecting(true);
              }}
              disabled={connecting}
            >
              {connecting ? "Please Hold" : "Please connect your wallet"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
