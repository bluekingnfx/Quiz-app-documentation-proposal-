import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md"


import { OpenCircleForNavThrQ, OpenCircleForNavThrQChild } from "../../styles/Styles"
import { OpenCircleForNavThrQCompType } from "../../typesDef"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"






export const OpenCircleForNavThrQComp = ({
    showNav,
    setShowNav
}:OpenCircleForNavThrQCompType) => {
    const {theme} = useThemeDetails()
    return  <OpenCircleForNavThrQ onClick={()=>setShowNav(!showNav)}>
        <OpenCircleForNavThrQChild theme={theme}>
            {
                showNav === false ? <MdOutlineNavigateBefore />
                : <MdOutlineNavigateNext />
            }
        </OpenCircleForNavThrQChild>
    </OpenCircleForNavThrQ>
}