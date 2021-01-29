pragma solidity 0.6.12;

contract ResisterColorDuo {
    mapping(string => string) resisterToNumbers;

    constructor() public {
        setup();
    }

    function setup() internal {
        resisterToNumbers["black"] = "0";
        resisterToNumbers["brown"] = "1";
        resisterToNumbers["red"] = "2";
        resisterToNumbers["orange"] = "3";
        resisterToNumbers["yellow"] = "4";
        resisterToNumbers["green"] = "5";
        resisterToNumbers["blue"] = "6";
        resisterToNumbers["violet"] = "7";
        resisterToNumbers["grey"] = "8";
        resisterToNumbers["white"] = "9";
    }

    function getNumberFromResister(string memory first, string memory second)
        external
        view
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    resisterToNumbers[first],
                    resisterToNumbers[second]
                )
            );
    }
}
