
export function kmToMeters(km){
    if(typeof km ==="number" && km > 0){
    return km * 1000}
    else{
        throw new Error("No positive number entered!")
    }
}




