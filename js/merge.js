function MergePrivateKeyToPublicKey(privateKey){
  wallet = new ethers.Wallet(privateKey);
  publicKey = wallet.publicKey;
  return publicKey;
}