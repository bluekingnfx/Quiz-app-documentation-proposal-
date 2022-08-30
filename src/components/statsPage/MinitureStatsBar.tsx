import { ReactNode } from "react"
import {  
    StatsContainerByPiece, 
    StatsIconContainerSPC, 
    StatsIconSPC, 
    StatsNameAndValueContainerSPC, 
    StatsNameAndValueSPC, 
    StatsNameContainerSPC, 
    StatsNameSPC, 
    StatsValueContainerSPC, 
    StatsValueSPC } from "../../styles/Styles"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"


type MiniatureStatsBarType<T> = {
    Icon: ReactNode,
    displayValue: T,
    displayVariable: string
}


export const MiniatureStatsBar = <T,>({
    Icon,
    displayValue,
    displayVariable
}:MiniatureStatsBarType<T>) => {
    const {theme} = useThemeDetails()
    return <>
        <StatsContainerByPiece>
            <StatsIconContainerSPC>
                <StatsIconSPC>
                    {
                        Icon
                    }
                </StatsIconSPC>
            </StatsIconContainerSPC>
            <StatsNameAndValueContainerSPC>
                <StatsNameAndValueSPC>
                    <StatsNameContainerSPC>
                        <StatsNameSPC theme={theme}>
                            {
                                displayVariable
                            }
                        </StatsNameSPC>
                    </StatsNameContainerSPC>
                    <StatsValueContainerSPC>
                        <StatsValueSPC theme={theme}>
                            {
                                displayValue
                            }
                        </StatsValueSPC>
                    </StatsValueContainerSPC>
                </StatsNameAndValueSPC>
            </StatsNameAndValueContainerSPC>
        </StatsContainerByPiece>
    </>
}