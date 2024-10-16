const leapYears = function(leapYear) {

// Function to determine if a given year is a leap year
const isLeapYear = year => 
    // A year is a leap year if it is divisible by 4
    year % 4 == 0 && 
    // But not if it is divisible by 100, unless it is also divisible by 400
    year % 100 != 0 || 
    year % 400 == 0; 

// Check if the provided year (leapYear) is a leap year
if (isLeapYear(leapYear)) {
    // If it is a leap year, return true
    return true;
} else {
    // If it is not a leap year, return false
    return false;
}

};

// Do not edit below this line
module.exports = leapYears;
