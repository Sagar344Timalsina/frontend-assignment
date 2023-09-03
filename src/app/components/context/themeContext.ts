import { createContext, useContext } from "react";

export const themeContext = createContext<boolean | undefined>(undefined);


export function useThemeContext(){
    const theme =useContext(themeContext);
    if (theme === undefined){
        throw new Error("Theme context is not within provider");
    }
    return theme

}