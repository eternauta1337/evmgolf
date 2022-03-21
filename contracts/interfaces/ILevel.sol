//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ILevel {
    function name() external returns (string memory);

    function description() external returns (string memory);

    function submit(address candidate) external returns (bool);
}
