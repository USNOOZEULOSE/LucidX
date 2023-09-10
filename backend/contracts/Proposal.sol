// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Proposal {

    //Struct

    address public creator;
    address[] public suppliers;
    uint256 public targetDonation;
    uint256 public currentFunding;

    mapping(address => uint256) public donors;
    //Proposal newProposal = new Proposal(msg.sender, _suppliers, _targetDonation, _allocation, _duration);
    constructor(address _creator, address[] memory _suppliers, uint256 _targetDonation, uint256[] memory _allocation, uint256 _duration) {
        creator = _creator;
        suppliers = _suppliers;
        targetDonation = _targetDonation;
        currentFunding = 0;
    }

    // function donate() public payable {
    //     require(msg.value > 0, "Send some ether to donate");
    //     currentFunding += msg.value;
    //     donors[msg.sender] += msg.value;
    //     emit Donated(msg.sender, msg.value);
    // }

    // event Donated(address indexed donor, uint256 amount);
}
