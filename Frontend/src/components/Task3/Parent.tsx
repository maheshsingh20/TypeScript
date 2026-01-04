import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  skills: string[];
};

const Parent = () => {
  const [user, setUser] = useState<User | null>(null);

  const setUserHandler = () => {
    setUser({
      id: 1,
      name: "Mahesh Singh",
      email: "singhmahesh2924@gmail.com",
      skills: ["DSA", "React", "TypeScript"],
    });
  };

  return (
    <div>
      <button onClick={setUserHandler}>Load User</button>

      {user && (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <ul>
            {user.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Parent;
