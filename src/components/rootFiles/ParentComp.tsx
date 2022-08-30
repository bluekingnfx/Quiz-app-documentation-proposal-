import React, { FC, useState } from "react"

import {
    ImmediateUSType,
    UrlUSType,
    amuConUSType,
    CatUSType,
    diffUSType,
    formQUSType,
    MaxCompUSTypes,
} from "../../typesDef"
import { InputQuestionsPage } from "../InputQuestions/InputQuestionsPage"
import { CatagoriesSelectPage } from "../Catagories/CatagoriesSelectPage"
import { DifficultySelectPage } from "../Difficulty/DifficultySelectPage"
import { FormatSelectPage } from "../Format/FormatSelectPage"
import { QuizComponent } from "./ParentComp/QuizComponent"
import { NavBar } from "../NavBarNBP/NavBar"
import { EvaluationPattern } from "../Evaluation/EvaluationPattern"
import { StatsPage } from "../statsPage/StatsPageQuiz"
import { StatsPageProvider } from "../statsPage/statsPageProvider"
import { StatusBarParentContainerComp } from "../StatsBar/StatusBarParentContainerComp"
import { MaxComp } from "../MaxComp/MaxComp"




export const ParentComponent:FC = ():JSX.Element => {

    const [maxComp,setMaxComp] = useState<MaxCompUSTypes>({
        con:false,
        component:null,
    })

    const [unAnswered,setUnAnswered] = useState<boolean>(true)

    const [replay,setReplay] = useState<boolean>(false)

    const [newGame,setNewGame] = useState<boolean>(false)

    const [immediate,setImmediate] = useState<ImmediateUSType>({
        conImmediate:true, 
        renderingCon:false, 
        statsArray:[{}], 
        navCondition:false, 
    })
    const [url,setUrl] = useState<UrlUSType>({
        urlString:"",
        con:false,
    })
    const [amountConstraints,setAmountConstraints] = useState<amuConUSType>({
        questions:10,
        condition:true,
        navCondition:false
    })
    const [Catagories,setCatagories] = useState<CatUSType>({
        cat:10,
        con:false,
        navCondition:false
    })
    const [DifficultyLevel,setDifficultyLevel] = useState<diffUSType>({
        diff:"easy",
        con:false,
        navCondition:false,
    })
    const [formatQ,setFormatQ] = useState<formQUSType>({
        formQ:"multiple",
        con:false,
        navCondition:false
    })
    
    return <>
        {
            maxComp.con === true && <MaxComp 
                setter={setMaxComp} 
                maxComp={maxComp}
            />
        }
        {
            <NavBar />
        }
        {
            <StatusBarParentContainerComp
                amuNavCon={amountConstraints.navCondition}
                amuValue = {amountConstraints.questions}
                catNavCon = {Catagories.navCondition}
                catValue = {Catagories.cat}
                diffNavCon = {DifficultyLevel.navCondition}
                diffValue = {DifficultyLevel.diff}
                formNavCon = {formatQ.navCondition}
                formValue = {formatQ.formQ}
                immediateNavCon = {immediate.navCondition}
                immediateValue = {immediate.conImmediate}
                setMaxComp = {setMaxComp}
            />
        }
        {
            !replay && amountConstraints.condition === true  && 
            <InputQuestionsPage 
                setCatagories={setCatagories}
                setAmountConstraints={setAmountConstraints}
            />
        }
        {
            !replay && Catagories.con === true && <CatagoriesSelectPage
                setCatagories={setCatagories} 
                setDifficultyLevel={setDifficultyLevel}

            />
        }{
            !replay && DifficultyLevel.con === true && <DifficultySelectPage
                setDifficultyLevel={setDifficultyLevel}
                setFormatQ={setFormatQ}
            />
        }{
            formatQ.con === true && <FormatSelectPage
                setFormatQ={setFormatQ}
                immediateSetter={setImmediate}
            />
        }{
            !replay && immediate.renderingCon === true && 
            <EvaluationPattern 
                ImmediateSetter={setImmediate}  
                replay = {replay}
                Catagories={Catagories}
                DifficultyLevel={DifficultyLevel}
                amountConstraints={amountConstraints}
                formatQ={formatQ}
                setUrl={setUrl}
            />
        }{
            url.con && !amountConstraints.condition && !Catagories.con && 
            !DifficultyLevel.con &&  !formatQ.con && !immediate.renderingCon  && <QuizComponent 
                questions={amountConstraints.questions} 
                setQuestions={setAmountConstraints} 
                Catagories={Catagories.cat} 
                setCatagories={setCatagories} 
                diffSetter={setDifficultyLevel}
                difficulty={DifficultyLevel.diff}
                format={formatQ.formQ}
                formatSetter={setFormatQ}
                UrlString={url.urlString}
                UrlStringSetter={setUrl}
                immediate={immediate.conImmediate}
                setImmediate={setImmediate}
                replay = {replay}
                newGame={newGame}
                statsArray={immediate.statsArray}
                setMaxComp={setMaxComp}
                unAnswered={unAnswered}
                setUnAnswered={setUnAnswered}
            />

        }{
            !url.con && !amountConstraints.condition && !Catagories.con && 
            !DifficultyLevel.con && !formatQ.con && !immediate.renderingCon && <StatsPageProvider
                immediate={immediate}
                Catagories={Catagories.cat}
                UrlStringSetter={setUrl}
                diffSetter={setDifficultyLevel}
                difficulty={DifficultyLevel.diff}
                UrlString={url.urlString}
                format={formatQ.formQ}
                formatSetter={setFormatQ}
                setCatagories={setCatagories}
                questions={amountConstraints.questions}
                setImmediate={setImmediate}
                setQuestions={setAmountConstraints}
                setReplay={setReplay}
                setNewGame={setNewGame}
                setUnAnswered={setUnAnswered}
                setMaxComp={setMaxComp}
            >
                <StatsPage/>
            </StatsPageProvider>
        }
</>
}















