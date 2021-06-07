// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

contract RockPaperScissors {

    bytes32 constant ROCK = "ROCK";
    bytes32 constant PAPER = "PAPER";
    bytes32 constant SCISSORS = "SCISSORS";

    mapping(address => bytes32) public choices;

    function play(bytes32 choice) external {
        require(choices[msg.sender] == bytes32(0), "played already"); // make sure player hasnt played before
        choices[msg.sender] = choice;
    }

    function evaluate(
        address alice,
        bytes32 aliceChoice,
        bytes32 aliceRandomness, // CHANGED - Randomness added which prevents the other user from correctly guessing the move of the other player
        address bob,
        bytes32 bobChoice,
        bytes32 bobRandomness // CHANGED - Randomness added which prevents the other user from correctly guessing the move of the other player
    ) external view returns (address) {
        // make sure the commitment of the choices hold - Player now reveals what their choice was and randomness can be made public at this point
        require(
            keccak256(abi.encodePacked(aliceChoice, aliceRandomness)) ==
                choices[alice], "alice choice doesnt match up"
        );

        // check that bob isn't trying to change their move and their choice was correct
        require(
            keccak256(abi.encodePacked(bobChoice, bobRandomness)) ==
                choices[bob], "bobs choice doesnt match up"
        );

        // same as before, its a draw if both users picked the same choice and same randomness, this is possible if their randomness was empty!
        if (aliceChoice == bobChoice) {
            return address(0);
        }

        if (aliceChoice == ROCK && bobChoice == PAPER) {
            return bob;
        } else if (bobChoice == ROCK && aliceChoice == PAPER) {
            return alice;
        } else if (aliceChoice == SCISSORS && bobChoice == PAPER) {
            return alice;
        } else if (bobChoice == SCISSORS && aliceChoice == PAPER) {
            return bob;
        } else if (aliceChoice == ROCK && bobChoice == SCISSORS) {
            return alice;
        } else if (bobChoice == ROCK && aliceChoice == SCISSORS) {
            return bob;
        }
    
}


}
