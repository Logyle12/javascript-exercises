const removeFromArray = function(array, ...itemsToRemove) {
    // Loop through each item in the itemsToRemove array
    for (const item of itemsToRemove) {
        let index; // Declare a variable to hold the index of the current item
        
        // Continue looping as long as the item is found in the array
        while ((index = array.indexOf(item)) !== -1) {
            // Remove the item at the found index
            array.splice(index, 1);
        }
    }

    // Return the modified array after all specified items have been removed
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
