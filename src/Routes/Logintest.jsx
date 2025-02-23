import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logintest = () => {
  const [mail, setMail] = useState("");
  const [passwords, setpasswords] = useState("");
  const navigate = useNavigate();

  const loginTest = async () => {
    const response = await fetch("http://test.joo.nz/login", {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify({ username: mail, password: passwords }),
    });
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("token_man", data.token);
      console.log(data);
      navigate("/tickets");
    }
  };

  const handleUsername = (e) => {
    setMail(e.target.value);
  };

  const handlePassword = (e) => {
    setpasswords(e.target.value);
  };

  return (
    <div>
      <div className="bg-lime-800/50 flex flex-col p-4 m-2 gap-4 rounded-2xl ">
        <label htmlFor="mail">Email:</label>
        <input
          onChange={handleUsername}
          type="text"
          id="mail"
          className="border-2 p-2"
        />
        <label htmlFor="password">Pass:</label>
        <input
          onChange={handlePassword}
          type="password"
          id="password"
          className="border-2 p-2"
        />

        <button
          onClick={loginTest}
          className="border-2 border-amber-200 rounded-2xl cursor-pointer"
        >
          Login!
        </button>
      </div>
    </div>
  );
};
export default Logintest;
