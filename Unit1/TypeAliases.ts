/*
type User = {
   namess: string;
   age: number;
   location:string
}

const printUserInfo = (user: User) => {
   console.log(`Name: ${user.namess}, Age: ${user.age}, Location: ${user.location}`);
}
printUserInfo({ namess: "Mahesh", age: 21, location: "Punjab" });
*/


//Intersection type
type Person = {
   myName: string;
   myAge: number;
   myHabit:string
}
type Employee = {
   myName: string;
   myAge: Number;
   salary:Number
}
type Man = Person & Employee;
const printUserInfo = (user: Man) => {
   console.log(user.myAge);
   console.log(user.myHabit);
   console.log(user.myName);
   console.log(user.salary);
}

printUserInfo({ myAge: 22, myHabit: "Coding", myName: "Mahesh", salary: 234566 });
