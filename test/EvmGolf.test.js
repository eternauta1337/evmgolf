/*global require*/
//const { expect } = require("chai");
const { ethers }  = require("hardhat");

describe("EvmGolf", function () {
  let EvmGolf;
  let Level1;
  let Level2;
  let Level3;
  let Level4;
  let Level5;
  let Level6;
  let Level7;
  let Level8;

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

  it("Level3 contract it's deployed", async function () {
    const Level3Factory = await ethers.getContractFactory("Level3");
    Level3 = await Level3Factory.deploy();
    await Level3.deployed();
  });
  
  it("Level4 contract it's deployed", async function () {
    const Level4Factory = await ethers.getContractFactory("Level4");
    Level4 = await Level4Factory.deploy();
    await Level4.deployed();
  });

  it("Level5 contract it's deployed", async function () {
    const Level5Factory = await ethers.getContractFactory("Level5");
    Level5 = await Level5Factory.deploy();
    await Level5.deployed();
  });

  it("Level6 contract it's deployed", async function () {
    const Level6Factory = await ethers.getContractFactory("Level6");
    Level6 = await Level6Factory.deploy();
    await Level6.deployed();
  });

  it("Level7 contract it's deployed", async function () {
    const Level7Factory = await ethers.getContractFactory("Level7");
    Level7 = await Level7Factory.deploy();
    await Level7.deployed();
  });

  it("Level8 contract it's deployed", async function () {
    const Level8Factory = await ethers.getContractFactory("Level8");
    Level8 = await Level8Factory.deploy();
    await Level8.deployed();
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

  describe("Register Level3 on EvmGolf", function () {
    it("Validate Level3 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(Level3.address);
    });
  });

  describe("Register Level4 on EvmGolf", function () {
    it("Validate Level4 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(Level4.address);
    });
  });

  describe("Register Level5 on EvmGolf", function () {
    it("Validate Level5 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(Level5.address);
    });
  });

  describe("Register Level6 on EvmGolf", function () {
    it("Validate Level6 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(Level6.address);
    });
  });

  describe("Register Level7 on EvmGolf", function () {
    it("Validate Level7 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(Level7.address);
    });
  });

  describe("Register Level8 on EvmGolf", function () {
    it("Validate Level8 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(Level8.address);
    });
  });

  describe("List of levels on EVMGolf", function () {
    it("List all levels on EVMGolf", async function () {
        const levelAddresses = await EvmGolf.getLevels();
        console.log(levelAddresses);
    });
  });

  describe("Return the description of Level8", function () {
    it("Return the description of Level8", async function () {
        console.log(await Level2.description());
    });
  });

});
