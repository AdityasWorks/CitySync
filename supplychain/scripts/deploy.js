const hre = require("hardhat");
const dotenv = require('dotenv');
const fs = require('fs');

const folders = [
  '../backend',
  '../SIH_2024_Main_Website',
  '.'
];


async function main() {
  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");
  const supplyChain = await SupplyChain.deploy();

  await supplyChain.waitForDeployment();

  console.log(`SupplyChain contract deployed to: ${supplyChain.target}`);

  // update .env in each folder
  folders.forEach(folder => {
    const envFilePath = `${folder}/.env`;
    const envConfig = dotenv.parse(fs.readFileSync(envFilePath));
    envConfig.VITE_CONTRACT_ADDRESS = supplyChain.target;
    fs.writeFileSync(envFilePath, Object.keys(envConfig).map(key => `${key}="${envConfig[key]}"`).join('\n'));
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
