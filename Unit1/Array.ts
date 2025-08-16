// there are two ways to declare array in typescript
/*first way*/
const numbers: number[] = [1, 2, 3, 4, 5];
/*second way*/
const names: Array<string> = ["Mahesh", "Harsh", "Dinesh"];
console.log(numbers);
numbers.push(6);
numbers.push(6);
console.log(numbers[5]);