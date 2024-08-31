// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");
  const supplyChain = await SupplyChain.deploy();

  // Wait for the contract to be deployed
  await supplyChain.waitForDeployment();

  // Log the address of the deployed contract
  console.log(`SupplyChain contract deployed to: ${supplyChain.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
