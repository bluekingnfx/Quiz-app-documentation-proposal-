import { 
    UIArrayType, 
    NoAnsweredArType, 
    CorrectAnsweredType, 
    WrongAnswerType, 
    PieChartArgType,
    ExactPercentageType
} from "../../../typesDef"
import { NoAnsweredString } from "../../rootFiles/ParentComp/functions/HelpingFuncs"



export const segregationFunction = (statsArray:UIArrayType):{
    noAnswerArray:NoAnsweredArType,
    correctAnswerArray:CorrectAnsweredType,
    wrongAnswerArray:WrongAnswerType
    PieChartData:PieChartArgType,
    ExactPercentages: ExactPercentageType
} => {
    let correctAnswerArray:CorrectAnsweredType = []
    let noAnswerArray:NoAnsweredArType = []
    let wrongAnswerArray:WrongAnswerType = []
    statsArray.forEach((i,index)=>{
        const {category,difficulty,answeredAnswer,checkedAnswer,...rest} = i
        if(answeredAnswer === NoAnsweredString && checkedAnswer === false){
            noAnswerArray = [...noAnswerArray,{
                ...rest,
                answeredAnswer,
                questionNo:index+1
            }]
        }else {
            if(i.correct_answer === answeredAnswer && checkedAnswer === true){
                correctAnswerArray = [...correctAnswerArray,{
                    ...rest,
                    questionNo:index+1
                }]
            }else{
                wrongAnswerArray = [...wrongAnswerArray,{
                    ...rest,
                    answeredAnswer,
                    questionNo:index+1
                }]
            }
        }
    })
    const WrongPercentage:number = Math.floor(((wrongAnswerArray.length)/statsArray.length)*100)
    const CorrectPercentage:number = Math.floor(((correctAnswerArray.length)/statsArray.length)*100)
    const NoAnswerPercentage:number = Math.floor(((noAnswerArray.length)/statsArray.length)*100)
    const PieChartDataWithEmpObj = [
        (WrongPercentage ? {
            title:"Wrong",
            value: WrongPercentage,
            color:"#f3ff44"
        } : {}),(CorrectPercentage ? {
            title:"Correct", 
            value:CorrectPercentage,
            color:"#4df869"
        } : {}),(NoAnswerPercentage ? {
            title:"No Attempt",
            value:NoAnswerPercentage,
            color:"#fb7070"
        } : {})
    ]

    let PieChartData:PieChartArgType = []

    PieChartDataWithEmpObj.forEach( i => {
        if(i.color && i.title && i.value) {
            PieChartData.push(i)
        }
    })

    const ExactPercentages:ExactPercentageType = {
        WrongPercentage,
        CorrectPercentage,
        NoAnswerPercentage
    }

    return {
        noAnswerArray,
        correctAnswerArray,
        wrongAnswerArray:wrongAnswerArray,
        PieChartData,
        ExactPercentages
    }
}