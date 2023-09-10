// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./Verification.sol";

contract ProposalFactory {
    address[] public proposals;

    constructor(){
        Verification(__).balanceOf()
    }

    function createProposal(string memory _beneficiariesAndSuppliers, uint256 _targetDonation) public {
        Proposal newProposal = new Proposal(_beneficiariesAndSuppliers, _targetDonation);
        proposals.push(address(newProposal));
    }
}
