function makeArray(firstArray, secondArray, maxLength) {
  //функція, три параметри
  const newArray = [...firstArray, ...secondArray];
  //новий масив, який об'єднує два масисви
  if (newArray.length > maxLength)
    //перевіряє, чи довжина нового масиву більша за максимальну довжину
    return newArray.slice(0, maxLength);
  //якщо новий масив більше за максимальну довжину, .length обрізає його до максимальної довжини
  else return newArray;
  //інакше return повертає новий масив
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
