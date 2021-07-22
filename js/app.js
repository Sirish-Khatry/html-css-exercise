console.log("The app.js file has been loaded in") 

var oscarNominated = false;
let releasedYear = 2019;
const title = "Maze Runner";
var description = null;
let actors;


let favFilm = {
    title: "Maze Runner",
    released: 2019,
    ocarNominated: false,
    actors: {
        hero: "Peter Parker",
        heroine: "Angelina Jolie"
    }
}

console.log("Film:", favFilm);
console.log("Released:", favFilm.released);
console.log("Actors:", favFilm.actors)
console.log("Male Actor:", favFilm.actors.hero)

// QUESTION 1
let a = 100;
while(a <= 200){
    a++
    console.log(`a = ${a}`);
}
// QUESTION 2
while(a<=200){
    if(a%2 == 0){
        console.log("-");
    }else {
        console.log("*");
    }
    a++;
}
// QUESTION 3
for(let i = 0; i < 10; i++){
    for(let k = 1; k <= 10; k++){
        console.log(k);
    }
}
// QUESTION 4 a
for(let i = 100; i <= 200; i++){
    console.log(`a = ${a}`);
}
// QUESTION 4 b
for(let i = 100; i <= 200; i++){
    if(a%2 == 0){
        console.log("-");
    }else {
        console.log("*");
    }
}
let today = new Date();
let day = today.getDay();
switch(day){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
    case 2:
    
    case 3:

    case 4:
        
    case 5:
        console.log("Its weekday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("Error")   
        break;

}