
type adminType = {
  id: number;
  name: string;
  email: string;
  skills: string[];
  isAdmin: boolean;
}

type prop = {
  admin: adminType;
}

const AdminInfo = ({admin}:prop) => {
  return (
    <div className="border p-2">
      <p>Id: {admin.id}</p>
      <p>Name:{admin.name}</p>
      <p>Email:{admin.email}</p>
      <p>Skills:</p>
      <ul className="flex flex-row gap-5">
        {admin.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminInfo;
