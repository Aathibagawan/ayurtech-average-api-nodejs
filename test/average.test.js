const request = require("supertest");
const app = require("../src/app");

describe("POST /average", () => {
    test("should accept a valid number", async () => {
        const response = await request(app)
            .post("/average")
            .send({ number: 100 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("average");
    });

    test("should reject a string", async () => {
        const response = await request(app)
            .post("/average")
            .send({ number: "hello" });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
            "number must be a valid number"
        );
    });

    test("should reject a missing number", async () => {
        const response = await request(app)
            .post("/average")
            .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe(
            "number must be a valid number"
        );
    });

    test("should reject Infinity", async () => {
        const response = await request(app)
            .post("/average")
            .send({ number: null });

        expect(response.statusCode).toBe(400);
    });
});