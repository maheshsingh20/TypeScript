class Human {
private name: string;
protected age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
   }
   getName(): string{
      return `My Name is ${this.name}`;
   }
   getAge(): number{
      return this.age;
   }
};
class Person1 extends Human{
   constructor(name: string, age: number) {
      super(name, age);
   }
}

const newObj = new  Human("Mahesh Singh", 22);
console.log(newObj);
// Output: Person { name: 'Mahesh Singh', age: 22 }
