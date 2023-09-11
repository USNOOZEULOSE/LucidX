"use client";

import { Card } from "flowbite-react";
import ngoData from "../../../resource.json";
// can get id from params?
export default function donorPagewithId({ params }) {

  const selectedNGO = ngoData.find((ngo) => ngo.ngoName === params.id);

  if (!selectedNGO) {
    return <div>NGO not found</div>;
  }

  return (
    <div className="w-full">
      <div className="mt-4">
        <h1 className="text-4xl text-center">{selectedNGO.ngoName}</h1>
        <p className="text-2xl text-center">{selectedNGO.vision}</p>
      </div>
      <div
        className="m-6 p-6 rounded-3xl grid md:grid-cols-2 md:gap-6"
        style={{ background: `#E8E5DA` }}
      >
        <div>Wallet Address:{}</div>
        <div>Official Website:{}</div>
        <div>Wallet Amount:{}</div>
        <div>Cumulative Unique Owners:{}</div>
        <div>Total Campaign Funded:{}</div>
        <div>Campaign on Voting Process:{}</div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-4 ml-6">
          Your Donation Makes a Difference
        </div>
        <div
          className="m-6 p-6 rounded-3xl drop-shadow-lg flex items-center"
          style={{
            background: `linear-gradient(0deg, rgba(158, 183, 229, 0.54) 3.17%, rgba(158, 183, 229, 0.00) 147.39%);`,
          }}
        >
          <div>{"Money donated\n"}</div>
        </div>
      </div>
      <div className="text-bold text-2xl ml-6">List of Active Listings</div>
      <div className="flex flex-col gap-y-4 m-6">
        {selectedNGO.projects.map((project) => (
          <Card
            horizontal
            imgSrc={`url(https://media.istockphoto.com/id/956468886/photo/elderly-woman-sitting-at-the-table-counting-money-in-her-wallet.jpg?s=612x612&w=0&k=20&c=79-BGvIgkU-68-2q7bCS1Y39bjohmz9fe5hvm6tg2lo=)`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project}
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <div>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
