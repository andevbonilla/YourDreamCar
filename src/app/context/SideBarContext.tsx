"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'

interface SideBarContextProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>
}

const SideBarContext = createContext<SideBarContextProps>({
    active: false,
    setActive: ():boolean => false
})

export const SideBarContextProvider = ({children}:any) => {

    const [active, setActive] = useState(false)

    return (
        <SideBarContext.Provider value={{active, setActive}}>
            {children}
        </SideBarContext.Provider>
    )

}

export const useSideBarContext = () => useContext(SideBarContext)