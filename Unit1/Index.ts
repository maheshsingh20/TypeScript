/*
type Person = {
   name:string
}
const person: Person = {
   name: "Mahesh",
};
console.log(person.name);
*/

// import { console } from "inspector";

/*Annotation-> it is datatype of variable or return type of a function - 

let myName: string = "Mahesh Singh";
let myAge: number = 17;
let isMale: boolean = true;
console.log(myName);
console.log(myAge);
console.log(isMale);


let myName = "Mahesh";
console.log(typeof myName); // "string"
*/

/*Anytype data type 

let myName: any = "Mahesh";
myName = 98; //no error now

*/

/*Function type annotation  

function addOne(num: number) {
   return num + 1;
}
const result = addOne(5); // 6
console.log(result);

const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res); // 20


//default params value
function greet(name: string = "Mahesh") {
   return `Hello ${name}`;
}
console.log(greet());
*/
//User defined return type
/*
function greet(num: number): string{
   if (num < 10) return "Good Morning";
   else return "Good noon";
}
const res = greet(13);
console.log(res);



// Arrow Function

const greet = (myName: string): string => {
  return `Good Morning ${myName}`;
};

const res = greet("Mahesh Singh");
console.log(res);



//void function return data type

function greet(): void {
   console.log("Hello");
   return;
}
greet();

*/
//never key word
function throwError(msg: string): never {
  throw new Error(msg);
}

throwError("something went wrong");
