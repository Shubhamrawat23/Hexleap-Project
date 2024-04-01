import React, { createContext, useContext, useState } from "react";

const DarkContext = createContext()


export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")
    return (
        <DarkContext.Provider value={{theme, setTheme}}>
            {children}
        </DarkContext.Provider>
    )
}

export default function useDark(){
    return useContext(DarkContext)
}