pragma solidity 0.6.12;

contract Token {
    function mint(uint32 tokens) external {}

    function transfer(uint32 amount, address to) external {}

    function balanceOf(address addr) public view returns (uint32) {}
}
