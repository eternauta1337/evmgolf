// const assert = require('assert/strict');

// const FOURTY_TWO_HEX = '0x3432';
// const HELLO_HEX = '0x68656c6c6f';
// const WORLD_HEX = '0x776f726c64';
// const HI_HEX = '0x6869';

// describe("EvmGolf", function () {
//   let signer;

//   let EvmGolf;

//   before('identify signers', async function () {
//     [signer] = (await ethers.getSigners());
//   });

//   before('deploy', async function () {
//       const factory = await ethers.getContractFactory('EvmGolf');
//       EvmGolf = await factory.deploy();
//   });

//   describe('registerLevel with existing level name', function () {
//     // before('deploy contract', async function () {
//     //   const factory = await ethers.getContractFactory('Hello');
//     //   Hello = await factory.deploy();
//     // });

//     it('reverts with a new level name that already exists', async function () {
//     });
//   }

//   describe('register and play', function () {

//     it('registers a level', async function () {
//       assert.equal(await ethers.provider.call({ to: Hello.address, data: HI_HEX }), FOURTY_TWO_HEX);
//     });

//     it('plays the level', async function () {
//       assert.equal(await HelloWorld.submit(Hello.address), true);
//     });

//     it('emits a level record', async function () {
//       const bytecode = await ethers.provider.getCode(Hello.address);

//       // Uncomment to see Hello's runtime bytecode.
//       // console.log(bytecode);

//       assert.notEqual(bytecode.length, 0);
//     });

//     // when solution doesn't pass
//     // when solution is not a record
//     // when solution is a record
//   });
// });
