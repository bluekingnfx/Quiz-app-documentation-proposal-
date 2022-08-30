import { Dispatch, SetStateAction } from "react";
import { ImmediateUSType, MaxCompUSTypes, UIArrayType } from "../../../../typesDef";
import { UnAnsMaxComp } from "../../../MaxComp/UnAnsMaxComp";

export const IMStatsPageQuiz = (
    UrlStringSetter: Dispatch<SetStateAction<{
        urlString: string;
        con: boolean;
    }>>,
    FinalArray:UIArrayType,
    setImmediate:Dispatch<SetStateAction<ImmediateUSType>>,
    setUnAnswered: Dispatch<SetStateAction<boolean>>,
    UnAnswered:boolean,
    setMaxComp:Dispatch<SetStateAction<MaxCompUSTypes>>
) => {
    const PseudoFinalUnAnsweredAr = FinalArray.map((i,index)=>{
        if(i.checkedAnswer === false){
            return {
                quesNo:index+1, 
                question: i.question
            }
        }
        else return false
    }).filter( i => i !== false)


    if(UnAnswered === true && PseudoFinalUnAnsweredAr.length > 0){
        const CompForMax = <UnAnsMaxComp 
            PseudoFinalUnAnsweredAr={PseudoFinalUnAnsweredAr}
            UrlStringSetter={UrlStringSetter}
            setImmediate={setImmediate}
            setMaxComp={setMaxComp}
            FinalArray={FinalArray}
            setUnAnswered={setUnAnswered}
        />
        setMaxComp((prevValue)=>{
            return {
                ...prevValue,component:CompForMax,con:true,customStyles:{
                    maxWidth:"750px",
                    height:"max-content",
                }
            }
        })
        return
    }


    UrlStringSetter((prevValue)=>{
        return {...prevValue,con:false}
    })
    setImmediate(prevValue=>{
        return {
            ...prevValue,statsArray:FinalArray
        }
    })
}