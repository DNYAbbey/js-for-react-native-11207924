function processArray(numbers){
    let result = []
    for(i in numbers){
        if( numbers[i] % 2 == 0){
            result.push(numbers[i] * numbers[i])
        }
        else{
            result.push(numbers[i] * numbers[i] * numbers[i])
        }
    }
    return result
}


function formatArrayStrings(strings, numbers){
    let result = []
    if (strings.length != numbers.length){
        throw new Error("Arrays are not of the same length");
    }
    else{
        processed_numbers = processArray(numbers)
        for (i in strings){
            if (processed_numbers[i] % 2 == 0){
                result.push(strings[i].toUpperCase())
            }
            else{
                result.push(strings[i].toLowerCase())
            }
        }
    
        return result
    }

}