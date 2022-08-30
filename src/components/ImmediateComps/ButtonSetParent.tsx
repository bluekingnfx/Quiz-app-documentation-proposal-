import { InstantEvaluation } from "./immediateFuncs/InstantEvaluation"
import { ButtonSetParentType } from "../../typesDef"
import NextORContinueBut from "./NextORContinueBut"
import ToPrevButton from "./ToPrevButton"
import { useImmediateContext } from "./useImmediateContext"
import { 
    ButtonContainerParentIPC, 
    ButtonParentIPC,
    DecisionButtonIPC,
    DecisionParentSubmitButtonIPC, 
} from "../../styles/Styles"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"



export const ButtonSetParent = ({QtoD,currentQues,setCurrentQues,OptionsParentRef,setAnswered,setCorrectAns,setNavHighLighter,NavNumStats,setNavNumStats}:ButtonSetParentType) => {
    const {theme} = useThemeDetails()
    const {fetchedQ,setError,setFetchedQ,error} = useImmediateContext()
    return <ButtonContainerParentIPC>
        <ButtonParentIPC>
            <ToPrevButton 
                currentQues={currentQues} 
                setCurrentQues={setCurrentQues} 
                FetchedQ={fetchedQ}
                setAnswered={setAnswered}
                setCorrectAns={setCorrectAns}
                setNavHighLighter={setNavHighLighter}
                NavNumStats={NavNumStats}
                setNavNumStats={setNavNumStats}
            />


            { 
                QtoD.checkedAnswer === false && <DecisionParentSubmitButtonIPC>
                    <DecisionButtonIPC  theme={theme} onClick={(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
                    InstantEvaluation(e,OptionsParentRef,(QtoD.id ? QtoD.id : "noId" ),fetchedQ.QuestionsArray,(QtoD.correct_answer?QtoD.correct_answer:"ansMissing"),setError,setFetchedQ,setAnswered,setCorrectAns,error,setNavNumStats,NavNumStats,currentQues)}}>
                        Check
                    </DecisionButtonIPC>
                </DecisionParentSubmitButtonIPC>
            }

            
            <NextORContinueBut 
                currentQues={currentQues} 
                setCurrentQues={setCurrentQues}
                FetchedQ={fetchedQ}
                setAnswered={setAnswered}
                setCorrectAns={setCorrectAns}
                setNavHighLighter={setNavHighLighter}
                NavNumStats={NavNumStats}
                setNavNumStats={setNavNumStats}
            />
        </ButtonParentIPC>
    </ButtonContainerParentIPC>
} 