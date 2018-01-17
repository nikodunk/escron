

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




ADDRESSES:
Purchase.deployed().then(instance => instance.getBalance())
// web3.eth.accounts[0] = BUYER, escrow owner
Purchase.deployed().then(instance => instance.buyer.call())
// web3.eth.accounts[1] = SELLER
Purchase.deployed().then(instance => instance.seller.call())


CHECK BALANCES:
web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]).toNumber(), 'ether')
web3.fromWei(web3.eth.getBalance(web3.eth.accounts[1]).toNumber(), 'ether')


SEND ETHER FROM 0 TO CONTRACT:
Purchase.deployed().then(instance => instance.payIn({from: web3.eth.accounts[0], value: web3.toWei(10, 'ether') }))


PAY OUT ETHER FROM CONTRACT TO 1:
Purchase.deployed().then(instance => instance.payoutToSeller({from: web3.eth.accounts[0]}) )


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

	web3.personal.unlockAccount("0x2df219a1ae3845ab32a041499db27d4bfdb43876", 'password', 15000)

	compile
	migrate --reset

to check:


ADDRESSES:
Purchase.deployed().then(instance => instance.getBalance())
	// web3.eth.accounts[0] = BUYER, escrow owner
Purchase.deployed().then(instance => instance.buyer.call())
	// web3.eth.accounts[1] = SELLER
Purchase.deployed().then(instance => instance.seller.call())



CHECK BALANCES:
web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]).toNumber(), 'ether')
web3.fromWei(web3.eth.getBalance(web3.eth.accounts[1]).toNumber(), 'ether')



SEND ETHER FROM 0 TO CONTRACT:
Purchase.deployed().then(instance => instance.payIn({from: web3.eth.accounts[0], value: web3.toWei(10, 'ether') }))


PAY OUT ETHER FROM CONTRACT TO 1:
Purchase.deployed().then(instance => instance.payoutToSeller({from: web3.eth.accounts[0]}) )



// new tab frontend serve:
npm run dev

//to deploy:
// npm run build, copy app.js and index.html to root folder, github push master.



web3.eth.getTransaction()

