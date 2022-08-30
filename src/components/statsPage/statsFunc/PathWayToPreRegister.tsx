import { MaxCompForPreRegis } from "../FeatureUpComingFiles/MaxCompOfPreRegis";
import { MaxCompUSTypes } from "../../../typesDef";


export const PathWayToPreRegister = (
    setMaxComp:React.Dispatch<React.SetStateAction<MaxCompUSTypes>>
) => {
    
    setMaxComp(prevValue => {
        return {
            ...prevValue,
            con:true,
            component:<MaxCompForPreRegis/>,
            customStyles:{
                maxWidth: "max-content",
                width:"100%",
                height:"max-content",
                minHeight:"200px"
            }
        }
    })
}