import { Dispatch, SetStateAction } from "react";
import { MaxCompUSTypes } from "../../../typesDef";


export const CancelGoodSignForReAssessment = (
    setMaxComp: Dispatch<SetStateAction<MaxCompUSTypes>>,
    setUnAnswered: Dispatch<SetStateAction<boolean>>
) => {
    document.getElementsByTagName("body"!)[0].style.overflowY = "auto"
    setUnAnswered(false)
    setMaxComp((prevValue)=>{
        return {
            ...prevValue,
            con:false,
            Component:false
        }
    })
}
