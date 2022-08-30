
import { 
    AnswerParentContainerStatsConclusiveSPC, 
    WrongAnswerParentContainerStatsPageSPC, 
    WrongAnswerParentStatsPageSPC, 
    WrongAnswerStatsPageSPC, 
    RevealAndAnswerContainerSPC, 
    RevealWordContainerSPC, 
    CorrectAnswerStatsPageSPC 
} from "../../../styles/Styles"
import { AnswerParentConclusiveStatsPageSPCType } from "../../../typesDef"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"
import { HideTheReveal } from "../statsFunc/HideTheReveal"



export const AnswerParentConclusiveStatsPageSPC = ({
    i,
    ArrayNature,
    immediateCon
}:AnswerParentConclusiveStatsPageSPCType ) => {
    const {theme} = useThemeDetails()
    return <AnswerParentContainerStatsConclusiveSPC>
        {
            ArrayNature === "Wrong" && <WrongAnswerParentContainerStatsPageSPC>
                    <WrongAnswerParentStatsPageSPC>
                        <WrongAnswerStatsPageSPC theme={theme} dangerouslySetInnerHTML={{__html:i.answeredAnswer ? i.answeredAnswer : "Unable to show"}} />
                    </WrongAnswerParentStatsPageSPC>
            </WrongAnswerParentContainerStatsPageSPC>
        }
        <RevealAndAnswerContainerSPC>
            {ArrayNature !== "Correct" && (immediateCon === undefined || immediateCon === false) && <RevealWordContainerSPC onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                HideTheReveal(e)
            }} theme={theme}>
                Reveal
            </RevealWordContainerSPC>}
            <CorrectAnswerStatsPageSPC dangerouslySetInnerHTML={{
                __html:i.correct_answer ? i.correct_answer : "Unable to show Answer"
            }} theme={theme}/>
        </RevealAndAnswerContainerSPC>
    </AnswerParentContainerStatsConclusiveSPC>
}