import { 
    FeatureUpComingParentContainer, 
    FeatureUpComingContainer, 
    PremiumFeatureImgCont, 
    PremiumFeatureImg
} from "../../styles/Styles"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"

import { PremiumDetails } from "./FeatureUpComingFiles/PremiumDetails"


export const FeatureUpComing = () => {
    const {theme} = useThemeDetails()
    const themeImg = theme === "Dark" ? "https://i.pinimg.com/736x/bd/de/67/bdde67542ad0af6cfb29a723e2f1fb67.jpg" : "https://i.pinimg.com/736x/98/66/e4/9866e4b59abccd308c87ed5b8276c580.jpg"
    return <FeatureUpComingParentContainer>
        <FeatureUpComingContainer theme={theme}>
            <PremiumFeatureImgCont>
                <PremiumFeatureImg theme={theme} src={themeImg} alt="backgroundImgOfPremium"/>
            </PremiumFeatureImgCont>

            <PremiumDetails/>
            
        </FeatureUpComingContainer>
    </FeatureUpComingParentContainer>
}