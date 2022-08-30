import { formStep4 } from "../rootFiles/ParentComp/StepFunctions/form"
import { FormatSelectPagePropType } from "../../typesDef"

export const FormatSelectPage = ({
    setFormatQ,
    immediateSetter,
}:FormatSelectPagePropType) => {
    return <div
    onClick={()=>formStep4(setFormatQ,immediateSetter)}
    >
        type
    </div>
}