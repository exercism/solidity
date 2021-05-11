pragma solidity 0.6.12;

contract Token {
    mapping(address => uint256) balances;

    function mint(uint256 tokens) external {
        require(tokens > 0, "cannot mint 0 tokens");
        balances[msg.sender] += tokens;
    }

    function transfer(uint256 value, address to) external {
        // test that not transferring to zero address
        require(to != address(0), "transfer to address 0 is not allowed");
        // check that the value being sent is less than or equal to whats owned by msg.sender
        require(value <= balances[msg.sender], "cannot send more than what you own");
        // check for overflow
        require(value + balances[to] >= balances[to], "overflow detected");

        balances[msg.sender] -= value;
        balances[to] += value;
    }

    function balanceOf(address addr) public view returns (uint256) {
        return balances[addr];
    }
}
