import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const { Log, userData, setcheck, setLog } = useOutletContext();
  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({ name: "", password: "" });
  const [serverData, setServerData] = useState(false);
  // Check if user data is stored in localStorage
  const userData1 = localStorage.getItem("data");
  console.log(userData1);
  let isUserLoggedIn = !!userData1;

  // Redirect to signup if no user data found
  // if (!isUserLoggedIn) {
  //   navigate("/signup");
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    if (
      (loginData.name === "a@gmail.com" && loginData.password === "mohan") ||
      (data &&
        data.email === loginData.name &&
        data.password === loginData.password)
    ) {
      setLog(true);
      setcheck("mohan", "a@gmail.com", "mohan");
      navigate("/");
    } else {
      try {
        await axios
          .get("http:localhost:3003/logindata", { loginData })
          .then((res) => {
            setServerData(res.json()).catch((err) => console.log(err));
          });
      } catch {
        alert("Incorrect username or password. Please try again.");
      }
      if (serverData) {
        navigate("/");
      } else {
        alert("email or password mismatch");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-10">
      {!isActive && (
        <form
          className="w-1/3 p-16 border-1 border-slate-400 rounded-xl"
          onSubmit={handleClick}
        >
          <h1 className="text-center text-3xl font-bold border-b-1 mx-auto">
            Login Form
          </h1>
          <Input
            type="email"
            value={loginData.name}
            name="name"
            label="Email"
            className="py-4"
            onChange={handleChange}
          />
          <Input
            type="password"
            value={loginData.password}
            name="password"
            label="Password"
            className="py-4"
            onChange={handleChange}
          />
          <Button type="submit" className="object-center">
            Login
          </Button>
        </form>
      )}
    </div>
  );
};

export default LogIn;
