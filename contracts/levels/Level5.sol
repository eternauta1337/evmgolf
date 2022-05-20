////SPDX-License-Identifier: Unlicense
//pragma solidity ^0.8.12;

//import "../interfaces/ILevel.sol";

//contract Level5 is ILevel {
//    address private authorAddress;

//    constructor() {
//        authorAddress = msg.sender;
//    }

//    function author() external view returns (address) {
//        return authorAddress;
//    }

//    function name() external pure override returns (string memory) {
//        return "EVM Golf 5";
//    }

//    function description() external pure override returns (string memory, string memory) {
//        return (
//            "EVM golf #5: Minimum runtime bytecode for a contract that returns true if the input is a prime number, false otherwise.",
//            ""
//        );
//    }

//    function submit(address) external pure override returns (bool) {
//        return false;
//    }
//}
