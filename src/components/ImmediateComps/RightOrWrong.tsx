import {TiTick} from "react-icons/ti"
import {AiOutlineClose} from "react-icons/ai"
import { IconContainerPRW } from "../../styles/Styles"

export type ProvideRightOrWrongType = {
    NumCon: "default" | "correct" | "wrong" | "noAns",
    num:number
}

export const ProvideRightOrWrong  = ({
    num,NumCon
}:ProvideRightOrWrongType) => {
    return <>
        {
            NumCon === "correct" && <IconContainerPRW style={{
                backgroundColor: "#23ce05",
            }}>
                <TiTick/>
            </IconContainerPRW>
        }
        {
            NumCon === "wrong" && <IconContainerPRW style={{
                backgroundColor: "#b30808",
            }} >
                <AiOutlineClose />
            </IconContainerPRW>
        }{
            (NumCon === "default" || NumCon === "noAns") && num
        }
    </>
}