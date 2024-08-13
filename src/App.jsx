import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar";
import { TaskCard } from "./components/TaskCard/TaskCard";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskCard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
