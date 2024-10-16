const sumAll = function(m, n) {
    // Helper function to validate that the number is a non-negative integer
    const isValid = num => num >= 0 && Number.isInteger(num);

    // Check if both m and n are valid
    if (isValid(m) && isValid(n)) {
        

    } else {
        // Return an error message if either m or n is invalid
        return "ERROR";
    }
};


// Do not edit below this line
module.exports = sumAll;
