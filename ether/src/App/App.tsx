import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units'

function App() {
  const {account, activateBrowserWallet, deactivate} = useEthers()
  const etherBalance = useEtherBalance(account)

  const isConnected = account != undefined

  const connectDisconnect = ()=> {
    if(isConnected){
      deactivate()
    }
    else{
      activateBrowserWallet() 
    }
  }

  return (
    <div className="App">
      <header className={`App-header ${isConnected ? "connected" : ""}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="account-info">
          <div className='balance'>
          {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
          </div>
          <div className="connection" onClick={connectDisconnect}>
            { isConnected ? "Disonnect" : "Connect"}
          </div>
        </div>
      </header>
    </div>
  );


}

export default App;
