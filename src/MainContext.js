import React, { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from './style/Themes';

//Defining the context
const MainContext = createContext();

//Creating a hook
export function useMainContext() {
    return useContext(MainContext)
}

export default function MainContextProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    const themeToggler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    const value = {
        theme,
        darkTheme,
        lightTheme,
        themeToggler
    }

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    )
}