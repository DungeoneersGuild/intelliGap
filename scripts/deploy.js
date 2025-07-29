const { ethers } = require("hardhat");

async function main() {
  const Token = await ethers.getContractFactory("GovernanceToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  console.log(`GovernanceToken deployed: ${await token.getAddress()}`);

  const Governor = await ethers.getContractFactory("MyGovernor");
  const governor = await Governor.deploy(await token.getAddress());
  await governor.waitForDeployment();
  console.log(`Governor deployed: ${await governor.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
