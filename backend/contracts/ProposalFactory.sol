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
    mapping(address=>mapping(string=>address)) CreatorToProposal;
    event ProposalCreated(address indexed _Creator, string indexed eventName, uint256 targetDonation);

    constructor(){
        verification = Verification(0xc3239E191D119738912F38c5bC60A1A765E6711b); 
    }

    function createProposal(
        address[] memory _suppliers, 
        uint256 _targetDonation,
        uint256[] memory _allocation, 
        uint256 _duration,
        string memory _eventName) public  returns(address) {
        for(uint256 i = 0; i<_suppliers.length;i++){
            require(verification.balanceOf(_suppliers[i],1) == 1, 
                string(abi.encodePacked("Supplier with address ", _suppliers[i], "is not verified")));
        }
        Proposal newProposal = new Proposal(msg.sender,_suppliers, _targetDonation, _allocation, _duration, USDC, _eventName);
        proposals.push(address(newProposal));
        CreatorToProposal[msg.sender][_eventName] = address(newProposal);
        emit ProposalCreated(msg.sender, _eventName, _targetDonation);
        return address(newProposal);
    }

    function getTotalAmountDonated(address _Creator) public view returns (uint256){
        uint256 sum;
        for(uint i = 0; i<proposals.length;i++){
            Proposal proposal = Proposal(proposals[i]);
            if(proposal.getCreator() == _Creator){
                sum += proposal.getCurrentFunding();
            }
        }
        return sum;
    }

    function getProjectDonatedAmount(string memory _eventName, address _Creator) public view returns(uint256){
        require(CreatorToProposal[_Creator][_eventName]!=address(0),"No Proposal address");
        Proposal proposal = Proposal(CreatorToProposal[_Creator][_eventName]);
        return proposal.getCurrentFunding();
    }

    function getProposal(uint256 _index) public view returns(address){
        return proposals[_index];
    }
}

