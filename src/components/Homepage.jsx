import { Button } from "flowbite-react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React, { createContext, useState } from "react";
import WalletDisplay from "./WalletDisplay";

export const Homepage = ({ isUserLoggedIn }) => {
  const [connecting, setConnecting] = useState(false);

  return (
    <div className="flex flex-col gap-y-30">
      <div className="mt-3">
        {isUserLoggedIn ? <WalletDisplay /> : 
          <div className="loginprom">
              <div className="bg-[#d9d9d9]">
                  <div className="font-semibold text-black text-[30px] tracking-[-0.85px] leading-[normal] text-center mb-3">
                  Sign in to MetaMask to access the full detail
                  </div>
              </div>
          </div>
        }
      </div>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div
              className="w-[800px] h-[450px] rounded-3xl bg-cover bg-center bg-black bg-opacity-30 bg-blend-multiply"
              style={{
                backgroundImage: `url('assets/images/morocco-earthquake.jpg')`,
              }}
            >
              <p class="text-gray-600 mt-1"> this is an image</p>
              hi3
            </div>
            <div className="flex flex-row justify-between">
              <div className="ml-2">
                <div className=" font-bold text-black text-5xl">UNHCR</div>
                <div>
                  {"Cover their monthly rent and\n daily living expenses."}
                </div>
              </div>
              <div className="mr-2">
                <div className="text-m font-bold">
                  23 Hours 10 Mins(not reactive)
                </div>
                <div className="text-xs text-right">Time Remaining</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-grow ml-3">
            <div
              className="w-200 h-100 rounded-3xl flex-grow "
              style={{
                backgroundImage: `url('assets/images/morocco-earthquake.jpg')`,
              }}
            >
              <Link href={"/ngo/worldwildlife"}>hi</Link>
            </div>
            <div
              className="w-200 h-100 rounded-3xl flex-grow"
              style={{
                backgroundImage: `url('assets/images/morocco-earthquake.jpg')`,
              }}
            >
              hi
            </div>
            <div
              className="w-200 h-100 rounded-3xl flex-grow"
              style={{
                backgroundImage: `url('assets/images/morocco-earthquake.jpg')`,
              }}
            >
              hi
            </div>
            <div className=" ">
              <Button className="mb-auto " href="/">
                More Organisations
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-4xl font-bold mb-4">
          Featured Campaigns
        </div>
        <div></div>
      </div>
    </div>
  );
};
