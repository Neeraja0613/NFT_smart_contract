import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("NftCollection");

  const nft = await NFT.deploy("MyNFT", "MNFT", 10000);

  await nft.waitForDeployment();

  console.log("NFT deployed at:", nft.target);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
