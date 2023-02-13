// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Counter {
    uint public count = 0;

    event Increment(address sender, uint count);
    event Decrement(address sender, uint count);

    constructor() {}

    function increment() external {
        count++;
        emit Increment(msg.sender, count);
    }

    function decrement() external {
        count--;
        emit Decrement(msg.sender, count);
    }
}