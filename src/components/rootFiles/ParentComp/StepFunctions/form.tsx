import { Dispatch, SetStateAction } from "react"
import {formQUSType,ImmediateUSType } from "../../../../typesDef"


export const formStep4 = (
    setFormatQ:Dispatch<SetStateAction<formQUSType>>,
    setImmediate:Dispatch<SetStateAction<ImmediateUSType>>,
) => {
    setFormatQ({
        formQ:"multiple",
        con:false,
        navCondition:true
    })
    
    setImmediate(prevValue=>{
        return {...prevValue,renderingCon:true}
    })
}