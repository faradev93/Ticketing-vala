import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "./Routes/LoginPage";
import SignupPage from "./Routes/SignupPage";
import TicketDetailPage from "./Routes/TicketDetailPage";
import ReservedPage from "./Routes/ReservedPage";
import FeriPage from "./Routes/FeriPage";
import TicketsPage from "./Routes/TicketsPage";
import { useState } from "react";
import TicketinfoPage from "./Routes/TicketCard";
import LoginPage2 from "./Routes/LoginPage2";
import LoginPage3 from "./Routes/LoginPage3";
import Logintest from "./Routes/Logintest";
import TestPage from "./Routes/TestPage";
import SignupPage2 from "./Routes/SignupPage2";
import Signup3 from "./Routes/Signup3";
import Reg3 from "./Routes/REG3";

export default function App() {
  //

  //
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <Link to="/login">ToLogin</Link>
            </div>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>
        {/*  */}
        <Route path="/tickets" element={<TicketsPage />}></Route>
        <Route path="/ticketstest" element={<TicketinfoPage />}></Route>
        {/*  */}
        <Route path="/tickets/:id" element={<TicketDetailPage />}></Route>
        <Route path="/tickets/reserved" element={<ReservedPage />}></Route>
        <Route path="/faramarz" element={<LoginPage2 />}></Route>
        <Route path="/majod" element={<LoginPage3 />}></Route>
        <Route path="login_test" element={<Logintest />}></Route>
        <Route path="/testpage" element={<TestPage />}></Route>
        <Route path="/reg" element={<SignupPage2 />}></Route>
        <Route path="panahi" element={<Signup3/>}></Route>
        <Route path="reg3" element={<Reg3/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
