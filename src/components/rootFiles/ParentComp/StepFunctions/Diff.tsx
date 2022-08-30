import { Dispatch, SetStateAction } from "react"
import { diffUSType,formQUSType } from "../../../../typesDef"

export const DiffStep3 = (
setDifficultyLevel:Dispatch<SetStateAction<diffUSType>>,
setFormatQ:Dispatch<SetStateAction<formQUSType>>) => {
    setDifficultyLevel({
        diff:"easy",
        con:false,
        navCondition:true
    })
    setFormatQ({
        formQ:"multiple",
        con:true,
        navCondition:false,
    })
}