const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Proposal", function() {
    let Proposal, proposal, USDC, usdcToken, owner, donor, supplier1, supplier2;
    const targetDonation = ethers.parseEther("1000", 6); // 1000 USDC
    const duration = 7 * 24 * 60 * 60; // 7 days

    beforeEach(async () => {
        // Deploy mock USDC token
        USDC = await ethers.getContractFactory("MockUSDC");
        usdcToken = await USDC.deploy();
        DeployedUSDC = await usdcToken.waitForDeployment();
        [owner, donor, supplier1, supplier2, ...others] = await ethers.getSigners();

        // Deploy Proposal contract
        Proposal = await ethers.getContractFactory("Proposal");
        proposal = await Proposal.deploy(
            owner.address,
            [supplier1.address, supplier2.address],
            targetDonation,
            [50, 50], // 50% allocation for each supplier
            duration,
            usdcToken.target
        );
        Deployedproposal = await proposal.waitForDeployment();
        

        // Mint some USDC for the donor
        await DeployedUSDC.mint(donor.address, ethers.parseEther("2000", 6)); // 2000 USDC
        await DeployedUSDC.connect(donor).approve(Deployedproposal.target, ethers.parseEther("2000", 6));

        
    });

    it("Should allow donations", async () => {
        await proposal.connect(donor).donate(ethers.parseEther("500", 6)); // 500 USDC
        expect(await proposal.s_currentFunding()).to.equal(ethers.parseEther("500", 6));
    });

    it("Should not allow donations after deadline", async () => {
        await ethers.provider.send("evm_increaseTime", [duration + 1]);
        await ethers.provider.send("evm_mine");
        await expect(proposal.connect(donor).donate(ethers.parseEther("500", 6))).to.be.revertedWith("Donation period has ended");
    });

    it("Should allow execution if target reached", async () => {
        await proposal.connect(donor).donate(targetDonation);
        await proposal.connect(owner).execute();
        expect(await proposal.proposalPassed()).to.equal(true);
    });

    it("Should not allow execution if target not reached", async () => {
        await proposal.connect(donor).donate(ethers.parseEther("500", 6)); // 500 USDC
        await expect(proposal.connect(owner).execute()).to.be.revertedWith("Target amount not reached");
    });

    it("Should allow refunds if threshold not met after deadline", async () => {
        await proposal.connect(donor).donate(ethers.parseEther("500", 6)); // 500 USDC
        await ethers.provider.send("evm_increaseTime", [duration + 1]);
        await ethers.provider.send("evm_mine");
        await proposal.connect(donor).refund();
        expect(await usdcToken.balanceOf(donor.address)).to.equal(ethers.parseEther("2000", 6));
    });

    it("Should not allow refunds if threshold met", async () => {
        await proposal.connect(donor).donate(ethers.parseEther("800", 6)); // 800 USDC
        await ethers.provider.send("evm_increaseTime", [duration + 1]);
        await ethers.provider.send("evm_mine");
        await expect(proposal.connect(donor).refund()).to.be.revertedWith("Cannot refund at this time");
    });
});
