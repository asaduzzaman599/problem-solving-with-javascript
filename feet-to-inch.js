// write a functionn that takes Feet as parameter and return inch

function feetToInch(feet){
    if(typeof feet != "number")return invalid;
    let inch = feet * 12;
    return inch;
    //return feet * 12;
}
const feet = 2;                                            //const feet = 2;
console.log(`${feet} feet = ${feetToInch(feet)} inch`);    //output : 2 feet = 24 inch


// write a function that takes Centimeter as parameter and return Meter.

function centimeterToMeter(centimeter){
    if(typeof centimeter != "number")return invalid;
    let meter = centimeter / 100;
    return meter;
    //return centimeter / 100;
}
const centimeter = 2;                                                                //const centimeter = 2;
console.log(`${centimeter} centimeter = ${centimeterToMeter(centimeter)} meter`);    //output : 2 centimeter = 0.02 meter
