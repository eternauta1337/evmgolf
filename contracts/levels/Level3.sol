//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "../interfaces/ILevel.sol";

contract Level3 is ILevel {
    address private authorAddress;

    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }

    function name() external pure override returns (string memory) {
        return "EVM Golf 3";
    }

    function description() external pure override returns (string memory, string memory) {
        return (
            "EVM golf #3: Minimal runtime bytecode for a contract that returns: world if the input is: ",
            "hello, 42 otherwise. "
        );
    }

    function submit(address) external pure override returns (bool) {
        return false;
    }
}
