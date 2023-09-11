"use client";

import { Card } from "flowbite-react";
import ngoData from "../../../../utils/resource.json";
// can get id from params?
export default function donorPagewithProposal({ params }) {
  
  let input = decodeURI(params.proposal).replace(/\s+/g, ' ');
  console.log(input)
  const selectedProposal = ngoData.find((ngo) => ngo.projects.includes(input));

  if (!selectedProposal) {
    return <div>Proposal not found</div>;
  }

  return (
    <div className="w-full">
      <div className="mt-4">
        <h1 className="text-4xl text-center"></h1>
        <p className="text-2xl text-center"></p>
      </div>
      <div
        className="m-6 p-6 rounded-3xl grid md:grid-cols-2 md:gap-6 text-center font-bold text-3xl"
        style={{ background: `#E8E5DA` }}
      >
        {input}
        <div className="text-center text-xs">By {params.id}</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-center">
          Proposal
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
      {/* <div className=" gap-x-4 m-6 grid grid-cols-2 ">
        {selectedNGO.projects.map((project) => (
          <Card
            className="w-full h-auto p-4 rounded-lg shadow-lg "
            horizontal
            imgSrc="https://media.istockphoto.com/id/956468886/photo/elderly-woman-sitting-at-the-table-counting-money-in-her-wallet.jpg?s=612x612&w=0&k=20&c=79-BGvIgkU-68-2q7bCS1Y39bjohmz9fe5hvm6tg2lo="
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
      </div> */}
    </div>
  );
}
