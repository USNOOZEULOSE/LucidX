// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./Verification.sol";
import "./Proposal.sol";

contract ProposalFactory {
    address[] public proposals;
    Verification public verification;

    constructor(){
        verification = Verification(); 
    }

    function createProposal(address[] memory _suppliers, uint256 _targetDonation,uint256[] memory _allocation, uint256 _duration) public {
        for(uint256 i = 0; i<_suppliers.length;i++){
            require(verification.balanceOf(_suppliers[i],1) == 1, 
                string(abi.encodePacked("Supplier with address ", _suppliers[i], "is not verified")));
        }
        Proposal newProposal = new Proposal(msg.sender, _suppliers, _targetDonation, _allocation, _duration);
        proposals.push(address(newProposal));
    }

}
