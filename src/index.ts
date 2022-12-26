//////////////////////////////////////////////////////////////
// Basic Declaration and initialization in TypeScript
//////////////////////////////////////////////////////////////
let sales: number = 123_456_789;
let course: string = 'Blockchain';
let isPublished: boolean = true;
let level;


//////////////////////////////////////////////////////////////
// Arrays in TypeScript
//////////////////////////////////////////////////////////////
let numbers: number[] = [1, 2, 3];


//////////////////////////////////////////////////////////////
// Tuples in TypeScript
//////////////////////////////////////////////////////////////
let users: [number, string] = [1, 'Yogesh'];
users.push(1)


//////////////////////////////////////////////////////////////
// Enums in TypeScript
//////////////////////////////////////////////////////////////
const enum Size { 'small' = 1, 'medium', 'large' };
let mySize = Size.medium;


//////////////////////////////////////////////////////////////
// Functions in TypeScript
//////////////////////////////////////////////////////////////
function calculateTax(income: number, taxYear = 2020): number {
    if(taxYear > 2022) return income * 10;
    return income * 15;
}

console.log(calculateTax(10));


//////////////////////////////////////////////////////////////
// Objects in TypeScript
//////////////////////////////////////////////////////////////
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 0,
    name: 'Yogesh',
    retire: (date: Date) => {
        console.log(date);
    }
}
employee.name = 'Captain Yogesh';


//////////////////////////////////////////////////////////////
// Objects using Type Alias in TypeScript
//////////////////////////////////////////////////////////////
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
};

let typeEmployee: Employee = {
    id: 0,
    name: 'Yogesh',
    retire: (date: Date) => {
        console.log(date);
    }
}
employee.name = 'Captain Yogesh';

console.log(typeEmployee)


//////////////////////////////////////////////////////////////
// Concept of Narrowing in TypeScript
//////////////////////////////////////////////////////////////
function calculateBMI(weight: number | string): number {
    // Narrowing
    if(typeof weight === 'number')
        return weight * 1.8
    else
        return (parseInt(weight) * 1.8);
}


//////////////////////////////////////////////////////////////
// Type Intersection in TypeScript: Storing more than 1 type of varaible in one varaible
//////////////////////////////////////////////////////////////
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type TexBox = Draggable & Resizable;

let textBox: TexBox = {
    drag: () => {},
    resize: () => {}
}


//////////////////////////////////////////////////////////////
// Literal types in TypeScript: Variable can stored only specified set of values
//////////////////////////////////////////////////////////////
type Quantity = 50 | 100 | 150;
let quantity: Quantity = 100;
// let quantity: Quantity = 101;            // Will thorow error since quantity can only be 50, 100, 150

type Metric = 'cm' | 'inch' | 'feet';
let metric: Metric = 'cm';                  // Can also be applied in other datatypes


//////////////////////////////////////////////////////////////
// Union type in TypeScript
//////////////////////////////////////////////////////////////
function sayHello(name: string | null | undefined): void {
    if(name)
        console.log(`Hi ${name.toUpperCase()}!`);
    else
        console.log(`Hi ${'User'.toUpperCase()}!`);
}

sayHello(undefined);


//////////////////////////////////////////////////////////////
// Optional Chaining and Option array access operator works similar
// someObject.someParameter.someFunction() can be used as someObject?.someParameter?.someFunction() to avoid null and undefined checks
// Similarely with Array
// array[0] can be used as array?.[0] to avoid null, undefined as well as length checks
//////////////////////////////////////////////////////////////


