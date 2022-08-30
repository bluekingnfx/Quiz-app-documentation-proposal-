
import React, { createContext } from "react"
import { useLocalStore } from "../components/rootFiles/ParentComp/StepFunctions/useThemeLocalStorage"
import { themeInitialSetting } from "../components/rootFiles/ParentComp/StepFunctions/useThemeLocalStorage"
export const ThemeDeciderContext = createContext<{
    theme:themeInitialSetting,
    themeSetter:React.Dispatch<React.SetStateAction<themeInitialSetting>>
}|null>(null)
export const ThemeDeciderContextWrapper = ({children}:{children:React.ReactNode}) => {
    const [theme,themeSetter] = useLocalStore()
    return <ThemeDeciderContext.Provider value={{
        theme:theme,themeSetter:themeSetter
    }} >
        {
            children
        }
    </ThemeDeciderContext.Provider>
}


