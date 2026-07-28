import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
//import Home from "./pages/Home";
import Admin from "./pages/admin/Dashboard"
import Layout from "./Layout";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Items from "./pages/admin/Items";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoutes />}>     
        <Route element={<Layout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/menu/all" element={<Items/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;