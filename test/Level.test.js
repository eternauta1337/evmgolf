const { ethers } = require("hardhat");
let levels=[];

describe("Levels for EvmGolf should", function () {
  let level1, level2, level3, level4, level5, level6, level7, level8;  

  after(function(){
    exports._testLevels = {
        l1: levels[0],
        l2: levels[1],
        l3: levels[2],
        l4: levels[3],
        l5: levels[4],
        l6: levels[5],
        l7: levels[6],
        l8: levels[7]
    };
  });

  it("Level1 contract it's deployed", async function () {
    const level1Factory = await ethers.getContractFactory("Level1");
    level1 = await level1Factory.deploy();
    await level1.deployed();
    levels.push(level1);
  });

  it("Level2 contract it's deployed", async function () {
    const level2Factory = await ethers.getContractFactory("Level2");
    level2 = await level2Factory.deploy();
    await level2.deployed();
    levels.push(level2);
  });

  it("Level3 contract it's deployed", async function () {
    const level3Factory = await ethers.getContractFactory("Level3");
    level3 = await level3Factory.deploy();
    await level3.deployed();
    levels.push(level3);
  });

  it("Level4 contract it's deployed", async function () {
    const level4Factory = await ethers.getContractFactory("Level4");
    level4 = await level4Factory.deploy();
    await level4.deployed();
    levels.push(level4);
  });

  it("Level5 contract it's deployed", async function () {
    const level5Factory = await ethers.getContractFactory("Level5");
    level5 = await level5Factory.deploy();
    await level5.deployed();
    levels.push(level5);
  });

  it("Level6 contract it's deployed", async function () {
    const level6Factory = await ethers.getContractFactory("Level6");
    level6 = await level6Factory.deploy();
    await level6.deployed();
    levels.push(level6);
  });

  it("Level7 contract it's deployed", async function () {
    const level7Factory = await ethers.getContractFactory("Level7");
    level7 = await level7Factory.deploy();
    await level7.deployed();
    levels.push(level7);
  });

  it("Level8 contract it's deployed", async function () {
    const level8Factory = await ethers.getContractFactory("Level8");
    level8 = await level8Factory.deploy();
    await level8.deployed();
    levels.push(level8);
  });

});

