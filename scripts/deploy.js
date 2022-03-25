const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('showoffNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/1.json")
  // Wait for it to be mined.
  await txn.wait()
  console.log("Minted NFT #1")

  txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/2.json")
  // Wait for it to be mined.
  await txn.wait()
  console.log("Minted NFT #2")

  txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/3.json")
  await txn.wait()
  console.log("Minted NFT #3")

  txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/4.json")
  await txn.wait()
  console.log("Minted NFT #4")

  txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/5.json")
  await txn.wait()
  console.log("Minted NFT #5")

  txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/6.json")
  await txn.wait()
  console.log("Minted NFT #6")

  txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/7.json")
  await txn.wait()
  console.log("Minted NFT #7")

  txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/8.json")
  await txn.wait()
  console.log("Minted NFT #8")

  txn = await nftContract.mintNFT("https://ipfs.io/ipfs/QmQC38hcL4NkbefVFLFP2tCFXaKVRuUQHtVWrkw1V7ip7m/9.json")
  await txn.wait()
  console.log("Minted NFT #9")
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();