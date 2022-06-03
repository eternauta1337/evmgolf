//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;

import "../interfaces/ILevel.sol";

contract Level1 is ILevel {
    
    function name() external pure override returns (string memory) {
        return "EVM Golf 1";
    }

    function description() external pure override returns (string memory) {
        return "What is the minimum runtime bytecode of a contract that returns the current block number if called?";
    }

    function submit(address submitAddress, address winner) external view override returns (bool) {
        
//        assembly {
//                    let sizeCandidate:=extcodesize(candidate)
//                    let sizeActualSolution:=extcodesize(solucionAddress)
//                }
        bytes memory submitCode;
        bytes memory winnerCode;
        
        submitCode = submitAddress.code;
        winnerCode = winner.code;

      //  if(submitCode.length <= solutionCode.length){
      //      solutionAddress=submitAddress;
      //      return true;
      //  }
        return false;

    }
}
