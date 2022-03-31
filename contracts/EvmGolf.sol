//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract EvmGolf {
    mapping(string => address) private _levels; // level name -> level address
    mapping(address => uint) private _authors; // author -> level address
    mapping(address => address) private _solutions; // level -> solution
    mapping(address => address) private _records; // level -> author
    mapping(address => uint) private _victories; // author -> number of victories

    function registerLevel(address newLevel) external returns (bool) {
        const levelABI = [ "function name() external returns (string memory)"];
        const level = new ethers.Contract(newLevel, levelABI, ethers.getDefaultProvider());
        
        // Verify that level name is not already registered
        if (_levels[level.name()]) { return false; }
        
        // Stores the address of the level in a levels array
        _levels[level.name()] = newLevel;

        // Stores the address of the author of the level in an authors mapping
        _authors[msg.sender] = newLevel;

    }

    function playLevel(address level, address solution) external {
        const levelABI = [ 
            "function submit(address candidate) external returns (bool)"
        ];
        const levelContract = new ethers.Contract(newLevel, levelABI, ethers.getDefaultProvider());

        // Should this use await? Would submit happen synchronously?
        const success = levelContract.submit(solution);

        // TODO emit events
        // If the internal call reverts or returns false, emits a LevelFailed(address level, address solution, address player) event.
        // If the internal call returns true, it emits a LevelSolved(address level, address solution, address player).
        
        // TODO how to get byte code from contract to check if success
        
        // If success {
            // If the solution has shorter runtime bytecode than the shortest known solution,
            
            // stores it in a solutions mapping and emits a LevelRecord(address level, address solution, address player)
            past_winner = _solutions[level];
            winner = msg.sender;
            _solutions[level] = solution;
            // removes the previous record holder from the records array, and adds the new record holder
            _records[level] = winner;
            // increments and decrements a corresponding victories mapping
            _decrementVictories(past_winner);
            _incrementVictories(winner);
        //}
    }

    function _decrementVictories(address player) private view {
        // Do not let victories go negative
        if (_victories[player] > 0) {
            _victories[player] -= 1;
        }
    }

    function _incrementVictories(address player) private view {
        if (_victories[player])  {
            _victories[player] += 1;
        } else {
            _victories[player] = 1;
        }
    }

}
