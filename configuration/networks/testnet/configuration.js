function asNumber(value) {
  return parseInt(value);
}

module.exports = {
  collateral: {
    repairRewardPercentage: asNumber(process.env.TESTNET_REPAIRREWARD ? process.env.TESTNET_REPAIRREWARD : 10),
    maxNumberOfSlashes: asNumber(process.env.TESTNET_MAXSLASHES ? process.env.TESTNET_MAXSLASHES : 2),
    slashPercentage: asNumber(process.env.TESTNET_SLASHPERCENTAGE ? process.env.TESTNET_SLASHPERCENTAGE : 20),
    validatorRewardPercentage: asNumber(process.env.TESTNET_VALIDATORREWARD ? process.env.TESTNET_VALIDATORREWARD : 20),
  },
  proofs: {
    period: asNumber(process.env.TESTNET_PERIOD ? process.env.TESTNET_PERIOD : 300),
    timeout: asNumber(process.env.TESTNET_TIMEOUT ? process.env.TESTNET_TIMEOUT : 60),
    downtime: asNumber(process.env.TESTNET_DOWNTIME ? process.env.TESTNET_DOWNTIME : 32),
    downtimeProduct: asNumber(process.env.TESTNET_DOWNTIMEPRODUCT ? process.env.TESTNET_DOWNTIMEPRODUCT : 37),
    zkeyHash: "",
  },
  reservations: {
    maxReservations: asNumber(process.env.TESTNET_MAXRESERVATIONS ? process.env.TESTNET_MAXRESERVATIONS : 3),
  },
  requestDurationLimit: asNumber(process.env.TESTNET_MAXDURATION ? process.env.TESTNET_MAXDURATION : 60*60*24*30) // 30 days
}
