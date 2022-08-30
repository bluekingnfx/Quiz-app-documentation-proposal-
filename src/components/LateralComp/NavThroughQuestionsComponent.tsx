import { useState } from "react"
import { ProduceNavThroughQBut } from "./laterFunc/ProduceNavThroughQBut"
import { NavThrQParentContainer, NavThrQParent, NavThrQButParent, NavThrQBut, NavThrQParentHeadingContainer, NavThrQParentHeading,  } from "../../styles/Styles"
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails"
import { OpenCircleForNavThrQComp } from "./OpenCircleForNavThrQComp"
import { NavThroughQuestionsComponentProps } from "../../typesDef"
import { ScrollToTheQues } from "./laterFunc/ScrollToTheQues"
import { SetTheCurrentQues } from "../ImmediateComps/immediateFuncs/setCurrentQues"



export const NavThroughQuestionsComponent = ({
    LengthOFQuesArray,
    responseFuncTypeImmediate,
    fetchedQ,
    questions,
    setAnswered,
    setCorrectAns,
    setCurrentQues,
    setNavHighLighter,
    NavHighLighter,
    NavNumStats,
    setNavNumStats
}:NavThroughQuestionsComponentProps) => {
    const {theme} = useThemeDetails()
    const [showNav,setShowNav] = useState<boolean>(false)
    return <>
        {
            showNav && <NavThrQParentContainer theme={theme}>
                <NavThrQParent theme={theme}>
                    <NavThrQParentHeadingContainer theme={theme}>
                        <NavThrQParentHeading theme={theme}>
                            Navigate
                        </NavThrQParentHeading>
                    </NavThrQParentHeadingContainer>
                    {
                        ProduceNavThroughQBut(LengthOFQuesArray).map(i=>{
                            return <NavThrQButParent key={i} theme={theme}>
                                <NavThrQBut theme={theme} onClick={()=>{
                                    if(responseFuncTypeImmediate === true){
                                        SetTheCurrentQues(
                                            setCurrentQues,
                                            i,
                                            setAnswered,
                                            setCorrectAns,
                                            fetchedQ,
                                            NavHighLighter,
                                            setNavHighLighter,
                                            setNavNumStats,
                                            NavNumStats)
                                    }else{
                                        ScrollToTheQues(i)
                                    }
                                }}>{i}</NavThrQBut>
                            </NavThrQButParent>
                        })
                    }
                </NavThrQParent>
            </NavThrQParentContainer>
        }
        <OpenCircleForNavThrQComp setShowNav={setShowNav} showNav={showNav}/>
    </>
}

