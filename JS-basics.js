// // 1.Write a program to read and prind elements of array - recursion
// let array = [1, 2, 3, 4, 5];
// function numbers(i){
//     if(i < array.length){
//         console.log(array[i]);
//         numbers(i + 1);
//     }
// }
// numbers(0);




// 2.Write a program to print all negative elements in an array
// let bigArray = [345, -45, 97, -2, -87, 34, 56, -8];
// let negativeArray = bigArray.filter(function(num){
//     return num < 0;
// });
// console.log(negativeArray);







// 3.Write a program to find sum of all array elements - recursion
// let arr = [1, 2, 3, 4, 5];
// function sumOfNumbers(i){
//     if(i >= arr.length){
//         return 0;
//     }
//     return arr[i] + sumOfNumbers(i + 1);
// }
// console.log(sumOfNumbers(0));







// 4.Write a program to find the maximum and minimum element in an array - recursion
// let max = 0;
// let min = 9999999;
// function maxAndMin(arr, n){
    
//     if(n < arr.length){
//         if(max < arr[n]){
//             max = arr[n];
//         }
        
//         if(min > arr[n]){
//             min = arr[n];
//         }
        
//         maxAndMin(arr, n+1)
//     }
    
// }
// maxAndMin([453, 46, 56, 34, 89, 32, 4, 95], 0);
// console.log("Max element: " + max);
// console.log("Min element: " + min);


// // 5.Write a program to find the second largest element in an array
// let a = [453, 46, 56, 34, 89, 32, 4, 95];
// let result = a.sort(function(a, b) {
//     return a - b;
// });
// console.log(result[result.length-2]);







// // 6.Write a program to count total number of even and odd elements in an array
// let b = [34, 2, 98, 67, 90, 45, 73];
// let evenCount = 0;
// let oddCount = 0;
// let res = b.forEach(function(num) {
//     if(num % 2 === 0){
//         evenCount++;
//     }
//     else{
//         oddCount++;
//     }
// });
// console.log("Even numbers count: "+ evenCount);
// console.log("Odd numbers count: " + oddCount);






// // 7.Write a program to count total number of negative elements in an array
// let c = [345, -45, 97, -2, -87, 34, 56, -8];
// let negativeNumberCount = 0
// let re = c.filter(function(num) {
//     if(num < 0){
//         negativeNumberCount++;
//     }
// });
// console.log("Negative number count: "+negativeNumberCount);






// // 8.Write a program to copy all elements from an array to another array
// let d = [1, 1, 2, 2, 3, 3];
// console.log(d.map(function(num){
//     return num;
// }));







// // 9.Write a program to insert an element in an array
// function insertArray(arr, position, element){
//     if(position > arr.length || position < 0){
//         return "Invalid position";
//     }
//     arr.splice(position, 0, element);
//     return arr;
// }
// console.log(insertArray([22, 343, 46, 67], 2, 10));






// // 10.Write a program to delete an element from an array at specified position
// function deleteArray(arr, position, deleteCount){
//     if(position > arr.length || position < 0){
//         return "Invalid position";
//     }
//     if(deleteCount > arr.length - position || deleteCount < 0){
//         return "Invalid delete count";
//     }
//     arr.splice(position, deleteCount);
//     return arr;
// }
// console.log(deleteArray([22, 343, 46, 67], 2, 2));






// // 11.Write a program to count frequency of each elements from an array
// function countFrequency(arr){
//     let obj = {}
//     for(let i = 0; i < arr.length; i++){
//         let value = arr[i];
        
//         if(obj[value]){
//             obj[value] += 1;
//         }
//         else{
//             obj[value] = 1;
//         }
//     }
//     return obj;
// }
// console.log(countFrequency([3, 5, 3, 2, 8, 5, 3, 8, 8, 5]));






// // 12.Write a program to print all unique elements in array
// function uniqeElement(arr){
//     let obj = {}
//     for(let i = 0; i < arr.length; i++){
//         let value = arr[i];
//         if(obj[value]){
//             obj[value] += 1;
//         }
//         else{
//             obj[value] = 1;
//         }
//     }
//     for(element in obj){
//         if(obj[element] === 1){
//             console.log(element);
//         }
//     }
// }
// uniqeElement([3, 5, 3, 2, 8, 3, 8, 8]);







