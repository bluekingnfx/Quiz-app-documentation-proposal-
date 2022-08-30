import { Dispatch, SetStateAction } from "react";
import { NavNumStatsUsType, UIArrayQD, UIArrayType } from "../../../typesDef"


export const SetTheCurrentQues = (
    setter:Dispatch<SetStateAction<number>> | undefined,
    num:number,
    setAnswered:Dispatch<SetStateAction<string | undefined>> | undefined,
    setCorrectAns:Dispatch<SetStateAction<string | undefined>> | undefined,
    fetchedQ:{
        con: boolean;
        QuestionsArray: {}[] | UIArrayType
    } | undefined,
    HighLighter:number | undefined,
    setHighLighter:Dispatch<SetStateAction<number|undefined>>  | undefined,
    setNavNumStats:Dispatch<SetStateAction<NavNumStatsUsType>> | undefined,
    NavNumStats: NavNumStatsUsType
):void => {
    if(setter !== undefined) setter(()=>{

        if(fetchedQ !== undefined) {
            const Changed:UIArrayQD = fetchedQ.QuestionsArray[num-1]
            setAnswered !== undefined && setAnswered(Changed.answeredAnswer)
            if(setHighLighter !== undefined) setHighLighter(num-1)
            if(setNavNumStats !==undefined && NavNumStats !== undefined && NavNumStats[num-1].checked === false) {
                const NewNavStats:NavNumStatsUsType = NavNumStats.map((i,index)=>{
                    if(index === num - 1){
                        return {
                            ...i,
                            visited:true,
                            checked:false,
                            backgroundColor:"#b30808"
                        }
                    }else{
                        return i
                    }
                })
                setNavNumStats(NewNavStats)
            }
            if(Changed.correct_answer !== undefined) setCorrectAns !== undefined && setCorrectAns(Changed.correct_answer)
        }
        return num-1
    })
}