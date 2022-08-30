import { Dispatch,SetStateAction } from "react";
import axios from "axios"


import { FetchedDatatype,UIArrayType } from "../../../../typesDef";
import { ShuffleAr } from "./shuffleAr";
import { NoAnsweredString } from "./HelpingFuncs";



export const fetchQuestions = async(urlString:string,setter:Dispatch<SetStateAction<{
    con: boolean;
    QuestionsArray: {}[];
}>>) => {
    const FetchedData:FetchedDatatype = await axios.get(urlString)
    if( Array.isArray(FetchedData.data.results) && (FetchedData.data.results).length > 0){
        const Results = FetchedData.data.results
        const UIArray:UIArrayType = Results.map((i) => {
            if(i.question === undefined || i.correct_answer === undefined || i.incorrect_answers === undefined){
                return {}
            }else{
                const {type,incorrect_answers,...rest} = i
                const id =  ((Math.random()*20).toString(32)).slice(2)
                const optionsBefTrans:string[] = [i.correct_answer,...i.incorrect_answers]
                const options:string[] = ShuffleAr<string>(optionsBefTrans)
                return {
                    ...rest,options:options,id,checkedAnswer:false,answeredAnswer:NoAnsweredString
                }
            }
        }).filter(i=>{
            return Object.keys(i).length > 0
        })
        setter({
            con:true,
            QuestionsArray:UIArray
        })
    }
}