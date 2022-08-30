import { Dispatch, SetStateAction } from "react"
import { MaxCompUSTypes } from "../../../typesDef"

export const ClearMaximizer = (
    setter:Dispatch<SetStateAction<MaxCompUSTypes>>
) => {
    document.getElementsByTagName("body"!)[0].style.overflowY = "auto"
    setter({
            component:null,
            con:false,
            customStyles:undefined
    })
}