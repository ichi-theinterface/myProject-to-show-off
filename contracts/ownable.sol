// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ownable {
    address public owner;

    constructor () {
        owner = msg.sender;
    }

    modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }

    function setOwner(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "invalid address");
        owner = _newOwner;
    }

    function onlyOwnerCanCallThisFunc() external onlyOwner {
        // code
    }

    function anyOneCanCall() external onlyOwner{
        // code
    }
}
