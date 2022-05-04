// Dependency file: contracts/interfaces/ILevel.sol

//SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.12;


interface ILevel {
    function author() external returns (address);

    function name() external returns (string memory);

    function description() external returns (string memory);

    function submit(address candidate) external returns (bool);
}


// Root file: contracts/levels/Level1.sol

pragma solidity ^0.8.12;

// import "contracts/interfaces/ILevel.sol";

contract Level1 is ILevel{
    address private authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }
    
     function author() external view returns (address) {
        return authorAddress;
    }
    function name() external pure override returns (string memory) {
        return "EVM Golf 1";
    }

    function description() external pure override returns (string memory) {
        return "What is the minimum runtime bytecode of a contract that returns the current block number if called?";
    }

    function submit(address candidate) external pure override returns (bool) {
        return false;
    }

}