// take an array with some positive and negative numbers. create a function. pass the array as parameter of function. create another array. store the only positive number before find a negative number. if a negetive number found then stop storing and return the array.

function noNegative(numbers){
    const arr = [];
    for(const number of numbers){
        if(number < 0)break;
        arr.push(number);
    }
    return arr;

}


const numbers = [2,5,6,8,10,-2,4];
console.log(numbers);               //[2, 5, 6, 8, 10, -2, 4]
console.log(noNegative(numbers));   //[2, 5, 6, 8, 10]