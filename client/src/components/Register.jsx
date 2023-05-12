import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

const Register = () => {
  const response = useContext(UserContext);
  console.log("response: ", response);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
      body: JSON.stringify({
        username: userDetails.username,
        password: userDetails.password,
      }),
      credentials: "include", // accept cookies from the server
    });
    console.log(response);
  };

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userDetails.username}
          onChange={handleChange}
          className="block w-full mb-2 p-2 rounded-sm capitalize text-black  "
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
          className="block w-full p-2 mb-2 rounded-sm capitalize text-black "
        />
        <button className="bg-blue-500 text-white block w-full rounded p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
