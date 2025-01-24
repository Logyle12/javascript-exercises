const palindromes = function (text) {
    const textTokens = text.toLowerCase().split(/\W|()/g);
    const cleanedText = textTokens.join('');
};

// Do not edit below this line
module.exports = palindromes;
