import { createContext, useContext, useState } from "react";

export const ThemeContex = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        const updatedTheme = theme == 'light' ? 'dark' : 'light';
        setTheme(updatedTheme);
    }
    return (
        <ThemeContex.Provider value={{ theme, toggleTheme }}>{children}</ThemeContex.Provider>
    )
}


export const useTheme = () => {
    return useContext(ThemeContex);

}