import { themeInitialSetting } from "../../rootFiles/ParentComp/StepFunctions/useThemeLocalStorage"
import { 
    MaxCompMainChild, 
    MaxCompMainChildParent, 
    MaxCompMainChildParentContainer
} from "../../../styles/Styles"
import { 
    MaxCompUSTypes, 
    StylesFalseType, 
    StylesTrueType, 
    ImageDetailsFalseType, 
    ImageDetailsTrueSrcType, 
    ImageDetailsTrueCompType 
} from "../../../typesDef"
import ElemDesMaxChildImg from "../ElemDesMaxChildImg"
import { ElemMaxCompMainChild } from "../ElemMaxCompMainChild"
import { Dispatch, SetStateAction } from "react"


export const MaxCompChildFunc = <T,>(
    DisplayString:string,
    DisplayValue:T,
    setMaxComp:Dispatch<SetStateAction<MaxCompUSTypes>>,
    theme:themeInitialSetting,
    stylesCusParent:StylesFalseType | StylesTrueType={
        stylesCon:false
    },
    imgDetails:ImageDetailsFalseType|ImageDetailsTrueSrcType | ImageDetailsTrueCompType = {
        imageCon:false,
    },
    stylesCusChild:StylesFalseType | StylesTrueType = {
        stylesCon:false
    }
):void => {

    const StyleChildEx =  (stylesCusChild && stylesCusChild.stylesCon === true && stylesCusChild.stylesAssociated !== undefined ) ? stylesCusChild.stylesAssociated : {}

    const Elm = <MaxCompMainChildParentContainer theme={theme} style={stylesCusParent && stylesCusParent.stylesCon === true ? stylesCusParent.stylesAssociated : {}}>
        <MaxCompMainChildParent>
            <MaxCompMainChild theme={theme} style={StyleChildEx}>
                <ElemMaxCompMainChild 
                    theme={theme} 
                    ImageDetails={imgDetails}
                />

                <ElemDesMaxChildImg 
                    theme={theme} 
                    DisplayValue={DisplayValue} 
                    DisplayString={DisplayString}
                />
            </MaxCompMainChild>

        </MaxCompMainChildParent>

    </MaxCompMainChildParentContainer>

    setMaxComp((prevValue)=>{
        return {
            ...prevValue,con:true,component:Elm
        }
    })
}