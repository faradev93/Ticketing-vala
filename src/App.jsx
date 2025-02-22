import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "./Routes/LoginPage";
import SignupPage from "./Routes/SignupPage";
import TicketDetailPage from "./Routes/TicketDetailPage";
import ReservedPage from "./Routes/ReservedPage";
import FeriPage from "./Routes/FeriPage";
import TicketsPage from "./Routes/TicketsPage";
import { useState } from "react";
import TicketinfoPage from "./Routes/TicketCard";

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
      </Routes>
    </BrowserRouter>
  );
}
