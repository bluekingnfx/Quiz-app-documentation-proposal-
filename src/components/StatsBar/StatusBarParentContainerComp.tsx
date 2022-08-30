import { BiCategoryAlt,BiSelectMultiple } from "react-icons/bi";
import { GiTargetArrows } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
import {VscSymbolBoolean} from "react-icons/vsc"
import {
    IoShieldOutline,
    IoShieldHalf,
    IoShieldSharp
} from "react-icons/io5"

import {AiFillEyeInvisible} from "react-icons/ai"


import { StatusBarNBParentContainer } from "../../styles/Styles";
import { StatsBarPropType } from "../../typesDef";
import { StatusBarNBP } from "./StatusBarNBP";
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails";



export const StatusBarParentContainerComp = ({
    amuNavCon,
    catNavCon,
    diffNavCon,
    formNavCon,
    amuValue,
    catValue,
    diffValue,
    formValue,
    immediateNavCon,
    immediateValue,
    setMaxComp
}:StatsBarPropType) => {
    const {theme} = useThemeDetails()
    return <StatusBarNBParentContainer theme={theme}>
    <StatusBarNBP 
        DisplayString="Question"
        condition={amuNavCon}
        DisplayValue={amuValue} 
        component={<GiTargetArrows/>}
        setMaxComp={setMaxComp}
    />
    <StatusBarNBP 
        DisplayString="Catagories"
        condition={catNavCon}
        DisplayValue={catValue} 
        component={<BiCategoryAlt/>}
        setMaxComp={setMaxComp}
    />
    <StatusBarNBP
        DisplayString="Level"
        condition={diffNavCon}
        setMaxComp={setMaxComp}
        DisplayValue={diffValue} 
        component={diffValue === "easy" ? <IoShieldOutline/> : diffValue === "medium"  ? <IoShieldHalf/> : <IoShieldSharp/>}
    />
    <StatusBarNBP
        DisplayString="Mode"
        condition={formNavCon}
        DisplayValue={formValue} 
        component={formValue === "multiple" ? <BiSelectMultiple/> : <VscSymbolBoolean/>}
        setMaxComp={setMaxComp}
    />
    <StatusBarNBP
        DisplayString="Evaluation"
        condition={immediateNavCon}
        DisplayValue={
            immediateValue === true ? 
            "Instant": 
            "Solitary"
        } 
        component={ 
            immediateValue === true ?  
            <MdVisibility/> : <AiFillEyeInvisible/>
        }
        setMaxComp={setMaxComp}
    />
</StatusBarNBParentContainer>
}