

const aMovies = ["Parasite", "The Godfather", "The Dark Knight", "Coco", "The Lion King", "The Wizard of Oz", "The Matrix"]

console.log(aMovies)

for(let intIndex = 0; intIndex < aMovies.length; intIndex++) {
  console.log(`Movie number ${intIndex + 1} is ${aMovies[intIndex]}`)
}

let intCounter = 1
    for(let strWaffles of aMovies) {
      console.log(`Number ${intCounter} = ${strWaffles}`);
      intCounter++
    }

aMovies.forEach((strMovie, intIDX) => {
  // strMovie is a parameter/variable storing the               string inside the array
  // intIDX   is a parameter/variable storing the index of the  string inside the array
  console.log(`Index ${intIDX+1} is storing ${strMovie}`)
  
})


const iterateElementsInsideArray = (strElement) => {
  // No longer anonymous, this function now is named iterateElementsInsideArray
  console.log(`Element = ${strElement}`)
}

const aCars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
aMovies.forEach(iterateElementsInsideArray)
aCars.forEach(iterateElementsInsideArray)