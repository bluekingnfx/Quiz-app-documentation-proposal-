import { IoDiamondSharp } from "react-icons/io5"
import { 
    PremiumDetailsParentCont, 
    PremiumDetailsCont, 
    PreRegisterParentContainer,
    PreRegisterBut } from "../../../styles/Styles"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"
import { PathWayToPreRegister } from "../statsFunc/PathWayToPreRegister"
import { useStatsPage } from "../useStatsPage"
import { PointsOfDetailCont } from "./PointsOfDetailsCont"



export const PremiumDetails = () => {
    const {setMaxComp} = useStatsPage()
    const {theme} = useThemeDetails()
    return <PremiumDetailsParentCont>
        <PremiumDetailsCont theme={theme}>
            <PointsOfDetailCont 
                mainPoint = "Get Detailed Analysis"
                subPoints={["Details On Intention of Clicking.","Pool Statistics.","Better Visualization and Materials."]}
            />
            <PointsOfDetailCont 
                mainPoint = "Compete In LeaderBoard"
                subPoints={["Own a Premium account.","Archived previous games.","Save your Progress.","Fight for the spot \"No.1\" "]}
                NoBottomMargin={true}
            /> 
            <PreRegisterParentContainer>
                <PreRegisterBut theme={theme} onClick={() => {
                    PathWayToPreRegister(setMaxComp)
                }}>
                    Pre-Register
                    <IoDiamondSharp/>
                </PreRegisterBut>
            </PreRegisterParentContainer>
        </PremiumDetailsCont>
    </PremiumDetailsParentCont>
}


