require("@nomicfoundation/hardhat-toolbox");


const ALCHEMY_API_KEY = "yMw_TMtof3ep8OmZh8QyglXhwmUEKYKU";
const SEPOLIA_PRIVATE_KEY = "83d6867a66f9fca9cae598055c7f5315281d4feb151ee763fb9b2bb539267aad";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`, // the node URL
      accounts: [SEPOLIA_PRIVATE_KEY], // the accounts accessible via `ethers`
    },
  }
};


