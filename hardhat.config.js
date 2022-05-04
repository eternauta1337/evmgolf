require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.12",
  defaultNetwork: 'hardhat',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    }
  },
};
