import styled from "styled-components"
import "./FontConfig.css"

import { theme as CP } from "../context/ThemeContext"
import { borderRequirementDefaultType, borderRequirementUsageType, TTBackColorRequirementDefaultType, TTBackColorRequirementUsageType } from "../typesDef"



export const NavBarNBP = styled.div`
    width:100%;
    height:120px;
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-around;
    align-items: center;
    font-family:Roboto,Tahoma,sans-serif;
    background-color: ${({theme})=>
    theme === "Dark" ? 
        CP.darkTheme.backgroundColor.DarkColor :
        CP.whiteTheme.backgroundColor};
    color: ${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkColor};
    box-shadow: ${props => props.theme !== "Dark" ? CP.extraStyles.shadowsMUI.card_1 : CP.extraStyles.shadowsMUI.card_2} ;
`


export const IconContainerNBP = styled.div`
    width:130px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`



export const IconNBPQLetter = styled.div`
    font-size:90px;
    color:#000;
    font-family:didot;
    font-weight:bold;
    color:gold;
    margin-bottom:12px;
`

export const IconNBPuLetter = styled.div`
    height:max-content;
    font-size:18px;
    display:flex;
    align-items:flex-end;
    position:absolute;
    font-style:italic;
    bottom:25px;
    right:-1px;
    font-family:"Lucida Sans";
`

export const SloganNBP = styled.div`
    width:max-content;
    height:max-content;
    font-size:10px;
    position:absolute;
    left:50px;
    bottom:4px;
`



export const NavLinksContainer = styled.div`
    width:max-content;
    height:100%;
    display:flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items:center;
    & > div{
        display:flex;
        justify-content:center;
        align-items: center;
        flex-flow:column nowrap;
        width:80px;
        height:100%;
    }
`
export const ThemeSetterContainer = styled.div`
`

export const ThemeSetterNSB = styled.label`
    width: 40px;
    height: 15px;
    border-radius: 40px;
    position: relative;
    padding: 5px;
    display:flex;
    flex-flow:row nowrap;
    position:absolute;
    cursor:pointer;
    align-items:center;
    border:${props => props.theme === "Dark" ? "2px solid"+CP.darkTheme.border.DarkColor :"2px solid" + CP.whiteTheme.border.DarkColor} ;
`

export const ThemeSetterInputNSB = styled.input`
    width:100%;
    height:50%;
    display:none;
    position:absolute;
    top:0px;
    right:-10px;
    
    &:checked + div{
        position:absolute;
        right:4px;
    }

`

export const ThemeSetterBallNSB = styled.div`
    width: 20px;
    height:20px;
    position:absolute;
    right:24px;
    border-radius: 50%;
    background-color:#d1d1d1;
    transition:right 0.3s linear;
    z-index:1;
`



export const AboutPageIconNTextContainer = styled.div`
`
export const AboutPageIconContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    height:100%;
    & svg{
        font-size: 25px;
    }
`

export const StatusBarNBParentContainer = styled.div`
    width:100%;
    min-height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:row wrap;
    margin-top:10px;
`


export const SunIconContainer = styled.div`
    position:absolute;
    width:20px;
    height:100%;
    top:4px;
    left:6px;
    color:#fff;
    & > svg{
        font-size:18px;
    }
`

export const MoonIconContainer = styled.div`
    position:absolute;
    width:20px;
    height:100%;
    top:3px;
    right:0px;
    & > svg{
        font-size:16px;
    }
`

export const StatusListingContainer = styled.div`
    width:60px;
    cursor:pointer;
    height:60px;
    margin:10px;
    transition:transform 0.3s linear;
    &:hover{
        transform:scale(1.2);
    }
`
//My God is passed such that you can understand so that you can understand how to pass custom strings
//theme is already is there in props probably
export const InfoOFIconSLC = styled.div<{myGod?:string}>`
    height:100%;
    width:100%; 
    display:flex;
    background-color:${(props)=>props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor: CP.whiteTheme.backgroundColor.DarkColor };
    color:${CP.extraStyles.GoldColor};
    box-shadow:${(props)=>props.theme === "Dark" ? CP.extraStyles.shadowsMUI.card_2: CP.extraStyles.shadowsMUI.card_1};
    justify-content:center;
    align-items:center;
    & svg{
        font-size:40px;
    }
    border-radius:8px;
`


export const MaxCompParentContainer = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    background-color:${props => props.theme === "Dark" ? CP.extraStyles.ParentOFMaxComp.black: CP.extraStyles.ParentOFMaxComp.white};
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:3;
`

export const MaxCompParent = styled.div`
    width:90%;
    max-width:1000px;
    height:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor : CP.whiteTheme.backgroundColor.DarkColor};
    position:relative;
    box-shadow:${props => props.theme === "Dark" ? CP.darkTheme.backShadow.DarkColor : CP.extraStyles.shadowsMUI.card_4 };
    border-radius:8px;
    font-family:Roboto,Tahoma,"sans-serif";
    @media(max-width:600px){
        width:100%;

        height:100%;
    }

`

