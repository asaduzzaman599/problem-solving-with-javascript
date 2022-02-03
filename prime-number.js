//write a function. take a parameter of number. return whether number is prime or not?

function isPrimeNumber(number){
    if(typeof number != 'number')return 'invalid input';
    if(number == 1)return false;
    for(let i = 2; i <= number/2; i++){
        if(number % i == 0){
            return false;
        }
    } 
    return true;
}

                                    //output
console.log(isPrimeNumber(10) );    //false
console.log(isPrimeNumber(2) );     //true
console.log(isPrimeNumber(23) );    //true
console.log(isPrimeNumber(1) );     //false
console.log(isPrimeNumber(9) );     //false
