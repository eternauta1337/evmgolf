// Dependency file: contracts/interfaces/ILevel.sol

//SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.12;


interface ILevel {
    function author() external returns (address);

    function name() external returns (string memory);

    function description() external returns (string memory);

    function submit(address candidate) external returns (bool);
}


// Root file: contracts/levels/LevelX.sol

pragma solidity ^0.8.12;

// import "contracts/interfaces/ILevel.sol";

contract LevelX is ILevel {

    address private authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }

    function name() external pure override returns (string memory) {
        return "TestLevel";
    }

    function description() external pure override returns (string memory) {
        //This function return the description of a levelNumber
        /*const levelNumber = 1;
        if(levelNumber==1){
            return "EVM golf #1: What is the minimum runtime bytecode of a contract that returns the current block number if called?";
        } else if(levelNumber==2){
            return "EVM golf #2: Minimal runtime bytecode to return the total supply of sUSD, save it to storage, along with who made the query, and the timestamp of the query. Pls reply with: * hex, * opcodes, * number of bytes";
        } else if(levelNumber==3){
            return "EVM golf #3: Minimal runtime bytecode for a contract that returns: world if the input is: hello, 42 otherwise.";
        } else if(levelNumber==4){
            return "EVM golf #4: Minimal contract code for a contract that reverses any calldata it receives.";
        } else if(levelNumber==5){
            return "EVM golf #5: Minimum runtime bytecode for a contract that returns true if the input is a prime number, false otherwise.";
        } else if(levelNumber==6){
            return "EVM golf #6: Minimal runtime bytecode for a contract that creates a copy of itself and returns the offspring address whenever interacted with anything other than zero, otherwise self destructs.";
        } else if(levelNumber==7){
            return "EVM golf #7: Minimal runtime bytecode for a contract that returns the square root of the calldata as a uint.";
        } else if(levelNumber==8){
            return "EVM golf #8: Smallest contract that returns true only if what it receives is a signed message from the sender of the tx.";
        } else {
            return "This level no exist. Try 1 to 8";
        }
        */
    }

    function submit(address candidate) external pure override returns (bool) {
        return true;
    }
}

