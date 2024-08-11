// Exercise 1: Basic Types and Functions
// Task: Define variables of different basic types (number, string, boolean) 
// and write functions that take these types as parameters and return a value.

let numType: number = 15
const str: string = "Wow TS"
const chemStum: boolean = false

function returnNumber(num: number): number {
    return num*num;
}

function addJan(str: string): string {
    return `${str} jan`;
}

function isLieing(chemStum: boolean):void {
    let answer =  chemStum ? "Lieing" : "Not Lieing"
    console.log (answer)
}

console.log(returnNumber(numType))
console.log(addJan(str))
isLieing(chemStum);
