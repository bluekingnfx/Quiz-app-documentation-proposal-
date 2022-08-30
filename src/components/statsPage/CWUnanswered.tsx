import { 
    StatsCorrectContainerSPC,
    StatsConclusiveOnStatsParentPageSPC,
    StatsConclusiveOnStatsPageSPC,
} from "../../styles/Styles";
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails";
import { AnswerParentConclusiveStatsPageSPC } from "./CWUnAnsweredComps/AnswerParentContainerConclusiveSPC";
import { HeadingCompConclusiveStatsPageSPC } from "./CWUnAnsweredComps/HeadingCompStatsPageSPC";
import { QuestionNoStatsPageNavSPC } from "./CWUnAnsweredComps/QuestionNoStatsPageNavSPC";
import { QuestionStatsConclusiveStatsPageComp } from "./CWUnAnsweredComps/QuestionStatsConclusiveStatsPageComp";


type CWUnansweredSPCType = {
    StatsArrayType:{
        question?: string | undefined,
        correct_answer?: string | undefined
        options?: string[] | undefined,
        id?: string | undefined,
        answeredAnswer?: string | undefined;
        questionNo?:number
    }[],
    ArrayNature: "Correct" | "Wrong" | "Unanswered",
    immediateCon?:boolean
}


export const ConclusiveQNAReviewFrmStatsP = ({
    ArrayNature,
    StatsArrayType,
    immediateCon
}:CWUnansweredSPCType) => {
    const {theme}  = useThemeDetails()
    return <StatsCorrectContainerSPC ArrayNature={ArrayNature}>
        <HeadingCompConclusiveStatsPageSPC
            ArrayNature={ArrayNature}
        />
        {
            StatsArrayType.map( i => {
                return <StatsConclusiveOnStatsParentPageSPC key={i.id} theme={theme}>
                    <StatsConclusiveOnStatsPageSPC>
                        <QuestionStatsConclusiveStatsPageComp
                            i={i}

                        />
                        <AnswerParentConclusiveStatsPageSPC
                            ArrayNature={ArrayNature}
                            i={i}
                            immediateCon={immediateCon}
                        />

                        <QuestionNoStatsPageNavSPC
                            questionNo={i.questionNo}
                        />
                    </StatsConclusiveOnStatsPageSPC>
                </StatsConclusiveOnStatsParentPageSPC>
            })
        }
        
    </StatsCorrectContainerSPC>
} 