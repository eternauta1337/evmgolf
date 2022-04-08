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
  let LongSolution;
  let ShortSolution;
  let level;
  
  beforeEach('deploy EVMGolf', async function () {
      const factory = await ethers.getContractFactory('EvmGolf');
      EvmGolf = await factory.deploy();
  });

  before('deploy Test Level', async function () {
    const factory = await ethers.getContractFactory('TestLevel');
    TestLevel = await factory.deploy();
    level = TestLevel.address;
  });

  /*
  before('deploy long solution', async function () {
    const factory = await ethers.getContractFactory('LongSolution');
    LongSolution = await factory.deploy();
  });

  before('deploy short solution', async function () {
    const factory = await ethers.getContractFactory('ShortSolution');
    ShortSolution = await factory.deploy();
  });

  before('set variables', async function () {
    player = ShortSolution.signer.address;
    solution = ShortSolution.address;
  });
*/

  /*
  describe('registerLevel Chio test', function () {
    it('register the level with validations', async function () {
        await EvmGolf.registerLevel();
        // TODO How to check error its been reverted with
        await expect(EvmGolf.registerLevel(level)).to.be.reverted;
        // await expect(EvmGolf.registerLevel(level)).to.be.revertedWith(`LevelAlreadyRegistered(${level})`);
    });
  });
  */


  describe('Register new Level', function () {
    it('Validate new level and add to EVMGolf', async function () {
        console.log(await EvmGolf.registerLevel(level.address));
        
    });
  });
/*
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
            // ).to.be.revertedWith(`LevelFailedSubmission(${FailedTestLevel.address})`);
        });
    });

    describe('when the submission is valid', function () {
        it('emits a LevelSolved event', async function () {
            await expect(EvmGolf.playLevel(level, solution)).to.emit(EvmGolf, 'LevelSolved')
                .withArgs(level, solution, player);
        });
        
        describe('when there is no solution already', function () {
            it('emits a LevelRecord', async function () {
                await expect( EvmGolf.playLevel(level, solution)).to.emit(EvmGolf, 'LevelRecord')
                .withArgs(level, solution, player);
            });

            it('increments the victory of the player', async function () {
                await EvmGolf.playLevel(level, solution);
                EvmGolf.getVictories[player];
            });
        });

        describe('when the solution is shorter than the record solution', function () {
            let recordHolder;
            
            beforeEach('set long solution', async function () {
                EvmGolf.playLevel(level, LongSolution.address)
                recordHolder = LongSolution.signer.address
            });

            it('emits a LevelRecord', async function () {
                await expect(EvmGolf.playLevel(level, solution)).to.emit(EvmGolf, 'LevelRecord')
                .withArgs(level, solution, player);
            });

            // How do I get the right signers?
            it('increments the victory of the new record holder', async function () {
                expect(await EvmGolf.getVictories(player)).to.equal(0);
                await EvmGolf.playLevel(level, solution);
                // Why is await in this test case, but it doesn't work outside of it
                expect(await EvmGolf.getVictories(player)).to.equal(1);
            });
            
            it('decrements the victory of the past record holder', async function () {
                expect(await EvmGolf.getVictories(recordHolder)).to.equal(1);
                await EvmGolf.playLevel(level, solution);
                // Why is await in this test case, but it doesn't work outside of it
                expect(await EvmGolf.getVictories(recordHolder)).to.equal(0);
            });
        });

        describe('when the solution is longer than the record solution', function () {
            beforeEach('set long solution', async function () {
                EvmGolf.playLevel(level, solution)
            });

            it('does not emit a LevelRecord', async function () {
                await expect(EvmGolf.playLevel(level, LongSolution.address)).not.to.emit(EvmGolf, 'LevelRecord');
            });

            it('does not change the victory counts of the record holder', async function () {
                expect(await EvmGolf.getVictories(player)).to.equal(1);
                await EvmGolf.playLevel(level, LongSolution.address);
                // Why is await in this test case, but it doesn't work outside of it
                expect(await EvmGolf.getVictories(player)).to.equal(1);
            });

            it('does not change the victory counts of the player', async function () {
                // TODO is this the right player?
                expect(await EvmGolf.getVictories(LongSolution.signer.address)).to.equal(0);
                await EvmGolf.playLevel(level, LongSolution.address);
                // Why is await in this test case, but it doesn't work outside of it
                expect(await EvmGolf.getVictories(LongSolution.signer.address)).to.equal(0);
            });
        });

        describe('when the solution is equal to the record solution', function () {
            beforeEach('set solution', async function () {
                await EvmGolf.playLevel(level, solution)
            });

            it('does not emit a LevelRecord', async function () {
                await expect(EvmGolf.playLevel(level, solution)).not.to.emit(EvmGolf, 'LevelRecord')
                .withArgs(level, solution, player);
            });

            it('does not change the victory counts of the record holder', async function () {
                expect(await EvmGolf.getVictories(player)).to.equal(1);
                await EvmGolf.playLevel(level, solution);
                // Why is await in this test case, but it doesn't work outside of it
                expect(await EvmGolf.getVictories(player)).to.equal(1);
            });

            it('does not change the victory counts of the player', async function () {
            });
        });
    });
  });
  */

});
