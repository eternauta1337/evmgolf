const { ethers } = require("hardhat");
const assert = require("assert/strict");
const assertRevert = require("./utils/assert-revert");
const { expect } = require("chai");

// TODO: call EvmGold.validate(this level)
describe("Test Level1", function () {
  let Level1, ValidSubmitLevel1;
  let owner;
  
  before('deploy Level1 contract', async function () {
    const factory = await ethers.getContractFactory("Level1");
    Level1 = await factory.deploy();
  });

  before('Get signers', async function () {
    [owner] = await ethers.getSigners();
    console.log(owner);
  });

  //it('shows who is the author of level1', async function () {
  //  assert.equal(await Level1.author(),owner.address);
  //});

  it('shows the name of level1', async function () {
    expect(await Level1.name()).to.equal("EVM Golf 1");
  });

  it('shows the description of level1', async function () {
    expect(await Level1.description()).to.equal("What is the minimum runtime bytecode of a contract that returns the current block number if called?");
  });

  describe("when submit a solution", function(){
    describe("when the solution is better", function(){

    });

    describe("when the solution is not better than exists", function(){

    });
  });
});


  
  