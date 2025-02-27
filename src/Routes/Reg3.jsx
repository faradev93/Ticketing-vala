import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reg3 = () => {
  const handleClickSignup = async () => {
    try {
      const response = await fetch("http://test.joo.nz/register", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: "2sxa1",
          password: "sax",
          conirmpassword: "sadsa",
          mail: "sadsada",
        }),
      });
      if (response.status === 200) {
        const dt = await response.json();
        const TK = dt.token;
        localStorage.setItem("Token_feri", TK);
        navig("/tickets");
      }
    } catch (err) {
      console.log(`نمیتونم لود کنم+${err}`);
    } finally {
      console.log("saalam load shod");
    }
  };
  // | Hook's

  const navig = useNavigate();
  const [man, setMan] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    mail: "",
    hamintori: "",
  });

  //
  const handlePassword = (g) => {
    const val = g.target.value;
    const cman = { ...man };
    cman.password = val;
    setMan(cman);
    console.log(man);
  };
  //   const ar = [12, 3, 4, true, "fara", () => {}];
  //   function arr(x) {
  //     for (let i = 0; i <= ar.length; i++) {
  //       console.log(typeof ar[i]);
  //     }
  //   }
  //   arr();
  function prime(A) {
    for (i = 2; i < A; i++) {
      let baghi = A % i === 0;
      if (baghi) {
        console.log(" not Prime");
        return;
      }
    }
    console.log("Prime");
    return true;
  }
  function dade(xh) {
    let i = 0;
    while (i < xh.length) {
      i++;
      console.log(i);
    }
  }
  let xh = [1, 2, 5, 7, 6, 8, "fara", true, null, undefined, () => {}, "ss"];
  dade(xh);
  //   prime(37);

  function test(list) {
    if (!Array.isArray(list)) {
      return;
    }
    let temp = 0;
    // 1-3-8-12-18
    for (let i = 0; i < list.length; i++) {
      temp += list[i];
      console.log(temp);
    }
    console.log(temp / list.length);
  }

  test([2, 5, 5]);

  return (
    <div>
      <div className="bg-indigo-400/50 w-[500px] h-[500px] border-b-4 border-t-8 border-amber-800/60 rounded-2xl p-4 m-2 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-thin text-fuchsia-800 shadow-2xl shadow-black/80 ">
          SignUp Page
        </h1>
        <div className="flex flex-col m-2 p-2 gap-2">
          <label htmlFor="username" className="select-none">
            Username :
          </label>
          <input
            onChange={(wazir) => {
              setMan({ ...man, username: wazir.target.value });
            }}
            className="border-2 border-black rounded-md p-2"
            type="text"
            id="username"
          />
          <label htmlFor="password" className="select-none">
            Password :
          </label>
          <input
            onChange={handlePassword}
            className="border-2 border-black rounded-md p-2"
            type="text"
            id="password"
          />
          <label htmlFor="confirmPassword" className="select-none">
            ConfirmPassword :
          </label>
          <input
            className="border-2 border-black rounded-md p-2"
            type="text"
            id="confirmPassword"
          />
          <label htmlFor="mail" className="select-none">
            Mail :
          </label>
          <input
            className="border-2 border-black rounded-md p-2"
            type="text"
            id="mail"
          />
          <button
            onClick={handleClickSignup}
            className="transition-all border-2 border-e-8 hover:border-l-8  p-2 m-0.5 hover:bg-indigo-950/50 hover:text-amber-400"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reg3;
