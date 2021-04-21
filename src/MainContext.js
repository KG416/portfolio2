import React, { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from './style/Themes';

//Defining the context
const MainContext = createContext();

//Creating a hook to reach the context in a simple way I guess?
export function useMainContext() {
    return useContext(MainContext)
}

//Not sure what this children guy is doing here?
export default function MainContextProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    const themeToggler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
        console.log("theme state is now = " + theme);
    }

    //Everything I want to be able to reach anywhere in the project, I put inside this object
    const value = {
        theme,
        darkTheme,
        lightTheme,
        themeToggler
    }

    //Returning the provider with value as prop
    return (
        <MainContext.Provider value={value}>
            {/* Not sure what this children guy is doing? */}
            {children}
        </MainContext.Provider>
    )
}