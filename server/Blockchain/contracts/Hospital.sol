pragma solidity ^0.4.24;

contract mycontract {
    uint256 oxygentnk;
    uint256 addcylndr;
    uint256 newset;

    constructor() public {
        oxygentnk = 0;
    }

    function get() public returns (uint256) {
        return oxygentnk;
    }

    function set(uint256 _value) public {
        oxygentnk = _value;
    }

    function setaddition(uint256 extracyl) public returns (uint256) {
        oxygentnk += extracyl;
        return oxygentnk;
    }

    function usedbed(uint256 _usedbed) public returns (uint256) {
        oxygentnk -= _usedbed;
        return oxygentnk;
    }
}
