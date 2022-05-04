// Dependency file: contracts/interfaces/ILevel.sol

//SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.12;


interface ILevel {
    function author() external returns (address);

    function name() external returns (string memory);

    function description() external returns (string memory);

    function submit(address candidate) external returns (bool);
}


// Root file: contracts/levels/TestLevel.sol

pragma solidity ^0.8.12;

// import "contracts/interfaces/ILevel.sol";
// Should this file be here or in the tests directory?

// un archivo por contrato
// nombrar bien las variables y funciones.

contract TestLevel is ILevel {

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
        return "Contract that is used for tests";
    }

    function submit(address candidate) external pure override returns (bool) {
        return true;
    }
}

contract FailedTestLevel is ILevel {
    address public authorAddress;
    
    constructor() {
        authorAddress = msg.sender;
    }

    function author() external view returns (address) {
        return authorAddress;
    }
    function name() external pure override returns (string memory) {
        return "FailedTestLevel";
    }

    function description() external pure override returns (string memory) {
        return "Contract that is used for failed tests";
    }

    function submit(address candidate) external pure override returns (bool) {
        return false;
    }
}

contract LongSolution {
    function name() external pure returns (string memory) {
        return 'name';
    }
}

contract ShortSolution {}
