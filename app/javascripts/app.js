// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import { default as $ } from 'jquery';



/*
 * When you compile and deploy your contract,
 * truffle stores the abi and deployed address in a json
 * file in the build directory. We will use this information
 * to setup a contract abstraction. We will use this abstraction
 * later to create an instance of the contract.
 * Compare this against the index.js from our previous tutorial to see the difference
 * https://gist.github.com/maheshmurthy/f6e96d6b3fff4cd4fa7f892de8a1a1b4#file-index-js
 */

import contract_artifacts from '../../build/contracts/Purchase.json'

var Contract = contract(contract_artifacts);

window.getBalance = function(){     
    Contract.deployed().then(instance => {
      instance.getBalance().then( result => {
          $("#balance").html(result.c[0]/10000)
        });
    });
}



window.payIn = function(){
    Contract.deployed().then(instance => {
      var amount = $("#amount").val()
      console.log('payIn')
      instance.payIn({from: web3.eth.accounts[0], value: web3.toWei(1, 'ether') })
    });
}


window.payoutToSeller = function(){
      Contract.deployed().then(instance => {
        instance.payoutToSeller({from: web3.eth.accounts[0]}).then(result => {
          console.log(result)
        });
    });
}




$( document ).ready(function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  Contract.setProvider(web3.currentProvider);
});