export const IconContainerMPC = styled.div`
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:10px;
    right:10px;
    border: ${props => props.theme === "Dark" ? "1px solid" + CP.darkTheme.border.extraBorder.DarkBlueBorder : "1px solid" + CP.whiteTheme.border.DarkColor}; 
    cursor: pointer;
    color: ${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkColor};

    box-shadow:${props => props.theme === "Dark" ?CP.extraStyles.shadowsMUI.card_2 : CP.extraStyles.shadowsMUI.card_1};

    transition:transform 0.3s linear;

    background-color:${props => props.theme === "Dark" ? CP.extraStyles.darkBackground.LightVariation.lighterBlue: "#fff"};

    border-radius:4px;

    & svg{
        font-size:20px;
    }

    &:hover{
        transform:scale(1.2)
    }

    @media(max-width:800px){
        top:17px;
    }

    @media(max-width:600px){
        top:0;
        right:0;
    }
`

export const MaxCompMainChildParentContainer = styled.div`
    width:calc(100% - 60px);
    height:calc(100% - 80px);
    padding-left: 30px;
    padding-right:30px;
    padding-top:40px;
    padding-bottom:40px;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor: CP.whiteTheme.backgroundColor.DarkColor};
    display:flex;
    border-radius:8px;
    flex-flow: row nowrap;
    @media(max-width:800px){
        flex-flow: nowrap;
        width:calc(100% - 50px);
        height:calc(100% - 40px);
        padding-left: 20px;
        padding-right:50px;
        padding-top:20px;
        padding-bottom:20px;
    }
    @media(max-width:600px){
        width:calc(100% - 40px);
        height:calc(100% - 40px);
        padding:0;
        padding-top:40px;
        padding-left:20px;
        padding-right:20px;
    }
`
export const MaxCompMainChildParent = styled.div`
    width:300px;
    height:100%;
    border-radius:6px;
    display:flex;
    align-items:center;
    justify-content:center;
    @media(max-width:900px){
        width:250px;
    }
    @media(max-width:800px){
        width:100%;
        height:100px;
    }
`


export const MaxCompMainChild = styled.div`
    width:100%;
    height:100%;
    border-radius:6px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-flow:column nowrap;
    box-shadow:${props => props.theme === "Dark" ? CP.extraStyles.shadowsMUI.card_3: CP.extraStyles.shadowsMUI.card_3};
    border: ${props => props.theme === "Dark" ? "1px solid" + CP.darkTheme.border.extraBorder.DarkBlueBorder : "1px solid" + CP.whiteTheme.border.DarkColor}; 

    @media(max-width:800px){
        flex-flow:row nowrap;
    }

`


export const MaxChildImgContainerMCP = styled.div`
    width: 100%;
    height: 200px;
    display:flex;
    justify-content:center;
    align-items:center;
    & > svg{
        font-size:200px;
        color:${props => props.theme === "Dark" ? CP.extraStyles.GoldColor : CP.extraStyles.GoldColor}
    }
    @media(max-width:800px){
        & > svg{
            font-size:80px;
        }

        & {
            height:100%;
            width:100px;
        }

    }
    
`

export const MaxChildImgMCP = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`

export const DescriptionToImgMCP = styled.div`
    width:100%;
    max-height:calc(100% - 210px);
    display:flex;
    height: max-content;
    padding-top:10px;
    justify-content:center;
    align-items:center;
    flex-flow:column nowrap;
    @media(max-width:800px){
        width:calc(100% - 100px);
        max-height:100%;
        height:100%;
        padding-top:0;
    }
`

export const DisplayStringParentContainerMCP  = styled.div`
    width:100%;
    height:max-content;
    @media(max-width:800px){
        display:flex;
        flex-
    }
`


export const DisplayStringParentMCP = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:48px;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkLightColor : CP.whiteTheme.font.DarkLightColor};
    @media(max-width:900px){
        font-size:36px;
    }
    @media(max-width:800px){
        align-items:flex-start;

    }
`

export const DisplayValueParentContainerMCP = styled.div`
    width:100%;
    height:max-content;
    @media(max-width:800px){
        display:flex;
    }
`

export const DisplayValueParentMCP = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:36px;
    color:${props => props.theme === "Dark" ? CP.extraStyles.font.darkTheme.MediumDark: CP.whiteTheme.font.LightColor};
    @media(max-width:800px){
        font-size:28px;
    }
`


///!LAteralCompStart

export const LateralParentContainerComp = styled.div`
    width:100%;
    height:max-content;
    font-family:Roboto,Tahoma,"sans-serif";
`

export const LateralParentContainer = styled.div`
    width:100%;
    height:max-content;
    display:flex;
    flex-flow:column nowrap;
    align-items:center;
    position:relative;
    justify-content:center;
`

export const QuestionAndOptionsParentContainerLPC = styled.div`
    max-width:750px;
    width:100%;
    height:max-content;
    border-radius:8px;
    position:relative;
    margin-top:20px;
    margin-bottom:20px;
    @media(max-width:821px){
        width:calc(100% - 62px);
    }