// // 13.Write a program to count total number of duplicate elements in an array
// function countDuplicate(arr){
//     let obj = {}
//     let duplicateCount = 0;
//     for(let i = 0; i < arr.length; i++){
//         let value = arr[i];
//         if(obj[value]){
//             obj[value] += 1;
//         }
//         else{
//             obj[value] = 1;
//         }
//     }
//     for(element in obj){
//         if(obj[element] > 1){
//             duplicateCount++;
//         }
//     }
//     return duplicateCount;
// }
// console.log(countDuplicate([3, 5, 3, 2, 8, 5, 3, 8, 8, 5]));






// // 14.Write a program to delete all duplicate elements in an array
// function removeDuplicate(arr){
//     let emptyArray = [];
//     let obj = {}
//     for(let i = 0; i < arr.length; i++){
//         let value = arr[i];
//         if(!obj[value]){
//             obj[value] = true;
//         }
//     }
//     for(element in obj){
//         emptyArray.push(Number(element));
//     }
//     return emptyArray;
// }
// console.log(removeDuplicate([3, 5, 3, 2, 8, 5, 3, 8, 8, 5]));





// 15.Write a program to merge two array to third array
// function mergeTwoArrays(arr1, arr2){
//     let mergedArray = arr1.concat(arr2);
//     return mergedArray;
// }
// console.log(mergeTwoArrays([1, 2], [3, 4]));







// 16.Write a program to find reverse of an array
// function reverseArray(arr){
//     return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));








// 17.Write a program to put even and odd elements of array in two separate array
// function putEvenAndOdd(arr){
//     let evenArray = [];
//     let oddArray = [];
//     arr.forEach(function(num) {
//         if(num % 2 === 0){
//             evenArray.push(num);
//         }
//         else{
//             oddArray.push(num);
//         }
//     });
//     let obj = {
//         even : evenArray,
//         odd : oddArray
//     }
//     return obj;
// }
// let op = putEvenAndOdd([1, 2, 3, 4, 5]);
// console.log(op);








// 18.Write a program to search an element in array
// function linearSearch(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
// }
// console.log(linearSearch([1, 2, 3, 4, 5], 3));







// 19.Write a program to sort array elements in asc or desc order
// function sortedArray(arr){
//     arr.sort(function(a, b) {
//         return a - b;
//     });
//     return arr;
// }
// console.log(sortedArray([34, 12, 56, 3]));









// 20.Write a program to sort even and odd elements of array separately
// function sortEvenAndOdd(arr){
//     let evenArray = [];
//     let oddArray = [];
//     arr.forEach(function(num) {
//         if(num % 2 === 0){
//             evenArray.push(num);
//         }
//         else{
//             oddArray.push(num);
//         }
//     });
    
//     evenArray.sort(function(a, b) {
//         return a - b;
//     });
    
//     oddArray.sort(function(a, b){
//         return a - b;
//     });
    
//     let obj = {
//         even : evenArray,
//         odd : oddArray
//     }
    
//     return obj;
// }
// let output = sortEvenAndOdd([34, 21, 45, 3, 88, 15]);
// console.log(output);








// 21.Write a program to left rotate an array
function leftRotate(arr, index) {
    let result = [];

    for (let i = index; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < index; i++) {
        result.push(arr[i]);
    }

    return result;
}

let leftRotatedArray = leftRotate([1, 2, 3, 4, 5], 2);
console.log(leftRotatedArray);  








// 22.Write a program to left rotate an array
function rightRotate(arr, index){
    let result = [];
    for(let i = 0; i <= index; i++){
        result.push(arr[i]);
    }
    
    for(let i = arr.length - 1; i > index; i--){
        result.unshift(arr[i]);
    }
    
    return result;
}
let rightRoatedArray = rightRotate([1, 2, 3, 4, 5], 2);
console.log(rightRoatedArray);







