const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/SmartContractWallet.sol/SmartContractWallet.json");

// console.log("\nThe contract ABI is as below. \n -------------------")
// console.log(JSON.stringify(contract.abi));
// console.log("\n -------------------")

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const SmartContractWalletContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const balance = await SmartContractWalletContract.getBalance();
    console.log("\n\nThe SmartWallet has: " + balance + "GWEI");

    console.log("\n       Withdrawing 20000 GWEI now...");
    const tx = await SmartContractWalletContract.withdraw("20000");
    await tx.wait();

    console.log("\n\nSuccessfully called the withdraw funciton on the smart contract!!")
    const newbalance = await SmartContractWalletContract.getBalance();
    console.log("\n       Now the SmartWallet has: " + newbalance + "GWEI");
}

main();