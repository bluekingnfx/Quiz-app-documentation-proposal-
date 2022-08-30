
import { 
    StatusListingContainer, 
    InfoOFIconSLC,
} from "../../styles/Styles";
import { StatusBarNBPTypes } from "../../typesDef";
import { MaxCompChildFunc } from "../MaxComp/functions/MaxComponentChildFunc";
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails";

export const StatusBarNBP = <T,>({
    condition,
    DisplayString,
    DisplayValue,
    component,
    setMaxComp
}:StatusBarNBPTypes<T>) => {
    const {theme} = useThemeDetails()
    return <>
    {
        condition === true && <StatusListingContainer theme={theme}>
            <InfoOFIconSLC theme={theme} myGod={"d"}
            onClick={()=>{
                MaxCompChildFunc(DisplayString,DisplayValue,setMaxComp,theme,{
                    stylesCon:false
                },{
                    imageCon:true,
                    image:component
                },{
                    stylesCon:false
                })
            }}>
                {component}
            </InfoOFIconSLC>
        </StatusListingContainer>
    }
    </>
}





