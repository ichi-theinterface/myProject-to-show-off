// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract SmartContractWallet {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }

    receive() external payable {}

    function setOwner(address payable _newOwner) external onlyOwner {
        require(_newOwner != address(0), "invalid address");
        owner = _newOwner;
    }

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "caller is not owner");
        payable(msg.sender).transfer(_amount);
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}