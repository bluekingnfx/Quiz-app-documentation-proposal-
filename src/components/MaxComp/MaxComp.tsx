
import { AiOutlineClose } from "react-icons/ai";

import { MaxCompParentContainer, MaxCompParent, IconContainerMPC } from "../../styles/Styles";
import { MaxCompTypes } from "../../typesDef";
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails";
import { ClearMaximizer } from "./functions/ClearMaximizer";



export const MaxComp = ({
    setter,
    maxComp
}:MaxCompTypes) => {
    const {theme} = useThemeDetails()
    document.getElementsByTagName("body"!)[0].style.overflowY = "hidden"
    return <MaxCompParentContainer  onClick={()=>ClearMaximizer(setter)} theme={theme}>
        <MaxCompParent style={maxComp.customStyles && maxComp.customStyles}
            onClick={(e)=>e.stopPropagation()} theme={theme}>
            {
                
                maxComp.component !== null && maxComp.component

            }
            <IconContainerMPC theme={theme} onClick={()=>{
                ClearMaximizer(setter)
            }}>
                <AiOutlineClose/>
            </IconContainerMPC>
        </MaxCompParent>
    </MaxCompParentContainer>
}


