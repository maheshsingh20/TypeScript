import AdminInfo from "./AdminInfo";
import UserInfo from "./UserInfo";

const userInfo = {
  id: 1,
  name: "Mahesh Singh",
  email: "singhmahesh2924@gmail.com",
  skills: ["DSA", "Software Engineering", "FullStack WebD"],
  isAdmin: false
};

const adminInfo = {
  id: 2,
  name: "Chandan Singh",
  email: "maheshsingh2924@gmail.com",
  skills: ["SDLC", "SDE", "WebD"],
  isAdmin: true,
};

const Parent = () => {
  return (
    <div>
      <h1 className="text-yellow-700 underline mt-3"> User Info </h1>
      <UserInfo user={userInfo} />
      <h1 className="text-pink-300 underline mt-3"> Admin Info </h1>
      <AdminInfo admin={adminInfo} />
    </div>
  );
}

export default Parent;
