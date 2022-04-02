const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/SmartContractWallet.sol/SmartContractWallet.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const SmartContractWalletContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);




async function main() {
    console.log("\n\n The public address of current owner is 0xeb2731386E2De605cf7Bc01CaB41b347CA0aa98D This address is read manually from etherscan, perhaps want to find the way to read the blockchain or state varaiable of the contract.)");

    console.log("\n       Changing the owner of this contract to 0x244b24014a94b1bf5C6B676bE4D554c64085b106");
    const tx = await SmartContractWalletContract.setOwner("0x244b24014a94b1bf5C6B676bE4D554c64085b106");
    await tx.wait();

    console.log("\n       Changed the owner of this contract to 0x244b24014a94b1bf5C6B676bE4D554c64085b106");
}

main();