

//---------------------------------------------
// L  O  C  A  L



local blockchain up:
$ node_modules/.bin/ganache-cli

web3.eth.accounts[0] MAKES CONTRACT:
$ truffle console
$ compile
$ migrate	

new tab serve frontend:
npm run dev

__________________________________________________________________________________



To check contract balance (should be 0):
Purchase.deployed().then(instance => instance.getBalance())

Check [0] balance:
web3.eth.getBalance(web3.eth.accounts[0])

Check [1] balance:
web3.eth.getBalance(web3.eth.accounts[1])


web3.eth.accounts[1] SENDS TO CONTRACT:
Purchase.deployed().then(function(instance){return instance.confirmPurchase({from: web3.eth.accounts[1], value: web3.toWei(10, 'ether')})})


web3.eth.accounts[1] RELEASES FROM CONTRACT:
Purchase.deployed().then(function(instance){return instance.confirmReceived({from: web3.eth.accounts[1]})})



Check [0] balance:
web3.eth.getBalance(web3.eth.accounts[0])

Check [1] balance – should have 10 ether more
web3.eth.getBalance(web3.eth.accounts[1])



works on testrpc without these lines:
condition(msg.value == (2 * value))










//---------------------------------------------
// R I N K E B Y



// blockchain sync 
geth --rinkeby --rpc --rpcapi db,eth,net,web3,personal

//in new tab, compile and deploy contract
truffle console --network rinkeby

// if you don't have an account:
// x = web3.personal.newAccount('pw')
// web3.eth.getBalance("yourAcctNumber")
// web3.eth.accounts

web3.personal.unlockAccount("yourAcctNumber", 'pw', 15000)

truffle migrate --network rinkeby

to check:
Purchase.deployed().then(function(contractInstance) {contractInstance.getBalance()})

// new tab frontend serve:
npm run dev

//to deploy:
// npm run build, copy app.js and index.html to root folder, github push master.

