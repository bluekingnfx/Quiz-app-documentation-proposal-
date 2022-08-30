import {useState} from "react";

export type themeInitialSetting = "Light"|"Dark"



export const useLocalStore = ():[themeInitialSetting,React.Dispatch<React.SetStateAction<themeInitialSetting>>] => {
    const themeLcLS = localStorage.getItem("NFXQuizThemeSetting")
    let themeLc:themeInitialSetting
    const root:HTMLDivElement = document.querySelector("#root")!
    if(themeLcLS !== "Dark" && themeLcLS !==  "Light"){
        themeLc = "Light"
        root.style.backgroundColor = "#fff"
    }
    else {
        themeLc = themeLcLS
        themeLc === "Light" ? root.style.backgroundColor = "#fff" : root.style.backgroundColor = "#03043b"
    }
    const [themeSetting,setThemeSetting] = useState<themeInitialSetting>(themeLc)
    return [themeSetting,setThemeSetting]
}