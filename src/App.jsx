import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login_page from "./Routes/Login";
import { useState } from "react";
import Sign_up from "./Routes/Sign_up";

export default function App() {
  // | Hooks
  const [show, setShow] = useState(false);

  //Retrun (any)
  return (
    <BrowserRouter>
      <div className="bg-amber-500/50 p-4 border-b-2 border-black/80 rounded-b-[50px] flex justify-center ">
        <Header />
      </div>
      <Routes>
        <Route path="/login_page" component={<Login_page />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
