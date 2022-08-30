import { ImmediateQuestion, ImmediateQuestionContainer } from "../../styles/Styles"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"


type QuestionContainerImmediatePropsType = {
    question:string | undefined
}

export const QuestionContainerImmediate = ({
    question
}:QuestionContainerImmediatePropsType) =>  {
    const {theme} = useThemeDetails()
    return <ImmediateQuestionContainer>
    <ImmediateQuestion theme={theme} dangerouslySetInnerHTML={{__html:question ? question :"question Not available"}}/>
</ImmediateQuestionContainer>
}

