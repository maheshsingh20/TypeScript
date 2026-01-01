import React from "react";
import { useState } from "react";

interface Student {
  name: string;
  age: string;
  email: string;
}

const Input = () => {
  const [inputData, setInputData] = useState<Student>({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        alert('Data sent successfully!');
        // Reset form
        setInputData({ name: "", age: "", email: "" });
      } else {
        alert('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending data');
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Add Student Data</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={inputData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            name="age"
            type="text"
            value={inputData.age}
            onChange={handleChange}
            placeholder="Enter age"
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={inputData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
