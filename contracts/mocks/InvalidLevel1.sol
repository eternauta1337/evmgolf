//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

contract InvalidLevel1 {
    function someRandomFunction() external pure returns (uint) {
        42;
    }

    function name() external returns (string memory) {
        return "Juanito";
    }

    function author() external returns (address) {
        return address(0);
    }
    
    function submit() external returns (bool) {
        return true;
    }
}
