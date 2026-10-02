class AverageCalculator {
    constructor() {
        this.total = 0;
        this.count = 0;
    }

    /**
     * Adds a number to the running total
     * and returns the current average.
     *
     * @param {number} value - Number to add.
     * @returns {number} Current average.
     */
    addNumber(value) {
        this.total += value;
        this.count += 1;

        return this.total / this.count;
    }

    /**
     * Resets the calculator state.
     *
     * @returns {void}
     */
    reset() {
        this.total = 0;
        this.count = 0;
    }
}

module.exports = AverageCalculator;