let chai = require('chai');
const { ethers } = require("hardhat");

var assert = chai.assert;
var expect = chai.expect;

describe("Testing Verification Contract", function () {
  let owner;
  let addr1;
  let addr2;
  
  beforeEach(async function() {
    let verificationFactory = await ethers.getContractFactory("Verification");
    [ owner,addr1,addr2 ] = await ethers.getSigners();
    verificationInstance = await verificationFactory.deploy({gasLimit:30000000});
    const baseVerification = await verificationInstance.waitForDeployment();

    console.log("VerificationInstance address:", await baseVerification.getAddress());

  });

  it("Should be initialized", async()=>{
    expect(await verificationInstance.VERIFIED()).to.equal(1);
  })
  
});
