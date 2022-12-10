module.exports = function reverse (n) {
    const number = Math.abs(n);
    return number.toString().split("").reverse().join("");

}
