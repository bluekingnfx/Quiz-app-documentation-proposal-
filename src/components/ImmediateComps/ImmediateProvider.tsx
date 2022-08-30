import { createContext } from "react";
import { 
    ImmediateContextType, 
    ImmediateProviderType 
} from "../../typesDef";



export const ImmediateProviderContext = createContext<ImmediateContextType|undefined>(undefined) 


export const ImmediateProvider = ({
    fetchedQ,
    setError,
    setFetchedQ,
    questions,
    UrlStringSetter,
    children,
    setImmediate,
    error,
    setUnAnswered,
    UnAnswered,
    setMaxComp
}:ImmediateProviderType) => {
    const data:ImmediateContextType = {
        fetchedQ,
        setError,
        setFetchedQ,
        questions,
        UrlStringSetter,
        setImmediate,
        error,
        UnAnswered,
        setUnAnswered,
        setMaxComp
    }
    return <ImmediateProviderContext.Provider value={data}>
        {
            children
        }
    </ImmediateProviderContext.Provider>
}