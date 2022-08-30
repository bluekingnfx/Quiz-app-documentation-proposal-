import {IoCaretBackOutline} from "react-icons/io5"

import { ToPrevQuestion } from "./immediateFuncs/ToPrevQuestion"
import { ToButtonPrevTypes } from "../../typesDef"
import { DecisionIconButton, DecisionIconParentButtonIPC } from "../../styles/Styles"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"



const ToPrevButton = ({currentQues,setCurrentQues,FetchedQ,setCorrectAns,setAnswered,setNavHighLighter,NavNumStats,setNavNumStats}:ToButtonPrevTypes) => {
    const {theme} = useThemeDetails()
    return <DecisionIconParentButtonIPC>
    {   
        currentQues !== 0 && <DecisionIconButton theme={theme} onClick={()=>{
            ToPrevQuestion(setCurrentQues,FetchedQ,setAnswered,setCorrectAns,setNavHighLighter,setNavNumStats,NavNumStats)
        }}>
            <IoCaretBackOutline/>
        </DecisionIconButton>
    }
    </DecisionIconParentButtonIPC>
}

export default ToPrevButton