// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  // const balance = await owner.provider.getBalance(owner.address);
  // console.log(balance);
  // const balanceHuman = ethers.utils.formatUnits(balance, 18);
  console.log(`Owner address: ${owner.address} `);
  // with balance: ${balanceHuman}
  
  const proposalFactory = await hre.ethers.getContractFactory("ProposalFactory");
  const proposalFactoryInstance = await proposalFactory.deploy({ gasLimit: 100000000 });
  const baseVerification = await proposalFactoryInstance.waitForDeployment();
  console.log("ProposalFactoryInstance address:", await baseVerification.getAddress());
  
  // const receipt = await verificationDeployed.deployTransaction.wait();
  // const gasUsed = receipt.gasUsed;
  // const gasPrice = receipt.effectiveGasPrice;
  // const transactionFee = gasUsed.mul(gasPrice);
  // const transactionFeeHuman = ethers.utils.formatUnits(transactionFee, 18) 
  // for ${transactionFeeHuman} 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
