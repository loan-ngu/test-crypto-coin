const treecoin = artifacts.require('./TreeCoin.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('TreeCoin', (accounts) => {
  let contract

  before(async () => {
    contract = await treecoin.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = contract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await contract.name()
      assert.equal(name, 'TreeCoin')
    })

    it('has a symbol', async () => {
      const symbol = await contract.symbol()
      assert.equal(symbol, 'TREECOIN')
    })

  })

})
