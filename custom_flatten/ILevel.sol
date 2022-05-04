// Root file: contracts/interfaces/ILevel.sol

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;


interface ILevel {
    function author() external returns (address);

    function name() external returns (string memory);

    function description() external returns (string memory);

    function submit(address candidate) external returns (bool);
}
