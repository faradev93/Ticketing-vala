import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg";

//
function avg() {
  let N = 0;
  let index = 0;
  for (index; index <= N; index++) {
    const avg=index+N/index;
    console.log(avg);
  }
}
avg(10)
//
const Signup3 = () => {
  const [info, setInfo] = useState({
    mail: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const nav = useNavigate();

  const [error, setError] = useState({});

  const clicktoSign = async () => {
    if (info.password === info.confirmPassword) {
      const response = await fetch("http://test.joo.nz/register", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          mail: info.mail,
          username: info.username,
          password: info.password,
          confirmPassword: info.confirmPassword,
        }),
      });
      if (response.status === 200) {
        const dt = await response.json();
        console.log(dt);
        localStorage.setItem("TKN", dt.token);
        nav("/tickets");
      }
    } else if (info.password !== info.confirmPassword) {
      alert("Your Password Enter is Not Correct!");
    }
  };

  //  | ydi
  const handletstMail = (dhNx) => {
    const vl = dhNx.target.value;
    const copyInfo = { ...info };
    copyInfo.mail = vl;
    setInfo(copyInfo);
    console.log(copyInfo);
  };
  const handleBlur = (e) => {
    if (!e.target.value.trim()) {
      setError({ ...error, mail: <ErrorMsg /> });
    } else {
      setError({ ...error, mail: null });
    }
  };

  const handlePasswordBlur = (e) => {
    if (info.password !== info.confirmPassword) {
      setError({ ...error, confirmPassword: <ErrorMsg /> });
    } else {
      setError({ ...error, confirmPassword: null });
    }
  };

  return (
    <div>
      <div>
        <ErrorMsg />
      </div>
      <div className="bg-fuchsia-500/40 w-[500px] h-[500px] border-2 p-4 flex flex-col gap-8">
        <label className="select-none">
          Email:
          <input
            onChange={handletstMail}
            onBlur={handleBlur}
            className="border-2 p-2"
            type="email"
          />{" "}
          {error.mail}
        </label>
        <label className="select-none">
          Username:
          <input
            onChange={(eFR) => {
              setInfo({ ...info, username: eFR.target.value });
            }}
            className="border-2 p-2"
            type="text"
          />
        </label>
        <label className="select-none">
          Password:
          <input
            onChange={(e) => {
              setInfo({ ...info, password: e.target.value });
            }}
            onBlur={handlePasswordBlur}
            className="border-2 p-2"
            type="text"
          />
        </label>
        <label className="select-none">
          ConfirmPassword:
          <input
            onChange={(x) => {
              setInfo({ ...info, confirmPassword: x.target.value });
            }}
            onBlur={handlePasswordBlur}
            className="border-2 p-2"
            type="text"
          />
        </label>
        {error.confirmPassword}
        <button
          onClick={clicktoSign}
          className="bg-red-300/80 border-2 p-4 hover:bg-green-700/50"
        >
          Click
        </button>
      </div>
    </div>
  );
};
export default Signup3;
