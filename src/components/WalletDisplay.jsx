"use client";
import { Chart } from "chart.js";
import { useState } from "react";
import { Button } from "flowbite-react";

export default function WalletDisplay(){
    const [connecting, setConnecting] = useState(false);
    const projectChart = new Chart()
    return (
      <div>
        {connecting ? (
          <div>show wallet balance</div>
        ) : (
          <div className="bg-gradient-to-t from-indigo-300 to-indigo-300 w-full h-[500px] flex items-center justify-center">
            <div className="w-[819px] h-[300px] bg-white bg-opacity-60 rounded-3xl flex items-center justify-center">
              <Button
                className="bg-transparent hover:"
                onClick={() => {
                  setConnecting(true);
                }}
              >
                Please connect your wallet
              </Button>
            </div>
          </div>
        )}
      </div>
    );
}