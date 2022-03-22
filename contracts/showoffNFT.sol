pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// We inherit the contract we imported. This means we'll have access
// to the inherited contract's methods.
contract showoffNFT is ERC721URIStorage {
  // Magic given to us by OpenZeppelin to help us keep track of tokenIds.
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  // We need to pass the name of our NFTs token and its symbol.
  constructor() ERC721 ("IchiroNFT", "ICHIRO") {
    console.log("Just deployed the smart contract to show off!!");
  }

  // A function our user will hit to get their NFT.
  function mintNFT() public {
     // Get the current tokenId, this starts at 0.
    uint256 newItemId = _tokenIds.current();

     // Actually mint the NFT to the sender using msg.sender.
    _safeMint(msg.sender, newItemId);

    // Set the NFTs data.
    _setTokenURI(newItemId, "ipfs://QmYLNt51d4dFPDXiEF8ZzUBTXzRv1dFws8mDTrSwuPLBin");

    // Increment the counter for when the next NFT is minted.
    _tokenIds.increment();
  }
}