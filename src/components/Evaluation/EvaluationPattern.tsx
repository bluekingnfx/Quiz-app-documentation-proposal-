import { EvalStep5 } from "../rootFiles/ParentComp/StepFunctions/Eval"
import { EvalPropsType } from "../../typesDef"



export const EvaluationPattern = ({
    ImmediateSetter,
    setUrl,
    Catagories,
    DifficultyLevel,
    formatQ,
    amountConstraints,

}:EvalPropsType) => {
    return <div>
        <div onClick={()=>{
            EvalStep5(ImmediateSetter,setUrl,amountConstraints,Catagories,DifficultyLevel,formatQ)
        }}>Eval</div>
    </div>
}