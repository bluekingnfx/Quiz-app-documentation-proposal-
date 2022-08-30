import { 
    OptionsInputSibling,
    OptionsLPC,
    OptionsLPCInput,
    OptionsLPCLabel,
    OptionsParentContainerLPC, 
    OptionsParentLPC, 
    QuesNoContainerLPC,
    QuestionNoConLPC
} from "../../styles/Styles"
import { OptionsLateralCompProps } from "../../typesDef"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"



export const OptionsLateralComp = ({
    optionsPerQ,
    ques,
    index
}:OptionsLateralCompProps) => {
    const {theme} = useThemeDetails()
    return <> 
        <OptionsParentContainerLPC >
            <OptionsParentLPC id={`InputContainerFormLPR${index}`}>
                {
                    optionsPerQ && optionsPerQ.map((option,index)=>{
                        return <OptionsLPC theme={theme}  key={index}>
                            <OptionsLPCLabel theme={theme}>
                                <OptionsLPCInput type="radio" name={ ques && ques} value={option}/>
                                <OptionsInputSibling dangerouslySetInnerHTML={{__html:option}}/>
                            </OptionsLPCLabel>
                        </OptionsLPC>
                    })
                }
            </OptionsParentLPC>
        </OptionsParentContainerLPC>
        <QuesNoContainerLPC>
            <QuestionNoConLPC theme={theme}>
                {
                    ++index
                }
            </QuestionNoConLPC>
        </QuesNoContainerLPC>
    </>
}
