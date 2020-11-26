pragma solidity 0.6.12;

contract ResisterColorDuo {
    mapping(string => string) resisterToNumbers;

    constructor() public {
        setup();
    }

    function setup() internal {
        resisterToNumbers["black"] = "0";
    }

    function getNumberFromResister(string memory first, string memory second)
        external
        view
        returns (string memory)
    {
        return "";
    }
}
