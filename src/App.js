import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Rockets from "./components/pages/Rockets";
import Mission from "./components/pages/Mission";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={Rockets} />
        <Route path="/components/pages/Mission" element={Mission} />
        <Route path="/components/pages/Profile" element={Profile} />
      </Routes>
    </>
  );
}

export default App;
