
import { useEffect } from 'react';
import './App.css';
import contract from './contracts/sjc.json';

const contractAddress = "0xF1DDA9F1527322aE55F187E71f53a1743ee367Bc";
const abi = contract.abi;

function App() {

  const checkWalletIsConnected = () => { }

  const connectWalletHandler = () => { }

  const mintNftHandler = () => { }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className='main-app'>
      <h1>stoned jets club</h1>
      <div>
        {connectWalletButton()}
      </div>
    </div>
  )
}

export default App;