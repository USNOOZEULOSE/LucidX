"use client";

import { Card, Select, TextInput, Button } from "flowbite-react";
import { useEffect, useState } from "react";
const ethers = require("ethers");
import ngoData from "../../../utils/resource.json";
import Link from "next/link";
import {abi} from "../../../utils/abi";
import Contract from "@ethersproject/contracts";  
require('dotenv').config();


// can get id from params?
export default function donorPagewithId({ params }) {
  const [signer,setSigner] = useState(null);
  const [amountDonated,setAmountDonated] = useState(0.00);
  const [amountPrepared,setAmountPrepared] = useState(0.00);

  useEffect(()=>{
    const fetchTotalDonations = async () => {
      try {
        // 1. Get provider
        const provider = new ethers.JsonRpcProvider("https://devnet.neonevm.org"); 
        const signer = new ethers.Wallet(process.env.PRIVATE_KEY,provider);

        // 2. Set up a contract instance
        const contractAddress = "0x474f1c3A291c8F1888fa04aa8c545577b7B01b70"; // Make sure to replace with your contract's address
        const contract = new ethers.Contract(contractAddress, abi, signer);
        
    
        // 3. Make the async call
        const totalDonations = await contract.getTotalAmountDonated("0x0F6debd8F1dF1D010cc728466E659bc7313cC273");
        setAmountDonated(ethers.formatUnits(totalDonations, 6)); // Assuming the value is in wei, adjust if not.
        
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    fetchTotalDonations();
  }, []);
   


  const selectedNGO = ngoData.find((ngo) => ngo.ngoName === params.id);
  
  if (!selectedNGO) {
    return <div>NGO not found</div>;
  }
  async function makeDonation(event) {
    event.preventDefault();
    setAmountDonated(parseInt(amountDonated)+parseInt(amountPrepared));
  
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
        <div>Wallet Address: {"0xB66B65bcB62a362743F757449d15c27423B5b1C2"}</div>
        <div>
          Official Website:{" "}
          <Link href={selectedNGO.website}>{selectedNGO.website}</Link>
        </div>
        <div>Wallet Amount: {"10000 USDC"}</div>
        <div>Cumulative Unique Owners: {"1"}</div>
        <div>Total Campaign Funded: {selectedNGO.projects.length}</div>
        <div>Campaign on Voting Process: {selectedNGO.projects.length}</div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-4 ml-6">
          Your Donation Makes a Difference
        </div>
        <div
          className="m-6 p-6 rounded-3xl drop-shadow-lg flex items-center justify-between"
          style={{
            background: `linear-gradient(0deg, rgba(158, 183, 229, 0.54) 3.17%, rgba(158, 183, 229, 0.00) 147.39%);`,
          }}
        >
          <div>
            <div className="font-bold ">{"Net Amount Donated"}</div>
            <div className="font-bold ">
              <span className="text-3xl">{amountDonated}</span>USDT
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <form onSubmit={makeDonation}>
              <Select
                style={{
                  color: "#304C89",
                  fontWeight: 700,
                  fontsize: "36px",
                  background: "white",
                  textAlign: "center",
                }}
                name="project"
              >
                {selectedNGO.projects.map((project) => (
                  <option value={project.name}>{project.name}</option>
                ))}
              </Select>
              <div className="flex">
                <TextInput
                  type="number"
                  addon="USDT"
                  style={{
                    background: "white",
                    color: "#304C89",
                    fontWeight: 700,
                  }}
                  placeholder="enter amount"
                  name="amount"
                  onChange={(e) => {
                    setAmountPrepared(e.target.value);
                  }}
                />
                <Button color="white" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="font-bold text-3xl ml-6">List of Active Listings</div>
      <div className=" gap-x-4 m-6 grid grid-cols-2 ">
        {selectedNGO.projects.map((project) => (
          <Card
            className="w-full h-auto p-4 rounded-lg"
            style={{
              borderRadius: "45px",
              background: "rgba(158, 183, 229, 0.33)",
              boxShadow: "0px 3px 13px 7px rgba(0, 0, 0, 0.25)",
            }}
            horizontal
            imgSrc="https://media.istockphoto.com/id/956468886/photo/elderly-woman-sitting-at-the-table-counting-money-in-her-wallet.jpg?s=612x612&w=0&k=20&c=79-BGvIgkU-68-2q7bCS1Y39bjohmz9fe5hvm6tg2lo="
            href={"./" + params.id + "/" + project.name}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {project.name}
            </h5>
            <div className="font-normal text-gray-900">
              <div>{project.description}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
