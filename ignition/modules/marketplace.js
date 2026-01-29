const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")
const { loadZkeyHash } = require("../../verifier/verifier.js")
const { loadConfiguration } = require("../../configuration/configuration.js")
const VaultModule = require("./vault.js")
const VerifierModule = require("./verifier.js")

function getDefaultConfig() {
  const zkeyHash = loadZkeyHash(hre.network.name)
  const config = loadConfiguration(hre.network.name)
  config.proofs.zkeyHash = zkeyHash
  return config
}

module.exports = buildModule("Marketplace", (m) => {
  const { vault, token } = m.useModule(VaultModule)
  const { verifier } = m.useModule(VerifierModule)
  const configuration = m.getParameter("configuration", getDefaultConfig())

  const marketplace = m.contract(
    "Marketplace",
    [configuration, vault, verifier],
    {},
  )

  let testMarketplace
  const config = hre.network.config

  if (config && config.tags && config.tags.includes("local")) {
    const { testVerifier } = m.useModule(VerifierModule)

    testMarketplace = m.contract(
      "TestMarketplace",
      [configuration, vault, testVerifier],
      {},
    )
  }

  return {
    marketplace,
    testMarketplace,
    vault,
    token
  }
})
