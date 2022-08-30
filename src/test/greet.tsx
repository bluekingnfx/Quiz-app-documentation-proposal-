import React, { ReactElement } from "react"


interface PeopleInter{
    people : {
        name:string,
        age:number
    }[]
}




export const Greet = (props:PeopleInter) => {
    const {people} = props
    return <>
            {
                people.map((i:{name:string,age:number},index:number):ReactElement=>{
                    return <div key={index}>{`${i.name} is ${i.age} old.`}</div>
                })
            }
    </>
}


interface loveInter{
    value:string|number,
    changeHandler:(event:React.ChangeEvent<HTMLInputElement>)=>void,
}


export const Love = (props:loveInter)=> {
    return <>
        <input type={"text"} onChange={props.changeHandler} value={props.value} ></input>
    </>
}

interface UserInfoInterFace{
    name:string,age:number
}

export const Logger = () => {
    const [userInfo,setUserInfo] = React.useState<"logout"|UserInfoInterFace>("logout")
    const LoggedIn = ():void => {
        setUserInfo({
            name:"Siddharth",
            age:20
        })
    }
    return <div style={{
        width:"100px",
        height:"100px",
        backgroundColor:"#222",
        color:"#fff"
    }} onClick={()=>LoggedIn()}>
        {
            typeof userInfo === "object" ? userInfo.name : "logout"
        }
    </div>
}

interface actionInterface{
    payload:{cal:"increament"|"decreament",value:number}
}

const initialState = {
    count:0
}

interface resetInterface {
    payload:{cal:'reset'}
}




const reducer = (state:{count:number},action:resetInterface | actionInterface):{count:number} => {
    switch(action.payload.cal){
        case "increament":
        return {count:state.count+action.payload.value}
        case "decreament":
            return {count:state.count-action.payload.value}
        case "reset":
            return initialState
        default:
            return {count:state.count}
    }
}

export const UseReducerHookTsx = () => {
    const [initialValue,dispatch] = React.useReducer(reducer,initialState)
    return <>
        <div style={{
            border:"1px solid #000",
            width:"100px",
            height:"100px"
        }} onClick={()=>{
            dispatch({
                payload:{
                    cal:"increament",
                    value:10
                }
            })
        }}>
            add
        </div>
        <div style={{
            border:"1px solid #000",
            width:"100px",
            height:"100px"
        }} onClick={()=>{
            dispatch({
                payload:{
                    cal:"decreament",
                    value:10
                }
            })
        }}>
            subract
        </div>
        <div style={{
            border:"1px solid #000",
            width:"100px",
            height:"100px"
        }} onClick={()=>{
            dispatch({
                payload:{
                    cal:"reset"
                }
            })
        }}>
            Reset
        </div>
        <div>
            {
                initialValue.count
            }
        </div>
    </>
}


interface UserInterfaceForContext{
    name:String
    age:number
}


interface ValueInterface{
    log:UserInterfaceForContext | null,
    isLog:React.Dispatch<React.SetStateAction<UserInterfaceForContext | null>>
}
const UserContextProvider = React.createContext<ValueInterface|null>(null)

interface UserContextProps{
    children:React.ReactNode
}


export const UserContextJSX = ({children}:UserContextProps) => {
    const [log,isLog] = React.useState<UserInterfaceForContext|null>(null)
    return <UserContextProvider.Provider value={{log,isLog}} >
        {
            children
        }
    </UserContextProvider.Provider>
}


export const MutableRef  = () => {
    const mutatedRef = React.useRef(null)
    console.log(mutatedRef)
    return <></>
}

/* export type ComponentPassageInterface = {
    component:({name}:{name:string})=>JsxElement
}



export const PassMeComponentAsProp = ({component:Component}:ComponentPassageInterface) => {
    return <>
        <Component  name="Siddarth"/>
    </>
} */



interface listThroughInterface <T>{
    data:T
}



export const ListThrough = <T extends {name:string}[]>({data}:listThroughInterface<T>) => {
    return <>
    
    </>
}