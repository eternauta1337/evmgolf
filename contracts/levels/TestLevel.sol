//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "../interfaces/ILevel.sol";
// Should this file be here or in the tests directory?

contract TestLevel is ILevel {

    address private authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }

    function name() external pure override returns (string memory) {
        return "TestLevel";
    }

    function description() external pure override returns (string memory) {
        return "Contract that is used for tests";
    }

    function submit(address candidate) external pure override returns (bool) {
        return true;
    }
}

contract FailedTestLevel is ILevel {
    address public authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }
    function name() external pure override returns (string memory) {
        return "FailedTestLevel";
    }

    function description() external pure override returns (string memory) {
        return "Contract that is used for failed tests";
    }

    function submit(address candidate) external pure override returns (bool) {
        return false;
    }
}

contract LongSolution {
    function name() external pure returns (string memory) {
        return 'name';
    }
}

contract ShortSolution {}
