//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

contract ValidLevel {
    function author() external returns (address) {
        return address(0);
    }

    function name() external returns (string memory) {
        return "Juanito";
    }

    function description() external returns (string memory) {
        return "Erase una vez...";
    }

    function submit(address candidate) external pure returns (bool) {
        true;
    }
}
