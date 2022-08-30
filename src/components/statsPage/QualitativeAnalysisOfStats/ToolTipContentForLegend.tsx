import { 
    PercentageParentContainerStatsPageSPC, 
    PercentageStatsContainerStatsPageSPC, 
    GeneralNameContainerOfPercentage, 
    GeneralConventionToPercentage,
    GeneralPercentageByValue 
} from "../../../styles/Styles"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"


export const ToolTipContentForLegend = ({
    Percentage
}:{
    Percentage:number
}) => {
    const {theme} = useThemeDetails()
    return <PercentageParentContainerStatsPageSPC>
        <PercentageStatsContainerStatsPageSPC theme={theme}>
            <GeneralNameContainerOfPercentage>
                <GeneralConventionToPercentage>
                    Rounded:
                </GeneralConventionToPercentage>
                <GeneralPercentageByValue>
                    {
                        Math.round(Percentage)
                    }%
                </GeneralPercentageByValue>
            </GeneralNameContainerOfPercentage>
            <GeneralNameContainerOfPercentage>
                <GeneralConventionToPercentage>
                    Exact numbers: 
                </GeneralConventionToPercentage>
                <GeneralPercentageByValue>
                    {
                        Percentage.toPrecision(4)
                    }%
                </GeneralPercentageByValue>
            </GeneralNameContainerOfPercentage>
        </PercentageStatsContainerStatsPageSPC>
    </PercentageParentContainerStatsPageSPC>
}