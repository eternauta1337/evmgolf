//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "../interfaces/ILevel.sol";

contract HelloWorld is ILevel {
    function name() external pure override returns (string memory) {
        return "HelloWorld";
    }

    function description() external pure override returns (string memory) {
        return "Contract that returns 'world' if sent 'hello', '42' otherwise.";
    }

    function submit(address candidate) external view override returns (bool) {
        return _testCondition1(candidate) && _testCondition2(candidate);
    }

    function _testCondition1(address candidate) private view returns (bool) {
        (bool success, bytes memory response) = candidate.staticcall("hello");

        if (!success) {
            return false;
        }

        return keccak256(response) == keccak256(abi.encodePacked("world"));
    }

    function _testCondition2(address candidate) private view returns (bool) {
        (bool success, bytes memory response) = candidate.staticcall("hi");

        if (!success) {
            return false;
        }

        return keccak256(response) == keccak256(abi.encodePacked("42"));
    }
}

contract Hello {
    fallback(bytes calldata data) external payable returns (bytes memory) {
        if (keccak256(data) == keccak256(abi.encodePacked("hello"))) {
            return "world";
        } else {
            return "42";
        }
    }
}

contract HelloBad1 {
    fallback(bytes calldata) external returns (bytes memory) {
        return "world";
    }
}

contract HelloBad2 {
    fallback(bytes calldata) external returns (bytes memory) {
        return "42";
    }
}
