// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the result
// Print the result. 


const array1 = [2, 67, 89, 34, 90, 24, 567, 78];
const array2 = [676, 343, 5, 3, 87, 33, 22, 34, 900];

const twoArray = (firstArray, secondArray) => {

    const newArray = [...firstArray, ...secondArray];
    const maximum = Math.max(...newArray);
    return maximum;
}
console.log(twoArray(array1, array2))