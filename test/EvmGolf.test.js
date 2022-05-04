
//const { expect } = require("chai");
const { ethers }  = require("hardhat");

describe("EvmGolf", function () {
  let EvmGolf;
  let Level1;
  let Level2;

  it("EvmGolf contract it's deployed", async function () {
    const EvmGolfFactory = await ethers.getContractFactory("EvmGolf");
    EvmGolf = await EvmGolfFactory.deploy();
    await EvmGolf.deployed();
  });  

  it("Level1 contract it's deployed", async function () {
    const Level1Factory = await ethers.getContractFactory("Level1");
    Level1 = await Level1Factory.deploy();
    await Level1.deployed();
  }); 

  it("Level2 contract it's deployed", async function () {
    const Level2Factory = await ethers.getContractFactory("Level2");
    Level2 = await Level2Factory.deploy();
    await Level2.deployed();
  }); 

  describe("Register Level1 on EvmGolf", function () {
    it("Validate Level1 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(Level1.address);
    });
  });

  describe("Register Level2 on EvmGolf", function () {
    it("Validate Level2 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(Level2.address);
    });
  });

  describe("List of levels on EVMGolf", function () {
    it("List all levels on EVMGolf", async function () {
        const levelAddresses = await EvmGolf.getLevels();
        console.log(levelAddresses);
    });
  });

  describe("Return the description of Level2", function () {
    it("Return the description of Level2", async function () {
        console.log(await Level2.description());
    });
  });

});
