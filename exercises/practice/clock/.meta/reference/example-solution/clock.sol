// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

contract Clock {

    // every day has 24 hours, every hour has 60 minutes
    // every minute has 60 seconds and every second has 60 milliseconds
    uint constant DAY = 24 * 60 * 60 * 1000;

    function addThirtyDays(uint t) external pure returns (uint) {
        // every month has 30 days
        return t + (30 * DAY);
    }

    function addFiveYears(uint t) external pure returns (uint) {
        return t + (5 * 12 * 2629743 * 1000);
    }

    function subtractThirtyMinutes(uint t) external pure returns (uint) {
        return t - (30 * 60 * 1000);
    }

}
