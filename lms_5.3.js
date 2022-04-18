let userNumber = +prompt("Введите число");
let checkNumber = typeof(userNumber);

if (checkNumber = 'number' && userNumber % 2 == 0) {
  console.log("это четное число") 
}else if (checkNumber = 'number' && userNumber % 2 > 0) {
  console.log("это нечетное число")
} else if (checkNumber != "number"){
    console.log("Это не число");
}

let userInput = prompt('Введие что-то');

if(typeof(+userInput) === 'number' && !isNaN(+userInput)) {
  console.log("X - это число")
}
else if (typeof(userInput) === 'string' && userInput =='true' || userInput === 'false'){
  console.log("X - это boolean")
}
else {
  console.log("X - это строка")
}