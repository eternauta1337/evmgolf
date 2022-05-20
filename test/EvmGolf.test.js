const { ethers } = require("hardhat");
const assert = require("assert/strict");
const assertRevert = require("./utils/assert-revert");

describe("EvmGolf Proyect", function () {
  let EvmGolf;

  before('deploy main EvmGolf contract', async function () {
    const factory = await ethers.getContractFactory("EvmGolf");
    EvmGolf = await factory.deploy();
  });

  describe('when registering levels', function () {
    describe('when trying to register invalid levels', function () {
      describe('when trying to register a level that has no code (an EOA)', function () {
        it('reverts', async function () {
          await assertRevert(
            EvmGolf.register("0x0000000000000000000000000000000000000000"),
            "LevelHasNoCode"
          );
        });
      });

      describe('when trying to register a level that has code', function () {
        describe('when trying to register a level that does not conform to the ILevel interface', function () {
          let InvalidLevel1, InvalidLevel2, InvalidLevel3;

          before('deploy contracts', async function () {
            let factory;

            factory = await ethers.getContractFactory("InvalidLevel1");
            InvalidLevel1 = await factory.deploy();

            factory = await ethers.getContractFactory("InvalidLevel2");
            InvalidLevel2 = await factory.deploy();

            factory = await ethers.getContractFactory("InvalidLevel3");
            InvalidLevel3 = await factory.deploy();
          });

          it('reverts', async function () {
            await assertRevert(
              EvmGolf.register(InvalidLevel1.address),
              "LevelDoesNotConformToInterface"
            );
            await assertRevert(
              EvmGolf.register(InvalidLevel2.address),
              "LevelDoesNotConformToInterface"
            );
            await assertRevert(
              EvmGolf.register(InvalidLevel3.address),
              "LevelDoesNotConformToInterface"
            );
          });
        });
      });
    });

    describe('when trying to register valid levels', function () {
      let ValidLevel;

      before('deploy level', async function () {
        const factory = await ethers.getContractFactory("ValidLevel");
        ValidLevel = await factory.deploy();
      });

      it('shows that there is one level', async function () {
        assert(await EvmGolf.getNumLevels(), 1);
      });
    });
  });
});
