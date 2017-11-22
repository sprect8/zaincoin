var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {    
  //console.log("Suckk", web3.eth.getBalance(web3.eth.accounts[0]));
  deployer.deploy(Migrations);
};
