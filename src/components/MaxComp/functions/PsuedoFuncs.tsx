import { CSSProperties } from "react"

export const StatsMaxCompChildStyles = ():{
    stylesAssociated: CSSProperties,
    stylesCon:boolean
} => {
    const PropStyles:CSSProperties = {
        width:"max-content",
        height:"80%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
    return {
        stylesAssociated: PropStyles,
        stylesCon:true
    }

}


export const StatsMaxCompGrandChildStyles  = ():{
    stylesAssociated: CSSProperties,
    stylesCon:boolean
} => {
    const PropStyles:CSSProperties = {
        width:"max-content",
        height:"100%",
        display:"flex",
        alignItems:"center",
        flexFlow:"column noWrap",
        justifyContent:"center",
    }
    return {
        stylesAssociated: PropStyles,
        stylesCon:true
    }
}