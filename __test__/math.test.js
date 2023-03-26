const { NewContext } = require("typescript-sdk/dist/mock/mock");
const request = require("supertest");
const app = require("../app");
const assert = require("assert");
const connection = require("../db/conn");

describe("store retrieval", () => {
  beforeAll(async () => {
    NewContext({Mode: "record", Name: "mock-8-1"})
    await connection();
  });

  it("returns store", async () => {
    const response = await request(app)
      .post("/stores/login")
      .send({
        email: "jyotirmoyroy649@gmail.com",
        password: "roy649@gmail.com",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        assert(response._body.message.localeCompare("Logged in Successfully!"));
      });
  });
});