import { Dispatch, SetStateAction } from "react"
import { ImmediateUSType, UIArrayType, UrlUSType } from "../../../typesDef"
import { NoAnsweredString } from "../../rootFiles/ParentComp/functions/HelpingFuncs"
import { ShuffleAr } from "../../rootFiles/ParentComp/functions/shuffleAr"


export const replayFunc = (
    statsArray:UIArrayType,
    setNewGame:Dispatch<SetStateAction<boolean>>,
    setReplay:Dispatch<SetStateAction<boolean>>,
    setImmediate:Dispatch<SetStateAction<ImmediateUSType>>,
    UrlStringSetter:Dispatch<SetStateAction<UrlUSType>>,
    setUnAnswered: Dispatch<SetStateAction<boolean>>
):void => {
    const InitialFetchArrayWithoutShuffle:UIArrayType = statsArray.map(i=>{
        return {
            ...i,checkedAnswer:false,answeredAnswer:NoAnsweredString
        }
    })

    const InitialFetchArray = ShuffleAr<object>(InitialFetchArrayWithoutShuffle)


    setImmediate((prevValue)=>{
        return{
            ...prevValue,statsArray:InitialFetchArray
        }
    })
    setNewGame(false)
    setReplay(true)
    UrlStringSetter((prevValue) => {
        return {
            ...prevValue,con:true
        }
    })
    setUnAnswered(true)
} 