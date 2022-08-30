
import { 
    LateralParentContainerComp, 
    QuestionAndOptionsParentContainerLPC, 
    QuestionAndOptionsContainerLPC, 
    LateralParentContainer,
} from "../../styles/Styles"
import { UIArrayType } from "../../typesDef"
import { useImmediateContext } from "../ImmediateComps/useImmediateContext"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"
import { OptionsLateralComp } from "./OptionsLateralComp"
import { QuestionConLPC } from "./QuestionConLPC"
import { NavThroughQuestionsComponent } from "./NavThroughQuestionsComponent"
import { LateralSubmitButtonComp } from "./LateralSubmitButtonComp"

export const LateralComp = () => {
    const {fetchedQ} = useImmediateContext()
    const quesArray:UIArrayType  = fetchedQ.QuestionsArray
    const LengthOFQuesArray:number = quesArray.length
    const {theme} = useThemeDetails()
    return <LateralParentContainerComp>
        <LateralParentContainer> 
            {
                quesArray.length > 0 && quesArray.map((i,index)=> {
                    return <QuestionAndOptionsParentContainerLPC key={index} id={`Ques${index}`}>
                    <QuestionAndOptionsContainerLPC theme={theme}>
                        <QuestionConLPC quesPiece={i.question} />
                        <OptionsLateralComp optionsPerQ={i.options} index={index}
                            ques={i.question}
                        />
                    </QuestionAndOptionsContainerLPC>
                </QuestionAndOptionsParentContainerLPC>
                })
            } 
            {
                (fetchedQ.QuestionsArray).length > 0 && <LateralSubmitButtonComp quesArray={quesArray}/>
            }
            {
                (fetchedQ.QuestionsArray).length > 1 && <NavThroughQuestionsComponent 
                LengthOFQuesArray={LengthOFQuesArray} 
                responseFuncTypeImmediate={false}
                />
            }
        </LateralParentContainer>
    </LateralParentContainerComp>
}