`

export const QuesNoContainerLPC = styled.div`
    width:100%;
    height:50px;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`

export const QuestionNoConLPC = styled.div`
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    background-color: ${props=> props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor : CP.whiteTheme.backgroundColor.DarkColor};
    color:${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite: CP.whiteTheme.font.DarkLightColor};
    border:${props => props.theme === "Dark" ? "1px solid" + CP.darkTheme.border.LightColor : "2px solid"+ CP.whiteTheme.border.LightColor};
    box-shadow:${props => props.theme === "Dark" ? CP.extraStyles.shadowsMUI.card_3 : CP.extraStyles.shadowsMUI.card_1};
    font-size:24px;
    position:absolute;
    right:-10px;
    bottom:5px;
    user-select:none;
`

export const QuestionAndOptionsContainerLPC = styled.div`
    width:calc(100% - 40px);
    padding:20px;
    padding-bottom:10px;
    height:max-content;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor : CP.whiteTheme.backgroundColor.DarkColor};    
    display: flex;
    border-radius:8px;
    border:2px solid gold;
    flex-flow:column nowrap;
`
export const QuestionContainerLPC = styled.div`
    height:max-content;
    display:flex;
    flex-flow:row nowrap;
    width:100%;
`

export const QuestionLPC = styled.p`
    width:100%;
    height:max-content;
    margin:0;
    font-size:24px;
    user-select:none;
    color:${ props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite: CP.whiteTheme.font.DarkLightColor};
`

export const OptionsParentContainerLPC = styled.div`
    width:100%;
    height:max-content;
`

export const OptionsParentLPC = styled.div`
    width:100%;
    display:flex;
    padding-top:10px;
    flex-flow:row wrap;
`

export const OptionsLPC = styled.div`
    width:max-content;
    display:flex;
    min-height:30px;
    height:max-content;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    border-radius:4px;
    color:${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite: CP.whiteTheme.font.DarkLightColor};
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkLightColor : CP.whiteTheme.backgroundColor.DarkColor}; 
    box-shadow:${props => props.theme === "Dark" ? CP.extraStyles.shadowsMUI.card_2 : CP.extraStyles.shadowsMUI.card_1};
    border:${props => props.theme === "Dark" ? "0px solid" + CP.darkTheme.border.DarkLightColor : "1px solid"+ CP.whiteTheme.border.DarkLightColor};
    margin-top:20px;
    transition: transform 0.3s linear;
    &:hover{
        transform: scale(1.1)
    }

`

export const OptionsLPCLabel = styled.label`
    width:100%;
    height:max-content;
    position:relative;
    display:flex;
    align-items:center;
    justify-content: center;
    & input:checked + div {
        background-color:${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor};
    }
`
export const OptionsLPCInput = styled.input`
    width:100%;
    height:100%;
    display:none;
    position:absolute;
`

export const OptionsInputSibling = styled.div`
    min-width:30px;
    display:flex;
    align-items:center;
    font-size:18px;
    min-height:30px;
    border-radius:4px;
    justify-content:center;
    height:max-content;
    text-wrap: wrap;
    width:200px;
    padding:10px;
    cursor:pointer;

    @media(max-width:350px){
        width:150px;
        align-items:content;
    }

    @media(max-width:300px){
        width:100px;
        height:100px
    }

`

export const LateralSubmitButtonContainer = styled.div`
    width:100%;
    max-width:750px;
    height:50px;
    margin-bottom:30px;
    border-radius:8px;
    @media(max-width:821px){
        width:calc(100% - 60px)
    }
`

export const LateralSubmitButton = styled.div`
    height:100%;
    width:100%;
    background-color:white;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:8px;
    border:2px solid gold;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor : CP.whiteTheme.backgroundColor.DarkColor};
    color:${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite: CP.whiteTheme.font.DarkLightColor};
    font-size:28px;
    transition: transform 0.3s linear,background-color 0.2s linear;
    &:hover{
        transform: scale(1.04);
        background-color:${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor};
    }

`

export const NavThrQParentContainer = styled.div`
    width:290px;
    height:max-content;
    position:fixed;
    top:150px;
    right:20px;

`

export const NavThrQParent = styled.div`
    width:calc(100% - 40px);
    height:max-content;
    display:flex;
    flex-flow:row wrap;
    padding:20px;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor : CP.whiteTheme.backgroundColor.DarkColor};
    box-shadow:${props => props.theme === "Dark" ? CP.extraStyles.shadowsMUI.card_3 : CP.extraStyles.shadowsMUI.card_1};
    border-radius: 8px;
    border:${props => props.theme !== "Dark" && "2px solid" + CP.whiteTheme.border.DarkLightColor};
`
export const NavThrQButParent = styled.div`
    width: 40px;
    height: 40px;
    margin:5px;
    font-size:18px;
`

export const NavThrQBut = styled.div`
    width:100%;
    height:100%;
    border-radius: 4px;
    color:${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite: CP.whiteTheme.font.DarkLightColor};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition: background-color 0.2s linear;
    &:hover{
        background-color:${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor};
    }
`

export const NavThrQParentHeadingContainer = styled.div`
    width:100%;
    height:30px;
`
export const NavThrQParentHeading = styled.div`
    width:100%;
    height:100%;
    font-size:20px;
    color:${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite: CP.whiteTheme.font.DarkLightColor};
