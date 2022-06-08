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

        (success, ) = address(level).call(abi.encodeWithSelector(ILevel.submit.selector, address(0), address(0)));
        if (!success) revert LevelDoesNotConformToInterface();
    }

    function registerLevel(ILevel level) external {
               
        validate(level);
        
        Level memory newLevel = Level(level, address(level), address(0));
        
        _levels.push(newLevel); 
        
    }

    function submitLevel(ILevel level, address solutionCandidate) external returns (bool) {
        uint i = 0;
        Level memory structLevel;
        ILevel evmLevel;
        bool isSolution;

        isSolution = false;
        
        while (i<_levels.length) {
            structLevel = _levels[i];
            evmLevel = structLevel.level;
        
            if (address(evmLevel) == address(level)) {
                if (structLevel.solution == address(0)) {
                    structLevel.solution = address(level);
                    _levels[i] = structLevel;
                    isSolution = true;

                } else {
                    isSolution = evmLevel.submit(solutionCandidate, structLevel.solution);
                    if (isSolution == true)  {
                        structLevel.solution = address(solutionCandidate);
                        _levels[i] = structLevel;
                    }    
                }
                i = _levels.length;
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
