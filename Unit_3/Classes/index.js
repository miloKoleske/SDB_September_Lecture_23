// ! Classes
/* 
    - good for designing inventory
    - Introduced in 2015
    - function that helps us create objects
    - defines a category of objects

* BASE STRUCTURE:

    class NameOfClass {
        constructor(parameter) {
            this.key = parameter;
        }

        methodName() {
            ... code block
        }
    }

*/

//  Instantiate classes
// UpperCase object like this denotes an object 

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
console.log(one);

// essential creating a blueprint and then writing in values


// 1    2
class Item {
//      3                4
    constructor(name,desc,price) {
//      5      6    7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    (1) Keyword to establish what type of "function"
    (2) The name of our class. Should be Pascal Case
    (3) Keyword is automatically run when class is instantiated
    (4) Parameters for constructed object. Est. values of new object
    (5) Keyword refers to 'this' specific object being created
    (6) Name of the key to our new object
    (7) value for those keys being created (set by parameters)
*/

let itemZero = new Item();
console.log(itemZero) // Item { name: undefined, description: undefined, price: undefined } 
// Returns and obj w/ set keys that hold undefined values

let itemOne = new Item('beans', 'canned', 0.89);
console.log(itemOne) // Item { name: 'beans', description: 'canned', price: 0.89 }

// let brokenItem = Item();
// console.log(brokenItem) // missing keyword 'new' so item is broken

// ! Factory Functions

// capture from front end, store for localStorage, process info we get from UserActivation, function fires off, return back 'new'

let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(i,d,c) {
    return new Item(i,d,c);
}

//  created new variable 
let useFunction = processItem(iType,iDesc,iCost);
console.log(useFunction);

// ! Methods
class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; // making a default value for this key
    }

//         1           2
    addToInventory(newItem){
//          3              4
        this.items.push(newItem);
        console.log('Item Added!')
    }

}

// 5
let dryGoods = new DeptInventory ('Dry Goods');
console.log(dryGoods);
let itemTwo = new Item('corn', 'canned', 0.79);

// 6
dryGoods.addToInventory(itemTwo); // w/o dryGoods. addToInventory is not defined
console.log(dryGoods);

/* 
    (1) Establish name of the method
    (2) Method requires a parameter (not necessary for all methods)
    (3) 'this' keyword references specific object(dryGoods)
    (4) Using an array method to add the 'item object' to the items array
    (5) Creating new objects (Dept / Item)
    (6) Invoking the method available to dryGood object
*/

//  ! Factory Methods

class Expense {
    static addUpChargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s) {
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpChargeForProfit(1);
itemToSell.addTax(0.07);
console.log(itemToSell);

let anotherItem = Expense.addUpChargeForProfit(5);
anotherItem.addTax(0.06);
console.log(anotherItem);




function stringInt(str) {
	return typeof Number(str)
}