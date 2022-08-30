import { 
    PointParentContainer, 
    MainPointContainer, 
    SubPointPDC } from "../../../styles/Styles"
import { useThemeDetails } from "../../rootFiles/ParentComp/useThemeDetails"

type PointOfDetailContType = {
    mainPoint:string,
    subPoints:string[],
    NoBottomMargin?:boolean 
}

export const PointsOfDetailCont = ({
    mainPoint,
    subPoints,
    NoBottomMargin = false
}:PointOfDetailContType) => {
    const {theme} = useThemeDetails()
    return <PointParentContainer BtmMargin={NoBottomMargin}>
        <MainPointContainer theme={theme}>
            {
                mainPoint
            }
        </MainPointContainer>
        {
            subPoints.map((subPoint,ind)=>{
                return <SubPointPDC theme={theme} key={ind}>
                        {
                            subPoint
                        }
                </SubPointPDC>
            })
        }
    </PointParentContainer>
}