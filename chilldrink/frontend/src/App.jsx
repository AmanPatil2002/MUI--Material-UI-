import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./Layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;