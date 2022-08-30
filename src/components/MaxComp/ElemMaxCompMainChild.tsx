import { 
    MaxChildImgContainerMCP,
    MaxChildImgMCP, 

} from "../../styles/Styles"
import { 
    ElemMaxCompMainChildType,
} from "../../typesDef"

export const ElemMaxCompMainChild = ({
    theme,
    ImageDetails
}:ElemMaxCompMainChildType) => {
    
/* 
    !belongs to statusPageStatsBar goes to the func MaxComponentChildFunc
*/
    return <>
        { ImageDetails.imageCon === true && 
            <MaxChildImgContainerMCP theme={theme}>
                {
                    typeof ImageDetails.image === "string" ?  <MaxChildImgMCP src={ImageDetails.image}/> : <>
                        {ImageDetails.image}
                    </>
                }
            </MaxChildImgContainerMCP>
        }
    </>
}