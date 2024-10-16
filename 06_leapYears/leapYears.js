const leapYears = function(leapYear) {

// Function to determine if a given year is a leap year
const isLeapYear = year => 
    // A year is a leap year if it is divisible by 4
    year % 4 == 0 && 
    // But not if it is divisible by 100, unless it is also divisible by 400
    year % 100 != 0 || 
    year % 400 == 0; 



};

// Do not edit below this line
module.exports = leapYears;
