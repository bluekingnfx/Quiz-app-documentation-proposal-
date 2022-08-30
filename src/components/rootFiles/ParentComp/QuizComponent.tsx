import { useState,useEffect} from "react"

import { fetchQuestions } from "./functions/fetchQuestions"
import {QuizComponentPropTypes,UIArrayType} from "../../../typesDef"
import { ImmediateComp } from "../../ImmediateComps/ImmediateComp"
import { ImmediateProvider } from "../../ImmediateComps/ImmediateProvider"
import { LateralComp } from "../../LateralComp/LateralComp"

import { ErrorComp } from "./ErrorComponent"



export const QuizComponent  = ({
    questions,
    setQuestions,
    Catagories,
    diffSetter,
    difficulty,
    setCatagories,
    formatSetter,
    format,
    UrlString,
    UrlStringSetter,
    immediate,
    setImmediate,
    replay,
    newGame,
    statsArray,
    setMaxComp,
    unAnswered,
    setUnAnswered

}:QuizComponentPropTypes) => {
    const [fetchedQ,setFetchedQ] = useState<{con:boolean,QuestionsArray:{}[]|UIArrayType}>({
        con:false,
        QuestionsArray:[]
    })
    
    //!AnswerRevel Immediate | At the End.


    const [err,setError] = useState<string>("") 
    useEffect(()=>{
        if(replay === false || newGame === true) fetchQuestions(UrlString,setFetchedQ)
        else if(replay === true) setFetchedQ(prevValue => {
            return {
                ...prevValue,
                QuestionsArray:statsArray
            }
        })
    },[UrlString, replay, newGame, statsArray])
        
    return<>
        {
            err.length > 0 && <ErrorComp err={err}/>
        }
        {
            immediate===true && (fetchedQ.QuestionsArray).length > 0 && <ImmediateProvider 
                fetchedQ={fetchedQ}
                UrlStringSetter={UrlStringSetter}
                questions={questions}
                setError={setError}
                setFetchedQ={setFetchedQ}
                setImmediate={setImmediate}
                error={err}
                UnAnswered={unAnswered}
                setUnAnswered={setUnAnswered}
                setMaxComp={setMaxComp}
            >
                <ImmediateComp/>
            </ImmediateProvider>
        }
        {
            immediate === false && (fetchedQ.QuestionsArray).length > 0 && <ImmediateProvider
                    fetchedQ={fetchedQ}
                    UrlStringSetter={UrlStringSetter}
                    questions={questions}
                    setError={setError}
                    setFetchedQ={setFetchedQ}
                    setImmediate={setImmediate}
                    error={err}
                    UnAnswered={unAnswered}
                    setUnAnswered={setUnAnswered}
                    setMaxComp={setMaxComp}
                >
                    <LateralComp/>
                </ImmediateProvider>
        }
        {
            (fetchedQ.QuestionsArray).length <= 0 && <div>
                Loading...
            </div>
        }
    </>
}