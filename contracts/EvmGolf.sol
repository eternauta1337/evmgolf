//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;
import "./interfaces/ILevel.sol";
import "hardhat/console.sol";

contract EvmGolf {

    error LevelHasNoCode();
    error LevelDoesNotConformToInterface();

    struct Level {
        ILevel level;
        address author;
        address solution;
    }
    //registrar el nivel, con su author
    Level[] private _levels;

    function validate(ILevel level) public {
        if (address(level).code.length == 0) {
            revert LevelHasNoCode();
        }

        bool success = true;

        (success, ) = address(level).call(abi.encodeWithSelector(ILevel.name.selector));
        if (!success) revert LevelDoesNotConformToInterface();

        (success, ) = address(level).call(abi.encodeWithSelector(ILevel.description.selector));
        if (!success) revert LevelDoesNotConformToInterface();

        (success, ) = address(level).call(abi.encodeWithSelector(ILevel.submit.selector));
        if (!success) revert LevelDoesNotConformToInterface();
    }

    function registerLevel(ILevel level) external {
               
        validate(level);
        
        Level memory newLevel = Level(level, address(level), address(0));
        
        _levels.push(newLevel); 
        
    }

    function submitLevel(ILevel level, address solutionCandidate) external returns (bool) {
        uint i = 0;
        Level memory element;
        ILevel evmLevel;
        bool isSolution;

        isSolution = false;

        while (i<_levels.length) {
            element = _levels[i];
            evmLevel = element.level;
            if (evmLevel == level) {
                i = _levels.length;
                isSolution = evmLevel.submit(solutionCandidate, element.solution);
            } else {
                i++;
            }    
        }
        return isSolution;
    }

    function getNumLevels() external view returns (uint) {
        return _levels.length;
    }
}
