import { Dispatch, SetStateAction } from "react"
import { amuConUSType,CatUSType } from "../../../../typesDef"

export const InpStep1 = (
    setAmountConstraints:Dispatch<SetStateAction<amuConUSType>>,
    setCatagories:Dispatch<SetStateAction<CatUSType>>,
) => {
    setAmountConstraints({
        questions:10,
        condition:false,
        navCondition:true
    })
    setCatagories({
        cat:10,
        con:true,
        navCondition:false
    })
}