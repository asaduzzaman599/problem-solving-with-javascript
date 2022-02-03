// write a functionn that takes Feet as parameter and return inch

function feetToInch(feet){
    if(typeof feet != "number")return invalid;
    let inch = feet * 12;
    return inch;
    //return feet * 12;
}
const feet = 2;                                            //const feet = 2;
console.log(`${feet} feet = ${feetToInch(feet)} inch`);    //output : 2 feet = 24 inch