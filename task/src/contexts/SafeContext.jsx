import React, {useState, useEffect} from "react";
import { ethers } from "ethers";

const { ethereum } = window;

const SafeContext = React.createContext();

const SafeContextProvider = ({children}) => {

    const [currrentAccount, setCurrrentAccount] = useState("");
    const [accounts, setAccounts] = useState([])
    const [isConnected, setIsConnected] = useState(false)

    const checkIfWallwtIsConnected = async () => {
        try {
            if (!ethereum) return;
            const accounts = await ethereum.request({ method: "eth_accounts"});
            getAccounts(accounts);
        } catch (error) {
            console.log(`Error - ${checkIfWallwtIsConnected.caller.name}: ${error}`);
        }
    }

    const accountListener = () =>{
        try {
            if (!ethereum) return;
            ethereum.on('accountsChanged', function (accounts) {
                getAccounts(accounts);
              })
        } catch (error) {
            console.log(`Error - ${checkIfWallwtIsConnected.caller.name}: ${error}`);
        }
    }

    const connectToWallet = async () => {
        try {
            if (!ethereum) return;
            const accounts = await ethereum.request({ method: "eth_requestAccounts"});
        } catch (error) {
            console.log(`Error - ${checkIfWallwtIsConnected.caller.name}: ${error}`);
        }
    }

    const getAccounts = (accounts) =>{
        // console.log("Accounts: ", accounts);
        if(accounts.length){
            setCurrrentAccount(accounts[0]);
            setAccounts(accounts);
            setIsConnected(true)
        }
        else{
            setCurrrentAccount();
            setAccounts([]);
            setIsConnected(false);
        }
    }

    useEffect(() => {
        checkIfWallwtIsConnected()
        accountListener()
    }, [])


    return (
        <SafeContext.Provider value={{currrentAccount, accounts, isConnected, connectToWallet}}>
            {children}
        </SafeContext.Provider>
    );
}

export { SafeContext, SafeContextProvider};

