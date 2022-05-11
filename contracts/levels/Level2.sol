//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "../interfaces/ILevel.sol";

contract Level2 is ILevel {
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

    function description() external pure override returns (string memory, string memory) {
        return (
            "Minimal runtime bytecode to return the total supply of sUSD, save it to storage, along with who made the query, and the",
            " timestamp of the query. Pls reply with: *hex, * opcodes, * number of bytes"
        );
    }

    function submit(address) external pure override returns (bool) {
        return false;
    }
}
