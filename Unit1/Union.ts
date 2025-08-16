let password: string | number = "Mahesh099";
console.log(password);
//password now can have both datatype string and number
password = 78;
console.log(password);



// union use in type aliases
type UserInfo = {
   fName: string;
   lName: string;
   age: number;
}
type AccountDeatil = {
   accountNumber: number;
   totalBalnce: number;
   isEligible: boolean;
}

function getInfo(user: UserInfo | AccountDeatil) {
   //rest of code 
}
