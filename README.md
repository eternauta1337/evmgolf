# evmgolf game spec and poc

Project set up

The project is set up in a single repository as a hardhat project. It contains the main contract, a task for deploying this main contract, a task for deploying levels, and a few of its first levels used for testing.

It also contains the main hardhat task used to play the game. It may also contain other tasks that serve as utilities, such as an evm opcode list with explanations of what they do, etc.
Backend / Contracts
EvmGolf.sol
The backend of the game is composed of a single deployable contract called EvmGolf.sol. It may inherit other contracts to implement its business logic. It is not upgradeable (no proxies).

This contract allows anyone to submit a level, storing all levels in an array. There is no moderation for submitting levels. Upon submission, the contract will store the address of the author of the level.

Level creation will require level authors to provide a previously deployed contract, and EvmGolf will run a few checks to verify that the submitted level satisfies the basic interface required by the game.

The main repo will not keep track of the code of the levels, I.e. it does not need a PR in the main repo.

EvmGolf.sol spec:
constructor
Stores the address of the deploying address as the owner of the contract
registerLevel(address newLevel) public;
Verifies that the level is compatible / valid
Stores the address of the level in a “levels” array
Stores the address of the author of the level in a “authors” mapping
Reverts if the given name is already used
playLevel(address level, address solution) public;
Calls the “submit(solution)” function in the corresponding level
If the internal call reverts or returns false, emits a LevelFailed(address level, address solution, address player) event.
If the internal call returns true, it emits a LevelSolved(address level, address solution, address player).
If the solution has shorter runtime bytecode than the shortest known solution, it stores it in a “solutions” mapping and emits a LevelRecord(address level, address solution, address player)
In the case of a level record, it removes the previous record holder from the “records” array, and adds the new record holder
In the case of a level record, it also increments and decrements a corresponding “victories” mapping
Level<X>.sol

Levels are very simple contracts that describe a challenge and are able to validate if submitted contracts solve their challenge.

They don’t need to store any state, or even know the main EvmGolf contract. They just return true if the submission solves its puzzle.

Level<X>.spec:
Must have a function “name()” showing the name of the level
Must have a function “description() external pure returns (string memory)” that describes what a solution to the level needs to achieve.
Must have a function “submit(address solution) external returns (bool)” that returns true if the submitted contract satisfies the conditions of the level, false otherwise.
Frontend / CLI
The front end consists of a series of hardhat tasks.

Hardhat tasks spec:
deploy - Deploy main contract
Keeps track of deployed instances on any network
--clear command that discards any previously deployed instances
register - Deploy and register a new level
Compiles and deploys contracts and calls EvmGolf.sol registerLevel()
play - Plays any level
Starts with a brief explanation of what the game is about, how to play, etc
Lists all available levels with their names and allows you to select one
Once a level is selected, displays description, current winner, current solution address, bytecode, and bytecode length
helpme - Help about the game
More details on how to play
How to deploy a new level
cheatsheet - Displays a list of evm opcodes with a brief explanation
Lists all available opcodes and allows you to search
For each opcode, displays an explanation of what it does