`

export const OpenCircleForNavThrQ = styled.div`
    width:60px;
    height:60px;
    position:fixed;
    bottom:30px;
    right:30px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const OpenCircleForNavThrQChild = styled.div`
    width:100%;
    height:100%;
    border-radius:50%;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.LightColor : CP.whiteTheme.backgroundColor.DarkColor};
    box-shadow:${props => props.theme === "Dark" ? CP.extraStyles.shadowsMUI.card_3 : CP.extraStyles.shadowsMUI.card_1};
    display:flex;
    
    justify-content:center;
    align-items:center;
    cursor:pointer;
    position:relative;
    transition: background-color 0.2s linear;

    & svg{
        width:60px;
        height:60px;
        border-radius:50%;
        font-size:50px;
        color:${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite: CP.whiteTheme.font.DarkLightColor};
    }

    &:hover{
        background-color:${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor};
    }
`

//? Immediate Comp styles

export const ImmediateResponseParentContainer = styled(LateralParentContainerComp)`
    
`
export const ImmediateResponseParent = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:column nowrap;
`

export const ImmediateQuestionNOptionsContainer = styled(QuestionAndOptionsParentContainerLPC)``

export const ImmediateQuestionNOptions = styled(QuestionAndOptionsContainerLPC)`
`

export const ImmediateQuestionContainer = styled(QuestionContainerLPC)`
    
`
    
export const ImmediateQuestion = styled(QuestionLPC)`
    width:100%;
    height:max-content;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const ImmediateOptionsParentContainer = styled(OptionsParentContainerLPC)`
`

export const ImmediateOptionsParent = styled(OptionsParentLPC)`
        display:flex;
    align-items:center;
    justify-content:center;
`

export const ImmediateOptionsLabel = styled(OptionsLPCLabel)`
`

export const ImmediateOptionsIPC = styled(OptionsLPC)`
    
`
export const ImmediateOptionsInputIPC   = styled(OptionsLPCInput)`
`

export const ImmediateOptionsInputSibling = styled(OptionsInputSibling)`
`
export const QuesNoContainerIPC = styled.div`
    min-height:60px;
    position:relative;
    width:100%;
    display:flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    height:max-content;
`

export const QuestionNoConIPC = styled(QuestionNoConLPC)`
    position:absolute;
    right:0;
    @media(max-width:450px){
        position:static
    }
`

export const ButtonContainerParentIPC = styled.div`
    width:100%;
    height:100%;
`

export const ButtonParentIPC = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: center;

`

export const DecisionIconParentButtonIPC = styled.div`
    margin:10px;
    border-radius:4px;
`

export const DecisionIconButton = styled.div`
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkLightColor : CP.whiteTheme.backgroundColor.DarkColor };
    cursor:pointer;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkLightColor};
    border-radius:4px;
    box-shadow: ${props => props.theme !== "Dark" ? CP.extraStyles.shadowsMUI.card_1 : CP.extraStyles.shadowsMUI.card_1} ;
    transition: background-color 0.3s linear, transform 0.2s linear;
    &:hover{
        background-color:${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor };
        transform:scale(1.04)
    }

    & > svg{
        font-size:24px;
    }
`

export const DecisionParentSubmitButtonIPC = styled.div`
    width:80px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DecisionButtonIPC = styled.button`
    width:100%;
    height:100%;
    outline:none;
    font-size:18px;
    cursor:pointer;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkLightColor : CP.whiteTheme.backgroundColor.DarkColor };
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkLightColor};
    border-radius:4px;
    box-shadow: ${props => props.theme !== "Dark" ? CP.extraStyles.shadowsMUI.card_1 : CP.extraStyles.shadowsMUI.card_1} ;
    border:0;
    transition: background-color 0.3s linear, transform 0.2s linear;
    &:hover{
        background-color:${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor };
        transform:scale(1.04)
    }
`


export const NavThrQuesIPCParentContainer = styled.div`
    width:100%;
    height:max-content;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const NavThrQuesIPCContainerParent = styled.div`
    max-width:750px;
    height:max-content;
    width:100%;
`

export const NavThrQuesContainerIPC = styled.div`
    width: calc(100% - 40px);
    height:max-content;
    padding:20px;
    display:flex;
    flex-flow:column nowrap;
    border-radius:8px;
`


export const NavThroughNumParentContainerIPC = styled.div`
    width: 100%
    height:max-content;
`

export const NavThroughNumContainerIPC  = styled.div`
    width:100%;
    height:max-content;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:row wrap;
`

export const NavThroughNumIPCContainer = styled.div`
    height:50px;
    width:50px;
    margin:10px;
`

export const NavThroughNumIPC = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:18px;
    border-radius:4px;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor : CP.whiteTheme.backgroundColor.DarkColor };
    cursor:pointer;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkLightColor};
    box-shadow: ${props => props.theme !== "Dark" ? CP.extraStyles.shadowsMUI.card_1 : CP.extraStyles.shadowsMUI.card_1} ;
    transition: background-color 0.3s linear, transform 0.2s linear;
    &:hover{
        background-color:${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor };
        transform:scale(1.04)
    }
`

export const IconContainerPRW = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:4px;
    & svg{
        font-size:24px;
        color:#fff
    }
