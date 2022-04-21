const colors = [
    "deepred", 
    "lightred", 
    "deepgreen", 
    "lightgreen",

    "deepblue", 
    "lightblue", 
    "azurblue",
    "stuffblue",
    "izéblue", 
    "mégegyblue",

    "purple", 
    "yellow", 
    "orange", 
    "black", 
    "white"
]

const search = (word, myArray) => {
    let searchArray = myArray.filter(element => element.includes(word))
    
    return searchArray.length > 5 ? searchArray.slice(0, 5) : searchArray
}

//console.log(search("a", colors))


//export:
module.exports = search