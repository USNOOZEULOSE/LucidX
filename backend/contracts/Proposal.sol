// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Proposal {

    //Struct

    address public creator;
    string[] public beneficiariesAndSuppliers;
    uint256 public targetDonation;
    uint256 public currentFunding;

    mapping(address => uint256) public donors;

    constructor(string memory _beneficiariesAndSuppliers, uint256 _targetDonation) {
        creator = msg.sender;
        beneficiariesAndSuppliers = _beneficiariesAndSuppliers;
        targetDonation = _targetDonation;
        currentFunding = 0;
    }

    function donate() public payable {
        require(msg.value > 0, "Send some ether to donate");
        currentFunding += msg.value;
        donors[msg.sender] += msg.value;
        emit Donated(msg.sender, msg.value);
    }

    event Donated(address indexed donor, uint256 amount);
}
