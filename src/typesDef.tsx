import { 
    Dispatch,
    SetStateAction,
    ReactNode,
    CSSProperties,
    RefObject
} from "react"
import { themeInitialSetting } from "./components/rootFiles/ParentComp/StepFunctions/useThemeLocalStorage"

export type QuesSetterType = Dispatch<SetStateAction<number>>

export type UIArrayType = {
    category?:string,
    difficulty?:string
    question?:string,
    correct_answer?:string
    options?:string[]
    id?:string,
    checkedAnswer?:boolean,
    answeredAnswer?:string
}[]

export type FetchedDatatype = {
    data:{
        results:{category?:string,type?:string,difficulty?:string,question?:string,correct_answer?:string,incorrect_answers?:string[]}[],
        response_code?:number|string
    },
    status?:number,
    statusText?:string,
    headers?:object,
    config?:object,
    request?:object
}

export type QuizComponentPropTypes = {
    questions:number,
    setQuestions:Dispatch<SetStateAction<amuConUSType>>

    Catagories:number,
    setCatagories:Dispatch<SetStateAction<CatUSType>>

    difficulty:"hard"|"easy"|"medium",
    diffSetter:Dispatch<SetStateAction<diffUSType>>,

    format:"multiple"|"boolean",
    formatSetter:Dispatch<SetStateAction<formQUSType>>,

    UrlString:string,
    UrlStringSetter: Dispatch<SetStateAction<UrlUSType>>

    immediate:boolean,
    setImmediate:Dispatch<SetStateAction<ImmediateUSType>>

    replay:boolean

    newGame:boolean

    statsArray:UIArrayType

    setMaxComp:Dispatch<SetStateAction<MaxCompUSTypes>>

    unAnswered:boolean,

    setUnAnswered:Dispatch<SetStateAction<boolean>>
}

export type UIArrayQD = {
    category?:string,
    difficulty?:string
    question?:string,
    correct_answer?:string
    options?:string[]
    id?:string,
    checkedAnswer?:boolean,
    answeredAnswer?:string
}


export type UrlUSType = {urlString:string,con:boolean}

export type amuConUSType = {
    questions:number,
    condition:boolean,
    navCondition:boolean
}

export type CatUSType = {cat:number,con:boolean,navCondition:boolean}

export type diffUSType = {diff:"hard"|"easy"|"medium",con:boolean,navCondition:boolean}

export type formQUSType = {formQ:"multiple"|"boolean",con:boolean,navCondition:boolean}


export type ImmediateUSType = {
    renderingCon:boolean,
    conImmediate:boolean,
    statsArray:{}[] | UIArrayType,
    navCondition:boolean
} 

export type UnAnsweredUSType = {
    con:boolean,
    UnAnsweredQuestions: {
        quesNo:number
    }[]
}

export type InputQuestionsPagePropType = {
    setAmountConstraints:Dispatch<SetStateAction<amuConUSType>>,
    setCatagories:Dispatch<SetStateAction<CatUSType>>
}

export type CatagoriesSelectPagePropsType = {
    setCatagories:Dispatch<SetStateAction<CatUSType>>,
    setDifficultyLevel:Dispatch<SetStateAction<diffUSType>>
}

export type DifficultySelectPagePropType = {
    setFormatQ:Dispatch<SetStateAction<formQUSType>>,
    setDifficultyLevel:Dispatch<SetStateAction<diffUSType>>,
}

export type FormatSelectPagePropType = {
    setFormatQ:Dispatch<SetStateAction<formQUSType>>,
    
    immediateSetter:Dispatch<SetStateAction<ImmediateUSType>>
}


export type StatsBarPropType = {
    amuNavCon:boolean
    catNavCon:boolean
    diffNavCon:boolean
    formNavCon:boolean
    amuValue:number
    catValue:number
    diffValue:"hard"|"easy"|"medium"
    formValue:"multiple"|"boolean"
    immediateNavCon: boolean
    immediateValue : boolean
    setMaxComp:Dispatch<SetStateAction<MaxCompUSTypes>>
}


export type EvalPropsType = {
    ImmediateSetter:Dispatch<SetStateAction<ImmediateUSType>>,
    setUrl:Dispatch<SetStateAction<UrlUSType>>,
    Catagories:CatUSType,
    DifficultyLevel:diffUSType,
    formatQ:formQUSType,
    amountConstraints:amuConUSType,
    replay:boolean,
}

