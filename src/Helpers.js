
/**
 * Make a new draw of subet numbers from a set range
 *
 * @param {Number} subset
 * @param {Number} set
 */
function makeDraw(subset, set) {
    var numbers = [];

    while(numbers.length < subset) {
        numbers.push(drawNumber(numbers, set));
    }

    return numbers;
}

/**
 * Generate a number in a givven range which is not already in the numbers array
 *
 * @param {Array} numbers
 * @param {Number} maxNumber
 */
function drawNumber(numbers, maxNumber) {
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var number;
    do {
        number = getRandomArbitrary(1, maxNumber);
    }
    while(numbers.indexOf(number) !== -1)

    return number;
}

export { makeDraw };