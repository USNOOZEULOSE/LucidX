require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
//enables the deploy task and extends the hre
require("hardhat-deploy");
require("dotenv").config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    sepolia: {
      chainId: 11155111,
      url: SEPOLIA_RPC_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
      blockConfirmations: 6,
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    }
  },
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: {
      default : 0,
    }
  }

};

// const proxy_url = 'https://devnet.neonevm.org';
// const network_id = 245022926;

// // Private keys for test accounts
// // NOTE: Replace these placeholders with your own and make sure the accounts have non-zero NEON balances
// const privateKeys = [
//   "0xPLACEHOLDER1",
//   "0xPLACEHOLDER2"
// ];

// module.exports = {
//   solidity: "0.8.4",
//   defaultNetwork: 'neonlabs',
//   networks: {
//     neonlabs: {
//       url: proxy_url,
//       accounts: privateKeys,
//       network_id: network_id,
//       chainId: network_id,
//       allowUnlimitedContractSize: false,
//       timeout: 1000000,
//       isFork: true
//     }
//   }
// };