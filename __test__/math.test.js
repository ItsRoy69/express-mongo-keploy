const request = require('supertest');
const app = require("../app");
const assert = require("assert");

describe("store retrieval", () => {
  it("returns store", async () => {
    const res = await request(app)
      .post("/stores/login")
      .send({ email: "jyotirmoyroy@gmail.com", password: "abcd1234" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        assert(response._body.message.localeCompare("Logged in Successfully!"));
      });
  });
});