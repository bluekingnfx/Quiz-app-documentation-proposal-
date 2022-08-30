import { useContext } from "react"
import { ImmediateProviderContext } from "./ImmediateProvider"


export const useImmediateContext = () => {
    const context = useContext(ImmediateProviderContext)
    if(context === undefined) throw new Error("This should be never be happening, happens at ImmediateProvider context")
    return context
}