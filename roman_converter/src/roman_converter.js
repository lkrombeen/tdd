let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
let numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertToRoman(inputNum) {
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

function convertToInt(strVal) {
    let sum = 0;

    let reverseRomans = romans.slice().reverse();
    let reverseNumerals = numerals.slice().reverse();

    while (strVal.length > 0) {
        let didChange = false;
        for (let i = 0; i < reverseRomans.length; i++) {
            const roman = reverseRomans[i];
            const numRep = reverseNumerals[i];

            if (strVal.endsWith(roman)) {
                sum += numRep;
                strVal = strVal.slice(0, -roman.length)
                didChange = true;
            }
        }

        if (!didChange) {
            return -1
        }
    }

    return sum
}

module.exports = [convertToRoman, convertToInt]