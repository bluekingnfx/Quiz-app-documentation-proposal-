

import {
    GiCheckeredFlag
} from "react-icons/gi"


import {
    IoCaretForwardOutline
} from "react-icons/io5"


import { IMStatsPageQuiz } from '../rootFiles/ParentComp/functions/IMStatsPageQuiz'
import ToNextQues from './immediateFuncs/ToNextQues'
import { NextOrCButTypes } from '../../typesDef'
import { useImmediateContext } from './useImmediateContext'
import { useThemeDetails } from '../rootFiles/ParentComp/useThemeDetails'
import { DecisionIconParentButtonIPC, DecisionIconButton } from '../../styles/Styles'


const NextORContinueBut = ({
    currentQues,
    setCurrentQues,
    FetchedQ,
    setAnswered,
    setCorrectAns,
    setNavHighLighter,
    NavNumStats,
    setNavNumStats
}:NextOrCButTypes) => {
    const {theme} = useThemeDetails()
    const {UrlStringSetter,fetchedQ,setImmediate,setUnAnswered,UnAnswered,setMaxComp} = useImmediateContext()  
    return <DecisionIconParentButtonIPC>
        {
            currentQues !== (((fetchedQ.QuestionsArray).length) - 1) ? <DecisionIconButton theme={theme} onClick={()=>{
                ToNextQues(setCurrentQues,fetchedQ,setAnswered,setCorrectAns,setNavHighLighter,setNavNumStats,NavNumStats)
            }}>
                <IoCaretForwardOutline/>
            </DecisionIconButton> :
            <DecisionIconButton theme={theme} onClick={()=>
                IMStatsPageQuiz(UrlStringSetter,fetchedQ.QuestionsArray,setImmediate,setUnAnswered,UnAnswered,setMaxComp)}>
                <GiCheckeredFlag style={{
                    transform:"rotateY(200deg)"
                }}/>
            </DecisionIconButton>
        }
    </DecisionIconParentButtonIPC>
}

export default NextORContinueBut



