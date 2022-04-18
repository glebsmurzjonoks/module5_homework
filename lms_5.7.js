let myMap = new Map();
myMap.set('key', 'prop');

for (let pair of myMap.entries()) {
    console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
  }

