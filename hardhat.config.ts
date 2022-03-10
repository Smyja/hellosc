require("dotenv").config();
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url:process.env.RINKEBY_URL||'',
      accounts: process.env.RINKEBY_ACCOUNT!==undefined?[process.env.RINKEBY_ACCOUNT]:[],
    },
  },
  etherscan:{
    apiKey:process.env.ETHERSCAN_API_KEY,
  }
};