`

export const ErrorParentContainerQC = styled.div`
    width:100%;
    height:50px;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:Roboto,Tahoma,"sans-serif";
`

export const ErrorContainerQc = styled.div`
    width:100%;
    max-width:750px;
    height:100%;
    @media(max-width:800px){
        width:calc(100% - 40px);
    }
`

export const ErrorQC = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size:24px;
    background-color:#ff0202;
    border-radius:8px;
`

export const ParentUnAnsMaxComp = styled.div`
    width: calc(100% - 40px);
    height:max-content;
    padding:20px;
    font-family:Roboto,Tahoma,sans-serif;
`

export const UnAnsMaxCompStyles = styled.div`
    width:100%;
    height:max-content;
    max-height:60vh;
    display:flex;
    flex-flow:column nowrap;
    overflow-y:auto;
`

export const QuestionParentUnMaxComp = styled.div`
    width:100%;
    height:max-content;
`

export const QuestionUnMax = styled.div`
    width:100%;
    height:max-content;
    font-size: 24px;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkLightColor : CP.whiteTheme.font.DarkColor};
`

export const TheQuesParentNames = styled.div`
    width: 100%;
    margin-top:10px;
    margin-bottom:10px;
    height:max-content;
`
export const TheQuesNames = styled.div`
    width:100%;
    display:flex;
    max-height: 200px;
    flex-flow:row wrap;
    overflow:auto;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const NumUnMaxCompParent = styled(NavThrQButParent)`
    border:2px solid #b11b1b;
    border-radius:6px;
`

export const NumUnMax = styled(NavThrQBut)`
    border-radius:6px;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkLightColor : CP.whiteTheme.font.DarkColor};
`


export const QuestionUnansweredClickContainerUnMax = styled.div`
    width:100%;
    height:max-content;
    margin-top:10px;
    margin-bottom:10px;
`
export const QuestionClickUnansweredClickUnMax = styled.div`
    width:100%;
    height:max-content;
    font-size:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkLightColor : CP.whiteTheme.font.DarkColor};
`

export const ButtonParentContainerUnMax = styled.div`
    width:100%;
    height:max-content;
`

export const ButtonParentUnMax = styled.div`
    width: 100%;
    height:max-content;
    display:flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
`

export const StatsButtonParentUnMax = styled.div`
    width:150px;
    height: 50px;
    border-radius:6px;  
    margin-right:15px;
    margin-top:10px;
`

export const StatsButtonUnMax = styled.div`
    width:100%;
    height:100%;
    box-radius:6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:2px solid red;
    font-size:18px;
    border-radius:6px;
    cursor:pointer;
    margin-top:10px;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkColor};
    &:hover{
        background-color:${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor};
    }
`

export const CancelButtonParentUnMax = styled(StatsButtonParentUnMax)``

export const CancelButtUnMax = styled(StatsButtonUnMax)`
    border:2px solid green;

`
//! Stats Page 

export const StatsPageParentContainer = styled.div`
    width:100%;
    height:100%;
    font-family: Roboto,Tahoma,"sans-serif";
`
export const StatsPageContainer = styled.div`
    width:calc(100% - 40px);
    height:calc(100% - 40px);
    padding:20px;
`

export const StatsPageActualStatsBarParentContainer = styled.div`
    width:100%;
    height:max-content;
    
`

export const StatsBarContainerSPC = styled.div`
    width:100%;
    height: max-content;
    display:flex;
    flex-flow:column nowrap;
    margin-bottom:20px;

`


export const StatsContainerByPiece = styled.div`
    width:100%;
    height:max-content;
    display:flex;
    flex-flow:row nowrap;
    align-items: center;
    justify-content: center;
`

export const StatsIconContainerSPC = styled.div`
    width:150px;
    height: 150px;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const StatsIconSPC = styled.div`
    width:100px;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:gold;
    & svg{
        font-size: 80px;
    }
`


export const StatsNameAndValueContainerSPC = styled.div`
    width:100%;
    max-width:750px;
    height: 150px;
    display:flex;
    align-items:center;
`

export const StatsNameAndValueSPC = styled.div`
    width:calc(100% - 150px);
    height:max-content;
    display:flex;
    flex-flow:column nowrap;
`

export const StatsNameContainerSPC = styled.div`
    width:100%;
`

export const StatsNameSPC = styled.div`
    width: 100%;
    font-size:28px; 
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkLightColor};
`

export const StatsValueContainerSPC = styled.div`
    width:100%;
`


export const StatsValueSPC = styled.div`
    width:100%;
    font-size:24px;
    color:white; 
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkLightColor};
`


export const StatsPageStatsAbtAnsweredParentContainerSPC = styled.div`
    width: 100%;
    height:max-content;
`

export const StatsCorrectParentContainerSPC = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:max-content;
    flex-flow:column nowrap;
    width:100%;
`


export const StatsCorrectContainerSPC = styled.div<{ArrayNature:"Correct" | "Wrong" | "Unanswered"}>`
    width:calc(100% - 42px);
    max-width:750px;
    height:max-content;
    padding:20px;
    border-radius:8px;
    margin-bottom:20px;
    border:px solid ${props => props.ArrayNature === "Correct" ? "lightGreen" : props.ArrayNature === "Wrong" ? 'yellow' : "red" };
    @media(max-width: 850px){
        margin-bottom:10px;
    }
