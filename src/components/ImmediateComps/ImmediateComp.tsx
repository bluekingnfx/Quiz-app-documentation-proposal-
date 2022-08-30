import { useRef, useState } from "react"

import { NavNumStatsUsType, UIArrayQD } from "../../typesDef"
import { ButtonSetParent } from "./ButtonSetParent"
import { useImmediateContext } from "./useImmediateContext"
import { NavByNumbers } from "./NavByNumbers"
import {
    ImmediateQuestionNOptions, 
    ImmediateQuestionNOptionsContainer, 
    ImmediateResponseParent, 
    ImmediateResponseParentContainer,
    QuesNoContainerIPC,
    QuestionNoConIPC
} from "../../styles/Styles"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"
import { QuestionContainerImmediate } from "./QuestionContainerImmediate"
import { OptionsParentContainerComp } from "./OptionsParentContainerComp"
import { NavThroughQuestionsComponent } from "../LateralComp/NavThroughQuestionsComponent"
import { NavNumStatsInitialValue } from "./immediateFuncs/NavNumStatsInitialValue"


export const ImmediateComp = () => { 
    const {fetchedQ,questions} = useImmediateContext()
    const {theme} = useThemeDetails()
    const OptionsParentRef = useRef<HTMLDivElement>(null)
    const [currentQues,setCurrentQues] = useState<number>(0)
    const QtoD:UIArrayQD | false = (fetchedQ.QuestionsArray).length > 0 && fetchedQ.QuestionsArray[currentQues]
    const answeredInitialVal = QtoD !== false && QtoD.answeredAnswer ? QtoD.answeredAnswer : undefined
    const correctAnsInitialVal = QtoD !== false && QtoD.correct_answer ? QtoD.correct_answer : undefined
    const [answeredAns,setAnswered] = useState<undefined|string>(answeredInitialVal) 
    const [correctAns,setCorrectAns] = useState<undefined|string>(correctAnsInitialVal) 
    const [navHighLighter,setNavHighLighter] = useState<number|undefined>(0)
    
    const [NavNumStats,setNavNumStats] = useState<NavNumStatsUsType>(NavNumStatsInitialValue(fetchedQ))
    return <>
        {
            QtoD !== false && <ImmediateResponseParentContainer>
                <ImmediateResponseParent>
                    <ImmediateQuestionNOptionsContainer>
                        <ImmediateQuestionNOptions theme={theme}>

                            <QuestionContainerImmediate 
                                question={QtoD.question}
                            />

                            <OptionsParentContainerComp
                                QtoD={QtoD}
                                answeredAns={answeredAns}
                                correctAns={correctAns}
                                ref={OptionsParentRef}
                            />

                            <QuesNoContainerIPC>
                                <ButtonSetParent 
                                    OptionsParentRef={OptionsParentRef}
                                    QtoD={QtoD}
                                    currentQues={currentQues}
                                    setCurrentQues={setCurrentQues}
                                    setAnswered={setAnswered}
                                    setCorrectAns={setCorrectAns}
                                    setNavHighLighter = {setNavHighLighter}
                                    setNavNumStats={setNavNumStats}
                                    NavNumStats={NavNumStats}
                                />
                                <QuestionNoConIPC theme={theme}>
                                    {
                                        currentQues+1
                                    }
                                </QuestionNoConIPC>
                                
                            </QuesNoContainerIPC> 
                        </ImmediateQuestionNOptions>
                    </ImmediateQuestionNOptionsContainer>
                    <NavByNumbers //Immediate Specific
                        setCurrentQues={setCurrentQues}
                        currentQues={currentQues}
                        setAnswered={setAnswered}
                        setCorrectAns={setCorrectAns}
                        HighLighter={navHighLighter}
                        setNavHighLighter={setNavHighLighter}
                        setNavNumStats={setNavNumStats}
                        NavNumStats={NavNumStats}
                    />
                    <NavThroughQuestionsComponent 
                        LengthOFQuesArray={(fetchedQ.QuestionsArray).length}
                        responseFuncTypeImmediate={true}
                        fetchedQ={fetchedQ}
                        questions={questions}
                        setAnswered={setAnswered}
                        setCorrectAns={setCorrectAns}
                        setCurrentQues={setCurrentQues}
                        NavHighLighter={navHighLighter}
                        setNavHighLighter={setNavHighLighter}
                        setNavNumStats={setNavNumStats}
                        NavNumStats={NavNumStats}
                    />
                </ImmediateResponseParent>
            </ImmediateResponseParentContainer> 
        }
    </>
        

}