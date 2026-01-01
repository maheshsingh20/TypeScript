import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  age: string;
  email: string;
}

interface ApiResponse {
  message: string;
  data: User[];
}

const Data = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<ApiResponse>("http://localhost:3001/data")
      .then((res) => {
        setData(res.data.data); // Access nested data property
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>
          </div>
        );
      })}
    </>
  );
};
export default Data;