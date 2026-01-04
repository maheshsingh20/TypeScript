type userType = {
  id: number;
  name: string;
  email: string;
  skills: string[];
  isAdmin: boolean;
};
type userP = {
  user: userType;
}
const UserInfo = ({user}:userP) => {
  return (
    <div className="border p-2">
      <p>Id:{user.id}</p>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
      <ul className="flex flex-row gap-5 ">
        {user.skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
};

export default UserInfo;
