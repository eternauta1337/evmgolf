//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

contract TestLevel {

    address private authorAddress;

    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }

    function getName() external pure returns (string memory) {
        return "TestLevel";
    }

    function getDescription() external pure returns (string memory) {
        return ("Contract that is used for tests");
    }
}

