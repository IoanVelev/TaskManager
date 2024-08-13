import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar";
import { TaskCard } from "./components/TaskCard/TaskCard";
import { Register } from "./components/Register/Register";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
