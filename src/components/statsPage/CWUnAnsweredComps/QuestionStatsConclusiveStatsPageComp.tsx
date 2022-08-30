import { QuestionContainerStatsConclusiveSPC, QuestionStatsConclusiveSPC } from "../../../styles/Styles"
import { QuestionStatsConClusiveStatsPageCompType } from "../../../typesDef"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"






export const QuestionStatsConclusiveStatsPageComp = ({
    i
}:QuestionStatsConClusiveStatsPageCompType) => {
    const {theme} = useThemeDetails()
    return <QuestionContainerStatsConclusiveSPC>
        <QuestionStatsConclusiveSPC 
            dangerouslySetInnerHTML={{__html:i.question ? i.question : "Question is not available"}}
            theme={theme}
        />
    </QuestionContainerStatsConclusiveSPC>
}