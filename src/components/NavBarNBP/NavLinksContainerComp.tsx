import { 
    AboutPageIconContainer, 
    AboutPageIconNTextContainer, 
    MoonIconContainer, 
    NavLinksContainer, 
    SunIconContainer, 
    ThemeSetterBallNSB, 
    ThemeSetterContainer, 
    ThemeSetterInputNSB, 
    ThemeSetterNSB 
} from "../../styles/Styles"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"
import { ThemeChanger } from "./functions/ThemeChanger"
import {
    BsSunFill,
    BsFillMoonFill
} from "react-icons/bs"
import {
    HiUserGroup
} from "react-icons/hi"



const NavLinksContainerComp = () => {
    const {themeSetter,theme} = useThemeDetails()
    return <NavLinksContainer>
        <ThemeSetterContainer>
            <ThemeSetterNSB theme={theme}>
                <ThemeSetterInputNSB checked={theme === "Dark" ? true : false} type="checkbox" onChange={()=>ThemeChanger(theme,themeSetter)}/>
                <ThemeSetterBallNSB/>
                <SunIconContainer>
                    <BsSunFill/>
                </SunIconContainer>
                <MoonIconContainer>
                    <BsFillMoonFill/>
                </MoonIconContainer>
            </ThemeSetterNSB>
        </ThemeSetterContainer>
        <AboutPageIconNTextContainer>
            <AboutPageIconContainer>
                <HiUserGroup/>
            </AboutPageIconContainer>
        </AboutPageIconNTextContainer>
    </NavLinksContainer>
}

export default NavLinksContainerComp