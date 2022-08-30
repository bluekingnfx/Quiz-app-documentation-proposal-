import { QuestionParentUnMaxComp, QuestionUnMax } from "../../../styles/Styles"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"




export const UnMaxQues = () => {
    const {theme} = useThemeDetails()
    return <QuestionParentUnMaxComp>
        <QuestionUnMax theme={theme}>
            The following questions are not checked for respective answers, Pressing Stats will mark the questions that are unchecked as not answered affect your over all Quiz summary.
        </QuestionUnMax>
    </QuestionParentUnMaxComp>
}