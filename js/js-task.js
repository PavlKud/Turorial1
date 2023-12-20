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

function getExtremeElements(array) {
    let firstElement = array[0];
    let lastElement = array[array.length - 1];
  
    return[firstElement, lastElement]
  }
  console.log(getExtremeElements([1, 2, 3, 4, 5]))