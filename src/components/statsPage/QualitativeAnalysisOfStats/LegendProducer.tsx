import { SetStateAction, useState, Dispatch } from "react"


import { 
    TheNameOfLegendInStatsPageSPC,
    ToolTipAndLegendOfThisSpecificColorSPC,
    ToolTipContainerInGeneralHeading, 
    ToolTipDivContainerStatsPageSPC, 
    ToolTipDivStatsPageSPC, 
    ToolTipInGeneralHeadingSPC 
} from "../../../styles/Styles"
import { LegendProducerType } from "../../../typesDef"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"




export const LegendProducer = <T,>({
    color,
    name,
    width,
    height,
    borderRequirement=[false],
    ToolTipContent,
    heightUnit="px",
    widthUnit="px",
    ToolTipColor=[false]
}:LegendProducerType<T>) => {
    const [toolTip,setToolTip] = useState(false)
    const {theme} = useThemeDetails()
    return <ToolTipAndLegendOfThisSpecificColorSPC 
    onMouseOver={(event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>OpenToolTip(event,setToolTip)} onMouseLeave = {(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => CloseToolTip(e,setToolTip)}>
        <ToolTipContainerInGeneralHeading 
            width={width}  
            height={height}
            borderRequirement={borderRequirement}
            widthUnit={widthUnit}
            heightUnit={heightUnit}
        >
            <ToolTipInGeneralHeadingSPC
                backgroundColor={color}
                theme={theme}
            />
        </ToolTipContainerInGeneralHeading>
        <TheNameOfLegendInStatsPageSPC theme={theme} height={height} heightUnit={heightUnit}>
            {
                name
            }
        </TheNameOfLegendInStatsPageSPC>
        {toolTip === true && <ToolTipDivContainerStatsPageSPC>
            <ToolTipDivStatsPageSPC 
                ToolTipColor={ToolTipColor} 
                theme={theme}
            >
                {ToolTipContent}
            </ToolTipDivStatsPageSPC>
        </ToolTipDivContainerStatsPageSPC>}
    </ToolTipAndLegendOfThisSpecificColorSPC>
}

export const OpenToolTip = (
    e:React.MouseEvent<HTMLDivElement, MouseEvent>,
    setToolTip:Dispatch<SetStateAction<boolean>>,
) => {
    setToolTip(true)
}

export const CloseToolTip = (
    e:React.MouseEvent<HTMLDivElement, MouseEvent>,
    setToolTip:Dispatch<SetStateAction<boolean>>,
) => {
    setToolTip(false)
}