const response = pm.response;

pm.test("Status code is 200", () => {
  pm.response.code.to.equal(200);
});

pm.test("Response has a title field", () => {
  const json = pm.response.json();
  pm.expect(json).to.have.property("title");
});

// TODO: add more checks once I know what the responses look like
// not sure if I should check the whole body shape in one test or split it
