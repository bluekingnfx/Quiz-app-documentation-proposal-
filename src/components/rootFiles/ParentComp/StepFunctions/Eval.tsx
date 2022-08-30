import { Dispatch, SetStateAction } from "react";
import { 
    amuConUSType, 
    CatUSType, 
    diffUSType, 
    formQUSType, 
    ImmediateUSType, 
    UrlUSType 
} from "../../../../typesDef";


export const EvalStep5 = (
    setter:Dispatch<SetStateAction<ImmediateUSType>>,
    setUrl:Dispatch<SetStateAction<UrlUSType>>,
    amountConstraints: amuConUSType,
    Catagories: CatUSType,
    DifficultyLevel: diffUSType,
    formatQ:formQUSType
) => {
    setUrl(()=>{
        return{
        con:true,
        urlString:`https://opentdb.com/api.php?amount=${amountConstraints.questions}&category=${Catagories.cat}&difficulty=${DifficultyLevel.diff}&type=${formatQ.formQ}` 
    }})
    setter((prevValue)=>{
        return {...prevValue,renderingCon:false,navCondition:true}
    })

}