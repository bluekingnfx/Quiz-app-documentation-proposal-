import { GeneralLeadHeadingSPC, GeneralLegendNHeadingContainerSPC } from "../../../styles/Styles"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"



export const PieChartDetailsStatsPageSPC = () => {
    const {theme} = useThemeDetails()
    return <GeneralLegendNHeadingContainerSPC>
        <GeneralLeadHeadingSPC theme={theme}>
            LEGEND
        </GeneralLeadHeadingSPC>
        
    </GeneralLegendNHeadingContainerSPC>
}