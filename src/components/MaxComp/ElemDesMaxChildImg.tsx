
import { 
    DescriptionToImgMCP, 
    DisplayStringParentContainerMCP, 
    DisplayStringParentMCP, 
    DisplayValueParentContainerMCP, 
    DisplayValueParentMCP 
} from "../../styles/Styles"
import { ElemDesMaxChildImgType } from "../../typesDef"


/* 
    !belongs to statusPageStatsBar goes to the func MaxComponentChildFunc
*/

export const ElemDesMaxChildImg = <T,>({
    DisplayString,
    DisplayValue,
    theme
}:ElemDesMaxChildImgType<T>) => {
    return <DescriptionToImgMCP theme={theme}>
        <DisplayStringParentContainerMCP >
            <DisplayStringParentMCP theme={theme}>
                {
                    DisplayString
                }
            </DisplayStringParentMCP>
        </DisplayStringParentContainerMCP>
        <DisplayValueParentContainerMCP>
            <DisplayValueParentMCP theme={theme}>
                {
                    DisplayValue
                }
            </DisplayValueParentMCP>
        </DisplayValueParentContainerMCP>
    </DescriptionToImgMCP>
    
}

export default ElemDesMaxChildImg