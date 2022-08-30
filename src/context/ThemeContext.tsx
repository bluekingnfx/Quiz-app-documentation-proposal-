import { createContext,ReactNode } from "react";


export const theme = {
    whiteTheme:{
        font:{
            DarkColor:"#3F3F3F",
            DarkLightColor:"#9C9C9C",
            LightColor:"#C3C3C3"
        },
        border:{
            DarkColor:"#c9c9c9",
            DarkLightColor:"#e7e7e7",
            LightColor:"#f0f0f0",
            extraBorder:{
                BoxShadowBorder:"#F8E8E8",
            },
        },
        backgroundColor:{
            DarkColor:"#ffffff",
            DarkLightColor:"#eeeaf8",
            LightColor:"#dbddf8",
            extraBackgroundColor:{
                LightWhite:"#F9F9F9"
            }
        },
        backShadow:{
            DarkColor:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
            DarkLightColor:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            LightColor:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        },
        glassyBackground:{
            Dark:"#ffffffcc",
            LightDark:"#ffffff5c",
            Light:"#ffffff1b",
        }
    },
    darkTheme:{
        font:{
            DarkColor:"#FDF7FF",
            DarkLightColor:"#CEC9CF",
            LightColor:"#989499",
        },
        border:{
            DarkColor:"#3d04f6",
            DarkLightColor:"#5222f1",
            LightColor:"#4336f3",
            extraBorder:{
                DarkBlackBorder:"#000",
                DarkBlueBorder:"#003cff",
                BoxShadowBorder:"#0b1f5e",

            },
        },
        backgroundColor:{
            DarkColor:"#080752",
            DarkLightColor:"#040569",
            LightColor:"#00027a"
        },
        glassyBackground:{
            LightDarkColor:"#050444d9",
            FeatureSpecific:"#07063a87"
        },
        backShadow:{
            DarkColor:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
            DarkLightColor:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            LightColor:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        },
    },
    extraStyles:{
        shadowsMUI:{
            card_1:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            card_2:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);",
            card_3:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);",
            card_4:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
            card_5:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);"
        },
        GoldColor:"gold",
        darkBackground:{
            LightVariation:{
                lighterBlue:"#13077a"
            },
            DarkVariation:{
                DarkBlack:"#0a0a0a"
            },
        },
        hoverDarkVariation:{
            darkTheme:{
                backColor:"#0002b9"
            },
            WhiteTheme:{
                backColor:"#e8e8e8"
            }
        },
        ParentOFMaxComp:{
            white:"#606062e2",
            black:"#061a46ba"
        },
        font:{
            darkTheme:{
                MediumDark:"#8b8b8b",
            },
            whiteTheme:{
                MediumWhite:"#cecccc",
                frenzyWhite:"#ffffff"
            },
        }
    }

}

export type ColorThemeType = {
    whiteTheme:{
        font:{
            DarkColor:string,
            DarkLightColor:string,
            LightColor:string
        },
        border:{
            DarkColor:string,
            DarkLightColor:string,
            LightColor:string
        },
        backgroundColor:{
            DarkColor:string,
            DarkLightColor:string,
            LightColor:string
        },
        backShadow:{
            DarkColor:string,
            DarkLightColor:string,
            LightColor:string,
        }
    },
    darkTheme:{
        font:{
            DarkColor:string,
            DarkLightColor:string,
            LightColor:string
        },  
        border:{
            DarkColor:string,
            DarkLightColor:string,
            LightColor:string
        },
        backgroundColor:{
            DarkColor:string,
            DarkLightColor:string,
            LightColor:string
        },
        backShadow:{
            DarkColor:string,
            DarkLightColor:string,
            LightColor:string,
        }
    }
}

export const ColorThemeContext = createContext<ColorThemeType>(theme)


export const ThemeContextWrapper = ({children}:{children:ReactNode}) => {
    return <ColorThemeContext.Provider value={theme}>
        {
            children
        }
    </ColorThemeContext.Provider>
}