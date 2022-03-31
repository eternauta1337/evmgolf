//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./interfaces/ILevel.sol";

contract EvmGolf {
    mapping(string => bool) private _levels; // level name -> bool
    mapping(address => ILevel) private _authors; // author -> level
    mapping(ILevel => address) private _solutions; // level -> solution
    mapping(ILevel => address) private _records; // level -> author
    mapping(address => uint) private _victories; // author -> number of victories

    event LevelSolved(ILevel level, address solution, address player);
    event LevelFailed(ILevel level, address solution, address player);
    event LevelRecord(ILevel level, address solution, address player);

    function registerLevel(ILevel newLevel) external {
        string memory levelName = newLevel.name();
        // Verify that level name is not already registered
        if (_levels[levelName] == true) {
            // TODO revert
        }
        
        // Stores the address of the level in a levels set
        _levels[levelName] = true;

        // Stores the address of the author of the level in an authors mapping
        _authors[msg.sender] = newLevel;

    }

    function playLevel(ILevel level, address solution) external {
        bool success = level.submit(solution);
        address player = msg.sender;

        if (success) {
            emit LevelSolved(level, solution, player);
        } else {
            // TODO revert
            emit LevelFailed(level, solution, player);
        }

        bool isRecord = _isRecord(level, solution);

        if (isRecord) {
            // Stores in solutions mapping
            _solutions[level] = solution;
            // removes the previous record holder from the records array, and adds the new record holder
            address past_record_holder = _records[level];
            _records[level] = player;
            // increments and decrements a corresponding victories mapping
            _decrementVictories(past_record_holder);
            _incrementVictories(player);

            emit LevelRecord(level, solution, player);
        }
    }

    function _decrementVictories(address player) private {
        // Do not let victories go negative
        if (_victories[player] > 0) {
            _victories[player] -= 1;
        }
    }

    function _incrementVictories(address player) private {
        _victories[player] += 1;
    }
    
    function _isRecord(ILevel level, address solution) private view returns (bool) {
        // TODO figure out how to get bytecode
        // default to false for now
        return false;
    }

}
