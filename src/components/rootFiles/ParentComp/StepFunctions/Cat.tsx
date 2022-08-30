
import { Dispatch, SetStateAction } from "react"
import { CatUSType,diffUSType } from "../../../../typesDef"

export const CatStep2 = (
    setCatagories:Dispatch<SetStateAction<CatUSType>>,
    setDifficultyLevel:Dispatch<SetStateAction<diffUSType>>,
):void => {
    setCatagories({
        cat:10,
        con:false,
        navCondition:true
    })
    setDifficultyLevel({
        diff:"easy",
        con:true,
        navCondition:false
    })
}