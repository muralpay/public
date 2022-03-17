import React, {useContext} from "react";
import { SafeContext } from "../contexts/SafeContext";


const Header = () => {
    const {isConnected, connectToWallet} = useContext(SafeContext);
    return (
        <div className="w-full flex justify-end items-center hover:opacity-80 absolute right-8 ">
            <div 
            className="bg-white text-black px-8 py-2 my-4 rounded-lg cursor-pointer"
            onClick={() => connectToWallet()}>
                {isConnected ? "Disconnect" : "Connect"}
            </div>
        </div>
    );
}

export default Header