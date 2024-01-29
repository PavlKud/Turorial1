"use strict"
// let userName = prompt('Your name?', "Anonum");
// let isBunWanted = confirm("Do you want the bun?");

// alert('Visitor', + userName);
// alert("Want bun", + isBunWanted);


// let a, b, c;
// a = b = c = 2 + 2;
// console.log(a);
// console.log(b);
// console.log(c);

// let n = 2;
// n *= 2;
// n *= 3 + 5;

// console.log(n);
// let count = 2;
// count++
// console.log('count = ', count);


// let a = 0;
// console.log(Boolean(a));

// let b = '0';
// console.log(Boolean(b));

// console.log('result -', a === b);


// let userName = "Daniel";

//     function showMessage(){
//      let userName = 'Petter';
//         let message = "Hello, " + userName;

//         console.log(message);
//     };

//     showMessage();

// function goodbyeMessage(){
//     let message = "See you soon, " + userName;
//     console.log(message)
// };
// showMessage();
// goodbyeMessage();
//     // console.log(message);
// let userName = "Kate";

// function showMessage(from, text) {
    
//     console.log(from + ": " + text);
    

// }
// showMessage('Kate', 'Hello')
// showMessage('Daniel', 'Oh. Hello, Kate')


// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//         totalPrice += item;
        
//       });
    
    
  
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
//   }

//   console.log(filterArray([1, 2, 3, 4, 5], 3) );//повертає [4, 5]
//   console.log(filterArray([1, 2, 3, 4, 5], 4));//повертає [5]

// function changeEven(numbers, value) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//     return numbers;
//   }

  
//  const changeEven = (numbers, value) => {
//     const newNumbers = [];
//     numbers.forEach(function (number)  {
//         if (number % 2 === 0){
//         newNumbers.push(number + value);        
    
//     } else {newNumbers.push(number);}
//     });
    
//     return newNumbers;
//     }
 



//   console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]
//   console.log(changeEven([17, 24, 68, 31, 42], 100)) //повертає новий масив [17, 124, 168, 31, 142];






// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value + 1);


const user =[
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ];

const getUsersWithEyeColor = (users, color) => {
    const eye = users.filter(user => user.eyeColor === color)
    return eye
  };
  

