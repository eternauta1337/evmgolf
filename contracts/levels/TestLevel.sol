//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

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

    function description(uint8 levelNumber) external pure override returns (string memory) {
        return "Contract that is used for tests";
    }

    function submit(address candidate) external pure override returns (bool) {
        return true;
    }
}


contract Level1 is ILevel{
    address private authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }
    
     function author() external view returns (address) {
        return authorAddress;
    }
    function name() external pure override returns (string memory) {
        return "EVM Golf 1";
    }

    function description(uint8 levelNumber) external pure override returns (string memory) {
        return "What is the minimum runtime bytecode of a contract that returns the current block number if called?";
    }

    function submit(address candidate) external pure override returns (bool) {
        return false;
    }

}

contract Level2 is ILevel{
    address private authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }
    
     function author() external view returns (address) {
        return authorAddress;
    }
    function name() external pure override returns (string memory) {
        return "EVM Golf 2";
    }

    function description(uint8 levelNumber) external pure override returns (string memory) {
        return "Minimal runtime bytecode to return the total supply of sUSD, save it to storage, along with who made the query, and the timestamp of the query. Pls reply with: * hex, * opcodes, * number of bytes";
    }

    function submit(address candidate) external pure override returns (bool) {
        return false;
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

    function description(uint8 levelNumber) external pure override returns (string memory) {
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
