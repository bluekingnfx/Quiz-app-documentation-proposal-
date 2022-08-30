import { Dispatch, SetStateAction } from "react"
import { themeInitialSetting } from "../../rootFiles/ParentComp/StepFunctions/useThemeLocalStorage"

export const ThemeChanger = (
    theme:themeInitialSetting,
    themeSetter:Dispatch<SetStateAction<themeInitialSetting>>
) => {
    const root:HTMLDivElement = document.querySelector("#root")!
    if(theme === "Light") {
        themeSetter("Dark")
        localStorage.setItem("NFXQuizThemeSetting","Dark")
        root.style.backgroundColor = "#03043b"
    }
    if(theme=== "Dark") {
        themeSetter("Light")
        localStorage.setItem("NFXQuizThemeSetting","Light")
        root.style.backgroundColor = "#fff"
    }
}