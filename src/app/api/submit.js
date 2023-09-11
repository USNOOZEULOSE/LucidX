import { ethers } from "ethers"
import { redirect } from "next/dist/server/api-utils";

export default async function handler(req, res) {
  console.log({req,res});
  const data = req.body
  const id = await createItem(data)
  res.status(200).json({ id })
  return "yes";
}