require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-ignition-ethers")

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  mocha: {
    bail: true,
    slow: 200,
    timeout: 30 * 1000,
  },
  namedAccounts: {
    deployer: { default: 0 },
  },
  networks: {
    hardhat: {
      tags: ["local"],
      allowBlocksWithSameTimestamp: true,
      gas: "auto",
    },
    localhost: {
      tags: ["local"],
    },
    disttestnetwork: {
      url: `${process.env.DISTTEST_NETWORK_URL}`,
    },
    testnet: {
      url: process.env.ARCHIVIST_TESTNET_URL
        ? `${process.env.ARCHIVIST_TESTNET_URL}`
        : `https://sepolia-rollup.arbitrum.io/rpc`,
      chainId: 421614,
      accounts: process.env.ARCHIVIST_TESTNET_PRIVATE_KEY
        ? [process.env.ARCHIVIST_TESTNET_PRIVATE_KEY]
        : [],
    },
  },
}
