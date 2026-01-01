// ---------Array Types---------
/*
let skills: string[]=[]; //Method to initializing
skills[0] = "Software Engineer"; // inserting value
skills[1] = "Machine learning";
skills.push("Ai Engineer");  // another way to insert value

console.log(skills.length);

skills=["Mahesh", "Singh"]; //replace with new value in old skills array by reseting older one
console.log(skills.length); 

console.log(typeof (skills)); // it will show object because array is type of object in javascript

//using different methods of array

let numArray: number[] = [1, 2, 3, 4, 5];

numArray.forEach((value) => {  //use of foreach 
  console.log(value * 2);
})

numArray.map((e) => { //using map method
  console.log(e * e);
})



let numArray : unknown[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = (numArray as number[]).reduce((a: number, b: number) => {  //if type is unown else directly it will add 
  return a + b;
});

console.log(`Total sum is ${total}`);

*/