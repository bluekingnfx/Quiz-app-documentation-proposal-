import { BiCategoryAlt } from "react-icons/bi"
import { GiTargetArrows } from "react-icons/gi"
import { IoShieldOutline, IoShieldHalf, IoShieldSharp } from "react-icons/io5"


import { segregationFunction } from "./statsFunc/SegregationFunc"
import { ButtonSetParentSPQ } from "./ButtonSetParentSPQ"

import { useStatsPage } from "./useStatsPage"

import { 
    StatsBarContainerSPC, 
    StatsCorrectParentContainerSPC, 
    StatsPageActualStatsBarParentContainer, 
    StatsPageContainer, 
    StatsPageParentContainer, 
    StatsPageStatsAbtAnsweredParentContainerSPC,
    StatsScoreNQualitativeAnalysisContainerSPC,
    StatsScoreNQualitativeAnalysisParentContainerSPC,
    StatsScoreNQualitativeAnalysisSPC
} from "../../styles/Styles"
import { MiniatureStatsBar } from "./MinitureStatsBar"
import { ConclusiveQNAReviewFrmStatsP } from "./CWUnanswered"
import { StatsScoreNQualitativeAnalysisComp } from "./StatsScoreNQualitativeAnalysisComp"
import { FeatureUpComing } from "./FeatureUpComing"







export const StatsPage = () => {
    const {immediate,questions,Catagories,difficulty} = useStatsPage()
    const {correctAnswerArray,noAnswerArray,wrongAnswerArray,PieChartData,ExactPercentages} = segregationFunction(immediate.statsArray)

    const immediateCon:boolean = immediate.conImmediate
    return <StatsPageParentContainer>
        <StatsPageContainer>
            <StatsPageActualStatsBarParentContainer>
                <StatsBarContainerSPC>
                    <MiniatureStatsBar
                        Icon={<GiTargetArrows/>}
                        displayValue={questions}
                        displayVariable={"Questions"}
                    />
                    <MiniatureStatsBar
                        Icon={<BiCategoryAlt/>}
                        displayValue={Catagories}
                        displayVariable={"Catagories"}
                    />
                    <MiniatureStatsBar
                        Icon={difficulty === "easy" ? <IoShieldOutline/> : difficulty === "medium"  ? <IoShieldHalf/> : <IoShieldSharp/>}
                        displayValue={difficulty}
                        displayVariable={"Level"}
                    />

                </StatsBarContainerSPC>
            </StatsPageActualStatsBarParentContainer>
            
            <StatsPageStatsAbtAnsweredParentContainerSPC>
                <StatsCorrectParentContainerSPC>

                    { correctAnswerArray.length > 0 && <ConclusiveQNAReviewFrmStatsP
                        ArrayNature="Correct" 
                        StatsArrayType={correctAnswerArray}
                        
                    />}

                    {wrongAnswerArray.length > 0 && <ConclusiveQNAReviewFrmStatsP
                        ArrayNature="Wrong" 
                        StatsArrayType={wrongAnswerArray}
                        immediateCon={immediateCon}
                    />}
                    {noAnswerArray.length > 0 && <ConclusiveQNAReviewFrmStatsP 
                        ArrayNature="Unanswered"
                        StatsArrayType={noAnswerArray}
                    />}
                    
                </StatsCorrectParentContainerSPC>
            </StatsPageStatsAbtAnsweredParentContainerSPC>

            <StatsScoreNQualitativeAnalysisParentContainerSPC>
                <StatsScoreNQualitativeAnalysisContainerSPC>
                    <StatsScoreNQualitativeAnalysisSPC>
                        <StatsScoreNQualitativeAnalysisComp 
                            PieChartData={PieChartData}
                            ExactPercentages={ExactPercentages}
                        />
                        <FeatureUpComing/>
                    </StatsScoreNQualitativeAnalysisSPC>
                </StatsScoreNQualitativeAnalysisContainerSPC>
            </StatsScoreNQualitativeAnalysisParentContainerSPC>

        </StatsPageContainer>
    </StatsPageParentContainer>
}



/* {
        <ButtonSetParentSPQ   />
    }
 */

