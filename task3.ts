// Exercise 2: Enums and Interfaces
// Task N3: Define an interface Car with properties make, model, and year.
// Then create a class that implements this interface and includes a
//  method to display the car's details.

interface Car {
    make:string
    model:string
    year: number
}

class ShowCarDetails implements Car{
    make:string
    model:string
    year: number

    constructor(make: string, model: string, year: number){
     
        this.make = make;
        this.model = model;
        this.year = year;
    }

    showDetails(): void {
        console.log(`Car Details: 
            produced by: ${this.make} 
            model:${this.model}
            made on: ${this.year}`);
    }
}

let mersedes = new ShowCarDetails ("Mersedes","Benz", 2020 );
let porshche = new ShowCarDetails ("Porshche", "Panamera", 2024 );
console.log(mersedes)

console.log(mersedes.showDetails())
console.log(porshche.showDetails())


