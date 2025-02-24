import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage2 = () => {
  const [comp, setComp] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    mail: "",
    vorodi: "",
  });

  const navigate = useNavigate();

  const sigunupAcc = async () => {
    if (comp.password === comp.confirmPassword) {
      const response = await fetch("http://test.joo.nz/register", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: comp.username,
          password: comp.password,
          confirmPassword: comp.confirmPassword,
          mail: comp.mail,
          vorodi: "",
        }),
      });
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token_me3", data.token);
        console.log(response);
        navigate("/tickets");
      }
    } else if (comp.password !== comp.confirmPassword) {
      alert("کصکش  رمز رو درست وارد کن");
    }
  };

  const handleUsername = (e) => {
    const value = e.target.value;
    const copyform = { ...comp };
    copyform.username = value;
    setComp(copyform);
  };

  const handleMail = (x) => {
    const value = x.target.value;
    const copyComp = { ...comp };
    copyComp.mail = value;
    setComp(copyComp);
    console.log(comp);
  };

  
  return (
    <div>
      <div className="Wrapper"><a href=""></a>salam</div>
      <div className="bg-red-400/50 min-h-[500px] w-[500px] border-4 rounded-3xl m-2 p-4 flex gap-4 flex-col justify-center items-center">
        <h1 className="font-bold font-sans text-2xl text-amber-200">
          Register
        </h1>
        {/* input's Area */}
        <div className="border-2 w-fit h-fit p-2 flex flex-col justify-center items-center gap-4 rounded-2xl m-2">
          <div>
            <label htmlFor="Username">Username: </label>
            <input
              onChange={handleUsername}
              type="text"
              id="Username"
              className="border-2 p-2 border-sky-500/50 rounded-3xl"
            />
          </div>
          <div>
            <label htmlFor="Mail">Mail: </label>
            <input
              onChange={handleMail}
              type="text"
              id="Mail"
              className="border-2 p-2 border-sky-500/50 rounded-3xl"
            />
          </div>
          <div>
            <label htmlFor="Password">Password: </label>
            <input
              onChange={(ev) => setComp({ ...comp, password: ev.target.value })}
              type="password"
              id="Password"
              className="border-2 p-2 border-sky-500/50 rounded-3xl"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input
              onChange={(ex) => {
                setComp({ ...comp, confirmPassword: ex.target.value });
              }}
              type="password"
              id="confirmPassword"
              className="border-2 p-2 border-sky-500/50 rounded-3xl"
            />
          </div>
        </div>
        <button
          onClick={sigunupAcc}
          className="p-4 bg-gray-500 border-black border-2 rounded-2xl font-thin text-2xl hover:bg-green-600/70"
        >
          Register
        </button>
      </div>
    </div>
  );
};
export default SignupPage2;
