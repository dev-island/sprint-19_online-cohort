import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const initialFormData: FormData = {
  name: "Andrew",
  email: "t@t.com",
  message: "Hello",
};

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT as string;

function App() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      if (!formData.name || !formData.email || !formData.message) {
        alert("All fields are required");
        return;
      }
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      // SUBMIT FORM
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Serverless contact form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
