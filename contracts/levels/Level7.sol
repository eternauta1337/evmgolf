//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "../interfaces/ILevel.sol";

contract Level7 is ILevel {
    address private authorAddress;

    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }

    function name() external pure override returns (string memory) {
        return "EVM Golf 7";
    }

    function description() external pure override returns (string memory, string memory) {
        return ("Minimal runtime bytecode for a contract that returns the square root of the calldata as a uint.", "");
    }

    function submit(address) external pure override returns (bool) {
        return false;
    }
}
