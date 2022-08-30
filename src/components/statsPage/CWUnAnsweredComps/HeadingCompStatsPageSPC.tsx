import { HeadingConclusiveStatsSPC, HeadingOFConclusiveStatsSPCContainer } from "../../../styles/Styles"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"





export const HeadingCompConclusiveStatsPageSPC = ({
    ArrayNature
}:{
    ArrayNature: "Correct" | "Wrong" | "Unanswered"
}) => {
    const {theme} = useThemeDetails()
    return <HeadingOFConclusiveStatsSPCContainer>
        <HeadingConclusiveStatsSPC theme={theme}>
            {
                ArrayNature === "Correct" ? "Correct Answers" : ArrayNature === "Unanswered" ? "Not Attempted" : "Wrong Answers"
            }
        </HeadingConclusiveStatsSPC>
    </HeadingOFConclusiveStatsSPCContainer>
}