import React, { createContext, useEffect, useState } from 'react'
export const tokenContext = createContext()
const TokenAuth = ({children}) => {
    const [authorizedUser, setAuthorizedUser] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setAuthorizedUser(true)
        }else{
            setAuthorizedUser(false)
        }
    }, [authorizedUser])
  return (
    <div>
          <tokenContext.Provider value={{ authorizedUser, setAuthorizedUser }}>
            {children}
       </tokenContext.Provider>
    </div>
  )
}

export default TokenAuth