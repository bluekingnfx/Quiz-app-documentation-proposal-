import { InputQuestionsPagePropType } from "../../typesDef"
import { InpStep1 } from "../rootFiles/ParentComp/StepFunctions/Inp"

export const InputQuestionsPage = ({
    setAmountConstraints,
    setCatagories,
}:InputQuestionsPagePropType) => {
    return <div onClick={()=>InpStep1(setAmountConstraints,setCatagories)}>
        Question
    </div>
}