// Exercise 2: Enums and Interfaces

// Task: Create an enum Color with values Red, Green, and Blue. Write a 
// function that takes a Color and returns a string describing the color.


enum Color {
    Red,
    Green, 
    Blue
}

function describeColor(color:Color) : string {
    switch (color){
        case Color.Red :
             return "The color is red";
        case Color.Green  :
             return "The color is green as grass";
        case Color.Blue  :
             return "The color is blue";
        default:
             return "Unknown color";
    }
}

console.log(describeColor(Color.Red));
console.log(describeColor(Color.Green));
console.log(describeColor(Color.Blue));

