import "./style.css";
import { useState } from "react";

const LoginPage = (tst) => {
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  //
  const login = async function () {
    const response = await fetch("http://test.joo.nz/login", {
      method: "post",
      data: JSON.stringify({username:"faramarz",password:"12345"}),
    });
    const data = await response.json();
    console.log(data);
    const token = data.token;
    localStorage.setItem("token", token);
  };

  //
  login();

  //
  return (
    <div className="m-1 bg-white/80 w-[600px] h-[600px] flex justify-center items-center border-2 border-gray-700">
      <div className="flex flex-col justify-center items-center gap-8 p-4 h-fit w-[350px] bg-gray-400 border-2 border-black/80 rounded-3xl">
        <h1 className="text-white text-4xl font-extrabold">
          Login
          <span class="feri">سلام متن تست</span>
        </h1>
        {/* log details */}
        <div className="flex flex-col gap-2 select-none">
          <label className="bg-inherit" htmlFor="mail">
            UserName:
          </label>
          <input
            onChange={setMail}
            className="border-2 border-amber-50 font-mono pl-1 p-2 "
            type="text"
            id="mail"
            placeholder="test.test@gmail.com"
          />
          <label className="bg-inherit" htmlFor="password">
            Password:
          </label>

          <input
            onChange={setPassword}
            className="border-2 border-amber-50 font-mono pl-1 p-2 "
            id="password"
            type="password"
          />
        </div>
        <button
          onClick={login}
          className="border-2 border-black p-2 w-[100px] hover:bg-amber-300 hover:transition"
        >
          LOGIN!
        </button>
        <p>
          Or Click here to
          <a href="#">
            <span className="font-bold hover:text-sky-400 transition transition-250ms">
              {" "}
              Register
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
