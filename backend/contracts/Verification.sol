// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Verification is ERC721 {
    mapping(address => bool) public isVerified;
    
    constructor() ERC721("VerificationToken", "VT") {}

    function verify(address _beneficiaryOrSupplier) public {
        // Add your verification logic here
        _mint(_beneficiaryOrSupplier, 1); // Minting the NFT
        isVerified[_beneficiaryOrSupplier] = true;
    }
}
