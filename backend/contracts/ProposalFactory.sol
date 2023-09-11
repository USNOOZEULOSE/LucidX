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
    address public constant USDC = 0x512E48836Cd42F3eB6f50CEd9ffD81E0a7F15103;

    event ProposalCreated(address indexed _Creator, string indexed eventName, uint256 targetDonation);

    constructor(){
        verification = Verification(0x40D8ECb21Fbc2C8D591017B3dEc3c6ae1FBCa7D8); 
    }

    function createProposal(
        address[] memory _suppliers, 
        uint256 _targetDonation,
        uint256[] memory _allocation, 
        uint256 _duration,
        string memory _eventName) public {
        for(uint256 i = 0; i<_suppliers.length;i++){
            require(verification.balanceOf(_suppliers[i],1) == 1, 
                string(abi.encodePacked("Supplier with address ", _suppliers[i], "is not verified")));
        }
        Proposal newProposal = new Proposal(msg.sender,_suppliers, _targetDonation, _allocation, _duration, USDC, _eventName);
        proposals.push(address(newProposal));
        emit ProposalCreated(msg.sender, _eventName, _targetDonation);
    }

}

