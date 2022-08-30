import {  
    NavBarNBP, 
} from "../../styles/Styles"

import HeadingSloganContainerNBPComp from "./HeadingSloganContainerNBPComp"
import NavLinksContainerComp from "./NavLinksContainerComp"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"


export const NavBar = () => {
    const { theme } = useThemeDetails()
    return <>
        <NavBarNBP theme={theme}>
            <HeadingSloganContainerNBPComp />
            <NavLinksContainerComp/>
        </NavBarNBP>
    </>
}
