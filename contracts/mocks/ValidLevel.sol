//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

contract ValidLevel {
    function name() external pure returns (string memory) {
        return "Juanito";
    }

    function description() external pure returns (string memory) {
        return "Erase una vez...";
    }

    function submit(address candidate, address solution) external pure returns (bool) {
        if (candidate == solution) {
            return false;
        } else {
            return true;
        }
    
    }
}
