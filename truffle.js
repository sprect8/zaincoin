var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "blast amazing axis peanut blue slow swim chapter major novel shoe purity";
var apiKey = "uQ1IJxFulSUbz2UfH50E"
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+apiKey),
      network_id: 3,
      gas: 4600000
    }
  }
};

