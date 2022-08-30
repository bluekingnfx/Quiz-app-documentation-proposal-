import { useContext } from "react"
import { StatsPageTypeContext } from "../../typesDef"
import { StatsPageContext } from "./statsPageProvider"



export const useStatsPage = ():StatsPageTypeContext => {
    const ctx = useContext(StatsPageContext)
    if(ctx === undefined) throw new Error("Error should not be happening, It occurred it in useStatsPage hook")
    return ctx
}