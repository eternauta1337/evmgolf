require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

//Read all opcodes or the description of one.
function OpcodeCheetsheet(Option) {
  const jsonOpcodes= require('./Opcodes.json');
  var flag = false;
  var opcodeInfo;
  if(Option == "all") {
    //List all opcodes
    console.log("List of all evm opcodes");
    for (var i=0; i<jsonOpcodes.length; i++) {
      console.log(jsonOpcodes[i]["Name"] + ": " + jsonOpcodes[i]["Description"]); 
    }
  }else{
    //Search the evm opcodes "Option" usar .find
    var opcodeInfo = jsonOpcodes.find(function(e) {
      return e.Name == Option; });
    
    if (opcodeInfo){
      console.log("Opcode: " + opcodeInfo["Name"] + ": " + opcodeInfo["Description"]); 
      flag=true;
    }
    //in case the option not exist in opcodes list
    if(flag==false){
      console.log("The opcode: " + Option + " does not exist");
    }
  }
      
}

task("cheetsheet", "Displays a list of evm opcodes with a brief explanation")
  .addParam("opcode", "The evm opcode")
  .setAction(async (taskArgs) => {
    OpcodeCheetsheet(taskArgs.opcode);
  });

module.exports = {
  solidity: "0.8.12",
  defaultNetwork: 'hardhat',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    }
  },
};
