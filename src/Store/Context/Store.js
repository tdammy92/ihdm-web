import { createContext,useContext } from "react";





export  function getUser(){

    const ls = JSON.parse(localStorage.getItem('admin'))

    if (ls) {
        return ls
    } else {
        return null
    }
    
}


export const InitialState = {
   
    User: getUser() || null,
    
    
}

export const GlobalStore = createContext(InitialState);


const Store = ()=>useContext(GlobalStore); 
export default  Store;