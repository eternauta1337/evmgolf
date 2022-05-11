//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "../interfaces/ILevel.sol";

contract Level8 is ILevel {
    address private authorAddress;

    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }

    function name() external pure override returns (string memory) {
        return "EVM Golf 8";
    }

    function description() external pure override returns (string memory, string memory) {
        return (
            "Smallest contract that returns true only if what it receives is a signed message from the sender of the tx.",
            ""
        );
    }

    function submit(address) external pure override returns (bool) {
        return false;
    }
}
