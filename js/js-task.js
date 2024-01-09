// const str = "Some World ktjn efwe";

// const firstIndex = str.indexOf(" ");
// const lastIndex = str.indexOf(" ", firstIndex + 1);

// console.log(firstIndex)
// console.log(str.slice(firstIndex + 1, lastIndex));
// console.log(lastIndex)

// const result = str.indexOf("5");

// console.log(result)

// const lastIndex = str.lastIndexOf(" ");
// const firstIndex = str.lastIndexOf(" ", lastIndex - 1);

// console.log(firstIndex)
// console.log(str.slice(firstIndex + 1, lastIndex));
// console.log(lastIndex)

// const result = str.indexOf("5");


// function getOrderQuantity(order) {
//     return order.length;
//   }

//   console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]))


// function getLastElementMeta(array) {
  
//     const lastElementIndex = array.length - 1;
//     const lastElementValue = array[lastElementIndex];
  
//     return[lastElementIndex, lastElementValue]
    
//   }

//   console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]))
//   console.log(getLastElementMeta(["apple", "peach", "pear"]))
//   console.log()
//   console.log()

// function getExtremeElements(array) {
//     let firstElement = array[0];
//     let lastElement = array[array.length - 1];
  
//     return[firstElement, lastElement]
//   }
//   console.log(getExtremeElements([1, 2, 3, 4, 5]))

// function calculateEngravingPrice(message, pricePerWord) {
  
//   let letters = message.split(" ").length;
//   return letters * pricePerWord;

 
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))



// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// let allClient = oldClients.concat(newClients);
// console.log(allClient);


// function getSlice(array, value) {
//   let index;
//   index = array.indexOf(value);
//   if (index === -1){
//     return[];
//       }else{
//         return array.slice(0,index + 1)
//       }
  
// }



// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")) //["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")) //["Mango", "Poly", "Ajax"]




// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (let i = start; i <= end; i++){
//     if(i % 2 === 0){
//       evenNumbers.push(i)
//     }
//   }
//   return evenNumbers
// }
// console.log(getEvenNumbers(3, 11))


// function getCommonElements(array1, array2) {
//   // Створюємо порожній масив для зберігання спільних елементів
//   const commonElements = [];
//   // Використовуємо цикл for для ітерації кожного елемента у array1
//    for (let i = 0; i < array1.length; i++) {
//     // Перевіряємо, чи поточний елемент існує у array2 за допомогою методу includes
//    if (array2.includes(array1[i])) {
//     // Якщо елемент існує, то додаємо його до нового масиву commonElements
//      commonElements.push(array1[i]);
//     }
//   }
//    return commonElements;
// }

// function getCommonElements(array1, array2) {
//   // створюємо порожній масив для зберігання нового масиву
//   const commonElements = [];
//   // використовуємо цикл for для ітерації кожного елемента у array1
//   for (let element of array1) {
//     // у тілі циклу перевіряємо, чи поточний елемент існує у array2 за допомогою методу includes
//     if (array2.includes(element)) {
//       // якщо він існує, то додаємо елемент до нового масиву
//       commonElements.push(element);
//     }
//   }
//   // повертаємо наповнений масив спільних елементів як результат роботи функції
//   return commonElements;
// }



// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]))

// function calculateTotalPrice(order) {
//   let totalPrice = 0;
//   for (const item of order) {
//     totalPrice += item;
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// // функція createReversedArray, яка приймає довільну кількість аргументів
// function createReversedArray() {
//   // створюємо порожній масив, у який будемо додавати аргументи
//   const array = [];
//   // використовуємо цикл for для ітерації кожного аргумента
//   for (let i = 0; i < arguments.length; i++) {
//     // додаємо аргумент до початку масиву
//     array.unshift(arguments[i]);
//   }
//   // повертаємо масив як результат функції
//   return array;
// }

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
// };
  
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {
//     contry: "Jamaica",
//     city: "Kingston"
//   };
  


  

//   const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const keys = Object.keys(apartment);
//   console.log(keys)
  
//   const values = Object.values(apartment);
//   console.log(values)
  
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName)
//   },
// };


// console.log()
// console.log()
// console.log()
// console.log()
// console.log()

