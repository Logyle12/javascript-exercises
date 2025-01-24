const palindromes = function (text) {
    const textTokens = text.toLowerCase().split(/\W|()/g);
    const cleanedText = textTokens.join('');
    const reversedText = textTokens.reverse().join('');
    return cleanedText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
