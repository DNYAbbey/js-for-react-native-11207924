// Task 1
function processArray(numbers){
    let result = []
    for(i in numbers){
        if( numbers[i] % 2 == 0){
            result.push(numbers[i] * numbers[i])
        }
        else{
            result.push(numbers[i] * 3)
        }
    }
    return result
}


// Task 2
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


// task 1 usage example
let numbers =[7, 4, 13, 0 , 1]
console.log(processArray(numbers))

// task 2 usage example
let strings = ["Cat", "Life", "CaR", "dog", "schoOL"]
modifiedNames = formatArrayStrings(strings, numbers)
console.log(modifiedNames)

module.exports = {
    processArray,
    formatArrayStrings,
    modifiedNames
};

