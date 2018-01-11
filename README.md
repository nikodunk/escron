
node_modules/.bin/ganache-cli

[0] or coinbase does:


truffle console
compile
migrate	

npm run dev

__________________________________________________________________________________

web3.eth.accounts[1] does:

To check contract balance:
	
Purchase.deployed().then(instance => instance.getBalance())

Check [0] balance:
web3.eth.getBalance(web3.eth.accounts[0])

Check [1] balance:
web3.eth.getBalance(web3.eth.accounts[1])


SEND TO CONTRACT:
Purchase.deployed().then(function(instance){return instance.confirmPurchase({from: web3.eth.accounts[1], value: web3.toWei(10, 'ether')})})


RELEASE FROM CONTRACT:
Purchase.deployed().then(function(instance){return instance.confirmReceived({from: web3.eth.accounts[1]})})



Check [0] balance:
web3.eth.getBalance(web3.eth.accounts[0])

Check [1] balance – should have 10 ether more
web3.eth.getBalance(web3.eth.accounts[1])



works on testrpc without these lines:
condition(msg.value == (2 * value))



NEXT STEP: TEST RINKEBY