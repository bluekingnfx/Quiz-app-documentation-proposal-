import {  
    LegendProducerContainer, 
    PieChartAndDetailsContainerSPC, 
    PieChartAndDetailsParentContainerSPC, 
} from "../../styles/Styles"
import { ExactPercentageType, PieChartArgType } from "../../typesDef"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"
import { LegendProducer } from "./QualitativeAnalysisOfStats/LegendProducer"
import { PieChartDetailsStatsPageSPC } from "./QualitativeAnalysisOfStats/PieChartDetails"
import { PieChartStats } from "./QualitativeAnalysisOfStats/PieChartStats"
import { ToolTipContentForLegend } from "./QualitativeAnalysisOfStats/ToolTipContentForLegend"

export interface StatsScoreNQualitativeAnalysisCompInterface {
    PieChartData:PieChartArgType,
    ExactPercentages:ExactPercentageType
}


export const StatsScoreNQualitativeAnalysisComp = ({
    PieChartData,
    ExactPercentages
}:StatsScoreNQualitativeAnalysisCompInterface) => {
    const {theme} = useThemeDetails()
    return <PieChartAndDetailsParentContainerSPC theme={theme}>
        <PieChartAndDetailsContainerSPC>
            <PieChartStats 
                PieChartData={PieChartData} 
            />
            <PieChartDetailsStatsPageSPC/>
        </PieChartAndDetailsContainerSPC>
        <LegendProducerContainer> 
            <LegendProducer 
                ToolTipContent={<ToolTipContentForLegend Percentage={ExactPercentages.CorrectPercentage}/>}
                borderRequirement={[false]}
                color={"#25fe42"}
                height={30}
                ToolTipColor={[true,"#09831a"]}
                name={"Correct"}
                width={30}
            />
            <LegendProducer 

                ToolTipContent={<ToolTipContentForLegend Percentage={ExactPercentages.WrongPercentage}/>}
                borderRequirement={[false]}
                color={"#d8ff3a"}
                height={30}
                name={"Wrong"}
                ToolTipColor={[true,"#929e05"]}
                width={30}
            />
            <LegendProducer 
                ToolTipContent={<ToolTipContentForLegend Percentage={ExactPercentages.NoAnswerPercentage}/>}
                borderRequirement={[false]}
                color={"#ec5959"}
                height={30}
                name={"Not Attempted"}
                width={30}
                ToolTipColor={[true,"#ec5959"]}
            />
        </LegendProducerContainer>
    </PieChartAndDetailsParentContainerSPC>
}









