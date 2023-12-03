const { expect } = require("chai");

describe("ChainOfCustody", function () {
  let ChainOfCustody;
  let chainOfCustody;
  let owner, newOwner;
  const evidenceID = "0x123";
  const description = "Evidence Description";
  const row = "Evidence Row";

  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("ChainOfCustody");

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("should create evidence", async function () {
    await chainOfCustody.CreateEvidence(evidenceID, description, row);

    const evidence = await chainOfCustody.GetEvidence(evidenceID);
    expect(evidence.ID).to.equal(evidenceID);
    expect(evidence.owner).to.equal(owner.address);
    expect(evidence.creator).to.equal(owner.address);
    expect(evidence.description).to.equal(description);
    expect(evidence.taddr).to.deep.equal([owner.address]);
    expect(evidence.ttime).to.have.lengthOf(1);
    expect(evidence.evidenceArray).to.equal(row);
  });

  it("should transfer ownership", async function () {
    await chainOfCustody.CreateEvidence(evidenceID, description, row);
    await chainOfCustody.connect(owner).Transfer(evidenceID, newOwner.address);

    const evidence = await chainOfCustody.GetEvidence(evidenceID);
    expect(evidence.owner).to.equal(newOwner.address);
  });

  it("should remove evidence", async function () {
    await chainOfCustody.CreateEvidence(evidenceID, description, row);
    await chainOfCustody.connect(owner).RemoveEvidence(evidenceID);

    // Try to get evidence after removal
    await expect(chainOfCustody.GetEvidence(evidenceID)).to.be.revertedWith(
      "revert Evidence does not exist"
    );
  });
});
