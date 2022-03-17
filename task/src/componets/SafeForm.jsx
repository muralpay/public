import React, { useContext, useState, useEffect } from "react";
import { SafeContext } from "../contexts/SafeContext";

const SafeForm = () =>{
    const {currrentAccount, accounts } = useContext(SafeContext);

    const [name, setName] = useState();
    const [addresses, setaddresses] = useState([currrentAccount, ""]);
    const [threshold, setThreshold] = useState(2);

    const handelName = (e) =>{
        setName(e.target.value);
    }

    const handelAddressess = (e, index) =>{
        let value = e.target.value
        setaddresses(()=> addresses.map((adr, i) => index == i ? value : adr))
        console.log(addresses);
    }

    const handelThreshold = (e) =>{
        setThreshold(Number(e.target.value));
    }

    const increaseAddressField = () => {
        console.log("INR")
        setaddresses([...addresses, ""]);
    }

    useEffect(() => {
       console.log("Upadeted Current Account") ;
       setaddresses(()=> addresses.map((adr, i) => accounts[i] || adr))
    }, [accounts])


    const inputStyle = "mb-4 py-2 px-4 outline-none rounded-lg h-16 w-full "
    return (
        <div className="sd:w-full md:w-1/2 h-inherit  h-full overflow-y-auto p-8">
             <div className="w-full bg-[#EDEDED] px-8 py-8 rounded-lg shadow-md relative overflow-auto ease-in ">
                <p className="text-3xl mb-4">Create Safe</p>
                <input type="text" id="name" className={inputStyle} placeholder="Safe Name" value={name || ""} onChange={handelName} />
                {

                    addresses.map((adrs,index)=>(
                        <input 
                        key={index}
                        className={inputStyle}
                        type="text" 
                        placeholder={`Address ${index + 1}`}
                        // defaultValue={adrs}
                        value={addresses[index]}
                        onChange={ (e) => handelAddressess(e, index)} 
                        />
                    ))
                }
                
                <div className="flex flex-row bg-transparent justify-center items-center mb-4 py-4 px-8 hover:bg-black/10 cursor-pointer rounded-lg" onClick={increaseAddressField}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="ml-4">Add Another Owner</p>
                </div>
                <input type="number" name="threshold" className={inputStyle + " w-20"} min={2} onChange={handelThreshold} max="10" defaultValue={2} />
                <input type="button" name="submit" value="Submit" className="hover:bg-black/10 cursor-pointer rounded-lg w-fit py-4 px-16 flex self-center border border-black" onClick={(e) => console.log(e)} />
            </div>
        </div>
       
    );
}

export default SafeForm;