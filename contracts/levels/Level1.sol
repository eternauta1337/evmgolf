////SPDX-License-Identifier: Unlicense
//pragma solidity ^0.8.12;

//import "../interfaces/ILevel.sol";

//contract Level1 is ILevel {
//    address private authorAddress;

//    constructor() {
//        authorAddress = msg.sender;
//    }

//    function author() external view returns (address) {
//        return authorAddress;
//    }

//    function name() external pure override returns (string memory) {
//        return "EVM Golf 1";
//    }

//    function description() external pure override returns (string memory) {
//        return "What is the minimum runtime bytecode of a contract that returns the current block number if called?";
//    }

//    function submit(address) external pure override returns (bool) {
//        return false;
//    }
//}