`   

export const StatsConclusiveOnStatsParentPageSPC = styled.div`
    width:calc(100% - 40px);
    background-color: ${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkColor : CP.whiteTheme.backgroundColor.DarkColor};
    border: ${props => props.theme === "Dark" && "1px solid" + CP.darkTheme.border.extraBorder.BoxShadowBorder};
    padding:20px;
    margin-bottom:20px;
    height: max-content;
    border-radius:4px;
    box-shadow: ${props => props.theme === "Light" && CP.extraStyles.shadowsMUI.card_1 };
`

export const HeadingOFConclusiveStatsSPCContainer = styled.div` 
    width:100%;
    height: max-content;
`
export const HeadingConclusiveStatsSPC = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    font-size: 28px;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkLightColor};
`

export const StatsConclusiveOnStatsPageSPC = styled.div`
    width:100%;
    height:max-content;
    display:flex;
    flex-flow:column nowrap;
`

export const QuestionContainerStatsConclusiveSPC = styled.div`
    width: 100%;
    height:max-content;
    margin-bottom:10px;
`

export const QuestionStatsConclusiveSPC = styled.div`
    width:100%;
    height:max-content;
    font-size:24px;
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkLightColor};
`

export const AnswerParentContainerStatsConclusiveSPC = styled.div`
    width: 100%;
    height:max-content;
    display:flex;
    flex-flow: column nowrap;
`

export const RevealAndAnswerContainerSPC = styled.div`
    width:100%;
    max-width:250px;
    height:max-content;
    position:relative;
`

export const RevealWordContainerSPC = styled.div`
    width:100%;
    height:max-content;
    min-height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props => props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkLightColor : CP.whiteTheme.backgroundColor.DarkColor};
    color:${props => props.theme === "Dark" ? CP.darkTheme.font.DarkColor : CP.whiteTheme.font.DarkLightColor};
    font-size: 14px;
    text-transform:uppercase;
    position:absolute;
    top:0;
    cursor:pointer;
    transition: background-color 0.3s linear;
    box-shadow: ${props => props.theme === "Light" && CP.extraStyles.shadowsMUI.card_1};
    &:hover {
        background-color: ${props => props.theme === "Dark" ? CP.extraStyles.hoverDarkVariation.darkTheme.backColor : CP.extraStyles.hoverDarkVariation.WhiteTheme.backColor}
    }
`

export const CorrectAnswerStatsPageSPC = styled.div`
    width:100%;
    height:max-content;
    min-height:30px;
    color:${CP.extraStyles.GoldColor};
    font-size:20px;
`

export const WrongAnswerParentContainerStatsPageSPC = styled(AnswerParentContainerStatsConclusiveSPC)`
`

export const WrongAnswerParentStatsPageSPC = styled.div`
    width:100%;
    height:max-content;
    min-height:max-content;
    display: flex;
    flex-flow:row nowrap;
    margin-bottom:10px;
`

export const WrongAnswerStatsPageSPC = styled.div`
    width:100%;
    min-height:30px;
    height:max-content;
    color:${props => props.theme === "Light" ?"#f18888" : "#ed2929"};
    font-size:20px;
`


export const QuesNoStatsPageParentContainerSPC = styled(QuesNoContainerIPC)`
    height:30px;
    margin-top:0;
`

export const QuesNoStatsPageSPC = styled(QuestionNoConIPC)``

export const ScoreCardParentContainerConclusiveSPC = styled.div`
    width: 100%;
    height:max-content;
    display: flex;
    justify-content:center;
    align-items:center;

`

export const StatsScoreNQualitativeAnalysisParentContainerSPC = styled(StatsPageActualStatsBarParentContainer)`
    
`

export const StatsScoreNQualitativeAnalysisContainerSPC = styled(StatsCorrectParentContainerSPC)`
    flex-flow:row nowrap;
`

export const StatsScoreNQualitativeAnalysisSPC = styled.div`
    width:100%;
    max-width:750px;
    display:flex;
    flex-flow: row nowrap;
    height:max-content;
    @media(max-width: 850px){
        width: calc(100% - 40px);
        flex-flow:column nowrap;
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const PieChartAndDetailsParentContainerSPC = styled.div`
    width:calc(260px - 60px);
    height:max-content;
    padding:20px;
    margin-right: 20px;
    box-shadow: ${props => props.theme === "Dark" ? CP.extraStyles.shadowsMUI.card_1 : CP.extraStyles.shadowsMUI.card_2};
    border-radius: 8px;
    border:${props => props.theme === "Dark" && "0.8px solid" + CP.darkTheme.border.extraBorder.BoxShadowBorder};
    @media(max-width: 850px){
        margin-right: 0px;
        width: calc(100% - 40px);
        padding:20px;
        //background-color:#000;
        display:flex;
        flex-flow: row nowrap;
        margin-bottom: 40px;
    }

    @media(max-width: 480px){
        flex-flow: column nowrap;

    }
