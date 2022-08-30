import { CatStep2 } from "../rootFiles/ParentComp/StepFunctions/Cat"
import { CatagoriesSelectPagePropsType } from "../../typesDef"



export const CatagoriesSelectPage = ({
    setCatagories,
    setDifficultyLevel
}:CatagoriesSelectPagePropsType) => {
    return <div onClick={()=>CatStep2(setCatagories,setDifficultyLevel)}>
        Catagories
    </div>
}