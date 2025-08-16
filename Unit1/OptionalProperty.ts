//In aliases it is not possible to update a defined type but we can merge it into new one

type User = {
  name: string;
  age: number;
  email?: string; // optional property
};

type newUser = User  & {
   location: string; //new property
}

/*

function printUser(user: User) {
   console.log(user.age);
   console.log(user.name);
}

*/

function printUser(user: newUser) {
   console.log(user.location);
   console.log(user.age);
   console.log(user.name);
}

printUser({ age:12, name:"Mahesh Singh",location:"India" });