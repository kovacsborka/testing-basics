//import
const search = require("./index")

//mocking => ne az eredeti adatot használja fel, de ugyanolyan
const mockDb = [
    "deepred2", 
    "lightred2", 
    "deepgreen2", 
    "lightgreen2",

    "deepblue2", 
    "lightblue2", 
    "azurblue2",
    "stuffblue2",
    "izéblue2", 
    "mégegyblue2",

    "purple2", 
    "yellow2", 
    "orange2", 
    "black2", 
    "white2"
]

//it két argumentumot kér: 1. név a tesztnek, 2. callback function


it("this is my first test", () => {
    expect("hello").toEqual("hello")
    
})



it("search with empty result", () => {
    expect(search("kiskutya", mockDb)).toEqual([])
    
})


it("search with deep keyword", () => {
    expect(search("deep", mockDb)).toEqual(["deepred2", "deepgreen2", "deepblue2"])
    
})



