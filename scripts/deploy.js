async function main() {
    // We get the contract to deploy
    const factory = await ethers.getContractFactory("EvmGolf");
    const evmGolf = await factory.deploy();
  
    await evmGolf.deployed();
  
    console.log("EvmGolf deployed to:", evmGolf.address);
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
