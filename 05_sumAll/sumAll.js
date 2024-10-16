const sumAll = function(m, n) {
    // Helper function to validate that the number is a non-negative integer
    const isValid = num => num >= 0 && Number.isInteger(num);

    // Check if both m and n are valid
    if (isValid(m) && isValid(n)) {
        
        // Determine the starting point (the smaller value)
        let start = Math.min(m, n);
        // Determine the ending point (the larger value)
        let end = Math.max(m, n);
        // Initialize sum to accumulate the total
        let sum = 0;

        // Loop from start to end, inclusive
        while (start <= end) {
            // Add the current value of start to the sum
            sum += start;
            // Increment start for the next iteration
            ++start;
        }

        // Return the computed sum
        return sum;
    } else {
        // Return an error message if either m or n is invalid
        return "ERROR";
    }
};


// Do not edit below this line
module.exports = sumAll;
