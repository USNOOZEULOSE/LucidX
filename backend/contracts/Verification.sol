// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
contract Verification is ERC1155 {
    mapping(address => bool) public isVerified;
    uint256 public constant VERIFIED = 1; 
    
    constructor() ERC1155("VerificationToken") {}
    function verify(address _supplier) public {
        //require that _supplier is not already verified
        require(isVerified[_supplier]!=true, "Supplier is already verified");
        // Add your verification logic here
        isVerified[_supplier] = true;
    }
    function mint() public{
        require(isVerified[msg.sender]==true, "You are not verified for minting");
        _mint(msg.sender, VERIFIED, 1, "");
    }
}