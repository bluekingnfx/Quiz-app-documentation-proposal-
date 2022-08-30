
import { Dispatch, SetStateAction} from "react";
import {NavThroughNumContainerIPC, NavThroughNumParentContainerIPC, NavThrQuesContainerIPC, NavThrQuesIPCContainerParent } from "../../styles/Styles";
import { NavNumStatsUsType } from "../../typesDef";
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails";
import { ProduceNavNumbers } from "./immediateFuncs/ProduceNavNumber";
import { useImmediateContext } from "./useImmediateContext";

type NavByNumbersType = {
    setCurrentQues:Dispatch<SetStateAction<number>>,
    currentQues:number,
    setAnswered:Dispatch<SetStateAction<string | undefined>>,
    setCorrectAns:Dispatch<SetStateAction<string | undefined>>,
    HighLighter:number | undefined,
    setNavHighLighter:Dispatch<SetStateAction<number|undefined>>,
    setNavNumStats:Dispatch<SetStateAction<NavNumStatsUsType>>,
    NavNumStats: NavNumStatsUsType,
}

export const NavByNumbers = ({
    setCurrentQues,
    currentQues,
    setAnswered,
    setCorrectAns,
    HighLighter,
    setNavHighLighter,
    setNavNumStats,
    NavNumStats
}:NavByNumbersType) => {

    const {questions,fetchedQ} = useImmediateContext()
    const {theme} = useThemeDetails()
    return <NavThrQuesIPCContainerParent>
            <NavThrQuesIPCContainerParent>
                <NavThrQuesContainerIPC>
                    <NavThroughNumParentContainerIPC>
                        <NavThroughNumContainerIPC>
                            {
                                ProduceNavNumbers(
                                    questions,
                                    setCurrentQues,
                                    setAnswered,
                                    setCorrectAns,
                                    fetchedQ,
                                    theme,
                                    HighLighter,
                                    setNavHighLighter,
                                    setNavNumStats,
                                    NavNumStats,
                                    currentQues,
                                ).map(i=>i)
                            }
                        </NavThroughNumContainerIPC> 
                    </NavThroughNumParentContainerIPC>
                </NavThrQuesContainerIPC>
            </NavThrQuesIPCContainerParent>
    </NavThrQuesIPCContainerParent>
}
