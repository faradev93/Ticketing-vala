import { useState } from "react";
import { useNavigate } from "react-router-dom";

//

const SignupPage = () => {
  //
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    mail: "",
  });

  //
  const signUp = async () => {
    if (form.password === form.confirmPass) {
      const response = await fetch("http://test.joo.nz/register", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: form.mail,
          fullname: form.username,
          password: form.password,
        }),
      });
      if (response.status === 200) {
        const data = await response.json();
        alert("Register Done!");
        navigate("/login");
      }
    } else {
      alert("پسورد برابر نیسن ");
    }
  };
  // replace|

  // const handlePassword = (e) => {
  //   const value = e.target.value;
  //   const copyForm = { ...form };
  //   copyForm.password = value;
  //   setForm(copyForm);
  // };
  // const handleConfirmPassword = (ex) => {
  //   const value2 = ex.target.value;
  //   const copyform = { ...form };
  //   copyform.confirmPassword = value2;
  //   setForm(copyform);
  //   console.log(copyform);
  // };

  console.log(form);
  //

  function Updater(input) {
    function setUpdater(newInput) {
      // return newInput;
    }
    return [input, setUpdater];
  }
  Updater("faramarz");
  return (
    <div>
      <div className="w-[600px] h-[600px] bg-white/80 border-2 border-gray-700 p-2 flex flex-col justify-center items-center m-1">
        <div className="select-none bg-gray-400 h-[600px] w-[300px] flex flex-col justify-center items-center border-2 border-black/50 rounded-2xl gap-4">
          <h1 className="text-white text-4xl font-extrabold">Register</h1>
          {/* details */}
          <div className="flex flex-col gap-2 ">
            <label className="bg-inherit" htmlFor="mail"></label>
            Email:
            <input
              onChange={(e) => setForm({ ...form, mail: e.target.value })}
              className="border-2 border-amber-50 font-mono pl-1 p-2 select-none "
              type="text"
              id="mail"
              placeholder="test.test@gmail.com"
            />
            {/*  */}
            <label className="bg-inherit" htmlFor="name"></label>
            Full Name:
            <input
              onChange={(e) => {
                setForm({ ...form, username: e.target.value });
              }}
              className="border-2 border-amber-50 font-mono pl-1 p-2 select-none "
              type="text"
              id="name"
              placeholder="Vala Maqam"
            />
            {/*  */}
            <label className="bg-inherit" htmlFor="passowrd"></label>
            Password:
            <input
              onChange={(ps) => {
                setForm({ ...form, password: ps.target.value });
              }}
              className="border-2 border-amber-50 font-mono pl-1 p-2 select-none "
              type="password"
              id="passowrd"
            />
            {/* */}
            <label className="bg-inherit" htmlFor="passwordConfirm"></label>
            Password Confirm:
            <input
              onChange={(oo) => {
                setForm({ ...form, confirmPassword: oo.target.value });
              }}
              className="border-2 border-amber-50 font-mono pl-1 p-2 select-none "
              type="password"
              id="passwordConfirm"
            />
          </div>
          <button
            onClick={signUp}
            className="border-2 border-black p-2 w-[100px] hover:bg-amber-500 hover:transition"
          >
            Register!
          </button>
          <p>
            Or Click here to
            <a href="#">
              <span className="font-bold hover:text-sky-100 transition transition-250ms">
                {" "}
                Login!
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
