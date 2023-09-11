// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const {abi} = require("../artifacts/contracts/Verification.sol/Verification.json");
const Contract = require("@ethersproject/contracts");


async function main() {
    const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '';
  const [owner] = await ethers.getSigners();
  // const balance = await owner.provider.getBalance(owner.address);
  // console.log(balance);
  // const balanceHuman = ethers.utils.formatUnits(balance, 18);
  console.log(`Owner address: ${owner.address} `);
  // with balance: ${balanceHuman}
  const contractAddress = "0xc3239E191D119738912F38c5bC60A1A765E6711b";
  const provider = new ethers.JsonRpcProvider("https://devnet.neonevm.org");
  const signer = new ethers.Wallet(PRIVATE_KEY,provider);
  const contract = new ethers.Contract(contractAddress,abi,signer);  
  const amount = await contract.balanceOf("0xB66B65bcB62a362743F757449d15c27423B5b1C2", 1);
  console.log(amount);

  await contract.verify("0xc3239E191D119738912F38c5bC60A1A765E6711b");
  await contract.mint();
  console.log("I am a verified supplier");    
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
