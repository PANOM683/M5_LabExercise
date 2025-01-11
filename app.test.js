const supertest = require("supertest");
const app = require("./app");

describe("test the get endpoint of /add", () => {
  let num1 = 2;
  let num2 = 3;

  test("calling /add to add numbers", () => {
    return supertest(app)
      .get(`/calculator/add?num1=${num1}&num2=${num2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe(num1 + num2);
      });
  });
});
