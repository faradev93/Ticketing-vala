import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage3 = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const navigate = useNavigate();

  const loginACC = async () => {
    const response = await fetch("http://test.joo.nz/login", {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify({ username: email, password: password1 }),
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log("vared shod");
      localStorage.setItem("token", data.token);
      navigate("/login");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlPassword = (e) => {
    setPassword1(e.target.value);
  };
  return (
    //

    <div>
      <div className="bg-red-800/50 flex flex-col p-4 m-2 gap-4 rounded-2xl ">
        <label htmlFor="mail">Email:</label>
        <input
          onChange={handleEmail}
          type="text"
          id="mail"
          className="border-2 p-2"
        />
        <label htmlFor="password">Pass:</label>
        <input
          onChange={handlPassword}
          type="password"
          id="password"
          className="border-2 p-2"
        />

        <button
          onClick={loginACC}
          className="border-2 border-amber-200 rounded-2xl cursor-pointer"
        >
          Login!
        </button>
      </div>
    </div>
  );
};
export default LoginPage3;
