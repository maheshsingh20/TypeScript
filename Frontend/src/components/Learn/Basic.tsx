// //  props  in typescript
// type UserProps = {
//   name: string;
//   age: number;
// };
// const Basic = (props: UserProps) => {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };


// export default Basic;

//destructing props

// type userProps = {
//   name: string;
//   age: number;
//   isLogged: boolean;
// };
// const Basic = ({ name, age, isLogged }: userProps) => {
//   return (
//     <>
//       {isLogged ? (
//         <h2>
//           Name:{name} <br /> Age:{age}
//         </h2>
//       ) : (
//         <h2>Please log in to see the details</h2>
//       )}
//     </>
//   );
// };

// export default Basic;


//Default props in typescript

// interface userProps {
//   name: string;
//   age: number;
//   isLogged?: boolean;
// };

// const Basic = ({ name, age, isLogged =false }: userProps) => {
//   return (
//     <>
//       {isLogged ? (<h2>Name:{name} <br /> Age:{age}</h2>):(<h2>Please Logged In</h2> )}
//     </>
//   )
// }

// export default Basic;


//Passing array as props in typescript


// interface userProps {
//   list: string[];
// }
// const basic = ({ list }: userProps) => {
//   return (
//     <>
//       {list.map((item, index) => {
//         return <h2 key={index}> {item}</h2>;
//     })}
//     </>
//   )
// }
// export default basic;


type DataItem = {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: number;
  address: string;
}

interface userProps {
  list: DataItem[];
}

const Basic = ({ list }: userProps) => {
  return (
    <div className="flex flex-row gap-2">
      {list.map((item) => (
        <div className="border-2 pt-4 pb-4 pl-2 pr-2 bg-teal-100 rounded-md" key={item.id}>
          <p className="p-2 border-2 border-red-900 rounded-sm pt-2 mt-2 bg-cyan-100">{item.name}</p>
          <p className="p-2 border-2 border-red-900 rounded-sm pt-2 mt-2 bg-cyan-100">{item.age}</p>
          <p className="p-2 border-2 border-red-900 rounded-sm pt-2 mt-2 bg-cyan-100">{item.email}</p>
          <p className="p-2 border-2 border-red-900 rounded-sm pt-2 mt-2 bg-cyan-100">
            {item.address}
          </p>
          <p className="p-2 border-2 border-red-900 rounded-sm pt-2 mt-2 bg-cyan-100">{item.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default Basic;
