
import { Dispatch, ReactElement, SetStateAction } from "react"

import { NavThroughNumIPC, NavThroughNumIPCContainer } from "../../../styles/Styles";
import { NavNumStatsUsType,UIArrayType } from "../../../typesDef";
import { themeInitialSetting } from "../../rootFiles/ParentComp/StepFunctions/useThemeLocalStorage";
import { ProvideRightOrWrong } from "../RightOrWrong";

import { SetTheCurrentQues } from "./setCurrentQues"


type NavNumStatsButType =  {
    visited: boolean,
    checked: boolean,
    quesNo: number,
    backgroundColor: string,
    NumCon: "default" | "wrong" | "correct"
} | undefined

export type WrgCrtType = {
    crtAns:string | undefined,
    chkAns:string
} | undefined

export const ProduceNavNumbers = (
    tot:number,
    setCurrentQues:Dispatch<SetStateAction<number>>,
    setAnswered:Dispatch<SetStateAction<string | undefined>>,
    setCorrectAns:Dispatch<SetStateAction<string | undefined>>,
    fetchedQ:{
        con: boolean;
        QuestionsArray: {}[] | UIArrayType
    },
    theme:themeInitialSetting,
    HighLighter:number | undefined,
    setHighLighter:Dispatch<SetStateAction<number|undefined>>,
    setNavNumStats:Dispatch<SetStateAction<NavNumStatsUsType>>,
    NavNumStats: NavNumStatsUsType,
    NumCurrentQues:number
):ReactElement[] => {
    let ArrNum:number[] = []
    for(let i:number=0;i<tot;i++){
        ArrNum = [...ArrNum,i+1]
    }
    const ArrNumDiv:ReactElement[] = ArrNum.map(num=>{
        let NavNumStatsBut: NavNumStatsButType = undefined
        if(NavNumStats !== undefined && HighLighter !== undefined) NavNumStatsBut = NavNumStats[num - 1]
        const DivElem:ReactElement = <NavThroughNumIPCContainer key={num} onClick={()=>SetTheCurrentQues(setCurrentQues,num,setAnswered,setCorrectAns,fetchedQ,HighLighter,setHighLighter,setNavNumStats,NavNumStats)} theme={theme}>
            <NavThroughNumIPC 
                theme={theme}
                {...(HighLighter !== undefined && HighLighter+1 === num && {style:theme === "Dark"?{
                    border:"2px solid #4336f3"
                }:{
                    border:"2px solid #cacace"
                }})}
                
                {...(NavNumStatsBut !== undefined && NavNumStatsBut.visited === true && NavNumStatsBut.backgroundColor !== "noColor" && NavNumStatsBut.NumCon === "default" && NumCurrentQues !== (num-1) && {
                    style:{
                        border: "2px solid"+NavNumStatsBut.backgroundColor
                    }
                })}
                >
                    <ProvideRightOrWrong NumCon={NavNumStatsBut!== undefined ? NavNumStatsBut.NumCon : "noAns"} num={num} />
            </NavThroughNumIPC>
        </NavThroughNumIPCContainer>
        return DivElem
    })
    return ArrNumDiv
}

