import React,{useState,createContext}from 'react'

export type AuthUser ={
    name:string,
    email:string
}

type ContextType = {
    user:AuthUser|null,
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type ContextProps = {
    children :React.ReactNode
}

export const UserContext = createContext<ContextType | null>(null)

export const UserContextProvider = ({children}:ContextProps)=>{
    const [user,setUser] = useState<AuthUser | null>(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}