`

export const PieChartAndDetailsContainerSPC = styled.div`
    width:100%;
    height:max-content;
    display:flex;
    flex-flow: column nowrap;
    & > div{
        display:flex;
        justify-content:center;
        align-items:center;
    };
`

export const GeneralLegendNHeadingContainerSPC = styled.div`
    width:100%;
    height:max-content;
    
`
export const GeneralLeadHeadingSPC = styled.div`
    margin-top:10px;
    width:100%;
    min-height: 30px; 
    color:${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite : CP.whiteTheme.font.DarkLightColor};
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 20px;

    @media(max-width: 850px){
        display:none;
    }
    @media(max-width: 480px){
        display:flex;
    }
`


export const ToolTipAndLegendOfThisSpecificColorSPC = styled.div`
    width: max-content;
    height: max-content;
    padding: 10px;
    display:flex;
    flex-flow: row nowrap;
    position: relative;

    @media(max-width: 480px){
        &:nth-child(2){
            margin-left: -9px;
        }
        &:last-child{
            margin-left: 50px;
        }
    }
`


export const ToolTipContainerInGeneralHeading = styled.div<{width:number,height:number,borderRequirement:borderRequirementDefaultType|borderRequirementUsageType,widthUnit:"%" | "px",heightUnit:"px" | "%"}>`
    width:${props => props.width + props.widthUnit};
    height:${props => props.height}${props=> props.heightUnit};
    border: ${props => props.borderRequirement[0] === true ? "1px solid"+props.borderRequirement[1] :"none"};
`

export const ToolTipInGeneralHeadingSPC = styled.div<{backgroundColor:string}>`
    width:100%;
    height:100%;
    background-color: ${props => props.backgroundColor};
    border-radius: 4px;
`
export const TheNameOfLegendInStatsPageSPC = styled.div<{height:number,heightUnit:"%" | "px"}>`
    width: max-content;
    min-height: ${props => props.height + props.heightUnit} ;
    font-size: 16px;
    display:flex;
    align-items:center;
    height:max-content;
    margin-left: 10px;
    border-radius: 4px;
    color:${props => props.theme === "Light" ? CP.whiteTheme.font.DarkLightColor: CP.extraStyles.font.whiteTheme.frenzyWhite};
`


export const PieChartStatsPageContainer = styled.div`
    
`
export const PieChartStatsPage = styled.div`

`

export const ToolTipDivContainerStatsPageSPC = styled.div`
    width: max-content;
    position:absolute;
    left:80px;
    top: 30px;
    height:max-content;
    z-index:1;
    border-radius: 4px;
`
export const ToolTipDivStatsPageSPC = styled.div<{ToolTipColor:TTBackColorRequirementDefaultType | TTBackColorRequirementUsageType}>`
    width: max-content;
    height:max-content;
    max-height: 300px;
    padding: 10px;
    font-size: 18px;
    overflow:auto;
    background-color: ${props => props.ToolTipColor[0] === true ? props.ToolTipColor[1] : props.theme === "Dark" ? CP.darkTheme.backgroundColor.DarkLightColor: "#000"};
    border-radius: 4px;
`

export const LegendProducerContainer = styled.div`
    width: 100%;
    height: max-content;
    display:flex;
    flex-flow: column nowrap;
    @media(max-width: 850px){
        align-self:center;
        height: 100%;
    }
    @media(max-width: 480px){
        align-items: center;
    }
`

export const PercentageParentContainerStatsPageSPC = styled.div`
    width:100%;
    height:max-content;
`

export const PercentageStatsContainerStatsPageSPC = styled.div`
    width: 100%;
    height: max-content; 
    display: flex;
    flex-flow: column nowrap;
    color: ${CP.extraStyles.font.whiteTheme.frenzyWhite};
`

export const GeneralNameContainerOfPercentage = styled.div`
    width: 100%;
    height: 30px;
    display:flex;
    flex-flow: row nowrap;
    display: flex;
    align-items: center;
    
`

export const GeneralConventionToPercentage = styled.div`
    width: max-content;
    height: max-content;
    font-size: 18px;
`

export const GeneralPercentageByValue = styled.div`
    width: max-content;
    height: max-content;
    font-size: 18px;
    margin-left: 8px;
`


export const FeatureUpComingParentContainer = styled.div`
    width:calc(750px - 260px);
    height:410px;
    @media(max-width: 850px){
        width: 100%;
    }
    @media(max-width: 460px){
        height: 380px;
    }

    @media(max-width: 360px){
        height: 440px;
    }

`
export const FeatureUpComingContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    position:relative;
    flex-flow:column nowrap;
    box-shadow: ${ props => props.theme === "Dark" ? CP.extraStyles.shadowsMUI.card_3 : CP.extraStyles.shadowsMUI.card_2};
    border-radius:8px;
`

export const PremiumFeatureImgCont = styled.div`
    width:100%;
    position:absolute;
    height:100%;
    top:0;
    border-radius:8px;
`

export const PremiumFeatureImg = styled.img`
    width:100%;
    object-fit:cover;
    height:100%;
    border-radius:8px;
`

