import React, { useState } from "react";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  console.log(userDetails);

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto">
        <input
          type="text"
          placeholder="username"
          name="userName"
          value={userDetails.userName}
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
