Building your own cryptocurrency is hard, but what you can do instead is build your own token with solidity!

Building a token has many parts but for this exercise we will focus on the following:

- Mint
  The idea for mint function is to create tokens out of thin air, the catch is that an address should only be able to mint tokens for themselves and not for anyone else.

HINT: Take a look at global variables in solidity

- Transfer
  The transfer function should transfer your tokens to someone else, provided you have enough tokens and you are not sending to a zero address. Also take a look at if there are any arithmetics which are not safe in solidity.

- Balance
  The balanceOf function provides a way to read the balance of an address, the core of this exercise depends on how you store the balances of addresses.

For more information on tokens, read here:

[Tokens](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
