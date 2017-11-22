pragma solidity ^0.4.4;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';
import 'zeppelin-solidity/contracts/lifecycle/Destructible.sol';

contract ZainCoin is StandardToken, Destructible {
    string public name = "ZainCoin";
    string public symbol = "ZCC";
    uint public decimals = 0;
    uint public INITIAL_SUPPLY = 10000000000; // 10 billion coins;
    
    function ZainCoin() {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }

    function changeName(string newname) onlyOwner public {
        name = newname;
    }

    function changeSymbol(string newsymbol) onlyOwner public {
        symbol = newsymbol;
    }
}