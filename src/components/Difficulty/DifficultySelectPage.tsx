import { DiffStep3 } from "../rootFiles/ParentComp/StepFunctions/Diff"
import { DifficultySelectPagePropType } from "../../typesDef"

export const DifficultySelectPage = ({
    setDifficultyLevel,
    setFormatQ
}:DifficultySelectPagePropType) => {
    return <div onClick={()=>DiffStep3(setDifficultyLevel,setFormatQ)}>
        Difficulty
    </div>
}