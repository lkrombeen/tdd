const assert = require("assert")

function convert(input){
    return "I";
}

describe("Converts integers into roman numbers", () => {
    it('should convert 1 into I', function () {
        assert.strictEqual(convert(1), "I")
    });
})