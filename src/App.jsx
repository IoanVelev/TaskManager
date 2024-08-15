import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import Home from "./components/Home/Home";
import { AuthProvider } from "./contexts";
import Logout from "./components/Logout";

function App() {
  return (
    <>
    <AuthProvider>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
