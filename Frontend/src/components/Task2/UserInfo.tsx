import type { Info} from "./Typee";


const UserInfo = ({id,name ,email}:Info) => {
  return (
    <div>
      <h1>ID:{id}</h1>
      <h1>Name:{name}</h1>
      <h1>email:{email}</h1>
    </div>
  );
}

export default UserInfo;