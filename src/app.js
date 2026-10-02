const express = require("express");
const AverageCalculator = require("./average");

const app = express();
const averageCalculator = new AverageCalculator();

app.use(express.json());

/**
 * Handles POST /average requests.
 *
 * @param {import("express").Request} req - HTTP request.
 * @param {import("express").Response} res - HTTP response.
 * @returns {void}
 */
app.post("/average", (req, res) => {
    const { number } = req.body;

    if (typeof number !== "number" || !Number.isFinite(number)) {
        return res.status(400).json({
            error: "number must be a valid number"
        });
    }

    const average = averageCalculator.addNumber(number);

    return res.status(200).json({
        average
    });
});

module.exports = app;