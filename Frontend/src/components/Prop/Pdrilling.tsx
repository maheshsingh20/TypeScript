// type props = {
//   user: string;
//   age: number;
// }
// const Pdrilling = ({user,age}:props) => {
//   return (
//     <div className="w-90 h-100 m-4 p-4 bg-teal-900 rounded-lg text-center justify-items-center">
//       <img
//         src="https://images.unsplash.com/photo-1767016311533-8365d673f91b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D"
//         className="w-40 h-40 rounded-full mx-auto object-cover"
//       />
//       <h1 className="p-4 text-lg">{user}</h1>
//       <p className="p-4">
//         {age}
//       </p>
//       <button className="p-2 bg-teal-700 rounded-lg"> View Profile </button>
//     </div>
//   );
// }

import type { ReactNode } from "react";

// export default Pdrilling

// interface Props {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

// const Pdrilling = ({ name, age, isStudent }: Props) => {
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h1>Age: {age}</h1>
//       <h1>Is Student: {isStudent ? "True" : "False"}</h1>
//     </div>
//   );
// };

// export default Pdrilling;

type props = {
  children: ReactNode;
}

const Pdrilling = ({children}:props) => {
  return (
    <div>
      <h1>
        {children}
      </h1>
    </div>
  )
}
export default Pdrilling;