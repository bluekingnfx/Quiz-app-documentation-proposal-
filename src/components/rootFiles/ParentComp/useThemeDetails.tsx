import { useContext } from "react"
import { ColorThemeContext } from "../../../context/ThemeContext"
import { ThemeDeciderContext } from "../../../context/ThemeDeclarationContext"


export const useThemeDetails = () => {
    const ctx = useContext(ThemeDeciderContext)
    const themePalette = useContext(ColorThemeContext)
    if(ctx === null) throw new Error("Should never happen, happening bcz of themeDeciderContext")
    const {theme,themeSetter} = ctx 
    return {theme,themeSetter,themePalette}
}