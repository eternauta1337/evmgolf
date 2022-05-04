// Dependency file: contracts/interfaces/ILevel.sol

//SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.12;


interface ILevel {
    function author() external returns (address);

    function name() external returns (string memory);

    function description() external returns (string memory);

    function submit(address candidate) external returns (bool);
}


// Root file: contracts/levels/Level2.sol

pragma solidity ^0.8.12;

// import "contracts/interfaces/ILevel.sol";

contract Level2 is ILevel{
    address private authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }
    
     function author() external view returns (address) {
        return authorAddress;
    }
    function name() external pure override returns (string memory) {
        return "EVM Golf 2";
    }

    function description() external pure override returns (string memory) {
        return "Minimal runtime bytecode to return the total supply of sUSD, save it to storage, along with who made the query, and the timestamp of the query. Pls reply with: *hex, * opcodes, * number of bytes";
    }

    function submit(address candidate) external pure override returns (bool) {
        return false;
    }

}