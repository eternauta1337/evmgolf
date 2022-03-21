require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.12",
  defaultNetwork: 'hardhat',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    }
  },
};
