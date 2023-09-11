import { Button } from "flowbite-react";
import { redirect } from "next/dist/server/api-utils";
import React, { useState } from "react";
import WalletDisplay from "./WalletDisplay";

export const Homepage = () => {
  const [connecting, setConnecting] = useState(false);
 

  return (
    <div className="flex flex-col gap-y-40">
      <WalletDisplay/>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div
              className="w-[1053px] h-[545px] rounded-3xl"
              style={{
                backgroundColor: "blue",
                backgroundImage: new URL(
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fukraine-people&psig=AOvVaw2jksKQevHYdKo6ZfdGhpeg&ust=1694491753321000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCAherXoYEDFQAAAAAdAAAAABAE"
                ),
              }}
            >
              hi3
            </div>
            <div className="flex flex-row justify-between">
              <div className="ml-2">
                <div className=" font-bold text-black text-5xl">
                  UNHCR
                </div>
                <div>{"Cover their monthly rent and\n daily living expenses."}</div>
              </div>
              <div className="mr-2">
                <div className="text-m font-bold">23 Hours 10 Mins(not reactive)</div>
                <div className="text-xs text-right">Time Remaining</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20 flex-grow">
            <div
              className="w-200 h-100"
              style={{
                backgroundImage: new URL(
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fukraine-people&psig=AOvVaw2jksKQevHYdKo6ZfdGhpeg&ust=1694491753321000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCAherXoYEDFQAAAAAdAAAAABAE"
                ),
              }}
            >
              hi
            </div>
            <div
              className="w-200 h-100"
              style={{
                backgroundImage: new URL(
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fukraine-people&psig=AOvVaw2jksKQevHYdKo6ZfdGhpeg&ust=1694491753321000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCAherXoYEDFQAAAAAdAAAAABAE"
                ),
              }}
            >
              hi
            </div>
            <div
              className="w-200 h-100 rounded"
              style={{
                backgroundImage: new URL(
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fukraine-people&psig=AOvVaw2jksKQevHYdKo6ZfdGhpeg&ust=1694491753321000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCAherXoYEDFQAAAAAdAAAAABAE"
                ),
              }}
            >
              hi
            </div>
            <div className=" "><Button className="mb-auto " href="/">More Organisations</Button></div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-4xl font-bold mb-4">Featured Campaigns</div>
        <div>
            
        </div>
      </div>
    </div>
  );
};