export type ImmediateProviderType = {
    setFetchedQ:Dispatch<SetStateAction<{
        con: boolean;
        QuestionsArray: {}[] | UIArrayType;
    }>>,
    setError: Dispatch<SetStateAction<string>>,
    fetchedQ: {
        con: boolean;
        QuestionsArray: {}[] | UIArrayType;
    }
    questions:number,
    UrlStringSetter:Dispatch<SetStateAction<UrlUSType>>,
    children:ReactNode
    setImmediate:Dispatch<SetStateAction<ImmediateUSType>>,
    error:string,
    UnAnswered:boolean,
    setUnAnswered: Dispatch<SetStateAction<boolean>>,
    setMaxComp:Dispatch<SetStateAction<MaxCompUSTypes>>
}


export type ImmediateContextType = {
    setFetchedQ:Dispatch<SetStateAction<{
        con: boolean;
        QuestionsArray: {}[] | UIArrayType;
    }>>,
    setError: Dispatch<SetStateAction<string>>,
    fetchedQ: {
        con: boolean;
        QuestionsArray: {}[] | UIArrayType;
    }
    questions:number,
    UrlStringSetter:Dispatch<SetStateAction<UrlUSType>>
    setImmediate:Dispatch<SetStateAction<ImmediateUSType>>,
    error:string,
    UnAnswered:boolean,
    setUnAnswered: Dispatch<SetStateAction<boolean>>,
    setMaxComp:Dispatch<SetStateAction<MaxCompUSTypes>>
}

export type ButtonSetParentType = {
    QtoD:UIArrayQD,
    currentQues:number,
    setCurrentQues:Dispatch<SetStateAction<number>>,
    OptionsParentRef:RefObject<HTMLDivElement>,
    setAnswered:Dispatch<SetStateAction<string|undefined>>,
    setCorrectAns:Dispatch<SetStateAction<string|undefined>>,
    setNavHighLighter:Dispatch<SetStateAction<number|undefined>>,
    setNavNumStats: Dispatch<SetStateAction<NavNumStatsUsType>>
    NavNumStats: NavNumStatsUsType
}

export type ToButtonPrevTypes = {
    currentQues:number,
    setCurrentQues:Dispatch<SetStateAction<number>>
    FetchedQ: {
        con: boolean;
        QuestionsArray: {}[] | UIArrayType;
    }
    setAnswered:Dispatch<SetStateAction<string | undefined>>
    setCorrectAns:Dispatch<SetStateAction<string | undefined>>
    setNavHighLighter:Dispatch<SetStateAction<number|undefined>>
    setNavNumStats: Dispatch<SetStateAction<NavNumStatsUsType>>,
    NavNumStats: NavNumStatsUsType
}

export type NextOrCButTypes = {
    currentQues:number,
    setCurrentQues:Dispatch<SetStateAction<number>>
    FetchedQ: {
        con: boolean;
        QuestionsArray: {}[] | UIArrayType;
    }
    setAnswered:Dispatch<SetStateAction<string | undefined>>
    setCorrectAns:Dispatch<SetStateAction<string | undefined>>
    setNavHighLighter:Dispatch<SetStateAction<number|undefined>>,
    setNavNumStats: Dispatch<SetStateAction<NavNumStatsUsType>>,
    NavNumStats: NavNumStatsUsType
}

export type NoAnsweredArType = {
    answeredAnswer: string;
    question?: string | undefined;
    correct_answer?: string | undefined;
    options?: string[] | undefined;
    id?: string | undefined;
    questionNo?: number
}[]


export type CorrectAnsweredType = {
    question?: string | undefined,
    correct_answer?: string | undefined,
    options?: string[] | undefined,
    id?: string | undefined,
    questionNo?: number
}[]

export type WrongAnswerType = {
    question?: string | undefined,
    correct_answer?: string | undefined,
    options?: string[] | undefined,
    id?: string | undefined,
    answeredAnswer: string | undefined;
    questionNo?: number
}[]



export type StatsPageTypeContext = {
    immediate: ImmediateUSType;
    setImmediate: Dispatch<SetStateAction<ImmediateUSType>>;
    questions: number;
    setQuestions: Dispatch<SetStateAction<amuConUSType>>;
    Catagories: number;
    setCatagories: Dispatch<SetStateAction<CatUSType>>;
    difficulty: "hard" | "easy" | "medium";
    diffSetter: Dispatch<SetStateAction<diffUSType>>;
    format: "multiple" | "boolean";
    formatSetter: Dispatch<SetStateAction<formQUSType>>;
    UrlString: string;
    UrlStringSetter: Dispatch<SetStateAction<UrlUSType>>;
    setReplay: Dispatch<SetStateAction<boolean>>
    setNewGame:Dispatch<SetStateAction<boolean>>
    children:ReactNode,
    setUnAnswered:Dispatch<SetStateAction<boolean>>,
    setMaxComp:React.Dispatch<React.SetStateAction<MaxCompUSTypes>>
}


