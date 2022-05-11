// const assert = require("assert/strict");

// const FOURTY_TWO_HEX = "0x3432";
// const HELLO_HEX = "0x68656c6c6f";
// const WORLD_HEX = "0x776f726c64";
// const HI_HEX = "0x6869";

/*
describe.skip("HelloWorld level", function () {
  let signer;

  let HelloWorld;

  before('identify signers', async function () {
    [signer] = (await ethers.getSigners());
  });

  before('deploy level', async function () {
      const factory = await ethers.getContractFactory('HelloWorld');
      HelloWorld = await factory.deploy();
  });

  describe('Hello solution', function () {
    let Hello;

    before('deploy contract', async function () {
      const factory = await ethers.getContractFactory('Hello');
      Hello = await factory.deploy();
    });

    it('responds with "world", when queried with "hello"', async function () {
      assert.equal(await ethers.provider.call({ to: Hello.address, data: HELLO_HEX }), WORLD_HEX);
    });

    it('responds with "42", when queried with anything but "hello"', async function () {
      assert.equal(await ethers.provider.call({ to: Hello.address, data: HI_HEX }), FOURTY_TWO_HEX);
    });

    it('passes the level', async function () {
      assert.equal(await HelloWorld.submit(Hello.address), true);
    });

    it('shows some bytecode length', async function () {
      const bytecode = await ethers.provider.getCode(Hello.address);

      // Uncomment to see Hello's runtime bytecode.
      // console.log(bytecode);

      assert.notEqual(bytecode.length, 0);
    });
  });

  describe('HelloBad1 solution', function () {
    let HelloBad1;

    before('deploy contract', async function () {
      const factory = await ethers.getContractFactory('HelloBad1');
      HelloBad1 = await factory.deploy();
    });

    it('does not pass the level', async function () {
      assert.equal(await HelloWorld.submit(HelloBad1.address), false);
    });
  });

  describe('HelloBad2 solution', function () {
    let HelloBad2;

    before('deploy contract', async function () {
      const factory = await ethers.getContractFactory('HelloBad2');
      HelloBad2 = await factory.deploy();
    });

    it('does not pass the level', async function () {
      assert.equal(await HelloWorld.submit(HelloBad2.address), false);
    });
  });
});
*/
