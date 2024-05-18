const { modifiedNames } = require("./arrayManipulation")

// Task 3
function UserProfiles (names, modifiedNames){
    let result = []
    if (names.length != modifiedNames.length){
        throw new Error("Arrays are not of the same length");
    }
    else{
        for (i in names){
            result.push({"originalName": names[i], " modifiedName": modifiedNames[i], "id": (Number(i)+1)})
        }
        return result 
    }
}

// task 3 usage example
names = ["Alice", "James", "Paul", "Lisa", "Bella"]
console.log(UserProfiles(names, modifiedNames))

module.exports = {
    UserProfiles
}