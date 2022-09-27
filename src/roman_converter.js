let romans = ["M", "CM", "D", "C", "XC", "L", "X", "IX", "V", "IV", "I"];
let numerals = [1000, 900, 500, 100, 90, 50, 10, 9, 5, 4, 1];

function convert(inputNum) {
    let output = "";
    let index = 0;

    while (inputNum > 0) {
        const roman = romans[index];
        const numeral = numerals[index];
        if (inputNum >= numeral) {
            inputNum -= numeral;
            output += roman
        } else {
            index += 1
        }
    }

    return output
}

module.exports = [convert]