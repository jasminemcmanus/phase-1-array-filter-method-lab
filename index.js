// Code your solution here
const drivers = ['John Smith', 'David Borrealis', 'Frank Sinatra', 'Joanne Smith'];
const drivers2 = [
    {name: 'John Smith', hometown: 'Melbourne'},
    {name: 'David Borrealis', hometown: 'Melbourne'},
    {name: 'Frank Sinatra', hometown: 'Melbourne'},
    {name: 'Joanne Smith', hometown: 'Melbourne'}    
]

function findMatching(array, name) {
    const matchingDrivers = array.filter(item => item.toLowerCase() == name.toLowerCase())
    return matchingDrivers;
}

function fuzzyMatch(array, name) {
    const matchingDrivers = array.filter(item => item.toLowerCase().startsWith(name.toLowerCase()))
    return matchingDrivers;
}

function matchName(array, string) {
    const matchingDrivers = array.filter(item => item.name.toLowerCase() == string.toLowerCase())
    return matchingDrivers;
}

console.log(findMatching(drivers, 'jo'))
console.log(fuzzyMatch(drivers, 'jo'))
console.log(matchName(drivers2, 'Frank Sinatra'))