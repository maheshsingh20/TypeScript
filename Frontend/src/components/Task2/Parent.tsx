import AdminInfo from "./AdminInfo";
import UserInfo from "./UserInfo";

const Parent = () => {
  return (
    <div>
      <UserInfo id={12} name="Mahesh Singh" email="singhmahesh2924@gmail.com" />
      <AdminInfo id={13} name="Chandan Singh" email="maheshsingh0905a@gmail.com" hasAccess={true}/>
    </div>
  );
}

export default Parent;
