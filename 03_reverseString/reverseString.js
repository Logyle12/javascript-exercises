const reverseString = function(string) {
    let reverseString = '';
    const stringArray = string.split("");

    for (let index = 0; index < string.length; index++) {
        reverseString += stringArray.pop(); 
    }

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
