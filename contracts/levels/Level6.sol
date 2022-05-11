//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "../interfaces/ILevel.sol";

contract Level6 is ILevel{
    address private authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }
    
     function author() external view returns (address) {
        return authorAddress;
    }
    function name() external pure override returns (string memory) {
        return "EVM Golf 6";
    }

    function description() external pure override returns (string memory, string memory) {
        return ("EVM golf #6: Minimal runtime bytecode for a contract that creates a copy of itself and ",
         "returns the offspring address whenever interacted with anything other than zero, otherwise self destructs.");
    }

    function submit(address candidate) external pure override returns (bool) {
        return false;
    }

}
