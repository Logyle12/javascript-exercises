const fibonacci = function(n) {
    const num = parseInt(n);
    const sequence = [1, 1];
    for (let i = 1; i <= num; i++) {
        if (num  <=2) {
            break;
        }
        const nextNumber = sequence[i - 1] + sequence[i];
        sequence.push(nextNumber);
    }
    
    return n > 0 ? sequence[num - 1] : n == 0 ? 0 : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
