import { createContext} from "react";
import { theme } from "./theme";

type contextProp = {
    children : React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ContextProvider = ({children}:contextProp) =>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}