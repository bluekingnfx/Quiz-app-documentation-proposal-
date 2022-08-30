
import { replayFunc } from "./statsFunc/replayFunc"
import { useStatsPage } from "./useStatsPage"



export const ButtonSetParentSPQ = () => {
    const {immediate,setImmediate,setNewGame,setReplay,UrlStringSetter,setUnAnswered} = useStatsPage()
    return <>
        <div>
           {/* new game */}
            <div>
                <button onClick={()=>{
                    replayFunc(immediate.statsArray,setNewGame,setReplay,setImmediate,UrlStringSetter,setUnAnswered)
                }}>
                    Replay
                </button>
            </div>
        </div>
    </>
}


