// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  >=0.5.0 <0.9.0;
import "hardhat/console.sol";
contract  Token {
    string public name='Hardhat Token';
    string public symbol='HHT';
    uint public supply=10000;
    address public owner;

//mapping which address has how many token that mapping will tell 

    mapping (address => uint) balances;
//remember this constructor is only invoked once when deployed
    constructor (){
        //all the supplies are deployed on the contract address who is deploying
        balances[msg.sender]=supply;
        //then setting owner rights
        owner=msg.sender;
    }
//transfer token abd requirement that must have token available already
    function  transer(address _to,uint _amount) external {
        require(balances[msg.sender]>=_amount,'Not enough tokens');
        balances[msg.sender]-=_amount;
        balances[_to]+=_amount;
    }
//this is view only function
    function balancesOf(address _account) external view returns(uint){
        return balances[_account];

    }
}