// Prompt #1: 
// In "the Hunger Games", there are 12 districts, each of which send a tribute to fight in the games. As the capital's resident web developer, you've been given the job of writing a program that can automatically read out the names of all hunger games contestants.

// Write a function called declareTributes that accepts one parameter called listOfTributes, which will be an array of objects. That parameter could receive an argument value like this: 



let listOfTributes = [
    {
        name: "Katniss Everdeen",
        district: 12
    },
    {
        name: "Cato",
        district: 2
    }
]

function declareTributes(listOfTributes){
    return listOfTributes.name + ' ' + 'district' + ' ' + listOfTributes.district
}

newArr = listOfTributes.map(declareTributes)
console.log(newArr)

// Your function should output a new array, where each element is a string written in this format:
