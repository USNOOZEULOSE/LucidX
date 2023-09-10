// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

error Proposal__TargetAmtNotReached();
error Proposal__NotAbleToRefund();

contract Proposal {

    //state variables
    address public s_creator;
    address[] public s_suppliers;
    uint256[] public s_allocation;
    uint256 public s_targetDonation;
    uint256 public s_currentFunding;
    uint256 public s_fundDeadline;
    address[] public s_donors;
    uint public s_threshHold;
    mapping(address => uint256) public s_donorsToFundAmt;

    // events
    event Donated(address indexed donor, uint256 amount);

    modifier onlyOwner {
        require(msg.sender == s_creator, "Not Owner");
        _;
    }

    constructor(
        address _proposalOwner, 
        address[] memory _suppliers, 
        uint256 _targetDonation, 
        uint256[] memory _allocation, 
        uint _duration
    ) {
        s_creator = _proposalOwner;
        s_suppliers = _suppliers;
        s_allocation = _allocation;
        s_targetDonation = _targetDonation;
        s_threshHold = _targetDonation / 100 * 30;
        s_fundDeadline = block.timestamp + _duration;
    }

    function donate() public payable {
        require(msg.value > 0, "Send some ether to donate");
        s_currentFunding += msg.value;
        s_donorsToFundAmt[msg.sender] += msg.value;
        s_donors.push(msg.sender);
        emit Donated(msg.sender, msg.value);
    }

    function execute() external onlyOwner {
        if(s_currentFunding < s_targetDonation){
            revert Proposal__TargetAmtNotReached();
        }
        address[] memory cheapSuppliersArray = s_suppliers;
        for(uint i=0 ; i < cheapSuppliersArray.length; i++){
            address payable supplier = payable(cheapSuppliersArray[i]);
            uint amtToBePaid = s_currentFunding / 100 * s_allocation[i];
            supplier.transfer(amtToBePaid);
        }

    }

    function refundDonors() external onlyOwner {
        if(block.timestamp > s_fundDeadline && s_currentFunding <= s_threshHold){
            address[] memory cheapDonors = s_donors;
            for(uint i=0; i < cheapDonors.length; i++){
                address payable donor = payable(cheapDonors[i]);
                donor.transfer(s_donorsToFundAmt[cheapDonors[i]]);
            }
        }else{
            revert Proposal__NotAbleToRefund();
        }
    }

    


}
