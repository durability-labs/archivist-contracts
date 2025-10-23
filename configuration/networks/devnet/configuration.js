function asNumber(value) {
  return parseInt(value);
}

module.exports = {
  collateral: {
    repairRewardPercentage: asNumber(process.env.DEVNET_REPAIRREWARD ? process.env.DEVNET_REPAIRREWARD : 10),
    maxNumberOfSlashes: asNumber(process.env.DEVNET_MAXSLASHES ? process.env.DEVNET_MAXSLASHES : 2),
    slashPercentage: asNumber(process.env.DEVNET_SLASHPERCENTAGE ? process.env.DEVNET_SLASHPERCENTAGE : 20),
    validatorRewardPercentage: asNumber(process.env.DEVNET_VALIDATORREWARD ? process.env.DEVNET_VALIDATORREWARD : 20),
  },
  proofs: {
    period: asNumber(process.env.DEVNET_PERIOD ? process.env.DEVNET_PERIOD : 300),
    timeout: asNumber(process.env.DEVNET_TIMEOUT ? process.env.DEVNET_TIMEOUT : 60),
    downtime: asNumber(process.env.DEVNET_DOWNTIME ? process.env.DEVNET_DOWNTIME : 32),
    downtimeProduct: asNumber(process.env.DEVNET_DOWNTIMEPRODUCT ? process.env.DEVNET_DOWNTIMEPRODUCT : 37),
    zkeyHash: "",
  },
  reservations: {
    maxReservations: asNumber(process.env.DEVNET_MAXRESERVATIONS ? process.env.DEVNET_MAXRESERVATIONS : 3),
  },
  requestDurationLimit: asNumber(process.env.DEVNET_MAXDURATION ? process.env.DEVNET_MAXDURATION : 60*60*24*30) // 30 days
}
