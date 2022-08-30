import { Dispatch, SetStateAction } from "react";
import {NavNumStatsUsType, QuesSetterType, UIArrayQD, UIArrayType} from "../../../typesDef"


export const ToPrevQuestion = (
    QuesSetter:QuesSetterType,
    FetchedQ: {
        con: boolean;
        QuestionsArray: {}[] | UIArrayType
    },
    setAnswered:Dispatch<SetStateAction<string | undefined>>,
    setCorrectAns:Dispatch<SetStateAction<string | undefined>>,
    setHighLighter:Dispatch<SetStateAction<number|undefined>>,
    setNavNumStats: Dispatch<SetStateAction<NavNumStatsUsType>>,
    NavNumStats: NavNumStatsUsType
) => {
    QuesSetter((prevValue:number) => {
        let CheckingPseudo:UIArrayQD = FetchedQ.QuestionsArray[prevValue-1]
        setAnswered(CheckingPseudo.answeredAnswer)
        setHighLighter(prevValue-1)

        if(CheckingPseudo.checkedAnswer === false && NavNumStats !== undefined && setNavNumStats !== undefined && NavNumStats[prevValue - 1].checked === false){
            const NewNumStats:NavNumStatsUsType = NavNumStats.map((i,index)=>{
                if(index === prevValue - 1){
                    return {
                        ...i,
                        visited:true,
                        backgroundColor:"#b30808"
                    }
                }else{
                    return i
                }
            })
            
            setNavNumStats(NewNumStats)
        }

        if(CheckingPseudo.correct_answer !== undefined){
            setCorrectAns(CheckingPseudo.correct_answer)
        }
        return prevValue - 1
    })
    
}