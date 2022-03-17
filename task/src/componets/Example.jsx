import React, {useEffect, useState} from "react";
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk';
import { formatEther } from "ethers/lib/utils";

const Example = () => {
    const { sdk, connected, safe } = useSafeAppsSDK();

    const [info, setInfo] = useState()
    const [safeAddress, setSafeAddress] = useState();
    const [owners, setOwners] = useState([]);
    const [balance, setBalance] = useState()

    const getBalance = async (address) => {
        let result = await sdk.eth.getBalance([address]);
        let deciaml = await formatEther(result);
        setBalance(deciaml);
    }

    const loadInfo = async () => {
        let info = await sdk.safe.getInfo();
        if(info){
            getBalance(info.safeAddress);
            setSafeAddress(info.safeAddress);
            setOwners(info.owners);
        }
    }

    useEffect(() => {
        loadInfo();
    },[])
    const commonClass = `
        w-full
    `;
    return (
        <div 
        className={`
        text-black bg-[#EDEDED] w-fit px-16 py-16 rounded-lg
        w-fit h-fit absolute top-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 
        flex flex-col flex-nowrap space-y-8
        `}>
            <div className={commonClass}>
                <label>Safe Address:</label>
                <div>{safeAddress}</div>
            </div>
            <div className={commonClass}>
                <label>Safe Balance:</label>
                <div>{`${balance} ETH`}</div>
            </div>
            <div className={commonClass}>
                <label>Approvers:</label>
                {
                    owners.map((address, index)=>(
                        <div key={address}>{`${index + 1} - ${address}`}</div>
                    ))
                }
            </div>

        </div>
    );
}

export default Example