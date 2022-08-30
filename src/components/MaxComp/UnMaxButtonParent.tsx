import { Dispatch, SetStateAction } from "react";
import { 
    ButtonParentContainerUnMax, 
    ButtonParentUnMax, 
    StatsButtonParentUnMax, 
    StatsButtonUnMax, 
    CancelButtonParentUnMax, 
    CancelButtUnMax 
} from "../../styles/Styles"
import { ImmediateUSType, MaxCompUSTypes, UIArrayType } from "../../typesDef";
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"
import { CancelGoodSignForReAssessment } from "./functions/CancelGoodSignForReAssessment";
import { GoToStatsPageFromUnMax } from "./functions/GoToStatsPageFromUnMax";


type UnMaxButtonParentCompTypes = {
    setImmediate: Dispatch<SetStateAction<ImmediateUSType>>,
    UrlStringSetter: Dispatch<SetStateAction<{
        urlString: string;
        con: boolean;
    }>>,
    setMaxComp: Dispatch<SetStateAction<MaxCompUSTypes>>,
    FinalArray: UIArrayType,
    setUnAnswered: Dispatch<React.SetStateAction<boolean>>
}

export const UnMaxButtonParentComp = ({
    UrlStringSetter,
    setImmediate,
    setMaxComp,
    FinalArray,
    setUnAnswered
}:UnMaxButtonParentCompTypes) => {
    const {theme} = useThemeDetails()
    return <ButtonParentContainerUnMax>
    <ButtonParentUnMax>
        <StatsButtonParentUnMax onClick = {
            () => GoToStatsPageFromUnMax(FinalArray,UrlStringSetter,setMaxComp,setImmediate)
        }>
            <StatsButtonUnMax theme={theme}>
                Stats
            </StatsButtonUnMax>
        </StatsButtonParentUnMax>
        <CancelButtonParentUnMax>
            <CancelButtUnMax theme={theme} onClick = {
                () => CancelGoodSignForReAssessment(setMaxComp,setUnAnswered)}>
                Cancel
            </CancelButtUnMax>
        </CancelButtonParentUnMax>
    </ButtonParentUnMax>
</ButtonParentContainerUnMax>
}



