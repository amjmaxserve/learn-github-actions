const request = require("supertest");
const app = require("../src/app");

describe("API Tests", () => {

  test("GET / should return success message", async () => {

    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("GitHub Actions Demo Node App 🚀");

  });

  test("GET /health should return OK", async () => {

    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("OK");

  });

});
