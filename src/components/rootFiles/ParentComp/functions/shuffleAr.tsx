export const ShuffleAr = function<T>(arr:T[]):T[]{

    let newArrAr:T[] = []
    while(arr.length !==0){
        if(arr.length === 1){
            const LastElem = arr.pop()
            if(LastElem !== undefined){
                newArrAr.push(LastElem)
            }else{
                break
            }
        }else{
            const ran:number = Math.floor(Math.random()*(arr.length))
            const Rm_elem:T[] = arr.splice(ran,1)
            newArrAr = [...newArrAr,...Rm_elem]
        }
    }
    return newArrAr
}