export type PieChartDataProps = {
    PieChartData:{
        title: string;
        value: number;
        color: string;
    }[]
}

export type PieChartArgType = {
    title:string,
    value: number,
    color:string
}[]

export type ExactPercentageType = {
    WrongPercentage: number;
    CorrectPercentage: number;
    NoAnswerPercentage: number;
}

export type MaxCompUSTypes = {
    con:boolean,
    component:ReactNode | null,
    customStyles?:CSSProperties
}

export type MaxCompTypes = {
    maxComp:MaxCompUSTypes,
    setter:Dispatch<SetStateAction<MaxCompUSTypes>>,
}

export type ImageDetailsFalseType = {
    imageCon:false,
}

export type ImageDetailsTrueSrcType = {
    image:string,
    imageCon:true,
}

export type ImageDetailsTrueCompType = {
    image:ReactNode,
    imageCon: true
}


export type StylesFalseType = {
    stylesCon:false
}

export type StylesTrueType = {
    stylesAssociated:CSSProperties,
    stylesCon:true
}

export type ElemDesMaxChildImgType<T> = {
    DisplayString:string,
    DisplayValue:T,
    theme:themeInitialSetting 
}


export type ElemMaxCompMainChildType = {
    theme:themeInitialSetting,
    ImageDetails:ImageDetailsFalseType | ImageDetailsTrueSrcType | ImageDetailsTrueCompType
}

export type StatusBarNBPTypes<T> = {
    condition:boolean;
    DisplayString:string;
    DisplayValue:T
    component:ReactNode
    setMaxComp:Dispatch<SetStateAction<MaxCompUSTypes>>
}

export type OpenCircleForNavThrQCompType = {
    setShowNav:Dispatch<SetStateAction<boolean>>,
    showNav:boolean
}

export type NavThroughQuestionsComponentProps = {
    LengthOFQuesArray:number,
    responseFuncTypeImmediate:boolean,
    questions?:number,
    setCurrentQues?:Dispatch<SetStateAction<number>>,
    setAnswered?:Dispatch<SetStateAction<string | undefined>>,
    setCorrectAns?:Dispatch<SetStateAction<string | undefined>>
    fetchedQ?: {
        con: boolean;
        QuestionsArray: {}[] | UIArrayType;
    }
    setNavHighLighter?:Dispatch<SetStateAction<number | undefined>>
    NavHighLighter?:number | undefined,
    setNavNumStats?: Dispatch<SetStateAction<NavNumStatsUsType>>,
    NavNumStats?: NavNumStatsUsType 
}

export type OptionsLateralCompProps = {
    optionsPerQ:string[] | undefined,
    ques:string | undefined,
    index:number
}

export type QuestionConLPCType = {
    quesPiece:string | undefined,
}

export type LateralSubmitButtonCompProps = {
    quesArray:UIArrayType
}


export type NavNumStatsUsType = {
    visited:boolean,
    checked:boolean 
    quesNo:number,
    backgroundColor:string,
    NumCon: "default" | "correct" | "wrong"
}[] | undefined

interface QuestionStatsNAnswerGeneralI{
    question?: string | undefined;
    correct_answer?: string | undefined;
    options?: string[] | undefined;
    id?: string | undefined;
    answeredAnswer?: string | undefined,
    questionNo?:number
}

export type QuestionStatsConClusiveStatsPageCompType = {
    i:QuestionStatsNAnswerGeneralI
}


export type AnswerParentConclusiveStatsPageSPCType = {
    i:QuestionStatsNAnswerGeneralI,
    ArrayNature: "Correct" | "Wrong" | "Unanswered",
    immediateCon?:boolean
}

export type borderRequirementDefaultType = [false]
export type borderRequirementUsageType = [true,string]

export type TTBackColorRequirementDefaultType = [false]
export type TTBackColorRequirementUsageType = [true,string]


export type LegendProducerType<T> = {
    color:string,
    name?:string,
    width:number,
    height:number,
    ToolTipContent:T,
    widthUnit?:"%" | "px",
    heightUnit?:"%" | "px",
    borderRequirement?:borderRequirementDefaultType | borderRequirementUsageType,
    ToolTipColor?:TTBackColorRequirementDefaultType | TTBackColorRequirementUsageType ,
}
