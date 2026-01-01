import { useState, useEffect } from "react";
import axios from "axios";
type testType = {
  _id: number;
  name: string;
  age: number;
  email: string;
  skills:string[]
}

interface ApiResponse {
  message: string;
  data: testType[];
}

const Test = () => {
  const [data, setData] = useState<testType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    axios.get<ApiResponse>("http://localhost:3001/read")
      .then((res) => {
        setData(res.data.data);
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
            <p>Skills: {item.skills.join(", ")}</p>
          </div>
        )
      })}
    </>
  )
}
export default Test;