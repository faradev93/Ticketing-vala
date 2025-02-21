const Login_page = (tst) => {
  return (
    <div className="m-1 bg-white/80 w-[600px] h-[600px] flex justify-center items-center border-2 border-gray-700">
      <div className="flex flex-col justify-center items-center gap-8 p-4 h-fit w-[350px] bg-gray-400 border-2 border-black/80 rounded-3xl">
        <h1 className="text-white text-4xl font-extrabold">Login</h1>
        {/* log details */}
        <div className="flex flex-col gap-2 select-none">
          <label className="bg-inherit" htmlFor="mail"></label>
          Email:
          <input
            className="border-2 border-amber-50 font-mono pl-1 p-2 "
            type="text"
            id="mail"
            placeholder="test.test@gmail.com"
          />
          <label className="bg-inherit" htmlFor="mail"></label>
          Password:
          <input
            className="border-2 border-amber-50 font-mono pl-1 p-2 "
            type="text"
            id="mail"
            placeholder="test.test@gmail.com"
            type="Password"
          />
        </div>
        <button className="border-2 border-black p-2 w-[100px] hover:bg-amber-300 hover:transition">
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

export default Login_page;
