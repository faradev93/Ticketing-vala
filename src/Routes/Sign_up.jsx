const Sign_up = (e) => {
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
              className="border-2 border-amber-50 font-mono pl-1 p-2 select-none "
              type="text"
              id="mail"
              placeholder="test.test@gmail.com"
            />
            {/*  */}
            <label className="bg-inherit" htmlFor="mail"></label>
            Full Name:
            <input
              className="border-2 border-amber-50 font-mono pl-1 p-2 select-none "
              type="text"
              id="mail"
              placeholder="Vala Maqam"
            />
            {/*  */}
            <label className="bg-inherit" htmlFor="mail"></label>
            Password:
            <input
              className="border-2 border-amber-50 font-mono pl-1 p-2 select-none "
              type="password"
              id="mail"
            />
            {/* */}
            <label className="bg-inherit" htmlFor="mail"></label>
            Password Confirm:
            <input
              className="border-2 border-amber-50 font-mono pl-1 p-2 select-none "
              type="password"
              id="mail"
            />
          </div>
          <button className="border-2 border-black p-2 w-[100px] hover:bg-amber-500 hover:transition">
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
export default Sign_up;
