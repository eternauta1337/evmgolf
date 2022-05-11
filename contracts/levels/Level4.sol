//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "../interfaces/ILevel.sol";

contract Level4 is ILevel {
    address private authorAddress;

    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }

    function name() external pure override returns (string memory) {
        return "EVM Golf 4";
    }

    function description() external pure override returns (string memory, string memory) {
        return ("EVM golf #4: Minimal contract code for a contract ", "that reverses any calldata it receives.");
    }

    function submit(address) external pure override returns (bool) {
        return false;
    }
}
