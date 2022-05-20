//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.12;
import "./interfaces/ILevel.sol";
import "hardhat/console.sol";

contract EvmGolf {
    ILevel[] private _levels;

    error LevelHasNoCode();
    error LevelDoesNotConformToInterface();

    function validate(ILevel level) public {
        if (address(level).code.length == 0) {
            revert LevelHasNoCode();
        }

        bool success = true;

        (success, ) = address(level).call(abi.encodeWithSelector(ILevel.author.selector));
        if (!success) revert LevelDoesNotConformToInterface();

        (success, ) = address(level).call(abi.encodeWithSelector(ILevel.name.selector));
        if (!success) revert LevelDoesNotConformToInterface();

        (success, ) = address(level).call(abi.encodeWithSelector(ILevel.description.selector));
        if (!success) revert LevelDoesNotConformToInterface();
    }

    function register(ILevel level) external {
        validate(level);

        _levels.push(level);
    }

    function getNumLevels() external view returns (uint) {
        return _levels.length;
    }
}
