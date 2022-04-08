async function main() {
    // We get the contract to deploy
    const factory = await ethers.getContractFactory("EvmGolf");
    const evmGolf = await factory.deploy();
  
    await evmGolf.deployed();
  
    console.log("EvmGolf deployed to:", evmGolf.address);

    // Deploy a Level
    const factory1 = await ethers.getContractFactory("TestLevel");
    const evmLevel = await factory1.deploy();
  
    await evmLevel.deployed();
  
    console.log("EvmLevel deployed to:", evmLevel.address);
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
