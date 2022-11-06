import { createContext, useState } from "react";

export const Maps=createContext()

const Context=({children})=>{
  const[origin,setorigin]=useState(null)
  const[destination,setdestination]=useState(null)
  const[time,settime]=useState(null)
    return(
        <Maps.Provider value={{
            origin,
            setorigin,
            destination,
            setdestination,
            time,
            settime
            }}> 
          {children}
        </Maps.Provider>
    )
}

export default Context