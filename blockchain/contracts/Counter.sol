// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Counter {
    uint public count = 0;

    event Increment(address sender, uint count);

    constructor() {}

    function increment() public {
        count++;
        emit Increment(msg.sender, count);
    }
}