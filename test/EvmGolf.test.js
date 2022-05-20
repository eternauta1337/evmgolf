const { ethers } = require("hardhat");
var levels = require("../test/Level.test.js");

describe("EvmGolf Proyect", function () {
  let EvmGolf;
  let level1, level2, level3, level4, level5, level6, level7, level8;
  
  before(function(){
    level1 = levels._testLevels.l1;
    level2 = levels._testLevels.l2;
    level3 = levels._testLevels.l3;
    level4 = levels._testLevels.l4;
    level5 = levels._testLevels.l5;
    level6 = levels._testLevels.l6;
    level7 = levels._testLevels.l7;
    level8 = levels._testLevels.l8;
  });

  describe("EvmGolf should", function () {
    it("contract it's deployed", async function () {
      const EvmGolfFactory = await ethers.getContractFactory("EvmGolf");
      EvmGolf = await EvmGolfFactory.deploy();
      await EvmGolf.deployed();
    });

    describe("Register Level1 on EvmGolf", function () {
      it("Validate Level1 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(level1.address);
      });
    });

    describe("Register Level2 on EvmGolf", function () {
      it("Validate Level2 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(level2.address);
      });
    });

    describe("Register Level3 on EvmGolf", function () {
      it("Validate Level3 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(level3.address);
      });
    });

    describe("Register Level4 on EvmGolf", function () {
      it("Validate Level4 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(level4.address);
      });
    });

    describe("Register Level5 on EvmGolf", function () {
      it("Validate Level5 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(level5.address);
      });
    });

    describe("Register Level6 on EvmGolf", function () {
      it("Validate Level6 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(level6.address);
      });
    });

    describe("Register Level7 on EvmGolf", function () {
      it("Validate Level7 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(level7.address);
      });
    });

    describe("Register Level8 on EvmGolf", function () {
      it("Validate Level8 and add to EVMGolf", async function () {
        await EvmGolf.registerLevel(level8.address);
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
        console.log(await level8.description());
      });
    });

    describe("Play the level 1", function () {
      it("Return the result of playing level 1", async function () {
        console.log(await level1.submit(level2.address));
      });
    });
  });  
});
