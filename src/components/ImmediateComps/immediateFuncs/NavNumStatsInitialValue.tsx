import { NavNumStatsUsType, UIArrayType } from "../../../typesDef"



export const NavNumStatsInitialValue = (fetchedQ: {
    con: boolean;
    QuestionsArray: {}[] | UIArrayType;
}):NavNumStatsUsType  => {
    const InitialValue:{
        visited: boolean;
        checked: boolean;
        quesNo: number;
        backgroundColor: string;
        NumCon: "default" | "correct" | "wrong";
    }[] = Array((fetchedQ.QuestionsArray).length).fill("some").map((_,index)=>{
        if(index===0){
            return {
                visited:true,
                checked:false,
                quesNo:index,
                backgroundColor:"#b30808",
                NumCon:"default"
            }
        }
        return {
            visited:false,
            checked:false,
            quesNo:index,
            backgroundColor:"noColor",
            NumCon:"default"
        }
    })
    return InitialValue
}