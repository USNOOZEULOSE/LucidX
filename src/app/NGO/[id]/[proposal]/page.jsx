"use client";

import { Card } from "flowbite-react";
import ngoData from "../../../../utils/resource.json";
// can get id from params?
export default function donorPagewithProposal({ params }) {
  
  let input = decodeURI(params.proposal).replace(/\s+/g, ' ');
//   console.log(input);
//   console.log(ngoData[1].projects[0].name)
  const selectedProgram = ngoData.find((ngo) => ngo.projects.find((proj) => proj.name === input));
  const selectedProposal = selectedProgram.projects.find((proj =>  proj.name === input))

  if (!selectedProgram) {
    return <div>Proposal not found</div>;
  }

  return (
    <div className="w-full">

      <div className="mt-4">
        <h1 className="text-4xl text-center"></h1>
        <p className="text-2xl text-center"></p>
      </div>

      <div
        className="m-6 p-6 rounded-3xl text-center font-bold text-3xl"
        style={{ background: `#E8E5DA` }}
      >
        {input}
        <div className="text-center text-xs">By {params.id}</div>
      </div>

      <div className="text-3xl font-bold text-center">Proposal</div>
      <div className="text-center text-xs">{selectedProposal.Proposal}</div>
      <div
        className="m-6 p-6 rounded-3xl drop-shadow-lg flex items-center justify-center"
        style={{
        background: `linear-gradient(0deg, rgba(158, 183, 229, 0.54) 3.17%, rgba(158, 183, 229, 0.00) 147.39%);`,
        }}
       >
        <div className="font-bold">
          Description: 
        </div>
        <div>
          {selectedProposal.description}
        </div>
        
        <div className="font-bold">
          Current Situation: 
        </div>
        <div>
          {selectedProposal.Currentsituation}
        </div>

        <div className="font-bold">
          Objective: 
        </div>
        <div>
          {selectedProposal.Objective}
        </div>
          
      </div>

  
    </div>
  );
}
