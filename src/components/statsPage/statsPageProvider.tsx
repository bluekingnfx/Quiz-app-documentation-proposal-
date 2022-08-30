import { createContext } from "react";
import { StatsPageTypeContext} from "../../typesDef";



export const StatsPageContext = createContext<undefined|StatsPageTypeContext>(undefined)

export const StatsPageProvider = ({
    children,
    Catagories,
    UrlString,
    UrlStringSetter,
    diffSetter,
    difficulty,
    format,
    formatSetter,
    immediate,
    questions,
    setCatagories,
    setImmediate,
    setQuestions,
    setReplay,
    setNewGame,
    setUnAnswered,
    setMaxComp
}:StatsPageTypeContext) => {
    const data = {
        children,
        Catagories,
        UrlString,
        UrlStringSetter,
        diffSetter,
        difficulty,
        format,
        formatSetter,
        immediate,
        questions,
        setCatagories,
        setImmediate,
        setQuestions,
        setReplay,
        setNewGame,
        setUnAnswered,
        setMaxComp
    }
    return <>
        <StatsPageContext.Provider value={data}>
            {
                children
            }
        </StatsPageContext.Provider>
    </>
}