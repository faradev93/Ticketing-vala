import { useState } from "react";

const LoginPage2 = () => {
  // | useState's
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  //
  const loginRequest = async () => {
    const response = await fetch("http://test.joo.nz/login", {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify({ username: mail, password: pass }),
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("Token_Bashad", data.token);
    }
  };

  //
  return (
    <div>
      <div className="flex flex-col gap-4 bg-lime-700 w-100 h-100 m-2 p-4 text-2xl text-amber-500 justify-center items-center border-2 select-none">
        <h1>LOGIN PAGE</h1>
        <label htmlFor="mail">Email:</label>
        <input
          className="border-2 border-black/50 p-2"
          type="text"
          placeholder="test.ss@gmail.com"
          id="mail"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="border-2 border-black/50 p-2"
          id="password"
          placeholder="Password bezan"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button className="border-2 p-2 rounded-4xl m-4" onClick={loginRequest}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default LoginPage2;