export const PremiumDetailsParentCont = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
` 

export const PremiumDetailsCont = styled.div`
    width:calc(100% - 40px);
    padding:20px;
    height:calc(100% - 40px);
    background-color: ${props => props.theme === "Dark" ? CP.darkTheme.glassyBackground.FeatureSpecific : ''};
    display:flex;
    flex-flow: column nowrap;
    backdrop-filter: blur(0.8px);
    @media(max-width: 850px){
        display:flex;
        align-items:center;
        justify-content:center;
    };
    @media(max-width: 460px){
        &:nth-child(2){
            //margin-left: -2px;
            background-color: #000;
            display:none;
        }
    }
`
export const PointParentContainer = styled.div<{BtmMargin?:boolean}>`
    width: 100%;
    height: max-content;
    margin-bottom:${props => props.BtmMargin === true ? "5px" : "20px"};
    @media(max-width: 850px){
        width: max-content;
        & > div {
            width: max-content;
        }
    };

`

export const MainPointContainer = styled.div`
    width: 100%;
    color:${props => props.theme === "Dark" ? CP.extraStyles.GoldColor : CP.whiteTheme.font.DarkColor};
    height:max-content;
    margin-bottom:10px;
    font-size: 28px;
    @media(max-width: 480px){
        font-size: 20px;
    }
`
export const SubPointPDC = styled.div`
    width:100%;
    height:max-content;
    font-size:20px;
    margin-bottom: 4px;
    color:${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite : CP.whiteTheme.font.DarkColor };
    text-indent: 20px;
    @media(max-width: 480px){
        font-size: 16px;
        text-indent: 0px;
    }

    @media(max-width: 460px){
        text-indent: 0px;
    }
`

export const PreRegisterParentContainer = styled.div`
    width:100%;
    display:flex;
    height:max-content;
    align-items:center;
    margin-top:5px;
    justify-content: center;
    @media(max-width: 480px ){
       /*  justify-content: flex-start; */
    }
`

export const PreRegisterBut = styled.div`
    width: max-content;
    display:flex;
    height:30px;
    padding: 10px;
    align-items:center;
    color: ${props => props.theme === "Dark" ? CP.extraStyles.font.whiteTheme.frenzyWhite : CP.whiteTheme.font.DarkColor };
    font-size: 18px;
    border: 2px solid ${ props => props.theme === "Dark" ? CP.darkTheme.border.DarkLightColor : CP.whiteTheme.border.DarkColor};
    justify-content:center;
    flex-flow:row nowrap;
    border-radius:4px;
    cursor:pointer;
    transition: transform 0.3s linear;
    &:hover{
        transform:scale(1.04);
    }

    & > svg{
        margin-left: 10px;
        font-size: 25px; 
        color: ${props => props.theme === "Dark" ? CP.darkTheme.border.DarkLightColor : CP.whiteTheme.font.DarkLightColor};
    }
    
    @media(max-width: 850px){
        width: max-content;
    }

    @media(max-width: 480px){
        font-size: 16px;
        
        & > svg{
            font-size: 16px;
        }
    }

`

export const PreRegisParentContainerMC = styled.div`
    width:  calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 20px;
`

export const PreRegisContainerMC = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-flow: column nowrap;
`

export const HeadingPreRegisContainer = styled.div`
    width:100%;
    height: max-content;
    font-size: 28px;
    color: ${CP.extraStyles.font.whiteTheme.frenzyWhite};
`

export const DescriptionToPreRegisContainer = styled.div`
    width:100%;
    max-width: 450px;
    height: max-content;
    margin-bottom: 10px;
    margin-top:15px;
    font-size: 14px;
    line-height: 24px;
    text-align:justify;
    color: ${CP.darkTheme.font.DarkLightColor};
`

export const EmailBoxNButContainerSPC = styled.div`
    width: 100%;
    height: max-content;
    display:flex;
    flex-flow: column nowrap;
`

export const EmailBoxContainerSPC = styled.div`
    max-width: 400px;
    width:100%;
    height:max-content;
   
`

export const EmailBoxSPC = styled.input`
    width:calc(100% - 10px);
    border: 0;
    height: 30px;
    border-radius: 4px;
    background-color: ${CP.darkTheme.backgroundColor.DarkLightColor};
    box-shadow: ${CP.extraStyles.shadowsMUI.card_2};
    padding:5px;
    padding-left:10px;
    font-size: 16px;
    color: ${CP.darkTheme.font.DarkColor};
    outline:none;
    transition: transform 0.3s linear;
    &:focus{
        transform:scale(1.02);
    }
    &::placeholder{
        color: ${CP.darkTheme.font.DarkLightColor};
    }
`


export const EmailPreRegisButContainerSPC = styled.div`
    width: 100%;
    height:max-content;
`

export const EmailPreRegisButSPC = styled.div`
    width: 100px;
    height: 30px;
    padding: 5px;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size: 16px;
    margin-top: 10px;
    color: ${CP.darkTheme.font.DarkLightColor};
    background-color: ${CP.darkTheme.backgroundColor.DarkLightColor};
    box-shadow: ${CP.extraStyles.shadowsMUI.card_2};
    border-radius: 4px;
    transition:  background-color .3s linear;
    cursor:pointer;

    &:hover{
        background-color: ${CP.extraStyles.hoverDarkVariation.darkTheme.backColor};
    }
`
