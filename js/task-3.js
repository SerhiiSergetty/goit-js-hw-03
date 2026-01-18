function filterArray(numbers, value) {
  // оголошення функції два параметри
  const resultNumbers = [];
  //створено пустий масив для зберігання потрібних чисел
  for (let i = 0; i < numbers.length; i++) {
    //цикл for (ініціалізація 'let i = 0;'), (умова 'i < number.length;'),(крок i++ збільшує значення після повернення)
    if (numbers[i] > value) {
      //перевіряє умову, чи (число[i]) більше за значенняValue
      resultNumbers.push(numbers[i]); //отримане число з numbers[i] додає в resultNumbers
    }
  }
  return resultNumbers; //повертає результат, новий масив чисел
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
