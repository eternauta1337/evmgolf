const assert = require('assert/strict');
const { expect } = require('chai');
const { waffle } = require('hardhat');
// const { deployContract } = waffle;

describe("EvmGolf", function () {
  let player;
  let EvmGolf;
  let solution;
  let FailedTestLevel;
  let TestLevel;
  let level;

  before('deploy EVMGolf', async function () {
      const factory = await ethers.getContractFactory('EvmGolf');
      EvmGolf = await factory.deploy();
  });

  before('deploy Test Level', async function () {
    const factory = await ethers.getContractFactory('TestLevel');
    TestLevel = await factory.deploy();
  });

  before('set variables', async function () {
    [player] = (await ethers.getSigners());
    // TODO are these different?
    level = TestLevel.address;
    solution = EvmGolf.address;
  });

  describe('registerLevel with existing level', function () {
    it('reverts with a new level name that already exists', async function () {
        await EvmGolf.registerLevel(level);
        // TODO How to check error its been reverted with
        await expect(EvmGolf.registerLevel(level)).to.be.reverted;
        // await expect(EvmGolf.registerLevel(level)).to.be.revertedWith(`LevelAlreadyRegistered(${level})`);
    });
  });

  describe('register and play', function () {
    it('registers a level', async function () {
        await EvmGolf.registerLevel(level);
    });

    describe('when the submission is invalid', function () {
        before('deploy', async function () {
            const factory = await ethers.getContractFactory('FailedTestLevel');
            FailedTestLevel = await factory.deploy();
        });
        it('reverts the transaction with a LevelFailedSubmission error', async function () {
            // TODO How to check error its been reverted with
            await expect(EvmGolf.playLevel(FailedTestLevel.address, solution)).to.be.reverted;
        });
    });

    describe('when the submission is valid', function () {
        it('emits a LevelSolved event', async function () {
            await expect(EvmGolf.playLevel(level, solution)).to.emit(EvmGolf, 'LevelSolved')
                .withArgs(level, solution, player);
        });
        
        describe('when there is no solution already', function () {
            it('emits a LevelRecord', async function () {
                await expect( EvmGolf.playLevel(level, solution)).to.emit(EvmGolf, 'LevelRecord');
                //.withArgs(level, solution, player);
            });

            it('increments the victory of the player', async function () {
                await EvmGolf.playLevel(level, solution);
                EvmGolf.getVictories[player];
            });
        });

        describe('when the solution is shorter than the record solution', function () {
            it('emits a LevelRecord', async function () {

            });
            it('increments the victory of the player', async function () {

            });
            it('decrements the victory of the past record holder', async function () {

            });
        });

        describe('when the solution is longer than the record solution', function () {
            it('does not emit a LevelRecord', async function () {

            });
            it('does not change the victory counts of the player', async function () {

            });
            it('does not change the victory counts of the record holder', async function () {

            });
        });

        describe('when the solution is equal to the record solution', function () {
            it('does not emit a LevelRecord', async function () {

            });
            it('does not change the victory counts of the player', async function () {

            });
            it('does not change the victory counts of the record holder', async function () {

            });
        });
    });
  });
});
