// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error Proposal__TargetAmtNotReached();
error Proposal__NotAbleToRefund();
error Proposal__NotOnwer();
error Proposal__NotEnoughAmt();

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
    IERC20 public usdcToken;

    mapping(address => uint256) public s_donorsToFundAmt;

    // events
    event Donated(address indexed donor, uint256 amount);

    modifier onlyOwner {
        if(msg.sender == s_creator){revert Proposal__NotOnwer()};
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
        s_creator = _proposalOwner;
        s_suppliers = _suppliers;
        s_allocation = _allocation;
        s_targetDonation = _targetDonation;
        s_threshHold = _targetDonation / 100 * 30;
        s_fundDeadline = block.timestamp + _duration;
        usdcToken = IERC20(_usdcTokenAddress);
    }

    function donate(uint _donateAmt) public {
        if(_donateAmt == 0){revert Proposal__NotEnoughAmt()};
        bool success = usdcToken.approve(address(this), _donateAmt);
        if(success){
            usdcToken.transferFrom(msg.sender, address(this), _donateAmt);
            s_currentFunding += _donateAmt;
            s_donorsToFundAmt[msg.sender] += _donateAmt;
            s_donors.push(msg.sender);
            emit Donated(msg.sender, _donateAmt);
        }
        
    }

    function execute() external onlyOwner {
        if(s_currentFunding < s_targetDonation){
            revert Proposal__TargetAmtNotReached();
        }
        address[] memory cheapSuppliersArray = s_suppliers;
        for(uint i=0 ; i < cheapSuppliersArray.length; i++){
            address supplier = cheapSuppliersArray[i];
            uint amtToBePaid = s_currentFunding / 100 * s_allocation[i];
            usdcToken.transfer(supplier, amtToBePaid);
        }
        s_currentFunding = 0;
    }

    function refundDonors() external onlyOwner {
        if(block.timestamp > s_fundDeadline && s_currentFunding <= s_threshHold){
            address[] memory cheapDonors = s_donors;
            for(uint i=0; i < cheapDonors.length; i++){
                address donor = cheapDonors[i];
                s_donorsToFundAmt[donor] = 0;
                usdcToken.transfer(donor, s_donorsToFundAmt[cheapDonors[i]]);
            }
        }else{
            revert Proposal__NotAbleToRefund();
        }
    }
}



