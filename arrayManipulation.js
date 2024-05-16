function processArray(numbers){
    let result = []
    for(i in numbers){
        console.log(numbers[i])
        if( numbers[i] % 2 == 0){
            result.push(numbers[i] * numbers[i])
        }
        else{
            result.push(numbers[i] * numbers[i] * numbers[i])
        }
    }
    return result
}
