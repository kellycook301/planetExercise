

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const body = document.querySelector("body");
const script = document.querySelector("script");
const mainContent = document.createElement("div");
mainContent.setAttribute("id", "planets");

body.insertBefore(mainContent, script);

const planetEl = document.getElementById("planets");
planets.forEach(function(index){
    planetEl.innerHTML +=
        `<h2>${index}</h2>`
});

// This will return the array with the first letter capitalized in each item
// This grabs the character at 0 and "uppercases it"
// the string is sliced at the first character. The first letter is now a separate string.
// everything else after that character is now a new string. The "+" concatinates the two strings
// together and pulls it all together with newArray

properPlanets = planets.map(function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
    return " " + upperCase + restOfWord;
});

properPlanets.forEach(function(index) {
    planetEl.innerHTML +=
        `<h2>${index}</h2>`
});

console.log(properPlanets);

// const planetGroup = [
//     { "name": "mercury", "type": "ePlanet" },
//     { "name": "venus", "type": "ePlanet" },
//     { "name": "earth", "type": "ePlanet" },
//     { "name": "jupiter", "type": "ePlanet" },
//     { "name": "neptune", "type": "ePlanet" },
//     { "name": "mars", "type": "otherPlanet" },
//     { "name": "saturn", "type": "otherPlanet" },
//     { "name": "uranus", "type": "otherPlanet" }
// ]

// const vegetarianIngredients = rawIngredients.filter(ingredient => {
//     const isVegetarian = (ingredient.type === "ePlanet")
//     return isVegetarian
// })

const filtered = properPlanets.filter(function(argument){
    return argument.includes("e") + argument.includes("E")
 })

console.log("test", filtered);

filtered.forEach(function(index) {
    planetEl.innerHTML +=
        `<h2>${index}</h2>`
});

// This returns the array with the first letter capitalized with the "map" method

// const toUpperCase = planets.map(function (index) {
//     switch (index) {
//         case "mercury":
//             return "Mercury"
//             break
//         case "venus":
//             return "Venus"
//             break
//         case "earth":
//             return "Earth"
//             break
//         case "mars":
//             return "Mars"
//             break
//         case "jupiter":
//             return "Jupiter"
//             break
//         case "saturn":
//             return "Saturn"
//         break
//         case "uranus":
//             return "Uranus"
//         break
//         case "neptune":
//             return "Neptune"
//         break
//     }
// })


// console.log(toUpperCase)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]