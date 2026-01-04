import { useState } from "react";

const Student: string[] = [
  "Mahesh Singh",
  "Sunny Singh",
  "Sakshi Singh",
  "Shreya Singh",
  "Kartik Sharma",
];

const StrState = () => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <h2>Selected: {name}</h2>

      {Student.map((item) => (
        <button key={item} onClick={() => setName(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default StrState;
