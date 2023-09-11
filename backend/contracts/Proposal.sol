// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Proposal is ReentrancyGuard {

    // State variables
    address public s_creator;
    address[] public s_suppliers;
    uint256[] public s_allocation;
    uint256 public s_targetDonation;
    uint256 public s_currentFunding;
    uint256 public s_fundDeadline;
    uint256 public s_threshHold;
    IERC20 public usdcToken;
    bool public proposalPassed = false;

    mapping(address => uint256) public s_donorsToFundAmt;

    // Events
    event Donated(address indexed donor, uint256 amount);
    event ProposalExecuted();
    event DonorRefunded(address indexed donor, uint256 amount);

    modifier onlyOwner {
        require(msg.sender == s_creator, "Not the proposal owner");
        _;
    }

    constructor(
        address _proposalOwner, 
        address[] memory _suppliers, 
        uint256 _targetDonation, 
        uint256[] memory _allocation, 
        uint _duration,
        address _usdcTokenAddress
    ) {
        require(_suppliers.length == _allocation.length, "Mismatch in suppliers and allocation length");

        s_creator = _proposalOwner;
        s_suppliers = _suppliers;
        s_allocation = _allocation;
        s_targetDonation = _targetDonation;
        s_threshHold = (_targetDonation * 70) / 100;
        s_fundDeadline = block.timestamp + _duration;
        usdcToken = IERC20(_usdcTokenAddress);
    }

    function donate(uint256 _donateAmt) external nonReentrant {
        require(block.timestamp <= s_fundDeadline, "Donation period has ended");
        require(_donateAmt > 0, "Amount should be greater than 0");

        usdcToken.transferFrom(msg.sender, address(this), _donateAmt);
        s_currentFunding += _donateAmt;
        s_donorsToFundAmt[msg.sender] += _donateAmt;

        emit Donated(msg.sender, _donateAmt);
    }

    function execute() external onlyOwner nonReentrant {
        require(s_currentFunding >= s_targetDonation, "Target amount not reached");

        for(uint i = 0; i < s_suppliers.length; i++) {
            uint256 amtToBePaid = (s_currentFunding * s_allocation[i]) / 100;
            usdcToken.transfer(s_suppliers[i], amtToBePaid);
        }

        s_currentFunding = 0;
        emit ProposalExecuted();
        proposalPassed = true;
    }

    function refund() external nonReentrant {
        require(block.timestamp > s_fundDeadline && s_currentFunding < s_threshHold, "Cannot refund at this time");
        
        uint256 refundAmount = s_donorsToFundAmt[msg.sender];
        require(refundAmount > 0, "No donations to refund");

        s_donorsToFundAmt[msg.sender] = 0;
        usdcToken.transfer(msg.sender, refundAmount);

        emit DonorRefunded(msg.sender, refundAmount);
    }

    function fundingPercentage() public view returns (uint256) {
        return (s_currentFunding * 100) / s_targetDonation;
    }
    function isExpired() public view returns(bool){
        if(block.timestamp > s_fundDeadline){
            return true;
        }else{
            return false;
        }
    }

    function getSuppliers() external view returns (address[] memory) {
        return s_suppliers;
    }


}