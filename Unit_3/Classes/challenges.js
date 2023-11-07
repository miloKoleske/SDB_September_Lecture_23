//  ! Vehicle
/*
Part 1 
    - Create a class that is meant to create a vehicle.
        - Should have these keys:
            - make, model, no_wheels, color
        - Should have two methods
            - The first method will print (console log):
                "The [color] [make] [model] turns on its engine"
            - The second method will print (console log):
                "The [color] [make] [model] turns off its engine"
    - Create a vehicle using the class and "turn on" and "turn off" the vehicle.
    - Print (console log) the complete object created.
*/

// Chris, Aaron, Milo solution
// class Vehicle {
//     constructor(make, model, no_wheels, color) {
//         this.make = make
//         this.model = model
//         this.no_wheels = no_wheels
//         this.color
//     }
// }

// console.log(Vehicle);
// console.log(`The ${Vehicle.make} ${vehicle.}`)

class Vehicle {
    constructor(make, model, no_wheels, color) {
        this.make = make;
        this.model = model;
        this.no_wheels = no_wheels;
        this.color = color;
    }

    engineOn() {
        console.log(`The ${this.color} ${this.make} ${this.model} turns on its engine.`)
    }
    engineOff() {
        console.log(`The ${this.color} ${this.make} ${this.model} turns off its engine.`)
    }
}

let newCar = new Vehicle('Ford', 'Fiesta', 4, 'Red');
newCar.engineOn();
newCar.engineOff();

class Sedan extends Vehicle{
    static parkedCar(make,model,no_wheels,color,tank) {
        let engineOn = false;
        return new Sedan(
            make,model,no_wheels,color,engineOn,tank
        );
    }

    constructor{make,model,no_wheels,color,engineOn,tank} {
        super(make,model,no_wheels,color,engineOn);
        this.tank = tank;
    }

    drive(gallons) {
        if(this.engineOn) {
            console.log(`This ${this.color} ${this.model} needs to be turned on.`)
        } else {
            console.log(`This ${this.color} ${this.model} needs to be turned on.`)
        }
    }
}

// selecting sedan class utilizing parkedCar method + holds in parameter variables
const blueCivic = Sedan.parkedCar(
    'Honda', 'Civic', 4, 'blue', 12
);
blueCivic.drive(1);


