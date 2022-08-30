import { LateralSubmitButtonContainer, LateralSubmitButton } from "../../styles/Styles"
import { LateralSubmitButtonCompProps } from "../../typesDef"
import { useImmediateContext } from "../ImmediateComps/useImmediateContext"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"
import { LateralSubmit } from "./laterFunc/LateralSubmit"


export const LateralSubmitButtonComp = ({
    quesArray
}:LateralSubmitButtonCompProps) => {
    const {theme} = useThemeDetails()
    const {UrlStringSetter,setImmediate,setUnAnswered,setMaxComp,UnAnswered} = useImmediateContext()
    return <LateralSubmitButtonContainer>
    <LateralSubmitButton theme={theme} onClick={(e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
        LateralSubmit(e,quesArray,setImmediate,UrlStringSetter,setUnAnswered,setMaxComp,UnAnswered)
    }}>
        Submit
    </LateralSubmitButton>
</LateralSubmitButtonContainer>
}