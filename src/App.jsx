import { Routes, Route } from "react-router-dom";

import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";

import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Error404 } from "./pages/404";
import { Party } from "./pages/Party";
import { VIP } from "./pages/VIP";
import { Gallery } from "./pages/Gallery";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error404 />} />

      <Route element={<ProtectedRoute session={Cookies.get("Session_Events")}/>}>
        <Route path="/party" element={<Party />} />
        <Route path="/vip" element={<VIP />} />
        <Route path="/gallery" element={<Gallery />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
