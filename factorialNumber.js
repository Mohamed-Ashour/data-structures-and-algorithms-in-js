
const calcFactorial = function (num) {
    if (num === 1) return 1
    return num * calcFactorial(num-1)
}

console.log(calcFactorial(2));
console.log(calcFactorial(5));

