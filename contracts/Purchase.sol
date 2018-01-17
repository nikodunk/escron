pragma solidity ^0.4.11;

contract Purchase {
    address public seller;
    address public buyer;
    address public arbiter;


    function Purchase(address _seller, address _arbiter) public {
        buyer = msg.sender;
        seller = _seller;
        arbiter = _arbiter;
    }

    function payIn() public payable {

    }

    /// Confirm that you (the buyer) received the item.
    /// This will release the locked ether.
    function payoutToSeller() public {
        if(msg.sender == buyer || msg.sender == arbiter ){
            seller.transfer(this.balance);
        }
    }

    function payoutToBuyer() public {
        if(msg.sender == seller || msg.sender == arbiter ){
            buyer.transfer(this.balance);
        }
    }

    function getBalance() public constant returns (uint) {
        return this.balance;
    }
}