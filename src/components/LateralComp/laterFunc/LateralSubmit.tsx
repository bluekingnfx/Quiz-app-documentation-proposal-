import { Dispatch, SetStateAction } from "react"
import { UIArrayType, ImmediateUSType, UrlUSType, MaxCompUSTypes } from "../../../typesDef"
import { IMStatsPageQuiz } from "../../rootFiles/ParentComp/functions/IMStatsPageQuiz"


export const LateralSubmit = (
    e:React.MouseEvent<HTMLDivElement, MouseEvent>,
    quesArray:UIArrayType,
    setImmediate: Dispatch<SetStateAction<ImmediateUSType>>,
    UrlStringSetter: Dispatch<SetStateAction<UrlUSType>>,
    setUnAnswered: Dispatch<SetStateAction<boolean>>,
    setMaxComp: Dispatch<SetStateAction<MaxCompUSTypes>>,
    UnAnswered: boolean,
):void => {
    const FinalArray:UIArrayType = quesArray.map((i,index)=>{
        const el:HTMLInputElement|null = document.querySelector(`#InputContainerFormLPR${[index]} input[name = '${i.question}']:checked`)
        if(el === null) return i 
        const val = el.value
        return {
            ...i,checkedAnswer:true,answeredAnswer:val
        }
    })
    IMStatsPageQuiz(UrlStringSetter,FinalArray,setImmediate,setUnAnswered,UnAnswered,setMaxComp)
}