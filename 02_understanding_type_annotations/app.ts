let counter: number;
counter = 1;

let names: string = 'John';
let age: number = 25;
let active: boolean = true;

// Types annotation examples
// Array
let names2: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

// Object
let person: {
  name: string;
  age: number
};

person = {
  name: 'John',
  age: 25
}

// Function arguments & return types
let greeting: (name: string) => string;
greeting = function (name: string) {
  return `Hi ${name}`;
}

