import { Dispatch, SetStateAction } from "react";
import { TheQuesNames, NumUnMaxCompParent, NumUnMax } from "../../styles/Styles";
import { useThemeDetails } from "../rootFiles/ParentComp/useThemeDetails";


type UnMaxQuesNamesType = {
    PseudoFinalUnAnsweredAr: (false | {
        quesNo: number;
        question: string | undefined;
    })[],
    setQuesNo:Dispatch<SetStateAction<number | undefined>>,
    quesNo: number | undefined,
    setQues:Dispatch<SetStateAction<string | undefined>>
}


export const UnMaxQuesNames = ({
    PseudoFinalUnAnsweredAr,
    quesNo,
    setQuesNo,
    setQues
}:UnMaxQuesNamesType) => {
    const {theme} = useThemeDetails()
    return <TheQuesNames>
    {PseudoFinalUnAnsweredAr.map((i,index)=>{
        return <NumUnMaxCompParent key={index} {...(quesNo !== undefined  && quesNo === index && {style:{
                backgroundColor: theme === "Dark" ? "#0002b9" : "#e8e8e8"
            }})}>
                <NumUnMax onClick={()=>{
                    i !== false && setQues(i.question)
                    setQuesNo(index)
                }} theme={theme}>
                    {i!== false && i.quesNo}
                </NumUnMax>
            </NumUnMaxCompParent>
    })}
</TheQuesNames>
}