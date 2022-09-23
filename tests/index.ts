import chai, { expect } from "chai";
import chaiHTTP from "chai-http";
chai.use(chaiHTTP);

describe("Get Route", () => {
  it("try to debug route", (done) => {
    chai
      .request("localhost:3000")
      .get("/")
      .send()
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
