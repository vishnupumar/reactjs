import { useState, createContext } from "react";

 const myContext = createContext();

export default myContext;

export function ContextProvider({children}){
    
    const [data, setData ] = useState({});
    
    const addData = (userData)=>{
        setData(userData)
    }
    return (
    <myContext.Provider value={{data, addData}}>
        {children}
    </myContext.Provider>
    )
}



