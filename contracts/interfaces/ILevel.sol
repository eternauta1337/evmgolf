//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

interface ILevel {
    function name() external returns (string memory);

    function description() external returns (string memory);

    function submit(address candidate, address solution) external returns (bool);
}
