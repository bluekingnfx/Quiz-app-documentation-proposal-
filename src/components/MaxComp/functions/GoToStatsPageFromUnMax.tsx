import { Dispatch, SetStateAction } from "react"
import { UIArrayType, MaxCompUSTypes, ImmediateUSType } from "../../../typesDef"


export const GoToStatsPageFromUnMax = (
    FinalArray:UIArrayType,
    UrlStringSetter: Dispatch<SetStateAction<{
        urlString: string,
        con: boolean
    }>>,
    setMaxComp: Dispatch<SetStateAction<MaxCompUSTypes>>,
    setImmediate: Dispatch<SetStateAction<ImmediateUSType>>
):void => {
    document.getElementsByTagName("body"!)[0].style.overflowY = "auto"
    UrlStringSetter((prevValue)=>{
        return {...prevValue,con:false}
    })
    setImmediate(prevValue=>{
        return {
            ...prevValue,statsArray:FinalArray
        }
    })
    setMaxComp(prevValue =>{
        return {
            ...prevValue,
            con:false,
            component:null,
            customStyles:undefined
        }
    })
}