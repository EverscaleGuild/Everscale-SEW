async function gameDeploy(locklift) {
  const Game = await locklift.factory.getContract('Game')
  const [keyPair] = await locklift.keys.getKeyPairs()
  return await locklift.giver.deployContract({
    contract: Game,
    constructorParams: {},
    initParams: {},
    keyPair,
  }, locklift.utils.convertCrystal('10.053156003', 'nano'))
}

module.exports = gameDeploy;
