import { Button } from "flowbite-react";
import React, { useState } from "react";

export const Homepage = () => {
  const [connecting, setConnecting] = useState(false);

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
      <div>
        <div className="flex flex-row">
          <div>
            hi3
            <img className="w-[1053px] h-[545px] " src="FP-card-1.png" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
                hi
              <img className="w-200 h-100"/>
            </div>
            <div>
                hi1
              <img className="w-200 h-100"/>
            </div>
            <div>
                hi2
              <img className="w-200 h-100"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
