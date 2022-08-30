import { useState,Dispatch,SetStateAction } from "react";
import { 
    ParentUnAnsMaxComp, 
    TheQuesParentNames, 
    QuestionClickUnansweredClickUnMax, 
    QuestionUnansweredClickContainerUnMax, 
    UnAnsMaxCompStyles 
} from "../../styles/Styles";
import { ImmediateUSType, MaxCompUSTypes, UIArrayType } from "../../typesDef";
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails";
import { UnMaxButtonParentComp } from "./UnMaxButtonParent";
import { UnMaxQuesNames } from "./UnMaxNotQuesNames";
import { UnMaxQues } from "./functions/UnMaxQues";

type UnAnsMaxCompType = {
    PseudoFinalUnAnsweredAr:(false | {
        quesNo: number;
        question: string | undefined;
    })[],
    UrlStringSetter:Dispatch<React.SetStateAction<{
        urlString: string;
        con: boolean;
    }>>
    setImmediate: Dispatch<SetStateAction<ImmediateUSType>>,
    setMaxComp:React.Dispatch<React.SetStateAction<MaxCompUSTypes>>,
    FinalArray: UIArrayType,
    setUnAnswered: Dispatch<React.SetStateAction<boolean>>
}

export const UnAnsMaxComp = ({
    PseudoFinalUnAnsweredAr,
    UrlStringSetter,
    setImmediate,
    setMaxComp,
    FinalArray,
    setUnAnswered
}:UnAnsMaxCompType) => {
    const {theme} = useThemeDetails()
    const [ques,setQues] = useState<string | undefined>()
    const [quesNo,setQuesNo] = useState<number|undefined>()
    return <ParentUnAnsMaxComp>
        <UnAnsMaxCompStyles>

            <UnMaxQues/>
            
            <TheQuesParentNames>
                <UnMaxQuesNames 
                    PseudoFinalUnAnsweredAr={PseudoFinalUnAnsweredAr}
                    quesNo={quesNo}
                    setQues={setQues}
                    setQuesNo={setQuesNo}
                />

                <QuestionUnansweredClickContainerUnMax>
                    <QuestionClickUnansweredClickUnMax
                    dangerouslySetInnerHTML={{__html: ques !== undefined && ques ? ques : ""}} theme={theme}/>
                </QuestionUnansweredClickContainerUnMax>

            </TheQuesParentNames>
            
            <UnMaxButtonParentComp
                FinalArray={FinalArray}
                UrlStringSetter={UrlStringSetter}
                setImmediate = {setImmediate}
                setMaxComp = {setMaxComp}
                setUnAnswered = {setUnAnswered}
            />

        </UnAnsMaxCompStyles>
    </ParentUnAnsMaxComp>
}