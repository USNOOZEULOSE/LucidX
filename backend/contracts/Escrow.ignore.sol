// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Escrow {
    function releaseFunds(address payable _beneficiaryOrSupplier, uint256 _amount) public {
        require(_amount <= address(this).balance, "Not enough funds");
        _beneficiaryOrSupplier.transfer(_amount);
    }
}
