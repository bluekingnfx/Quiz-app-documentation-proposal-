import { Dispatch,RefObject,SetStateAction } from "react"
import { NavNumStatsUsType, UIArrayType } from "../../../typesDef"

export const InstantEvaluation = (
    e:React.MouseEvent<HTMLButtonElement,MouseEvent>,
    OptionsRef:RefObject<HTMLDivElement>,
    id:string,
    FetchedArray:UIArrayType,
    correctAns:string,
    setError:Dispatch<SetStateAction<string>>,
    setFetchedQ: Dispatch<SetStateAction<{
        con: boolean;
        QuestionsArray: {}[] | UIArrayType;
    }>>,
    setAnswered:Dispatch<SetStateAction<string|undefined>>,
    setCorrectAns:Dispatch<SetStateAction<string|undefined>>,
    error:string,
    setNavNumStats: Dispatch<SetStateAction<NavNumStatsUsType>>,
    NavNumStats: NavNumStatsUsType,
    currentQues:number
) => {
    const target = e.target as HTMLButtonElement
    target.disabled = true
    if(OptionsRef.current === null) return
    const OptionsId = OptionsRef.current.id
    const InputChecked:HTMLInputElement | null = document.querySelector(`#${OptionsId} input[name="InputIm${id}"]:checked`)
    if(InputChecked === null){
        
        setError("No option is Checked")
        target.disabled = false
        return 
    }

    if(error === "No option is Checked"){
        setError("")
    }


    const CheckedVal:string = InputChecked.value
    const AnsweredMarker = FetchedArray.map(i=>{
        if(i.id!==id)return i
        return {...i,checkedAnswer:true,answeredAnswer:CheckedVal}
    })

    if(setNavNumStats !== undefined && NavNumStats !== undefined){
        const NewNavStats:NavNumStatsUsType = NavNumStats.map(i=>{
            if(i.quesNo === currentQues){
                return {...i,visited:true,checked:true,backgroundColor:"#23ce05",NumCon:correctAns === CheckedVal ? "correct" : "wrong"}
            }
            else return i
        })

        setNavNumStats(NewNavStats)
    }
    
    setAnswered(CheckedVal)
    setCorrectAns(correctAns)

    setFetchedQ({
        QuestionsArray:AnsweredMarker,
        con:true
    })
    
    target.disabled = false
}