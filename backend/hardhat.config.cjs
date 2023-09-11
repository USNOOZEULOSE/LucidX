import ('dotenv/config');
import('hardhat/config.js').HardhatUserConfig;
const {TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS } = require("hardhat/builtin-tasks/task-names");
require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");


const proxy_url = 'https://devnet.neonevm.org';
const network_id = 245022926;


subtask(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS).setAction(async (_, __, runSuper) => {
  // Get the list of source paths that would normally be passed to the Solidity compiler
  const paths = await runSuper();

  // Apply a filter function to exclude paths that contain the string "ignore"
  return paths.filter((p) => !p.includes("ignore"));
});

module.exports = {
  networks: {
    hardhat: {
    },
    neonlabs: { 
      url: proxy_url,
      accounts: [process.env.PRIVATE_KEY],
      network_id: network_id,
      chainId: network_id,
      allowUnlimitedContractSize: false,
      timeout: 1000000,
      isFork: true
    }
  },
  etherscan: {
    apiKey: {
      neonevm: "test"
    },
    customChains: [
      {
        network: "neonevm",
        chainId: 245022926,
        urls: {
          apiURL: "https://devnet-api.neonscan.org/hardhat/verify",
          browserURL: "https://devnet.neonscan.org"
        }
      }
    ]
  },
  solidity: "0.8.19"
};

