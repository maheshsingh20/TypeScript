import type { AdminInfoList } from "./Typee";

const AdminInfo = ({id,name,email,hasAccess}:AdminInfoList) => {
  return (
    <div>
      <h1>Id:{id}</h1>
      <h1>Name:{name}</h1>
      <h1>Email:{email}</h1>
      <h1>HasAccess: {hasAccess===true? "True" : "False" } </h1>
    </div>
  );
}

export default AdminInfo;
