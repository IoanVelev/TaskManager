import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import Home from "./components/Home/Home";
import { AuthProvider } from "./contexts";
import Logout from "./components/Logout";
import { CreateTask } from "./components/CreateTask/CreateTask";
import { TaskCardDetails } from "./components/TaskCard/TaskCardDetails";
import { EditTask } from "./components/EditTask/EditTask";

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
        <Route path="/task/create" element={<CreateTask />} />
        <Route path="/task/edit/:taskId" element={<EditTask />} />
        <Route path="/task/details/:taskId" element={<TaskCardDetails />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
