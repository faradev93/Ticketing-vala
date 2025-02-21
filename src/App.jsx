import { BrowserRouter, Route, Routes } from "react-router-dom";

import TicketsPage from "./Routes/TicketsPage";
import LoginPage from "./Routes/LoginPage";
import SignupPage from "./Routes/SignupPage";
import TicketDetailPage from "./Routes/TicketDetailPage";
import ReservedPage from "./Routes/ReservedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>
        <Route path="/tickets" element={<TicketsPage />}></Route>
        <Route path="/tickets/:id" element={<TicketDetailPage />}></Route>
        <Route path="/tickets/reserved" element={<ReservedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
