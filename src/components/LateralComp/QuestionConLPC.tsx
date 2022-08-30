import { 
    QuestionContainerLPC, 
    QuestionLPC 
} from "../../styles/Styles"
import { QuestionConLPCType } from "../../typesDef"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"



export const QuestionConLPC = ({
    quesPiece,
}:QuestionConLPCType) => {
    const {theme} = useThemeDetails()
    return <QuestionContainerLPC>
        <QuestionLPC theme={theme} dangerouslySetInnerHTML={{__html: quesPiece ? quesPiece : "Questions are missing"}}>
        </QuestionLPC>
    </QuestionContainerLPC>
}