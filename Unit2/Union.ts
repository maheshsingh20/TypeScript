/*
function add(a: any, b: any) {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log(a.concat(b));
  }
  else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b);
  }
  else {
    console.log("Invalid input");
  }
}

// add("Hello, ", "World!");
add(true, false); // Invalid input so now we use Union type

*/

function addUnion(a: string | number, b: string | number) {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log(a.concat(b));
  }
  else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b);
  }
  else {
    console.log("Invalid input");
  }
}

addUnion("Hello, ", "World!");
addUnion(10, 20);
// addUnion(true, false); // Invalid input
