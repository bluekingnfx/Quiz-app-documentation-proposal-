
export const ProduceNavThroughQBut = (tot:number) => {
    let ArrNum:number[] = []
    for(let i:number=0;i<tot;i++){
        ArrNum = [...ArrNum,i+1]
    }
    return ArrNum
}



