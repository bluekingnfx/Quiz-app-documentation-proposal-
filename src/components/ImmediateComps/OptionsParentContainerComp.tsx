import { forwardRef } from "react"
import { 
    ImmediateOptionsParentContainer, 
    ImmediateOptionsParent, 
    ImmediateOptionsIPC, 
    ImmediateOptionsLabel, 
    ImmediateOptionsInputIPC, 
    ImmediateOptionsInputSibling 
} from "../../styles/Styles"
import { UIArrayQD } from "../../typesDef"
import { NoAnsweredString } from "../rootFiles/ParentComp/functions/HelpingFuncs"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"


type OptionsParentContainerCompType = {
    QtoD:UIArrayQD,
    correctAns:string | undefined,
    answeredAns:string | undefined
}

export const OptionsParentContainerComp = forwardRef<HTMLDivElement,OptionsParentContainerCompType>(
    ({QtoD,answeredAns,correctAns},
    OptionsParentRef
) => {
    const {theme} = useThemeDetails()

    return <ImmediateOptionsParentContainer ref={OptionsParentRef} id="TheInputContainer">
    <ImmediateOptionsParent {...(answeredAns !==  NoAnsweredString && {style:{pointerEvents:"none"}})}>
        {QtoD.options?.map((i:string,index:number)=>{
            return <ImmediateOptionsIPC  key={index} theme={theme}>
                
                <ImmediateOptionsLabel
                    theme={theme}
                >
                    <ImmediateOptionsInputIPC 
                        theme={theme}
                        type="radio" 
                        value={i}
                        name = {"InputIm" + QtoD.id}
                    />
                    <ImmediateOptionsInputSibling
                        theme={theme}
                        dangerouslySetInnerHTML={{__html:i}}
                        {...(QtoD.checkedAnswer === true && i === correctAns && {style:{backgroundColor:"#216800d2",color:"#fff",border:0}} )}
                        {...(QtoD.checkedAnswer === true && i === answeredAns && correctAns !== answeredAns && {style:{backgroundColor:"#e80505",color:"#fff",border:0}} )}
                    />
                </ImmediateOptionsLabel>
                
                
            </ImmediateOptionsIPC>
        })}

    </ImmediateOptionsParent> 
</ImmediateOptionsParentContainer>
})


