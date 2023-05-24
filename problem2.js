// Prompt #2: 
// You've finally secured a great programming job at a major toy company. Things have been going pretty smoothly, but this year there's been a big problem. It appears that due to a factory accident, there are some dangerous chemicals in some of the toys. 

// Write a function called removeFaultyToys that accepts one parameter called toyInventory, which you can expect will be an array of objects, where each object is a toy's individual details. That parameter could receive an argument value like this:


let toyInventory2023 = [
    {
        name: "Puzzle Game",
        containsChemicals: true
    },
    {
        name: "Fidget Spinner",
        containsChemicals: true
    },
    {
        name: "Teddy Bear",
        containsChemicals: false
    }
]

function removeFaultyToys(toyInventory){
    if(toyInventory.containsChemicals === false){
        return toyInventory
    }
}

let newFilteredArr = toyInventory2023.filter(removeFaultyToys)
console.log(newFilteredArr)

// Your function should return a new array with only the toys that do NOT contain any dangerous chemicals. 

// Use one of the array looping methods to solve this puzzle.









