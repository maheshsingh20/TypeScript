/*
let name: string;
name = "Mahesh Singh";
console.log(`Hello, ${name}`);


let array: number[] = [1, 2, 3, 4, 5];
console.log(`Array has ${array.length} elements.`);
array.push(6);
console.log(`Array after push has ${array.length} elements.`);
array.reverse();
array.forEach((value) => console.log(value));



let person: {
  name:string,
  age: number
}
person = {
  name: "Mahesh Singh",
  age: 26
}

console.log(`${person.name} is ${person.age} years old.`);




function setCounter(number=12) {
  return number+ 1;
}

let incrementCounter = (variable = 23) : number =>{
  return variable + setCounter();
}

console.log(incrementCounter());



// ---Let's talk about arry type|null

let item = [1, 2, 3, null, 5, "set"];
item.forEach((value) => console.log(value));


//binary number representation it always start with 0 and finish use
//  small and capital B in between then binary representation of that number

let num = 0b111;
console.log(num);
let anothernum: number = 0b11;
console.log(anothernum);
anothernum += 23;
console.log(anothernum);
num += 23;
console.log(num); 



// ----Octal Number Representation

let octal = 0o23;
console.log(octal);

//big int num greater than 2^53-1 , it always end with n

let big: bigint = 12n;
console.log(big+14n);



let str: string = 'Mahesh Singh is my name';
console.log(str);
console.log(str.substring(0,6));
console.log(str.concat(' and I am learning TypeScript.'));
console.log(str.charAt(2));

let title: string = "Software Engineer";
let str1: string = `Hey, I'm Mahesh Singh
My goal is to become ${title}`;
console.log(str1);



let students: object[];
students=[{
  name: "Mahesh Singh",
  age: 23,
  Job: "Software Engineer",
  title: "Intern"
}, {
  name: "Ankit Kumar",
  age: 25,
  Job: "Software Developer",
  title: "Fresher"
}];

console.log(students[0].Job);



//define object type with primitive types and then assign values to it

let employee: {
  name: String,
  age: Number,
  isMarried: Boolean
}
  = {
  name: "Mahesh Singh",
  age: 26,
  isMarried: false
}
console.log(`${employee.name} is ${employee.age} years old. Married Status: ${employee.isMarried}`);



// ----empty type {}----

let data: {}={};
data.firstName = "Mahesh";
// This will give error as empty type does not allow any properties to be added

*/

