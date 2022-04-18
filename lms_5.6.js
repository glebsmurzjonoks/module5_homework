const arr = [1, 1, 1, 1, 1, 1];

let isAllSame = true;
const firstValue = arr[0];

for (const i of arr) {
  if (firstValue !== i) {
    isAllSame = false;
  }
}

if (isAllSame) {
  console.log("true");
} else {
  console.log("false");
}


const userArray = [1, 2, 8, 8, 9, 4, 6, 8, 12, 22, 3, 7];
let evenNumber = 0;
let oddNumber = 0;

for (let i = 0; i < userArray.length; i++) {
    if (isNaN(userArray[i])){
        console.log("Это не число")
    } else if (userArray[i] % 2 == 0){
        evenNumber = evenNumber + 1
    } else if (userArray[i] % 2 !== 0){
        oddNumber = oddNumber + 1
    }
}

console.log(`Количество четных чисел: ${evenNumber}`)
console.log(`Количество нечетных чисел: ${oddNumber}`)
     
