////spdx-license-identifier: unlicense
//pragma solidity ^0.8.12;

//import "../interfaces/ilevel.sol";

//contract level7 is ilevel {
//    address private authoraddress;

//    constructor() {
//        authoraddress = msg.sender;
//    }

//    function author() external view returns (address) {
//        return authoraddress;
//    }

//    function name() external pure override returns (string memory) {
//        return "evm golf 7";
//    }

//    function description() external pure override returns (string memory, string memory) {
//        return ("minimal runtime bytecode for a contract that returns the square root of the calldata as a uint.", "");
//    }

//    function submit(address) external pure override returns (bool) {
//        return false;
//    }
//}
