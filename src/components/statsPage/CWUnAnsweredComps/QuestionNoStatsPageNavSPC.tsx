import { 
    QuesNoStatsPageParentContainerSPC, 
    QuesNoStatsPageSPC } from "../../../styles/Styles"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"



export const QuestionNoStatsPageNavSPC = ({
    questionNo
}:{
    questionNo:number|undefined
}) => {
    const {theme} = useThemeDetails()
    return <QuesNoStatsPageParentContainerSPC>
        <QuesNoStatsPageSPC theme={theme}>
            {
                questionNo
            }
        </QuesNoStatsPageSPC>
    </QuesNoStatsPageParentContainerSPC>
}