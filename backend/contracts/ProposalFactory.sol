// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./Verification.sol";

contract ProposalFactory {
    address[] public proposals;
    address public verification;

    constructor(){
        verification = Verification(_VerificationAddress); 
    }

    function createProposal(address[] memory _suppliers, uint256 _targetDonation) public {
        for(uint256 i = 0; i<_suppliers.length;i++){
            require(verification.balanceOf(_suppliers[i],1));
        }
        Proposal newProposal = new Proposal(msg.sender, _suppliers, _targetDonation, allocation);
        proposals.push(address(newProposal));
    }
}
