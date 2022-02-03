
// write a function that return fabonacci array less the nth value

function fibonacci(number){
    const fibonacciArr = [0,1];                                 //output            
    console.log(fibonacciArr);                                  //[0, 1]

    for(let i = 2; i < number; i++){
        fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2];
    }

    return fibonacciArr;

}


console.log(fibonacci(5));                               //[0, 1, 1, 2, 3]
console.log(fibonacci(10));                              //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(15));                              //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]



// write a function that print fabonacci series less the nth value

function displayFibonacciString(number){
    let firstValue = 0;                            
    let secondValue = 1;                             
    let fibonacciString = firstValue + ' ' + secondValue;
    console.log(fibonacciString);                       //0 1


    for(let i = 2; i < number; i++){
        const temp = firstValue + secondValue;
        firstValue = secondValue;
        secondValue = temp;

        fibonacciString += ' ' + secondValue; 
        
    }

    console.log(fibonacciString);

}


displayFibonacciString(5);             //[0, 1, 1, 2, 3]
displayFibonacciString(10);            //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
displayFibonacciString(15);            //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]